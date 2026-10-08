'use strict';
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const LANGS = ['pt','en','zh'];
const LABELS = {pt:'Português',en:'English',zh:'中文 · Mandarim'};
const CODES = {pt:'PT',en:'EN',zh:'中'};
const LEGACY = {en1:11,en2:3,en3:1,en4:13,en5:24,en6:23,en7:31,en8:32,en9:41,en10:42,en11:51,en12:52,zh15:12,zh16:14,zh17:21,zh18:22,zh19:33,zh20:34,zh21:43,zh22:44,zh23:51,zh24:52};
const emptyProgress=()=>({favorites:[],done:[],reviews:{},rate:.8,labels:false});
function readProgress(){
  try {
    const raw=localStorage.getItem('elo-progress-v2');
    if(raw){const p={...emptyProgress(),...JSON.parse(raw)};p.favorites=Array.isArray(p.favorites)?p.favorites.filter(id=>LESSONS.some(d=>d.id===id)):[];p.done=Array.isArray(p.done)?p.done.filter(id=>LESSONS.some(d=>d.id===id)):[];p.reviews=p.reviews&&typeof p.reviews==='object'?p.reviews:{};p.rate=[.5,.65,.8,1,1.2].includes(p.rate)?p.rate:.8;return p;}
    const old=JSON.parse(localStorage.getItem('elo-progress')||'{}');
    const convert=arr=>[...new Set((Array.isArray(arr)?arr:[]).filter(id=>LEGACY[id]).map(id=>'elo-'+String(LEGACY[id]).padStart(3,'0')))];
    return {...emptyProgress(),favorites:convert(old.favorites),done:convert(old.done)};
  } catch {return emptyProgress();}
}
let progress=readProgress();
let view='explorer',selected='elo-011',activeTopic='',activeGroup='',level='all',highlight='',repeat=false;
let audioRun=0,audioTimer,voiceNames={pt:'',en:'',zh:''};
// Mantém a fala viva enquanto o sintetizador nativo entrega seus eventos.
let currentUtterance=null;
// Estimativas iniciais ajustáveis: caracteres chineses representam mais fala por unidade.
const SHADOWING_MIN_PAUSE_MS=1500;
const SHADOWING_MS_PER_CHARACTER={pt:90,en:90,zh:350};
const AUDIO_GAP_MS=650;
let exerciseLanguage='en',practiceId=selected,chosen=[],bankOrder=[];
let practiceAttempt=null,reviewQueue=null,reviewIndex=0;
let recorder=null,recordStream=null,recordUrl=null,recordTimer,recordGeneration=0;
function current(){return LESSONS.find(d=>d.id===selected)||LESSONS[0]}
function save(){try{localStorage.setItem('elo-progress-v2',JSON.stringify(progress))}catch{toast('Não foi possível salvar neste navegador.')}updateCount()}
function updateCount(){$('#done-count').textContent=progress.done.length+' / '+LESSONS.length}
function toast(message){$('#toast').textContent=message;$('#toast').style.display='block';clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('#toast').style.display='none',5000)}
function cancelActivity(){stopAudio();stopRecording()}
function setView(next){
  if(!['explorer','atlas','practice','review'].includes(next))return;
  cancelActivity();
  // Trocar de tela encerra a tentativa; trocar de idioma dentro dela não duplica a nota.
  if(next==='practice'&&view!=='practice')practiceAttempt=null;
  if(next!=='practice')reviewQueue=null;
  view=next;
  $$('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===view));
  ['explorer','atlas','practice','review'].forEach(v=>$('#'+v+'-view').hidden=v!==view);
  const headings={explorer:['Explorar','Idiomas para a vida real.','Escolha uma situação. Compare português, inglês e mandarim.'],atlas:['Atlas comparativo','A gramática, lado a lado.','O que se parece, o que muda e como as palavras se organizam.'],practice:['Praticar','Conecte as três versões.','Uma ideia em português; prática em inglês e mandarim.'],review:['Minha revisão','Volte às suas conexões.','Favoritos, situações praticadas e revisões neste dispositivo.']};
  $('#view-title').textContent=headings[view][0];$('#page-title').textContent=headings[view][1];$('#page-subtitle').textContent=headings[view][2];
  if(view==='explorer')renderList();if(view==='atlas')renderAtlas();if(view==='practice')renderPractice();if(view==='review')renderReview();
}
function fillFilters(){
  $('#feature').innerHTML='<option value="">Todos os fenômenos</option>'+[...new Set(LESSONS.flatMap(d=>d.features))].map(t=>`<option>${esc(t)}</option>`).join('');
  $('#catalog-count').textContent=TOPICS.length+' assuntos · 3 idiomas';
  $('#catalog-footer').textContent=LESSONS.length+' situações · '+LESSONS.length*3+' versões alinhadas';
}
function matches(overrides={}){
  const filters={topic:activeTopic,group:activeGroup,level,feature:$('#feature').value,query:$('#search').value,...overrides};
  const q=normalizeSearch(filters.query).trim();
  return LESSONS.filter(d=>{
    const t=TOPICS.find(t=>t.id===d.topicId);
    return (filters.level==='all'||d.level===filters.level)&&(!filters.topic||d.topicId===filters.topic)&&(!filters.group||t.group===filters.group)&&(!filters.feature||d.features.includes(filters.feature))&&normalizeSearch([d.title,d.pt.text,d.en.text,d.zh.text,pinyin(d.pinyin),d.pinyin.replace(/[1-5]/g,''),d.topic,t.keywords,d.phonetic,...d.features].join(' ')).includes(q);
  });
}
function clearFilters(){level='all';activeTopic='';activeGroup='';$('#search').value='';$('#feature').value=''}
function openLesson(id){if(!LESSONS.some(d=>d.id===id))throw Error('Situação inexistente');clearFilters();selected=id;setView('explorer')}
function renderDiscovery(){
  const focused=document.activeElement;
  const focusKey=focused?.dataset?.group!==undefined?['group',focused.dataset.group]:focused?.dataset?.topic!==undefined?['topic',focused.dataset.topic]:null;
  $('#topic-groups').innerHTML=[{id:'',label:'Todas as áreas'},...TOPIC_GROUPS].map(g=>`<button data-group="${g.id}" aria-pressed="${activeGroup===g.id}" class="${activeGroup===g.id?'selected':''}">${esc(g.label)} <small>${matches({group:g.id,topic:''}).length}</small></button>`).join('');
  const visible=TOPICS.filter(t=>!activeGroup||t.group===activeGroup);
  $('#topic-options').innerHTML=visible.map(t=>`<button data-topic="${t.id}" aria-pressed="${activeTopic===t.id}" class="topic-option ${activeTopic===t.id?'selected':''}" title="${esc(t.description)}"><span>${esc(t.label)}</span><small>${matches({topic:t.id}).length}</small></button>`).join('');
  const topic=TOPICS.find(t=>t.id===activeTopic);
  $('#topic-description').textContent=topic?topic.description+' · Português, inglês e mandarim juntos.':'Escolha um assunto ou explore todos. Os números indicam situações disponíveis com os filtros atuais.';
  $$('[data-group]').forEach(b=>b.onclick=()=>{cancelActivity();activeGroup=b.dataset.group;activeTopic='';renderList()});
  $$('[data-topic]').forEach(b=>b.onclick=()=>{cancelActivity();activeTopic=activeTopic===b.dataset.topic?'':b.dataset.topic;renderList()});
  if(focusKey)$(`[data-${focusKey[0]}="${focusKey[1]}"]`)?.focus();
  $$('[data-level]').forEach(b=>{const count=matches({level:b.dataset.level}).length;b.classList.toggle('selected',b.dataset.level===level);b.setAttribute('aria-pressed',String(b.dataset.level===level));b.setAttribute('aria-label',(b.dataset.level==='all'?'Todos os níveis':b.dataset.level)+': '+count+' situações');b.title=count+' situações disponíveis';});
  const applied=[];
  if(activeGroup)applied.push(['group',TOPIC_GROUPS.find(g=>g.id===activeGroup).label]);
  if(activeTopic)applied.push(['topic',topic.label]);
  if(level!=='all')applied.push(['level',level]);
  if($('#feature').value)applied.push(['feature',$('#feature').value]);
  if($('#search').value.trim())applied.push(['query','Busca: '+$('#search').value.trim()]);
  $('#active-filters').innerHTML=applied.map(([key,label])=>`<button data-remove-filter="${key}" aria-label="Remover filtro ${esc(label)}">${esc(label)} <span aria-hidden="true">×</span></button>`).join('');
  $('#reset-filters').hidden=!applied.length;
  $('#refine-count').textContent=(level!=='all'?1:0)+($('#feature').value?1:0)||'';
  $$('[data-remove-filter]').forEach(b=>b.onclick=()=>{cancelActivity();const k=b.dataset.removeFilter;if(k==='group')activeGroup='';if(k==='topic')activeTopic='';if(k==='level')level='all';if(k==='feature')$('#feature').value='';if(k==='query')$('#search').value='';renderList();$('#reset-filters').hidden?$('#search').focus():$('#reset-filters').focus()});
}
function renderList(){
  renderDiscovery();const found=matches();$('#result-count').textContent=found.length+' situações · '+found.length*3+' versões';
  if(found.length&&!found.some(d=>d.id===selected)){cancelActivity();selected=found[0].id;}
  $('#results').innerHTML=found.length?found.map(d=>`<button class="result ${d.id===selected?'active':''}" data-id="${d.id}" aria-pressed="${d.id===selected}"><div class="meta"><span class="pill">${d.level}</span>${esc(d.topic)} ${progress.done.includes(d.id)?'· ✓':''}</div><strong>${esc(d.pt.text)}</strong><small lang="en">${esc(d.en.text)}</small><small class="zh-preview" lang="zh-CN">${esc(d.zh.text)}</small></button>`).join(''):'<div class="empty"><p>Nenhuma situação neste recorte.</p></div>';
  $$('[data-id]').forEach(b=>b.onclick=()=>{cancelActivity();selected=b.dataset.id;renderList()});
  if(found.length)renderLesson();else{$('#lesson').innerHTML='<div class="empty"><strong>Vamos ampliar a busca?</strong><p>Este cruzamento de assunto, nível e busca ainda não tem exemplos. Remova um filtro acima ou explore todo o acervo.</p><button id="clear-filters" class="secondary-button">Limpar filtros</button></div>';$('#clear-filters').onclick=()=>{clearFilters();renderList()};}
}
function tokensMarkup(d,lang){return d[lang].tokens.map((t,i)=>`<button class="token ${highlight&&highlight!==t.c?'dim':''}" style="--c:${CLASSES[t.c][1]}" data-token="${i}" data-lang="${lang}" aria-label="${esc(t.text)}, ${esc(CLASSES[t.c][0])}">${esc(t.text)}<small class="token-label">${esc(CLASSES[t.c][0])}</small></button>${t.punct?`<span class="punct" aria-hidden="true">${esc(t.punct)}</span>`:''}`).join('')}
function playButton(lang,label='Ouvir'){return `<button class="play-btn" data-play="${lang}" aria-label="${label} em ${LABELS[lang]}">▶ ${label}</button>`}
function panel(d,lang){
  const en=lang==='en';
  return `<section class="language-panel ${lang}" aria-label="${LABELS[lang]}"><div class="language-title"><strong><span class="language-code">${CODES[lang]}</span>${LABELS[lang]}</strong><small>${en?(d.features.includes('Glottalization')?'Exemplo britânico':'Referência americana'):'Caracteres simplificados'}</small></div><div class="tokens ${progress.labels?'show-labels':''}" lang="${en?'en':'zh-CN'}">${tokensMarkup(d,lang)}</div><p class="reading">${en?'<strong>Na conversa:</strong> '+esc(d.natural):'<strong>Pinyin:</strong> '+esc(pinyin(d.pinyin))}</p><div class="sound-card ${en?'':'zh-sound'}"><p class="sound-caption">${en?'CONNECTED SPEECH · SEMPRE À VISTA':'PONTE DE LEITURA PARA BRASILEIROS'}</p><p class="phonetic">${esc(en?d.phonetic:chinesePronunciation(d.pinyin))}</p><p class="phonetic-guide">${en?'Aproximação · ɾ = r de caro · ʔ = parada glotal · ‿ = ligação':'Aproximação por sílaba · ¹ alto · ² sobe · ³ baixo/curvo · ⁴ desce · · neutro'}</p>${playButton(lang,en?'Ouvir fala':'Ouvir mandarim')}</div>${en?`<div class="speech-features">${d.features.map(f=>`<span class="feature">${esc(f)}</span>`).join('')}</div><div class="step-line"><small>ESCRITA → FALA → APOIO BR</small>${esc(d.en.text)}<br>${esc(d.natural)}<br><strong>${esc(d.phonetic)}</strong></div><p class="explanation">${esc(d.speech)}</p>`:`<div class="literal-box"><small>ORDEM CHINESA EM PORTUGUÊS</small>${esc(d.literal)}</div><p class="tone-note">${esc(toneNotes(d.pinyin))}</p><details><summary class="explanation">Como usar a ponte brasileira</summary><p class="explanation">Os números representam os tons de referência da leitura, não uma transcrição completa das mudanças em fala contínua. O pinyin é a referência principal. ü exige lábios arredondados com a língua à frente; ph, th e kh indicam sopro. As séries zh/ch/sh e j/q/x não têm equivalentes exatos em português. Acentos na ponte ajudam apenas o timbre; não substituem os tons.</p></details>`}</section>`;
}
function renderLesson(){
  const d=current(),fav=progress.favorites.includes(d.id),used=[...new Set(LANGS.flatMap(l=>d[l].tokens.map(t=>t.c)))];
  $('#lesson').innerHTML=`<article class="lesson"><div class="lesson-toolbar"><div class="meta"><span class="pill">${d.level}</span>${esc(d.topic)} · ${esc(d.title)}</div><div class="toolbar-actions"><button id="play-all" class="audio-all">▶ PT · EN · 中</button><button id="favorite" class="icon-btn ${fav?'saved':''}" aria-label="${fav?'Remover favorito':'Favoritar situação'}" aria-pressed="${fav}">${fav?'★':'☆'}</button></div></div><section class="pt-bridge" aria-label="Português"><div class="language-title"><strong><span class="language-code">PT</span>Português · a ideia que conecta</strong><button class="secondary-button" data-play="pt" aria-label="Ouvir em português">▶</button></div><div class="tokens ${progress.labels?'show-labels':''}" lang="pt-BR">${tokensMarkup(d,'pt')}</div></section><div class="comparison">${panel(d,'en')}${panel(d,'zh')}</div><section class="compare-note"><h2>O que muda de um idioma para outro?</h2><p>${esc(d.compare)}</p></section><div class="legend-area"><div class="legend-controls"><label><input type="checkbox" id="show-labels" ${progress.labels?'checked':''}> Mostrar classes sob as palavras</label><label>Destacar <select id="highlight"><option value="">Todas as classes</option>${Object.entries(CLASSES).map(([c,v])=>`<option value="${c}" ${highlight===c?'selected':''}>${v[0]}</option>`).join('')}</select></label></div><div class="legend">${used.map(c=>`<span><i style="background:${CLASSES[c][1]}"></i>${CLASSES[c][0]}</span>`).join('')}</div></div><div class="transport"><label>Velocidade <select id="rate">${[.5,.65,.8,1,1.2].map(r=>`<option value="${r}" ${progress.rate===r?'selected':''}>${String(r).replace('.',',')}×</option>`).join('')}</select></label><button id="stop-audio" class="secondary-button">■ Parar</button><label><input id="repeat" type="checkbox" ${repeat?'checked':''}> Repetir</label><span class="audio-status" role="status" aria-live="polite">Voz sintética do dispositivo.</span></div><details class="audio-settings"><summary>Escolher vozes e entender o áudio</summary><div class="voice-grid">${LANGS.map(l=>`<label>${LABELS[l]}<select data-voice="${l}" aria-label="Voz de ${LABELS[l]}"></select></label>`).join('')}</div><p>Áudio sintético: não é uma gravação humana e pode não reproduzir todas as reduções descritas. A velocidade muda a síntese. Algumas vozes precisam de internet; se faltar um idioma, o app avisa. Para uma reprodução contínua, use PT · EN · 中.</p><button id="play-full" class="secondary-button">Ouvir inglês sem contrações escritas</button></details><div class="lesson-actions"><small>Toque em uma palavra<br>para consultar a classe.</small><button id="practice-this" class="primary-button">Praticar esta situação</button></div></article>`;
  $('#favorite').onclick=()=>{progress.favorites=fav?progress.favorites.filter(id=>id!==d.id):[...progress.favorites,d.id];save();renderLesson()};
  $$('[data-token]').forEach(b=>b.onclick=()=>showWord(d,b.dataset.lang,+b.dataset.token));
  $$('[data-play]').forEach(b=>b.onclick=()=>playLanguage(d,b.dataset.play));
  $('#play-all').onclick=()=>speakQueue(LANGS.map(l=>({lang:l,text:l==='en'?d.natural:d[l].text})));
  $('#play-full').onclick=()=>speakQueue([{lang:'en',text:d.en.text}]);
  $('#rate').onchange=e=>{progress.rate=+e.target.value;stopAudio();save()};
  $('#stop-audio').onclick=stopAudio;$('#repeat').onchange=e=>{repeat=e.target.checked;if(!repeat)stopAudio()};
  $('#show-labels').onchange=e=>{progress.labels=e.target.checked;save();$$('.tokens').forEach(el=>el.classList.toggle('show-labels',progress.labels))};
  $('#highlight').onchange=e=>{highlight=e.target.value;renderLesson()};
  $('#practice-this').onclick=()=>{practiceId=d.id;setView('practice')};populateVoices();
}
function allowedVoices(lang){
  if(!('speechSynthesis' in window))return [];
  return speechSynthesis.getVoices().filter(v=>lang==='pt'?/^pt/i.test(v.lang):lang==='en'?/^en/i.test(v.lang):/^(zh|cmn)(-|_|$)/i.test(v.lang)&&!/(HK|TW|yue)/i.test(v.lang));
}
function voiceFor(lang){const vs=allowedVoices(lang);return vs.find(v=>v.name===voiceNames[lang])||vs.find(v=>lang==='pt'?/BR/i.test(v.lang):lang==='en'?/US/i.test(v.lang):/CN/i.test(v.lang))||vs[0]}
function populateVoices(){
  $$('[data-voice]').forEach(sel=>{const l=sel.dataset.voice,vs=allowedVoices(l);sel.innerHTML=vs.length?vs.map(v=>`<option value="${esc(v.name)}">${esc(v.name)} · ${esc(v.lang)}${v.localService?' · local':''}</option>`).join(''):'<option value="">Sem voz para este idioma</option>';const v=voiceFor(l);if(v){sel.value=v.name;voiceNames[l]=v.name}sel.onchange=()=>{voiceNames[l]=sel.value;stopAudio()}});
}
function setAudioStatus(message){$$('.audio-status').forEach(el=>el.textContent=message)}
function stopAudio(){audioRun++;clearTimeout(audioTimer);if('speechSynthesis' in window)speechSynthesis.cancel();currentUtterance=null;setAudioStatus('Áudio parado.');}
function playLanguage(d,lang){speakQueue([{lang,text:lang==='en'?d.natural:d[lang].text}])}
function speakQueue(items,once=false){
  stopAudio();if(!('speechSynthesis' in window)){toast('Este navegador não oferece síntese de voz.');setAudioStatus('Áudio indisponível neste navegador.');return;}
  const missing=items.filter(item=>!voiceFor(item.lang)).map(item=>LABELS[item.lang]);
  if(missing.length){toast('Sem voz instalada: '+missing.join(', ')+'. Ative o idioma nas configurações de voz do dispositivo.');}
  const queue=items.filter(item=>voiceFor(item.lang));if(!queue.length){setAudioStatus('Nenhuma voz compatível disponível.');return;}
  const run=audioRun;let i=0;
  const finish=()=>setAudioStatus(missing.length?'Concluído; sem voz para '+missing.join(', ')+'.':'Concluído. Repita em voz alta.');
  function next(){
    if(run!==audioRun)return;
    const item=queue[i],voice=voiceFor(item.lang);
    if(!voice){setAudioStatus('Voz indisponível. Escolha outra voz.');return;}
    const u=new SpeechSynthesisUtterance(item.text);u.voice=voice;u.lang=voice.lang;u.rate=progress.rate;
    u.onstart=()=>setAudioStatus(LABELS[item.lang]+' · '+String(progress.rate).replace('.',',')+'×');
    u.onend=()=>{
      if(run!==audioRun)return;
      i++;
      if(repeat){
        // Reservamos uma tentativa de fala após cada idioma, inclusive o último da fila.
        const pause=Math.max(SHADOWING_MIN_PAUSE_MS,item.text.length*SHADOWING_MS_PER_CHARACTER[item.lang]/progress.rate);
        setAudioStatus('Sua vez: repita em voz alta');
        audioTimer=setTimeout(()=>{
          if(run!==audioRun)return;
          if(i<queue.length)next();
          else if(!once){i=0;next();}
          else finish();
        },pause);
      }else if(i<queue.length)audioTimer=setTimeout(next,AUDIO_GAP_MS);
      else finish();
    };
    u.onerror=e=>{if(['canceled','interrupted'].includes(e.error))return;setAudioStatus('Falha no áudio. Experimente outra voz.');toast('A voz selecionada não reproduziu. Verifique a conexão ou troque a voz.')};
    currentUtterance=u;
    speechSynthesis.speak(u);
  }
  next();
}
function showWord(d,lang,index){
  const t=d[lang].tokens[index],c=CLASSES[t.c];
  $('#word-content').innerHTML=`<p class="eyebrow" style="color:${c[1]}">${esc(c[0])} · ${LABELS[lang]}</p><h2 style="color:${c[1]}">${esc(t.text)}</h2><p>${esc(c[2])}</p><p><strong>Nesta situação:</strong> ${esc(d.pt.text)}</p><p class="explanation">${esc(d.compare)}</p><button id="word-audio" class="primary-button">▶ Ouvir palavra</button><p class="explanation">A classe é contextual. A pronúncia isolada pode ser diferente da palavra dentro da frase.</p>`;
  $('#word-audio').onclick=()=>speakQueue([{lang,text:t.text}],true);$('#word-modal').showModal();
}
const ATLAS={
 n:{pt:['a amostra','Flexão de número: amostra / amostras. Pode funcionar como sujeito ou objeto.'],en:['the sample','Nomes contáveis e incontáveis seguem padrões diferentes; evidence normalmente é incontável.'],zh:['样品 yàngpǐn','O plural não exige uma terminação como -s. 今天 é um nome temporal usado como circunstância.']},
 v:{pt:['eu recebi','Pessoa, tempo e modo podem ser marcados na forma do verbo.'],en:['I have received','Auxiliares como have, do e be participam da construção. Observe o grupo verbal inteiro.'],zh:['我收到 wǒ shōudào','O verbo não se conjuga por pessoa. 收到 já expressa um resultado; contexto e partículas ajudam com aspecto.']},
 adj:{pt:['um plano viável','O adjetivo costuma seguir o nome, mas a posição pode alterar o sentido.'],en:['a workable plan','Em geral, o adjetivo antecede o nome ou aparece depois de verbo de ligação.'],zh:['可行的计划','Uma descrição pode vir antes do nome com 的. Adjetivos também podem funcionar como predicados sem 是.']},
 adv:{pt:['já recebi','Pode indicar tempo, modo, intensidade ou avaliação.'],en:['already received','A posição depende da construção. A little pode ser um bloco de grau, embora nem todas suas palavras sejam advérbios.'],zh:['已经收到','Advérbios frequentemente precedem o verbo. 不 e 没 não são intercambiáveis em toda negação.']},
 pro:{pt:['eu / me','O pronome pode mudar conforme a função. Sujeitos são frequentemente omitidos em português.'],en:['I / me','EN normalmente exige sujeito explícito. I é sujeito; me é objeto.'],zh:['我 / 你 / 我们','我 não muda de forma ao virar objeto. A referência pode ficar implícita quando o contexto é claro.']},
 det:{pt:['a / esta / minha','Artigos, demonstrativos e possessivos delimitam o nome.'],en:['the / this / my','An é escolhido pelo som seguinte. My acompanha o nome; mine pode substituí-lo.'],zh:['这 / 那 / 这些','ZH não tem artigos equivalentes universais a a/the. Demonstrativos se combinam com classificadores: 这 + 个 + 名词.']},
 prep:{pt:['em / de / com','Contrações como na e do incluem preposição e artigo. A cor indica a família da relação; o detalhamento depende da construção.'],en:['at home / by Friday','Preposições devem ser aprendidas também em combinações. By Friday indica prazo-limite.'],zh:['在家 / 比他','在家 frequentemente precede a ação; com verbos como 住, o local pode vir depois. 比 introduz referência comparativa.']},
 conj:{pt:['se / embora / mas','Expressa a relação entre ideias, como condição, concessão e contraste.'],en:['if / although / but','Observe a oração inteira. Only if indica condição necessária; provided that apresenta uma condição.'],zh:['如果…就… / 虽然…但是…','Pares de conectores são comuns. A tradução natural pode usar só um conector em português.']},
 num:{pt:['dois ingressos','A quantidade antecede o nome; o nome recebe plural.'],en:['two tickets','Numerais não mudam a forma de two; o nome costuma receber -s.'],zh:['两张票','两 + 张 + 票: quantidade, classificador e nome. 一 muda de tom conforme o contexto.']},
 clf:{pt:['uma xícara de café','Xícara é substantivo, não uma classe de classificadores como no mandarim. A expressão ajuda a comparar a função.'],en:['a cup of coffee','Cup também é substantivo. Inglês pode usar recipiente ou medida para contar certos conteúdos.'],zh:['一杯咖啡 / 两张票','杯 e 张 são classificadores. A escolha depende do nome e da unidade que se quer contar.']},
 part:{pt:['tenho que ir','O que desse padrão é tratado como marcador da construção de obrigação nesta análise didática.'],en:['to go','To pode marcar infinitivo; não é sempre preposição. Em outros padrões, partículas formam phrasal verbs.'],zh:['的 / 得 / 了 / 过 / 吗','Partículas têm usos diferentes: ligação, complemento, aspecto, experiência e pergunta. Não são tempos verbais portugueses.']},
 loc:{pt:['dentro de casa','Dentro é advérbio ou parte de uma locução, conforme a análise; não se impõe uma classe chinesa ao português.'],en:['inside the house','Inside pode ser preposição ou advérbio conforme o contexto.'],zh:['家里 / 路上 / 之前','里, 上 e 之前 localizam no espaço ou no tempo. Frequentemente aparecem depois do nome de referência.']}
};
function renderAtlas(){
 $('#atlas-grid').innerHTML=Object.entries(ATLAS).map(([c,a])=>`<article class="atlas-card" style="--c:${CLASSES[c][1]}"><div class="atlas-heading"><h2>${CLASSES[c][0]}</h2><p>${CLASSES[c][2]}</p></div><div class="atlas-columns">${LANGS.map(l=>`<section class="atlas-cell"><h3>${LABELS[l]}</h3><p class="example">${esc(a[l][0])}</p><p>${esc(a[l][1])}</p></section>`).join('')}</div><div class="lesson-actions"><small>Compare no contexto de uma frase.</small><button class="secondary-button" data-class="${c}">Ver situação trilingue</button></div></article>`).join('');
 $$('[data-class]').forEach(b=>b.onclick=()=>{const d=LESSONS.find(d=>LANGS.some(l=>d[l].tokens.some(t=>t.c===b.dataset.class)));if(d){highlight=b.dataset.class;openLesson(d.id)}});
}
function shuffle(a){const out=[...a];for(let i=out.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[out[i],out[j]]=[out[j],out[i]]}return out}
function submitPracticeGrade(d,nota){
 if(practiceAttempt.graded)return;
 const effectiveGrade=practiceAttempt.revealed?0:nota;
 gradeReview(progress.reviews,d.id,effectiveGrade);
 // done registra uma prática autoavaliada com acerto; erros não apagam o histórico anterior.
 if(effectiveGrade>=1&&!progress.done.includes(d.id))progress.done.push(d.id);
 practiceAttempt.graded=true;save();
 $$('[data-grade]').forEach(b=>b.disabled=true);
 const due=new Date(progress.reviews[d.id].due).toLocaleDateString('pt-BR');
 $('#grade-feedback').textContent=(practiceAttempt.revealed?'Resposta revelada: Errei registrado. ':'Autoavaliação registrada. ')+'Próxima revisão: '+due+'.';
 $('#reset-order').disabled=true;$('#next-practice').disabled=false;
}
function nextPractice(d){
 cancelActivity();
 if(reviewQueue){
  // A fila não incorpora favoritos nem itens futuros; rechecamos vencimento ao avançar.
  do{reviewIndex++;}while(reviewIndex<reviewQueue.length&&!isDue(progress.reviews[reviewQueue[reviewIndex]]));
  if(reviewIndex>=reviewQueue.length){setView('review');toast('Fila de hoje concluída.');return;}
  practiceId=reviewQueue[reviewIndex];
 }else{
  const pool=matches().some(x=>x.id===d.id)?matches():LESSONS.filter(x=>x.topicId===d.topicId);
  practiceId=pool[(pool.findIndex(x=>x.id===d.id)+1)%pool.length].id;
 }
 practiceAttempt=null;renderPractice();
}
function renderPractice(step=1){
 stopRecording();const d=LESSONS.find(d=>d.id===practiceId)||current();practiceId=d.id;if(!practiceAttempt||practiceAttempt.id!==d.id)practiceAttempt={id:d.id,graded:false,revealed:false};chosen=[];bankOrder=shuffle(d[exerciseLanguage].tokens.map((_,i)=>i));
 // As etapas são sequenciais para que a referência de uma não entregue a resposta da outra.
 const recognition=step===1,referenceLanguages=recognition?['en','zh']:LANGS.filter(l=>l!==exerciseLanguage);
 const alternatives=shuffle([d,...shuffle(LESSONS.filter(x=>x.id!==d.id&&x.level===d.level)).slice(0,2)]);
 $('#practice').innerHTML=`<article class="practice-card"><div class="meta"><span class="pill">${d.level}</span>${esc(d.title)} · ${esc(d.topic)}</div><h2>${recognition?'1. Reconheça a ideia em português':'2. Reconstrua a frase original'}</h2><div class="practice-reference">${referenceLanguages.map(l=>`<div class="reference-language"><small>${LABELS[l]}</small><p lang="${l==='zh'?'zh-CN':l}">${esc(d[l].text)}</p></div>`).join('')}</div><div class="practice-toolbar"><label>Treinar a ordem em <select id="exercise-language"><option value="en" ${exerciseLanguage==='en'?'selected':''}>Inglês</option><option value="zh" ${exerciseLanguage==='zh'?'selected':''}>Mandarim</option></select></label><label>Velocidade <select id="practice-rate">${[.5,.65,.8,1,1.2].map(r=>`<option value="${r}" ${r===progress.rate?'selected':''}>${r}×</option>`).join('')}</select></label><button id="practice-sequence" class="secondary-button">${recognition?'▶ Ouvir inglês e mandarim':'▶ Ouvir idioma treinado'}</button><button id="practice-stop" class="secondary-button">■ Parar</button></div><p class="audio-status" role="status" aria-live="polite">${recognition?'Compare as referências e escolha a tradução.':'Use o português como pista; escute se precisar.'}</p>${recognition?`<p class="literal">Leia e escute: ${esc(d[exerciseLanguage].text)}</p><div class="options">${alternatives.map(a=>`<button class="option" data-answer="${a.id}" aria-pressed="false">${esc(a.pt.text)}</button>`).join('')}</div><p id="quiz-feedback" class="feedback" aria-live="polite"></p><button id="start-production" class="primary-button" disabled>Continuar para produção</button>`:`<p class="literal">Toque nos blocos. Toque novamente para devolver um bloco. A pontuação aparece junto da palavra.</p><div class="order-tray" id="chosen"></div><div class="order-tray" id="bank"></div><button id="check-order" class="primary-button">Conferir ordem</button><button id="show-answer" class="secondary-button">Mostrar resposta</button><button id="reset-order" class="secondary-button">Recomeçar</button><p id="order-feedback" class="feedback" aria-live="polite"></p><div id="practice-answer"></div>`}<div class="lesson-actions"><button id="back-lesson" class="secondary-button">Rever explicação</button><button id="next-practice" class="primary-button" ${reviewQueue&&!practiceAttempt.graded?'disabled':''}>${reviewQueue?(reviewIndex===reviewQueue.length-1?'Concluir revisões':'Próxima revisão'):'Próxima situação'}</button></div></article>`;
 $('#exercise-language').onchange=e=>{cancelActivity();exerciseLanguage=e.target.value;renderPractice()};$('#practice-rate').onchange=e=>{progress.rate=+e.target.value;stopAudio();save()};
 if(recognition){
  $$('[data-answer]').forEach(b=>b.onclick=()=>{const ok=b.dataset.answer===d.id;b.classList.add(ok?'correct':'wrong');b.setAttribute('aria-pressed','true');$('#quiz-feedback').textContent=ok?'Correto. Agora tente reconstruir a frase.':'Essa frase expressa outra ideia. Compare a ação e os participantes.';if(ok){$$('[data-answer]').forEach(x=>x.disabled=true);$('#start-production').disabled=false}});
  $('#start-production').onclick=()=>{cancelActivity();renderPractice(2);$('#check-order').focus()};
 }else{
  renderOrder(d);
  $('#check-order').onclick=()=>{const answer=chosen.map(i=>d[exerciseLanguage].tokens[i].text).join('|');const target=d[exerciseLanguage].tokens.map(t=>t.text).join('|');const ok=answer===target;$('#order-feedback').textContent=ok?'Ordem correta. Compare com a resposta abaixo.':'Ainda não é a ordem original. Compare sua tentativa com a resposta abaixo.';renderPracticeAnswer(d)};
  $('#show-answer').onclick=()=>{practiceAttempt.revealed=true;$('#order-feedback').textContent='Resposta revelada. Compare a ordem dos blocos.';renderPracticeAnswer(d);submitPracticeGrade(d,0)};
  $('#reset-order').onclick=()=>{cancelActivity();renderPractice(2);$('#check-order').focus()};
  $('#reset-order').disabled=practiceAttempt.graded;
 }
 $('#practice-sequence').onclick=()=>speakQueue((recognition?['en','zh']:[exerciseLanguage]).map(l=>({lang:l,text:l==='en'?d.natural:d[l].text})),true);$('#practice-stop').onclick=stopAudio;
 $('#back-lesson').onclick=()=>{selected=d.id;if(!matches().some(x=>x.id===d.id))clearFilters();setView('explorer')};$('#next-practice').onclick=()=>nextPractice(d);
}
function renderPracticeAnswer(d){
 // Nem o gabarito nem suas transcrições são inseridos no DOM antes da conferência/revelação.
 $('#practice-answer').innerHTML=`<div class="reference-language"><small>Resposta · ${LABELS[exerciseLanguage]}</small><p lang="${exerciseLanguage==='zh'?'zh-CN':'en'}">${esc(d[exerciseLanguage].text)}</p></div><p class="prompt">Como foi sua tentativa?</p><div class="record-row" role="group" aria-label="Autoavaliação"><button class="secondary-button" data-grade="0">Errei</button><button class="secondary-button" data-grade="1">Acertei com esforço</button><button class="secondary-button" data-grade="2">Acertei fácil</button></div><p id="grade-feedback" class="feedback" aria-live="polite"></p><p class="prompt">3. Compare e fale</p><p class="explanation">${esc(d.compare)}</p><p class="literal"><strong>Inglês conectado:</strong></p><p class="phonetic">${esc(d.phonetic)}</p><p class="literal"><strong>Mandarim:</strong> ${esc(pinyin(d.pinyin))}</p><p class="phonetic">${esc(chinesePronunciation(d.pinyin))}</p><div class="record-row"><button id="practice-en" class="secondary-button">▶ English</button><button id="practice-zh" class="secondary-button">▶ 中文</button><button id="record" class="secondary-button">● Gravar minha voz</button><audio id="recording" controls hidden></audio></div><p id="record-status" class="literal" aria-live="polite">Gravação local, temporária e de até 60 segundos. Sem envio e sem nota automática.</p>`;
 $('#practice-en').onclick=()=>speakQueue([{lang:'en',text:d.natural}],true);$('#practice-zh').onclick=()=>speakQueue([{lang:'zh',text:d.zh.text}],true);$('#record').onclick=startRecording;
 $$('[data-grade]').forEach(b=>{b.disabled=practiceAttempt.graded;b.onclick=()=>submitPracticeGrade(d,+b.dataset.grade)});
 if(practiceAttempt.graded)$('#grade-feedback').textContent='Esta tentativa já foi avaliada. Continue para a próxima situação.';
 $('#check-order').disabled=true;$('#show-answer').disabled=true;
}
function renderOrder(d){
 const ts=d[exerciseLanguage].tokens;
 $('#chosen').innerHTML=chosen.length?chosen.map((i,pos)=>`<button class="order-token" data-position="${pos}">${esc(ts[i].text+ts[i].punct)}</button>`).join(''):'<span class="literal">Sua frase aparece aqui…</span>';
 $('#bank').innerHTML=bankOrder.filter(i=>!chosen.includes(i)).map(i=>`<button class="order-token" data-index="${i}">${esc(ts[i].text+ts[i].punct)}</button>`).join('');
 $$('[data-index]').forEach(b=>b.onclick=()=>{chosen.push(+b.dataset.index);renderOrder(d)});$$('[data-position]').forEach(b=>b.onclick=()=>{chosen.splice(+b.dataset.position,1);renderOrder(d)});
}
function stopRecording(){recordGeneration++;clearTimeout(recordTimer);if(recorder?.state==='recording')recorder.stop();if(recordStream)recordStream.getTracks().forEach(t=>t.stop());recordStream=null;}
async function startRecording(){
 if(recorder?.state==='recording'){clearTimeout(recordTimer);recorder.stop();return;}
 if(!navigator.mediaDevices?.getUserMedia||!window.MediaRecorder){toast('Gravação indisponível neste navegador.');return;}
 const gen=++recordGeneration;
 try {const stream=await navigator.mediaDevices.getUserMedia({audio:true});if(gen!==recordGeneration||view!=='practice'){stream.getTracks().forEach(t=>t.stop());return;}recordStream=stream;const chunks=[];const r=new MediaRecorder(stream);recorder=r;const id=practiceId;r.ondataavailable=e=>chunks.push(e.data);r.onstop=()=>{stream.getTracks().forEach(t=>t.stop());if(gen!==recordGeneration||view!=='practice'||id!==practiceId)return;if(recordUrl)URL.revokeObjectURL(recordUrl);recordUrl=URL.createObjectURL(new Blob(chunks,{type:r.mimeType||'audio/webm'}));$('#recording').src=recordUrl;$('#recording').hidden=false;$('#record').textContent='● Gravar novamente';$('#record-status').textContent='Compare sons, ritmo e pausas. O áudio fica apenas nesta sessão.'};r.start();$('#record').textContent='■ Encerrar gravação';$('#record-status').textContent='Gravando… encerre quando terminar (máximo de 60 segundos).';recordTimer=setTimeout(()=>{if(r.state==='recording')r.stop()},60000);
 }catch{stopRecording();toast('Microfone indisponível. Confira a permissão e use HTTPS ou localhost.');}
}
function renderReview(){
 const now=Date.now(),data=LESSONS.filter(d=>progress.favorites.includes(d.id)||progress.done.includes(d.id)||progress.reviews[d.id]).sort((a,b)=>(progress.reviews[a.id]?.due??Infinity)-(progress.reviews[b.id]?.due??Infinity));
 const dueIds=data.filter(d=>isDue(progress.reviews[d.id],now)).map(d=>d.id);
 const queueHeader=`<div class="lesson-actions"><strong>Para hoje: ${dueIds.length}</strong><button id="review-due" class="primary-button" ${dueIds.length?'':'disabled'}>Revisar hoje (${dueIds.length})</button></div>`;
 $('#review').innerHTML=queueHeader+(data.length?'<p class="section-intro">Sua autoavaliação agenda a revisão em 1, 3, 7, 14, 30 ou 60 dias. Erros reiniciam o intervalo. O progresso fica neste navegador.</p><div class="review-grid">'+data.map(d=>{const r=progress.reviews[d.id];const due=r?(isDue(r,now)?'Revisar hoje':'Próxima: '+new Date(r.due).toLocaleDateString('pt-BR')):'Ainda sem revisão agendada';return `<article class="review-card"><div class="meta"><span class="pill">${d.level}</span>${progress.favorites.includes(d.id)?'★ Favorito':''} ${progress.done.includes(d.id)?'✓ Praticado':''}</div><h3>${esc(d.pt.text)}</h3><p lang="en">${esc(d.en.text)}</p><p lang="zh-CN">${esc(d.zh.text)}</p><p>${due}</p><button class="secondary-button" data-review="${d.id}">Revisar nos três idiomas</button></article>`}).join('')+'</div>':'<div class="empty"><strong>Suas conexões começam aqui.</strong><p>Favorite uma situação com ☆ ou registre uma autoavaliação para encontrá-la aqui.</p><button id="review-start" class="primary-button">Explorar situações</button></div>');
 $('#review-due').onclick=()=>{
  // O relógio pode ter avançado desde a abertura da aba; atualizamos o recorte no clique.
  reviewQueue=LESSONS.filter(d=>isDue(progress.reviews[d.id])).sort((a,b)=>progress.reviews[a.id].due-progress.reviews[b.id].due).map(d=>d.id);
  reviewIndex=0;if(!reviewQueue.length){reviewQueue=null;renderReview();return;}
  practiceId=reviewQueue[0];setView('practice');
 };
 $$('[data-review]').forEach(b=>b.onclick=()=>{reviewQueue=null;practiceId=b.dataset.review;setView('practice')});if($('#review-start'))$('#review-start').onclick=()=>setView('explorer');
}
$$('[data-view]').forEach(b=>b.onclick=()=>setView(b.dataset.view));$('.brand').onclick=e=>{e.preventDefault();setView('explorer')};
$('#search').oninput=()=>{stopAudio();renderList()};$('#reset-filters').onclick=()=>{cancelActivity();clearFilters();renderList();$('#search').focus()};$('#feature').onchange=()=>{stopAudio();renderList()};
$$('[data-level]').forEach(b=>b.onclick=()=>{cancelActivity();level=b.dataset.level;$$('[data-level]').forEach(x=>x.classList.toggle('selected',x===b));renderList()});
$('.close').onclick=()=>{$('#word-modal').close();stopAudio()};$('#word-modal').addEventListener('click',e=>{if(e.target===$('#word-modal')){$('#word-modal').close();stopAudio()}});$('#word-modal').addEventListener('cancel',stopAudio);
if('speechSynthesis' in window)speechSynthesis.addEventListener('voiceschanged',populateVoices);
window.addEventListener('pagehide',()=>{cancelActivity();if(recordUrl)URL.revokeObjectURL(recordUrl)});
fillFilters();updateCount();renderList();
if(document.modelContext?.registerTool){try{Promise.resolve(document.modelContext.registerTool({name:'explore_language_phrase',title:'Explorar situação trilingue no Elo',description:'Abre uma situação com português, inglês e mandarim juntos, sem alterar o progresso.',inputSchema:{type:'object',properties:{phraseId:{type:'string'}},required:['phraseId'],additionalProperties:false},annotations:{readOnlyHint:false},execute(input){if(!input||typeof input.phraseId!=='string'||!LESSONS.some(d=>d.id===input.phraseId))throw Error('Informe o ID de uma situação existente, como elo-011.');openLesson(input.phraseId);const d=current();return {id:d.id,pt:d.pt.text,en:d.en.text,zh:d.zh.text}}})).catch(()=>{})}catch{}}
