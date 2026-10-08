"""Compila as situações autorais para o acervo estático do app. Sem dependências."""
import json,re
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
classes={
'n':['Substantivo','#235fa5','Nomeia pessoas, objetos, lugares e ideias.'],
'v':['Verbo','#b63645','Expressa ação, estado ou processo; inclui auxiliares e modais.'],
'adj':['Adjetivo','#8149aa','Caracteriza nomes ou participa do predicado.'],
'adv':['Advérbio','#a6530b','Modifica ações, características ou a frase inteira.'],
'pro':['Pronome','#197051','Representa participantes ou retoma elementos.'],
'det':['Determinante / artigo','#157780','Delimita o nome; inclui artigos e possessivos usados antes dele.'],
'prep':['Preposição','#876039','Relaciona elementos; contrações portuguesas aparecem na mesma palavra.'],
'conj':['Conjunção','#b53b79','Liga ideias ou orações.'],
'num':['Numeral','#5053a3','Expressa quantidade ou ordem.'],
'clf':['Classificador','#82670b','Organiza a contagem de nomes em mandarim.'],
'part':['Partícula','#586174','Marca infinitivo, aspecto, relação ou modalidade conforme o idioma.'],
'loc':['Localizador','#566f38','Situa algo no espaço ou no tempo em mandarim.']}
def tokens(raw):
    out=[]
    for piece in raw.split():
        m=re.fullmatch(r'(.+)/([a-z]+)([.,;:?!，。？！；：]*)',piece)
        assert m,piece
        word,cls,punct=m.groups()
        assert cls in classes,cls
        out.append({'text':word,'c':cls,'punct':punct})
    return out
def sentence(ts,lang):return ('' if lang=='zh' else ' ').join(t['text']+t['punct'] for t in ts)
catalog=json.loads((ROOT/'content/topics.json').read_text())
topic_by_label={t['label']:t for t in catalog['topics']}
lessons=[]
for i,line in enumerate((ROOT/'content/lessons.txt').read_text().splitlines()):
    a=line.split('|'); assert len(a)==13,(i,len(a))
    level,topic,title,pt,en,zh,pinyin,natural,phonetic,features,speech,compare,literal=a
    d={'id':f'elo-{i+1:03d}','level':level,'topic':topic,'title':title,'pinyin':pinyin,'natural':natural,'phonetic':phonetic,'features':features.split(','),'speech':speech,'compare':compare,'literal':literal}
    for lang,raw in [('pt',pt),('en',en),('zh',zh)]:
        ts=tokens(raw); d[lang]={'text':sentence(ts,lang),'tokens':ts}
    assert topic in topic_by_label,topic
    d['topicId']=topic_by_label[topic]['id']
    lessons.append(d)
assert len({d['id'] for d in lessons})==len(lessons)
for topic in catalog['topics']:assert any(d['topicId']==topic['id'] for d in lessons),topic['id']
for level in ['A1','A2','B1','B2','C1','C2']:assert sum(d['level']==level for d in lessons)>=10
(ROOT/'dist/data.js').write_text('// Gerado por content/build_data.py. Edite content/lessons.txt.\nconst CLASSES = '+json.dumps(classes,ensure_ascii=False)+';\nconst TOPIC_GROUPS = '+json.dumps(catalog['groups'],ensure_ascii=False)+';\nconst TOPICS = '+json.dumps(catalog['topics'],ensure_ascii=False)+';\nconst LESSONS = '+json.dumps(lessons,ensure_ascii=False,indent=2)+';\n')
print(f'{len(lessons)} situações / {len(lessons)*3} versões alinhadas.')
