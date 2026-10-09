// Gerado por content/build_data.py. Edite content/lessons.txt.
const CLASSES = {"n": ["Substantivo", "#235fa5", "Nomeia pessoas, objetos, lugares e ideias."], "v": ["Verbo", "#b63645", "Expressa ação, estado ou processo; inclui auxiliares e modais."], "adj": ["Adjetivo", "#8149aa", "Caracteriza nomes ou participa do predicado."], "adv": ["Advérbio", "#a6530b", "Modifica ações, características ou a frase inteira."], "pro": ["Pronome", "#197051", "Representa participantes ou retoma elementos."], "det": ["Determinante / artigo", "#157780", "Delimita o nome; inclui artigos e possessivos usados antes dele."], "prep": ["Preposição", "#876039", "Relaciona elementos; contrações portuguesas aparecem na mesma palavra."], "conj": ["Conjunção", "#b53b79", "Liga ideias ou orações."], "num": ["Numeral", "#5053a3", "Expressa quantidade ou ordem."], "clf": ["Classificador", "#82670b", "Organiza a contagem de nomes em mandarim."], "part": ["Partícula", "#586174", "Marca infinitivo, aspecto, relação ou modalidade conforme o idioma."], "loc": ["Localizador", "#566f38", "Situa algo no espaço ou no tempo em mandarim."]};
const TOPIC_GROUPS = [{"id": "dia", "label": "Dia a dia"}, {"id": "viagem", "label": "Viagens"}, {"id": "mundo", "label": "Vida e mundo"}, {"id": "projetos", "label": "Estudo e trabalho"}];
const TOPICS = [{"id": "food", "label": "Restaurante e alimentação", "group": "dia", "description": "Pedidos, cardápio, bebidas e conta", "keywords": "restaurante comida café jantar almoço alimentação"}, {"id": "home", "label": "Casa e rotina", "group": "dia", "description": "Moradia, tarefas e vida em casa", "keywords": "casa moradia rotina aluguel limpeza"}, {"id": "shopping", "label": "Compras e dinheiro", "group": "dia", "description": "Preços, pagamentos e escolhas", "keywords": "compras dinheiro loja mercado cartão banco"}, {"id": "health", "label": "Saúde e bem-estar", "group": "dia", "description": "Sintomas, consulta e necessidades", "keywords": "saúde médico hospital farmácia emergência bem-estar"}, {"id": "services", "label": "Serviços e tecnologia", "group": "dia", "description": "Internet, telefone e encomendas", "keywords": "serviços tecnologia internet telefone correio wifi"}, {"id": "hotel", "label": "Hotel e hospedagem", "group": "viagem", "description": "Reserva, chegada, quarto e saída", "keywords": "hotel hospedagem reserva check-in checkout recepção"}, {"id": "transport", "label": "Transporte e viagens", "group": "viagem", "description": "Deslocamentos, passagens e horários", "keywords": "transporte viagem metrô ônibus táxi trem aeroporto"}, {"id": "nature", "label": "Natureza e clima", "group": "mundo", "description": "Tempo, paisagens e cuidado ambiental", "keywords": "natureza clima chuva parque trilha ambiente sustentabilidade"}, {"id": "leisure", "label": "Lazer e cultura", "group": "mundo", "description": "Cinema, museu, música e convites", "keywords": "lazer cultura cinema museu música esporte entretenimento"}, {"id": "people", "label": "Relações e comunicação", "group": "mundo", "description": "Apresentações, ajuda e convivência", "keywords": "relações família amigos comunicação apresentação sentimentos"}, {"id": "society", "label": "Sociedade e ideias", "group": "mundo", "description": "Opiniões, evidências e debate", "keywords": "sociedade ideias opinião debate cidadania argumentos"}, {"id": "study", "label": "Estudos e aprendizado", "group": "projetos", "description": "Compreensão, idiomas e estudo", "keywords": "estudos aprendizado escola universidade idioma educação"}, {"id": "work", "label": "Trabalho e negócios", "group": "projetos", "description": "Reuniões, projetos e decisões", "keywords": "trabalho negócios emprego reunião relatório dados fornecedor"}];
const LESSONS = [
  {
    "id": "elo-001",
    "level": "A1",
    "topic": "Relações e comunicação",
    "title": "Pedir ajuda",
    "pinyin": "ni3 neng2 bang1 wo3 ma5",
    "natural": "Can you help me?",
    "phonetic": "kan-ia HÉLP mi",
    "features": [
      "Formas fracas",
      "Linking"
    ],
    "speech": "Can pode enfraquecer para /kən/; you pode soar /jə/: can + you → can‿you → kan-ia.",
    "compare": "PT permite você pode…?; EN inverte can e you; ZH mantém a ordem e acrescenta 吗 ao final.",
    "literal": "Você + pode + ajudar + eu + pergunta.",
    "pt": {
      "text": "Você pode me ajudar?",
      "tokens": [
        {
          "text": "Você",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "pode",
          "c": "v",
          "punct": ""
        },
        {
          "text": "me",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "ajudar",
          "c": "v",
          "punct": "?"
        }
      ]
    },
    "en": {
      "text": "Can you help me?",
      "tokens": [
        {
          "text": "Can",
          "c": "v",
          "punct": ""
        },
        {
          "text": "you",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "help",
          "c": "v",
          "punct": ""
        },
        {
          "text": "me",
          "c": "pro",
          "punct": "?"
        }
      ]
    },
    "zh": {
      "text": "你能帮我吗？",
      "tokens": [
        {
          "text": "你",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "能",
          "c": "v",
          "punct": ""
        },
        {
          "text": "帮",
          "c": "v",
          "punct": ""
        },
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "吗",
          "c": "part",
          "punct": "？"
        }
      ]
    },
    "topicId": "people"
  },
  {
    "id": "elo-002",
    "level": "A1",
    "topic": "Relações e comunicação",
    "title": "Apresentar-se",
    "pinyin": "wo3 lai2 zi4 ba1 xi1",
    "natural": "I'm from Brazil.",
    "phonetic": "aim fram bra-ZÍL",
    "features": [
      "Contração",
      "Formas fracas"
    ],
    "speech": "I am → I'm; from pode soar /frəm/ sem ênfase. A contração não elimina o sujeito.",
    "compare": "PT usa ser de; EN usa be from; ZH usa 来自, vir de, como um verbo inteiro.",
    "literal": "Eu + venho de + Brasil.",
    "pt": {
      "text": "Eu sou do Brasil.",
      "tokens": [
        {
          "text": "Eu",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "sou",
          "c": "v",
          "punct": ""
        },
        {
          "text": "do",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "Brasil",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "I am from Brazil.",
      "tokens": [
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "am",
          "c": "v",
          "punct": ""
        },
        {
          "text": "from",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "Brazil",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我来自巴西。",
      "tokens": [
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "来自",
          "c": "v",
          "punct": ""
        },
        {
          "text": "巴西",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "people"
  },
  {
    "id": "elo-003",
    "level": "A1",
    "topic": "Compras e dinheiro",
    "title": "Pedir uma maçã",
    "pinyin": "wo3 xiang3 yao4 yi2 ge4 ping2 guo3",
    "natural": "I want an apple.",
    "phonetic": "ai UÓNT‿an É-pol",
    "features": [
      "Linking",
      "Formas fracas"
    ],
    "speech": "An costuma ter /ə/; seu n se liga ao começo de apple: an + apple → an‿apple. /æ/ não é o é exato do português.",
    "compare": "PT e EN usam artigo; ZH usa numeral + classificador 个 + nome. 想 suaviza a vontade.",
    "literal": "Eu + gostaria + querer + um + classificador + maçã.",
    "pt": {
      "text": "Eu quero uma maçã.",
      "tokens": [
        {
          "text": "Eu",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "quero",
          "c": "v",
          "punct": ""
        },
        {
          "text": "uma",
          "c": "det",
          "punct": ""
        },
        {
          "text": "maçã",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "I want an apple.",
      "tokens": [
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "want",
          "c": "v",
          "punct": ""
        },
        {
          "text": "an",
          "c": "det",
          "punct": ""
        },
        {
          "text": "apple",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我想要一个苹果。",
      "tokens": [
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "想",
          "c": "v",
          "punct": ""
        },
        {
          "text": "要",
          "c": "v",
          "punct": ""
        },
        {
          "text": "一",
          "c": "num",
          "punct": ""
        },
        {
          "text": "个",
          "c": "clf",
          "punct": ""
        },
        {
          "text": "苹果",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "shopping"
  },
  {
    "id": "elo-004",
    "level": "A1",
    "topic": "Restaurante e alimentação",
    "title": "Beber chá",
    "pinyin": "wo3 he1 cha2",
    "natural": "I drink tea.",
    "phonetic": "ai DRÍNK TÍI",
    "features": [
      "Ritmo"
    ],
    "speech": "Destaque drink e tea; não acrescente uma vogal depois de /k/. Nem toda frase exige apagar sons.",
    "compare": "Nos três idiomas, a ordem aqui é sujeito + verbo + objeto. 喝 não recebe conjugação de pessoa.",
    "literal": "Eu + beber + chá.",
    "pt": {
      "text": "Eu bebo chá.",
      "tokens": [
        {
          "text": "Eu",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "bebo",
          "c": "v",
          "punct": ""
        },
        {
          "text": "chá",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "I drink tea.",
      "tokens": [
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "drink",
          "c": "v",
          "punct": ""
        },
        {
          "text": "tea",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我喝茶。",
      "tokens": [
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "喝",
          "c": "v",
          "punct": ""
        },
        {
          "text": "茶",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "food"
  },
  {
    "id": "elo-005",
    "level": "A1",
    "topic": "Transporte e viagens",
    "title": "Procurar o metrô",
    "pinyin": "di4 tie3 zhan4 zai4 nar3",
    "natural": "Where's the station?",
    "phonetic": "UÉRZ dha STÊI-shan",
    "features": [
      "Contração",
      "Formas fracas"
    ],
    "speech": "Where is → where's. The antes de consoante costuma ser /ðə/: dh exige língua entre os dentes com voz.",
    "compare": "PT e EN começam com onde; ZH mantém a pergunta na posição do lugar: estação + estar + onde.",
    "literal": "Estação de metrô + fica + onde?",
    "pt": {
      "text": "Onde fica a estação?",
      "tokens": [
        {
          "text": "Onde",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "fica",
          "c": "v",
          "punct": ""
        },
        {
          "text": "a",
          "c": "det",
          "punct": ""
        },
        {
          "text": "estação",
          "c": "n",
          "punct": "?"
        }
      ]
    },
    "en": {
      "text": "Where is the station?",
      "tokens": [
        {
          "text": "Where",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "is",
          "c": "v",
          "punct": ""
        },
        {
          "text": "the",
          "c": "det",
          "punct": ""
        },
        {
          "text": "station",
          "c": "n",
          "punct": "?"
        }
      ]
    },
    "zh": {
      "text": "地铁站在哪儿？",
      "tokens": [
        {
          "text": "地铁站",
          "c": "n",
          "punct": ""
        },
        {
          "text": "在",
          "c": "v",
          "punct": ""
        },
        {
          "text": "哪儿",
          "c": "pro",
          "punct": "？"
        }
      ]
    },
    "topicId": "transport"
  },
  {
    "id": "elo-006",
    "level": "A1",
    "topic": "Compras e dinheiro",
    "title": "Perguntar o preço",
    "pinyin": "zhe4 ge5 duo1 shao5 qian2",
    "natural": "How much is this?",
    "phonetic": "ráu MÂTCH‿iz DHÍS",
    "features": [
      "Linking"
    ],
    "speech": "Ligue much‿is sem inserir pausa. This começa com /ð/, não com d puro.",
    "compare": "How much funciona como bloco interrogativo. Em ZH, 多少钱 pergunta a quantidade de dinheiro após o tópico 这个.",
    "literal": "Isto + quanto + dinheiro?",
    "pt": {
      "text": "Quanto custa isto?",
      "tokens": [
        {
          "text": "Quanto",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "custa",
          "c": "v",
          "punct": ""
        },
        {
          "text": "isto",
          "c": "pro",
          "punct": "?"
        }
      ]
    },
    "en": {
      "text": "How much is this?",
      "tokens": [
        {
          "text": "How",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "much",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "is",
          "c": "v",
          "punct": ""
        },
        {
          "text": "this",
          "c": "pro",
          "punct": "?"
        }
      ]
    },
    "zh": {
      "text": "这个多少钱？",
      "tokens": [
        {
          "text": "这个",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "多少",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "钱",
          "c": "n",
          "punct": "？"
        }
      ]
    },
    "topicId": "shopping"
  },
  {
    "id": "elo-007",
    "level": "A1",
    "topic": "Estudos e aprendizado",
    "title": "Dizer que não entende",
    "pinyin": "wo3 bu4 ming2 bai5",
    "natural": "I don't understand.",
    "phonetic": "ai DÔUNT‿an-der-STÉND",
    "features": [
      "Contração",
      "Linking"
    ],
    "speech": "Do not → don't; ligue a consoante final ao início de understand. Não precisa apagar o t para soar natural.",
    "compare": "EN exige o auxiliar do para negar esse verbo; PT e ZH colocam não/不 antes do verbo.",
    "literal": "Eu + não + entender.",
    "pt": {
      "text": "Eu não entendo.",
      "tokens": [
        {
          "text": "Eu",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "não",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "entendo",
          "c": "v",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "I do not understand.",
      "tokens": [
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "do",
          "c": "v",
          "punct": ""
        },
        {
          "text": "not",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "understand",
          "c": "v",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我不明白。",
      "tokens": [
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "不",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "明白",
          "c": "v",
          "punct": "。"
        }
      ]
    },
    "topicId": "study"
  },
  {
    "id": "elo-008",
    "level": "A1",
    "topic": "Relações e comunicação",
    "title": "Agradecer",
    "pinyin": "fei1 chang2 gan3 xie4 ni3",
    "natural": "Thank you very much.",
    "phonetic": "THÉNK-iu VÉ-ri MÂTCH",
    "features": [
      "Linking"
    ],
    "speech": "Thank + you → thank‿you. Th aqui é /θ/, um sopro com língua entre os dentes, diferente de /ð/ em the.",
    "compare": "As três formas cumprem a mesma função social; não são traduções palavra por palavra. ZH mantém um verbo explícito, 感谢.",
    "literal": "Muito + agradecer + você.",
    "pt": {
      "text": "Muito obrigado.",
      "tokens": [
        {
          "text": "Muito",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "obrigado",
          "c": "adj",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "Thank you very much.",
      "tokens": [
        {
          "text": "Thank",
          "c": "v",
          "punct": ""
        },
        {
          "text": "you",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "very",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "much",
          "c": "adv",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "非常感谢你。",
      "tokens": [
        {
          "text": "非常",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "感谢",
          "c": "v",
          "punct": ""
        },
        {
          "text": "你",
          "c": "pro",
          "punct": "。"
        }
      ]
    },
    "topicId": "people"
  },
  {
    "id": "elo-009",
    "level": "A1",
    "topic": "Casa e rotina",
    "title": "Morar aqui",
    "pinyin": "wo3 men5 zhu4 zai4 zhe4 li3",
    "natural": "We live here.",
    "phonetic": "ui LÍV HÍR",
    "features": [
      "Ritmo"
    ],
    "speech": "Live aqui é /lɪv/, não /laɪv/. O h de here é um sopro: mantenha a ligação rítmica sem inserir i depois de live.",
    "compare": "PT/EN colocam aqui após o verbo. 住在 introduz o local de residência; nem todo lugar em ZH precisa vir antes do verbo.",
    "literal": "Nós + morar + em + aqui.",
    "pt": {
      "text": "Nós moramos aqui.",
      "tokens": [
        {
          "text": "Nós",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "moramos",
          "c": "v",
          "punct": ""
        },
        {
          "text": "aqui",
          "c": "adv",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "We live here.",
      "tokens": [
        {
          "text": "We",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "live",
          "c": "v",
          "punct": ""
        },
        {
          "text": "here",
          "c": "adv",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我们住在这里。",
      "tokens": [
        {
          "text": "我们",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "住",
          "c": "v",
          "punct": ""
        },
        {
          "text": "在",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "这里",
          "c": "pro",
          "punct": "。"
        }
      ]
    },
    "topicId": "home"
  },
  {
    "id": "elo-010",
    "level": "A1",
    "topic": "Transporte e viagens",
    "title": "Pedir dois ingressos",
    "pinyin": "wo3 xu1 yao4 liang3 zhang1 piao4",
    "natural": "I need two tickets.",
    "phonetic": "ai NÍID tu TÍ-kits",
    "features": [
      "Ritmo"
    ],
    "speech": "Two indica quantidade e mantém a vogal /uː/; não confunda com to fraco. Tickets termina em /ts/, sem i extra.",
    "compare": "PT flexiona ingressos; EN tickets recebe s; ZH usa 两 + 张 + 票, sem plural obrigatório no nome.",
    "literal": "Eu + preciso + dois + classificador de itens planos + ingresso.",
    "pt": {
      "text": "Eu preciso de dois ingressos.",
      "tokens": [
        {
          "text": "Eu",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "preciso",
          "c": "v",
          "punct": ""
        },
        {
          "text": "de",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "dois",
          "c": "num",
          "punct": ""
        },
        {
          "text": "ingressos",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "I need two tickets.",
      "tokens": [
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "need",
          "c": "v",
          "punct": ""
        },
        {
          "text": "two",
          "c": "num",
          "punct": ""
        },
        {
          "text": "tickets",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我需要两张票。",
      "tokens": [
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "需要",
          "c": "v",
          "punct": ""
        },
        {
          "text": "两",
          "c": "num",
          "punct": ""
        },
        {
          "text": "张",
          "c": "clf",
          "punct": ""
        },
        {
          "text": "票",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "transport"
  },
  {
    "id": "elo-011",
    "level": "A2",
    "topic": "Relações e comunicação",
    "title": "Preciso ir",
    "pinyin": "wo3 dei3 zou3 le5",
    "natural": "I've gotta go.",
    "phonetic": "aiv GÁɾa GÔU",
    "features": [
      "Contração",
      "Flapping",
      "Formas fracas"
    ],
    "speech": "I have got to go → I've got to go → I've gotta go. No americano, o t de gotta pode soar [ɾ], como r de caro. I gotta go, ai GÁɾa GÔU, omite have na conversa informal.",
    "compare": "PT tem tenho que; EN have got to indica obrigação; 得 aqui se lê děi e indica necessidade. 了 sinaliza a nova situação.",
    "literal": "Eu + preciso + ir embora + mudança de situação.",
    "pt": {
      "text": "Eu tenho que ir.",
      "tokens": [
        {
          "text": "Eu",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "tenho",
          "c": "v",
          "punct": ""
        },
        {
          "text": "que",
          "c": "part",
          "punct": ""
        },
        {
          "text": "ir",
          "c": "v",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "I have got to go.",
      "tokens": [
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "have",
          "c": "v",
          "punct": ""
        },
        {
          "text": "got",
          "c": "v",
          "punct": ""
        },
        {
          "text": "to",
          "c": "part",
          "punct": ""
        },
        {
          "text": "go",
          "c": "v",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我得走了。",
      "tokens": [
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "得",
          "c": "v",
          "punct": ""
        },
        {
          "text": "走",
          "c": "v",
          "punct": ""
        },
        {
          "text": "了",
          "c": "part",
          "punct": "。"
        }
      ]
    },
    "topicId": "people"
  },
  {
    "id": "elo-012",
    "level": "A2",
    "topic": "Restaurante e alimentação",
    "title": "Pedir café",
    "pinyin": "wo3 xiang3 yao4 yi4 bei1 ka1 fei1",
    "natural": "I'd like a cup of coffee.",
    "phonetic": "aid LÁIK‿a KÂP-av KÓ-fi",
    "features": [
      "Contração",
      "Linking",
      "Formas fracas"
    ],
    "speech": "I would → I'd; like + a → like‿a; of sem ênfase → /əv/. Cup of se aproxima de câp-av.",
    "compare": "EN would like torna o pedido polido; 想要 também suaviza a vontade. ZH conta com 杯, sem equivalente obrigatório de de.",
    "literal": "Eu + gostaria + querer + uma + xícara + café.",
    "pt": {
      "text": "Eu quero uma xícara de café.",
      "tokens": [
        {
          "text": "Eu",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "quero",
          "c": "v",
          "punct": ""
        },
        {
          "text": "uma",
          "c": "det",
          "punct": ""
        },
        {
          "text": "xícara",
          "c": "n",
          "punct": ""
        },
        {
          "text": "de",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "café",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "I would like a cup of coffee.",
      "tokens": [
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "would",
          "c": "v",
          "punct": ""
        },
        {
          "text": "like",
          "c": "v",
          "punct": ""
        },
        {
          "text": "a",
          "c": "det",
          "punct": ""
        },
        {
          "text": "cup",
          "c": "n",
          "punct": ""
        },
        {
          "text": "of",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "coffee",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我想要一杯咖啡。",
      "tokens": [
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "想",
          "c": "v",
          "punct": ""
        },
        {
          "text": "要",
          "c": "v",
          "punct": ""
        },
        {
          "text": "一",
          "c": "num",
          "punct": ""
        },
        {
          "text": "杯",
          "c": "clf",
          "punct": ""
        },
        {
          "text": "咖啡",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "food"
  },
  {
    "id": "elo-013",
    "level": "A2",
    "topic": "Restaurante e alimentação",
    "title": "Perguntar se comeu",
    "pinyin": "ni3 chi1 fan4 le5 ma5",
    "natural": "Did you eat?",
    "phonetic": "DÍ-dju ÍIT",
    "features": [
      "Assimilation",
      "Linking"
    ],
    "speech": "Did + you: /d/ + /j/ pode virar /dʒ/. Did you → didju é uma realização, não uma nova grafia padrão.",
    "compare": "Did marca passado e eat fica na base. ZH usa 吃饭, comer uma refeição, e 了吗 para perguntar pela situação.",
    "literal": "Você + comer + refeição + situação + pergunta.",
    "pt": {
      "text": "Você comeu?",
      "tokens": [
        {
          "text": "Você",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "comeu",
          "c": "v",
          "punct": "?"
        }
      ]
    },
    "en": {
      "text": "Did you eat?",
      "tokens": [
        {
          "text": "Did",
          "c": "v",
          "punct": ""
        },
        {
          "text": "you",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "eat",
          "c": "v",
          "punct": "?"
        }
      ]
    },
    "zh": {
      "text": "你吃饭了吗？",
      "tokens": [
        {
          "text": "你",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "吃",
          "c": "v",
          "punct": ""
        },
        {
          "text": "饭",
          "c": "n",
          "punct": ""
        },
        {
          "text": "了",
          "c": "part",
          "punct": ""
        },
        {
          "text": "吗",
          "c": "part",
          "punct": "？"
        }
      ]
    },
    "topicId": "food"
  },
  {
    "id": "elo-014",
    "level": "A2",
    "topic": "Relações e comunicação",
    "title": "Dizer que não é seu",
    "pinyin": "zhe4 bu2 shi4 wo3 de5",
    "natural": "This isn't mine.",
    "phonetic": "dhis Í-zant MÁIN",
    "features": [
      "Contração",
      "Formas fracas"
    ],
    "speech": "Is not → isn't. A vogal de -n't é fraca; não acrescente i depois do t final.",
    "compare": "Mine já expressa posse; 我的 usa 的 e omite o nome possuído. 不 vira bú antes do quarto tom de 是.",
    "literal": "Isto + não + ser + eu + posse.",
    "pt": {
      "text": "Isto não é meu.",
      "tokens": [
        {
          "text": "Isto",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "não",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "é",
          "c": "v",
          "punct": ""
        },
        {
          "text": "meu",
          "c": "pro",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "This is not mine.",
      "tokens": [
        {
          "text": "This",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "is",
          "c": "v",
          "punct": ""
        },
        {
          "text": "not",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "mine",
          "c": "pro",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "这不是我的。",
      "tokens": [
        {
          "text": "这",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "不",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "是",
          "c": "v",
          "punct": ""
        },
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "的",
          "c": "part",
          "punct": "。"
        }
      ]
    },
    "topicId": "people"
  },
  {
    "id": "elo-015",
    "level": "A2",
    "topic": "Estudos e aprendizado",
    "title": "Pedir repetição",
    "pinyin": "ni3 neng2 zai4 shuo1 yi2 bian4 ma5",
    "natural": "Can you say that again?",
    "phonetic": "kan-ia SÊI dhét‿a-GUÉN",
    "features": [
      "Linking",
      "Formas fracas"
    ],
    "speech": "Can e you podem enfraquecer; that + again → that‿again liga t à vogal seguinte.",
    "compare": "EN usa again depois do objeto; ZH põe 再 antes de 说 e conta a repetição com 一遍.",
    "literal": "Você + pode + novamente + falar + uma + vez completa + pergunta.",
    "pt": {
      "text": "Você pode repetir isso?",
      "tokens": [
        {
          "text": "Você",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "pode",
          "c": "v",
          "punct": ""
        },
        {
          "text": "repetir",
          "c": "v",
          "punct": ""
        },
        {
          "text": "isso",
          "c": "pro",
          "punct": "?"
        }
      ]
    },
    "en": {
      "text": "Can you say that again?",
      "tokens": [
        {
          "text": "Can",
          "c": "v",
          "punct": ""
        },
        {
          "text": "you",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "say",
          "c": "v",
          "punct": ""
        },
        {
          "text": "that",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "again",
          "c": "adv",
          "punct": "?"
        }
      ]
    },
    "zh": {
      "text": "你能再说一遍吗？",
      "tokens": [
        {
          "text": "你",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "能",
          "c": "v",
          "punct": ""
        },
        {
          "text": "再",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "说",
          "c": "v",
          "punct": ""
        },
        {
          "text": "一",
          "c": "num",
          "punct": ""
        },
        {
          "text": "遍",
          "c": "clf",
          "punct": ""
        },
        {
          "text": "吗",
          "c": "part",
          "punct": "？"
        }
      ]
    },
    "topicId": "study"
  },
  {
    "id": "elo-016",
    "level": "A2",
    "topic": "Transporte e viagens",
    "title": "Perguntar a duração",
    "pinyin": "zhe4 xu1 yao4 duo1 chang2 shi2 jian1",
    "natural": "How long does it take?",
    "phonetic": "ráu LÓNG daz‿it TÊIK",
    "features": [
      "Linking",
      "Formas fracas"
    ],
    "speech": "Does pode ter vogal fraca; o z final liga a it. Long termina em /ŋ/, sem um g separado.",
    "compare": "EN usa does como auxiliar; ZH pergunta quanto tempo com 多长时间 como objeto de 需要.",
    "literal": "Isto + requer + quanto + tempo?",
    "pt": {
      "text": "Quanto tempo leva?",
      "tokens": [
        {
          "text": "Quanto",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "tempo",
          "c": "n",
          "punct": ""
        },
        {
          "text": "leva",
          "c": "v",
          "punct": "?"
        }
      ]
    },
    "en": {
      "text": "How long does it take?",
      "tokens": [
        {
          "text": "How",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "long",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "does",
          "c": "v",
          "punct": ""
        },
        {
          "text": "it",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "take",
          "c": "v",
          "punct": "?"
        }
      ]
    },
    "zh": {
      "text": "这需要多长时间？",
      "tokens": [
        {
          "text": "这",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "需要",
          "c": "v",
          "punct": ""
        },
        {
          "text": "多长",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "时间",
          "c": "n",
          "punct": "？"
        }
      ]
    },
    "topicId": "transport"
  },
  {
    "id": "elo-017",
    "level": "A2",
    "topic": "Compras e dinheiro",
    "title": "Pagar com cartão",
    "pinyin": "wo3 ke3 yi3 shua1 ka3 ma5",
    "natural": "Can I pay by card?",
    "phonetic": "kan‿ai PÊI bai KÁRD",
    "features": [
      "Linking",
      "Formas fracas"
    ],
    "speech": "Can sem ênfase → /kən/; o n liga com I: can‿I. By mantém /baɪ/.",
    "compare": "PT pode omitir eu; EN mantém I. 刷卡 descreve usar o cartão, sem uma preposição equivalente a by.",
    "literal": "Eu + posso + passar + cartão + pergunta.",
    "pt": {
      "text": "Posso pagar com cartão?",
      "tokens": [
        {
          "text": "Posso",
          "c": "v",
          "punct": ""
        },
        {
          "text": "pagar",
          "c": "v",
          "punct": ""
        },
        {
          "text": "com",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "cartão",
          "c": "n",
          "punct": "?"
        }
      ]
    },
    "en": {
      "text": "Can I pay by card?",
      "tokens": [
        {
          "text": "Can",
          "c": "v",
          "punct": ""
        },
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "pay",
          "c": "v",
          "punct": ""
        },
        {
          "text": "by",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "card",
          "c": "n",
          "punct": "?"
        }
      ]
    },
    "zh": {
      "text": "我可以刷卡吗？",
      "tokens": [
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "可以",
          "c": "v",
          "punct": ""
        },
        {
          "text": "刷",
          "c": "v",
          "punct": ""
        },
        {
          "text": "卡",
          "c": "n",
          "punct": ""
        },
        {
          "text": "吗",
          "c": "part",
          "punct": "？"
        }
      ]
    },
    "topicId": "shopping"
  },
  {
    "id": "elo-018",
    "level": "A2",
    "topic": "Transporte e viagens",
    "title": "Estar a caminho",
    "pinyin": "wo3 yi3 jing1 zai4 lu4 shang4 le5",
    "natural": "I'm on my way.",
    "phonetic": "aim‿on mai UÊI",
    "features": [
      "Contração",
      "Linking"
    ],
    "speech": "I am → I'm; I'm + on → I'm‿on. Way recebe o destaque principal.",
    "compare": "On my way é uma expressão, não caminho possuído literalmente. 路上 combina nome + localizador 上.",
    "literal": "Eu + já + em + estrada + sobre + situação.",
    "pt": {
      "text": "Eu estou a caminho.",
      "tokens": [
        {
          "text": "Eu",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "estou",
          "c": "v",
          "punct": ""
        },
        {
          "text": "a",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "caminho",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "I am on my way.",
      "tokens": [
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "am",
          "c": "v",
          "punct": ""
        },
        {
          "text": "on",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "my",
          "c": "det",
          "punct": ""
        },
        {
          "text": "way",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我已经在路上了。",
      "tokens": [
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "已经",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "在",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "路",
          "c": "n",
          "punct": ""
        },
        {
          "text": "上",
          "c": "loc",
          "punct": ""
        },
        {
          "text": "了",
          "c": "part",
          "punct": "。"
        }
      ]
    },
    "topicId": "transport"
  },
  {
    "id": "elo-019",
    "level": "A2",
    "topic": "Relações e comunicação",
    "title": "Marcar amanhã",
    "pinyin": "wo3 men5 ming2 tian1 ke3 yi3 tan2 yi2 xia4 ma5",
    "natural": "Can we talk tomorrow?",
    "phonetic": "kan ui TÓK ta-MÓ-rou",
    "features": [
      "Formas fracas"
    ],
    "speech": "Can → /kən/; a primeira sílaba de tomorrow é fraca. O acento recai na segunda.",
    "compare": "A posição comum de amanhã em PT/EN é final; 明天 aparece antes do verbo em ZH. 一下 suaviza o pedido.",
    "literal": "Nós + amanhã + podemos + conversar + um pouco + pergunta.",
    "pt": {
      "text": "Podemos conversar amanhã?",
      "tokens": [
        {
          "text": "Podemos",
          "c": "v",
          "punct": ""
        },
        {
          "text": "conversar",
          "c": "v",
          "punct": ""
        },
        {
          "text": "amanhã",
          "c": "adv",
          "punct": "?"
        }
      ]
    },
    "en": {
      "text": "Can we talk tomorrow?",
      "tokens": [
        {
          "text": "Can",
          "c": "v",
          "punct": ""
        },
        {
          "text": "we",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "talk",
          "c": "v",
          "punct": ""
        },
        {
          "text": "tomorrow",
          "c": "adv",
          "punct": "?"
        }
      ]
    },
    "zh": {
      "text": "我们明天可以谈一下吗？",
      "tokens": [
        {
          "text": "我们",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "明天",
          "c": "n",
          "punct": ""
        },
        {
          "text": "可以",
          "c": "v",
          "punct": ""
        },
        {
          "text": "谈",
          "c": "v",
          "punct": ""
        },
        {
          "text": "一下",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "吗",
          "c": "part",
          "punct": "？"
        }
      ]
    },
    "topicId": "people"
  },
  {
    "id": "elo-020",
    "level": "A2",
    "topic": "Compras e dinheiro",
    "title": "Escolher o menor",
    "pinyin": "wo3 geng4 xi3 huan5 xiao3 yi4 dianr3 de5",
    "natural": "I prefer the smaller one.",
    "phonetic": "ai pri-FÂR dha SMÓ-ler uân",
    "features": [
      "Formas fracas",
      "Linking"
    ],
    "speech": "The → /ðə/; ligue smaller‿one sem pausa. One substitui o objeto já conhecido.",
    "compare": "PT pode omitir o nome após menor; EN usa one; ZH usa 的 para recuperar o objeto qualificado.",
    "literal": "Eu + mais + gostar + pequeno + um pouco + nominalização.",
    "pt": {
      "text": "Eu prefiro o menor.",
      "tokens": [
        {
          "text": "Eu",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "prefiro",
          "c": "v",
          "punct": ""
        },
        {
          "text": "o",
          "c": "det",
          "punct": ""
        },
        {
          "text": "menor",
          "c": "adj",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "I prefer the smaller one.",
      "tokens": [
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "prefer",
          "c": "v",
          "punct": ""
        },
        {
          "text": "the",
          "c": "det",
          "punct": ""
        },
        {
          "text": "smaller",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "one",
          "c": "pro",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我更喜欢小一点儿的。",
      "tokens": [
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "更",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "喜欢",
          "c": "v",
          "punct": ""
        },
        {
          "text": "小",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "一点儿",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "的",
          "c": "part",
          "punct": "。"
        }
      ]
    },
    "topicId": "shopping"
  },
  {
    "id": "elo-021",
    "level": "B1",
    "topic": "Estudos e aprendizado",
    "title": "Estudar em casa",
    "pinyin": "wo3 jin1 tian1 zai4 jia1 xue2 xi2 zhong1 wen2",
    "natural": "I study Chinese at home today.",
    "phonetic": "ai STÂ-di tchai-NÍIZ‿at HÔUM ta-DÊI",
    "features": [
      "Linking",
      "Formas fracas"
    ],
    "speech": "Chinese + at → Chinese‿at; at pode enfraquecer para /ət/. Today começa com sílaba fraca.",
    "compare": "今天 é nome temporal usado como circunstância. ZH põe tempo e 在家 antes de 学习; EN aceita ambos no fim.",
    "literal": "Eu + hoje + em + casa + estudar + chinês.",
    "pt": {
      "text": "Hoje eu estudo chinês em casa.",
      "tokens": [
        {
          "text": "Hoje",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "eu",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "estudo",
          "c": "v",
          "punct": ""
        },
        {
          "text": "chinês",
          "c": "n",
          "punct": ""
        },
        {
          "text": "em",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "casa",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "I study Chinese at home today.",
      "tokens": [
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "study",
          "c": "v",
          "punct": ""
        },
        {
          "text": "Chinese",
          "c": "n",
          "punct": ""
        },
        {
          "text": "at",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "home",
          "c": "n",
          "punct": ""
        },
        {
          "text": "today",
          "c": "adv",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我今天在家学习中文。",
      "tokens": [
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "今天",
          "c": "n",
          "punct": ""
        },
        {
          "text": "在",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "家",
          "c": "n",
          "punct": ""
        },
        {
          "text": "学习",
          "c": "v",
          "punct": ""
        },
        {
          "text": "中文",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "study"
  },
  {
    "id": "elo-022",
    "level": "B1",
    "topic": "Trabalho e negócios",
    "title": "Receber a amostra",
    "pinyin": "wo3 yi3 jing1 shou1 dao4 yang4 pin3 le5",
    "natural": "I've already received the sample.",
    "phonetic": "aiv‿ol-RÉ-di ri-SÍIVD dha SÉM-pol",
    "features": [
      "Contração",
      "Linking"
    ],
    "speech": "I have → I've; o v liga à vogal de already. Received termina em /vd/, sem uma sílaba extra.",
    "compare": "EN usa present perfect; PT traduz naturalmente pelo passado. Em ZH, 已经 e 了 mostram a situação atual sem conjugar 收到.",
    "literal": "Eu + já + receber com resultado + amostra + situação.",
    "pt": {
      "text": "Eu já recebi a amostra.",
      "tokens": [
        {
          "text": "Eu",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "já",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "recebi",
          "c": "v",
          "punct": ""
        },
        {
          "text": "a",
          "c": "det",
          "punct": ""
        },
        {
          "text": "amostra",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "I have already received the sample.",
      "tokens": [
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "have",
          "c": "v",
          "punct": ""
        },
        {
          "text": "already",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "received",
          "c": "v",
          "punct": ""
        },
        {
          "text": "the",
          "c": "det",
          "punct": ""
        },
        {
          "text": "sample",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我已经收到样品了。",
      "tokens": [
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "已经",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "收到",
          "c": "v",
          "punct": ""
        },
        {
          "text": "样品",
          "c": "n",
          "punct": ""
        },
        {
          "text": "了",
          "c": "part",
          "punct": "。"
        }
      ]
    },
    "topicId": "work"
  },
  {
    "id": "elo-023",
    "level": "B1",
    "topic": "Saúde e bem-estar",
    "title": "Um pouco melhor",
    "pinyin": "zhe4 hao3 yi4 dianr3 le5",
    "natural": "It's a little better.",
    "phonetic": "its a LÍɾol BÉɾer",
    "features": [
      "Contração",
      "Flapping"
    ],
    "speech": "It is → it's; little e better podem ter [ɾ] no americano. A little é uma expressão de grau.",
    "compare": "PT/EN usam um elemento antes de melhor/better; ZH coloca 一点儿 depois de 好. Não acrescente 是 automaticamente antes do adjetivo.",
    "literal": "Isto + bom + um pouco + mudança.",
    "pt": {
      "text": "Está um pouco melhor.",
      "tokens": [
        {
          "text": "Está",
          "c": "v",
          "punct": ""
        },
        {
          "text": "um",
          "c": "det",
          "punct": ""
        },
        {
          "text": "pouco",
          "c": "n",
          "punct": ""
        },
        {
          "text": "melhor",
          "c": "adj",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "It is a little better.",
      "tokens": [
        {
          "text": "It",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "is",
          "c": "v",
          "punct": ""
        },
        {
          "text": "a",
          "c": "det",
          "punct": ""
        },
        {
          "text": "little",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "better",
          "c": "adj",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "这好一点儿了。",
      "tokens": [
        {
          "text": "这",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "好",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "一点儿",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "了",
          "c": "part",
          "punct": "。"
        }
      ]
    },
    "topicId": "health"
  },
  {
    "id": "elo-024",
    "level": "B1",
    "topic": "Trabalho e negócios",
    "title": "Encontro na próxima semana",
    "pinyin": "wo3 men5 xia4 zhou1 ke3 yi3 jian4 mian4",
    "natural": "We can meet next week.",
    "phonetic": "ui kan MÍIT néks UÍIK",
    "features": [
      "Elision",
      "Formas fracas"
    ],
    "speech": "Next week: /t/ entre /s/ e /w/ pode desaparecer. Next week → nex week. Can perde destaque.",
    "compare": "EN permite o tempo no fim; ZH coloca 下周 antes de 可以见面. 见面 é uma unidade lexical.",
    "literal": "Nós + próxima semana + podemos + encontrar.",
    "pt": {
      "text": "Nós podemos nos encontrar na próxima semana.",
      "tokens": [
        {
          "text": "Nós",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "podemos",
          "c": "v",
          "punct": ""
        },
        {
          "text": "nos",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "encontrar",
          "c": "v",
          "punct": ""
        },
        {
          "text": "na",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "próxima",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "semana",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "We can meet next week.",
      "tokens": [
        {
          "text": "We",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "can",
          "c": "v",
          "punct": ""
        },
        {
          "text": "meet",
          "c": "v",
          "punct": ""
        },
        {
          "text": "next",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "week",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我们下周可以见面。",
      "tokens": [
        {
          "text": "我们",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "下周",
          "c": "n",
          "punct": ""
        },
        {
          "text": "可以",
          "c": "v",
          "punct": ""
        },
        {
          "text": "见面",
          "c": "v",
          "punct": "。"
        }
      ]
    },
    "topicId": "work"
  },
  {
    "id": "elo-025",
    "level": "B1",
    "topic": "Transporte e viagens",
    "title": "Já esteve em Xangai?",
    "pinyin": "ni3 qu4 guo5 shang4 hai3 ma5",
    "natural": "Have you ever been to Shanghai?",
    "phonetic": "hav-ia É-ver bin ta shang-HÁI",
    "features": [
      "Formas fracas",
      "Linking"
    ],
    "speech": "Have you pode soar /həv jə/; to pode ser /tə/. Ligue you‿ever.",
    "compare": "Ever busca experiência de vida; 过 após 去 marca experiência. O nome Shanghai tem pronúncia inglesa e chinesa diferentes.",
    "literal": "Você + ir + experiência + Xangai + pergunta.",
    "pt": {
      "text": "Você já esteve em Xangai?",
      "tokens": [
        {
          "text": "Você",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "já",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "esteve",
          "c": "v",
          "punct": ""
        },
        {
          "text": "em",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "Xangai",
          "c": "n",
          "punct": "?"
        }
      ]
    },
    "en": {
      "text": "Have you ever been to Shanghai?",
      "tokens": [
        {
          "text": "Have",
          "c": "v",
          "punct": ""
        },
        {
          "text": "you",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "ever",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "been",
          "c": "v",
          "punct": ""
        },
        {
          "text": "to",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "Shanghai",
          "c": "n",
          "punct": "?"
        }
      ]
    },
    "zh": {
      "text": "你去过上海吗？",
      "tokens": [
        {
          "text": "你",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "去",
          "c": "v",
          "punct": ""
        },
        {
          "text": "过",
          "c": "part",
          "punct": ""
        },
        {
          "text": "上海",
          "c": "n",
          "punct": ""
        },
        {
          "text": "吗",
          "c": "part",
          "punct": "？"
        }
      ]
    },
    "topicId": "transport"
  },
  {
    "id": "elo-026",
    "level": "B1",
    "topic": "Trabalho e negócios",
    "title": "Explicar um atraso",
    "pinyin": "yin1 wei4 xia4 yu3 song4 huo4 yan2 chi2 le5",
    "natural": "The delivery was delayed because it rained.",
    "phonetic": "dha di-LÍ-ve-ri waz di-LÊID bi-KÓZ‿it RÊIND",
    "features": [
      "Formas fracas",
      "Linking"
    ],
    "speech": "Was pode soar /wəz/; because + it liga /z/ à vogal. Rained tem uma sílaba.",
    "compare": "EN explicita it para o clima; ZH usa 下雨 sem sujeito equivalente e pode colocar a causa primeiro.",
    "literal": "Porque + chover + entrega + atrasar + aspecto.",
    "pt": {
      "text": "A entrega atrasou porque choveu.",
      "tokens": [
        {
          "text": "A",
          "c": "det",
          "punct": ""
        },
        {
          "text": "entrega",
          "c": "n",
          "punct": ""
        },
        {
          "text": "atrasou",
          "c": "v",
          "punct": ""
        },
        {
          "text": "porque",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "choveu",
          "c": "v",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "The delivery was delayed because it rained.",
      "tokens": [
        {
          "text": "The",
          "c": "det",
          "punct": ""
        },
        {
          "text": "delivery",
          "c": "n",
          "punct": ""
        },
        {
          "text": "was",
          "c": "v",
          "punct": ""
        },
        {
          "text": "delayed",
          "c": "v",
          "punct": ""
        },
        {
          "text": "because",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "it",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "rained",
          "c": "v",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "因为下雨，送货延迟了。",
      "tokens": [
        {
          "text": "因为",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "下雨",
          "c": "v",
          "punct": "，"
        },
        {
          "text": "送货",
          "c": "n",
          "punct": ""
        },
        {
          "text": "延迟",
          "c": "v",
          "punct": ""
        },
        {
          "text": "了",
          "c": "part",
          "punct": "。"
        }
      ]
    },
    "topicId": "work"
  },
  {
    "id": "elo-027",
    "level": "B1",
    "topic": "Natureza e clima",
    "title": "Se chover, ficar em casa",
    "pinyin": "ru2 guo3 xia4 yu3 wo3 jiu4 dai1 zai4 jia1 li3",
    "natural": "If it rains, I'll stay home.",
    "phonetic": "if‿it RÊINZ, ail STÊI HÔUM",
    "features": [
      "Contração",
      "Linking"
    ],
    "speech": "I will → I'll; if + it → if‿it. Rains recebe /z/ final.",
    "compare": "Na condição futura, EN usa presente após if. ZH pode combinar 如果 com 就 para ligar condição e consequência.",
    "literal": "Se + chover + eu + então + ficar + em + casa + dentro.",
    "pt": {
      "text": "Se chover, eu fico em casa.",
      "tokens": [
        {
          "text": "Se",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "chover",
          "c": "v",
          "punct": ","
        },
        {
          "text": "eu",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "fico",
          "c": "v",
          "punct": ""
        },
        {
          "text": "em",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "casa",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "If it rains, I will stay home.",
      "tokens": [
        {
          "text": "If",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "it",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "rains",
          "c": "v",
          "punct": ","
        },
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "will",
          "c": "v",
          "punct": ""
        },
        {
          "text": "stay",
          "c": "v",
          "punct": ""
        },
        {
          "text": "home",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "如果下雨，我就待在家里。",
      "tokens": [
        {
          "text": "如果",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "下雨",
          "c": "v",
          "punct": "，"
        },
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "就",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "待",
          "c": "v",
          "punct": ""
        },
        {
          "text": "在",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "家",
          "c": "n",
          "punct": ""
        },
        {
          "text": "里",
          "c": "loc",
          "punct": "。"
        }
      ]
    },
    "topicId": "nature"
  },
  {
    "id": "elo-028",
    "level": "B1",
    "topic": "Estudos e aprendizado",
    "title": "Pedir que fale mais devagar",
    "pinyin": "ni3 neng2 shuo1 de5 man4 yi4 dianr3 ma5",
    "natural": "Could you speak more slowly?",
    "phonetic": "KÚ-dja SPÍIK mor SLÔU-li",
    "features": [
      "Assimilation",
      "Formas fracas"
    ],
    "speech": "Could + you pode soar couldja: /d/ + /j/ → /dʒ/. Could mantém a função de pedido polido.",
    "compare": "EN modifica speak com advérbio; ZH usa 得 para introduzir a descrição da maneira de falar.",
    "literal": "Você + pode + falar + ligação + lento + um pouco + pergunta.",
    "pt": {
      "text": "Você poderia falar mais devagar?",
      "tokens": [
        {
          "text": "Você",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "poderia",
          "c": "v",
          "punct": ""
        },
        {
          "text": "falar",
          "c": "v",
          "punct": ""
        },
        {
          "text": "mais",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "devagar",
          "c": "adv",
          "punct": "?"
        }
      ]
    },
    "en": {
      "text": "Could you speak more slowly?",
      "tokens": [
        {
          "text": "Could",
          "c": "v",
          "punct": ""
        },
        {
          "text": "you",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "speak",
          "c": "v",
          "punct": ""
        },
        {
          "text": "more",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "slowly",
          "c": "adv",
          "punct": "?"
        }
      ]
    },
    "zh": {
      "text": "你能说得慢一点儿吗？",
      "tokens": [
        {
          "text": "你",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "能",
          "c": "v",
          "punct": ""
        },
        {
          "text": "说",
          "c": "v",
          "punct": ""
        },
        {
          "text": "得",
          "c": "part",
          "punct": ""
        },
        {
          "text": "慢",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "一点儿",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "吗",
          "c": "part",
          "punct": "？"
        }
      ]
    },
    "topicId": "study"
  },
  {
    "id": "elo-029",
    "level": "B1",
    "topic": "Trabalho e negócios",
    "title": "Ainda não terminou",
    "pinyin": "wo3 hai2 mei2 zuo4 wan2",
    "natural": "I haven't finished yet.",
    "phonetic": "ai HÉ-vant FÍ-nisht IÉT",
    "features": [
      "Contração",
      "Linking"
    ],
    "speech": "Have not → haven't; finished termina em /t/. Ligue finished‿yet sem criar uma sílaba id extra.",
    "compare": "Yet vai frequentemente no final; 还没 vem antes de 做完. 完 é complemento de resultado: fazer até terminar.",
    "literal": "Eu + ainda + não + fazer + terminar.",
    "pt": {
      "text": "Eu ainda não terminei.",
      "tokens": [
        {
          "text": "Eu",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "ainda",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "não",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "terminei",
          "c": "v",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "I have not finished yet.",
      "tokens": [
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "have",
          "c": "v",
          "punct": ""
        },
        {
          "text": "not",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "finished",
          "c": "v",
          "punct": ""
        },
        {
          "text": "yet",
          "c": "adv",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我还没做完。",
      "tokens": [
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "还",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "没",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "做",
          "c": "v",
          "punct": ""
        },
        {
          "text": "完",
          "c": "v",
          "punct": "。"
        }
      ]
    },
    "topicId": "work"
  },
  {
    "id": "elo-030",
    "level": "B1",
    "topic": "Compras e dinheiro",
    "title": "Comparar preços",
    "pinyin": "zhe4 ge5 xing2 hao4 bi3 na4 ge5 pian2 yi5",
    "natural": "This model's cheaper than that one.",
    "phonetic": "dhis MÓ-dolz TCHÍ-per dhan DHÉT uân",
    "features": [
      "Contração",
      "Formas fracas"
    ],
    "speech": "Model is → model's; than pode soar /ðən/. Aqui 's significa is, não posse.",
    "compare": "EN usa cheaper + than; ZH põe 比 + referência antes de 便宜. O comparativo não exige 更 nesta estrutura.",
    "literal": "Este + modelo + comparado a + aquele + barato.",
    "pt": {
      "text": "Este modelo é mais barato que aquele.",
      "tokens": [
        {
          "text": "Este",
          "c": "det",
          "punct": ""
        },
        {
          "text": "modelo",
          "c": "n",
          "punct": ""
        },
        {
          "text": "é",
          "c": "v",
          "punct": ""
        },
        {
          "text": "mais",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "barato",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "que",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "aquele",
          "c": "pro",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "This model is cheaper than that one.",
      "tokens": [
        {
          "text": "This",
          "c": "det",
          "punct": ""
        },
        {
          "text": "model",
          "c": "n",
          "punct": ""
        },
        {
          "text": "is",
          "c": "v",
          "punct": ""
        },
        {
          "text": "cheaper",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "than",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "that",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "one",
          "c": "pro",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "这个型号比那个便宜。",
      "tokens": [
        {
          "text": "这",
          "c": "det",
          "punct": ""
        },
        {
          "text": "个",
          "c": "clf",
          "punct": ""
        },
        {
          "text": "型号",
          "c": "n",
          "punct": ""
        },
        {
          "text": "比",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "那个",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "便宜",
          "c": "adj",
          "punct": "。"
        }
      ]
    },
    "topicId": "shopping"
  },
  {
    "id": "elo-031",
    "level": "B2",
    "topic": "Trabalho e negócios",
    "title": "Enviar atualização",
    "pinyin": "ni3 neng2 fa1 yi2 fen4 jin4 zhan3 bao4 gao4 ma5",
    "natural": "Could you send an update?",
    "phonetic": "KÚ-dja sénd‿an ÂP-deit",
    "features": [
      "Assimilation",
      "Linking"
    ],
    "speech": "Could you → couldja; send an → send‿an; an update → an‿update. As ligações não mudam os limites das palavras escritas.",
    "compare": "EN pede update de forma ampla; ZH explicita relatório de andamento e usa 份 para contar documentos.",
    "literal": "Você + pode + enviar + um + classificador + progresso + relatório + pergunta.",
    "pt": {
      "text": "Você poderia enviar uma atualização?",
      "tokens": [
        {
          "text": "Você",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "poderia",
          "c": "v",
          "punct": ""
        },
        {
          "text": "enviar",
          "c": "v",
          "punct": ""
        },
        {
          "text": "uma",
          "c": "det",
          "punct": ""
        },
        {
          "text": "atualização",
          "c": "n",
          "punct": "?"
        }
      ]
    },
    "en": {
      "text": "Could you send an update?",
      "tokens": [
        {
          "text": "Could",
          "c": "v",
          "punct": ""
        },
        {
          "text": "you",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "send",
          "c": "v",
          "punct": ""
        },
        {
          "text": "an",
          "c": "det",
          "punct": ""
        },
        {
          "text": "update",
          "c": "n",
          "punct": "?"
        }
      ]
    },
    "zh": {
      "text": "你能发一份进展报告吗？",
      "tokens": [
        {
          "text": "你",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "能",
          "c": "v",
          "punct": ""
        },
        {
          "text": "发",
          "c": "v",
          "punct": ""
        },
        {
          "text": "一",
          "c": "num",
          "punct": ""
        },
        {
          "text": "份",
          "c": "clf",
          "punct": ""
        },
        {
          "text": "进展",
          "c": "n",
          "punct": ""
        },
        {
          "text": "报告",
          "c": "n",
          "punct": ""
        },
        {
          "text": "吗",
          "c": "part",
          "punct": "？"
        }
      ]
    },
    "topicId": "work"
  },
  {
    "id": "elo-032",
    "level": "B2",
    "topic": "Trabalho e negócios",
    "title": "Aprovar uma amostra",
    "pinyin": "yang4 pin3 yi3 jing1 tong1 guo4 shen3 he2 le5",
    "natural": "The sample has been approved.",
    "phonetic": "dha SÉM-pol haz bin‿a-PRÚUVD",
    "features": [
      "Linking",
      "Formas fracas"
    ],
    "speech": "Has pode soar /həz/; been‿approved une o n à vogal. Approved termina em /vd/.",
    "compare": "PT/EN usam passiva; ZH pode dizer naturalmente que a amostra passou pela revisão, sem usar 被.",
    "literal": "Amostra + já + passar por + revisão + situação.",
    "pt": {
      "text": "A amostra foi aprovada.",
      "tokens": [
        {
          "text": "A",
          "c": "det",
          "punct": ""
        },
        {
          "text": "amostra",
          "c": "n",
          "punct": ""
        },
        {
          "text": "foi",
          "c": "v",
          "punct": ""
        },
        {
          "text": "aprovada",
          "c": "v",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "The sample has been approved.",
      "tokens": [
        {
          "text": "The",
          "c": "det",
          "punct": ""
        },
        {
          "text": "sample",
          "c": "n",
          "punct": ""
        },
        {
          "text": "has",
          "c": "v",
          "punct": ""
        },
        {
          "text": "been",
          "c": "v",
          "punct": ""
        },
        {
          "text": "approved",
          "c": "v",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "样品已经通过审核了。",
      "tokens": [
        {
          "text": "样品",
          "c": "n",
          "punct": ""
        },
        {
          "text": "已经",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "通过",
          "c": "v",
          "punct": ""
        },
        {
          "text": "审核",
          "c": "n",
          "punct": ""
        },
        {
          "text": "了",
          "c": "part",
          "punct": "。"
        }
      ]
    },
    "topicId": "work"
  },
  {
    "id": "elo-033",
    "level": "B2",
    "topic": "Trabalho e negócios",
    "title": "Colocar a amostra aqui",
    "pinyin": "qing3 ba3 yang4 pin3 fang4 zai4 zhe4 li3",
    "natural": "Please put the sample here.",
    "phonetic": "plíiz PUT dha SÉM-pol HÍR",
    "features": [
      "Formas fracas",
      "Ritmo"
    ],
    "speech": "The perde destaque; não insira i depois de put. Sample e here carregam a informação principal.",
    "compare": "PT/EN deixam o objeto após o verbo; 把 coloca o objeto afetado antes de 放. O destino completa a ação.",
    "literal": "Por favor + objeto afetado + amostra + colocar + em + aqui.",
    "pt": {
      "text": "Por favor, coloque a amostra aqui.",
      "tokens": [
        {
          "text": "Por",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "favor",
          "c": "n",
          "punct": ","
        },
        {
          "text": "coloque",
          "c": "v",
          "punct": ""
        },
        {
          "text": "a",
          "c": "det",
          "punct": ""
        },
        {
          "text": "amostra",
          "c": "n",
          "punct": ""
        },
        {
          "text": "aqui",
          "c": "adv",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "Please put the sample here.",
      "tokens": [
        {
          "text": "Please",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "put",
          "c": "v",
          "punct": ""
        },
        {
          "text": "the",
          "c": "det",
          "punct": ""
        },
        {
          "text": "sample",
          "c": "n",
          "punct": ""
        },
        {
          "text": "here",
          "c": "adv",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "请把样品放在这里。",
      "tokens": [
        {
          "text": "请",
          "c": "v",
          "punct": ""
        },
        {
          "text": "把",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "样品",
          "c": "n",
          "punct": ""
        },
        {
          "text": "放",
          "c": "v",
          "punct": ""
        },
        {
          "text": "在",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "这里",
          "c": "pro",
          "punct": "。"
        }
      ]
    },
    "topicId": "work"
  },
  {
    "id": "elo-034",
    "level": "B2",
    "topic": "Trabalho e negócios",
    "title": "Resolver apesar do problema",
    "pinyin": "sui1 ran2 you3 wen4 ti2 dan4 shi4 wo3 men5 ke3 yi3 jie3 jue2",
    "natural": "Although there's a problem, we can solve it.",
    "phonetic": "ol-DHÔU dhérz a PRÓ-blam, ui kan SÓLV‿it",
    "features": [
      "Contração",
      "Linking"
    ],
    "speech": "There is → there's; can pode ser fraco; solve + it → solve‿it. Não acrescente vogal entre v e it.",
    "compare": "虽然…但是… é um par natural em ZH. PT/EN não precisam duplicar embora e mas na mesma estrutura.",
    "literal": "Embora + haver + problema + mas + nós + poder + resolver.",
    "pt": {
      "text": "Embora haja um problema, podemos resolvê-lo.",
      "tokens": [
        {
          "text": "Embora",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "haja",
          "c": "v",
          "punct": ""
        },
        {
          "text": "um",
          "c": "det",
          "punct": ""
        },
        {
          "text": "problema",
          "c": "n",
          "punct": ","
        },
        {
          "text": "podemos",
          "c": "v",
          "punct": ""
        },
        {
          "text": "resolvê-lo",
          "c": "v",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "Although there is a problem, we can solve it.",
      "tokens": [
        {
          "text": "Although",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "there",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "is",
          "c": "v",
          "punct": ""
        },
        {
          "text": "a",
          "c": "det",
          "punct": ""
        },
        {
          "text": "problem",
          "c": "n",
          "punct": ","
        },
        {
          "text": "we",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "can",
          "c": "v",
          "punct": ""
        },
        {
          "text": "solve",
          "c": "v",
          "punct": ""
        },
        {
          "text": "it",
          "c": "pro",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "虽然有问题，但是我们可以解决。",
      "tokens": [
        {
          "text": "虽然",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "有",
          "c": "v",
          "punct": ""
        },
        {
          "text": "问题",
          "c": "n",
          "punct": "，"
        },
        {
          "text": "但是",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "我们",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "可以",
          "c": "v",
          "punct": ""
        },
        {
          "text": "解决",
          "c": "v",
          "punct": "。"
        }
      ]
    },
    "topicId": "work"
  },
  {
    "id": "elo-035",
    "level": "B2",
    "topic": "Trabalho e negócios",
    "title": "Queda nas vendas",
    "pinyin": "xiao1 shou4 e2 da4 fu2 xia4 jiang4 le5",
    "natural": "Sales have declined considerably.",
    "phonetic": "SÊILZ hav di-KLÁIND kan-SÍ-da-ra-bli",
    "features": [
      "Formas fracas",
      "Ritmo"
    ],
    "speech": "Have pode enfraquecer; declined termina em /nd/. O destaque em considerably comunica a intensidade.",
    "compare": "PT/EN podem colocar intensidade após o verbo; 大幅 vem antes de 下降. 销售额 especifica valor das vendas.",
    "literal": "Valor das vendas + consideravelmente + cair + aspecto.",
    "pt": {
      "text": "As vendas caíram consideravelmente.",
      "tokens": [
        {
          "text": "As",
          "c": "det",
          "punct": ""
        },
        {
          "text": "vendas",
          "c": "n",
          "punct": ""
        },
        {
          "text": "caíram",
          "c": "v",
          "punct": ""
        },
        {
          "text": "consideravelmente",
          "c": "adv",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "Sales have declined considerably.",
      "tokens": [
        {
          "text": "Sales",
          "c": "n",
          "punct": ""
        },
        {
          "text": "have",
          "c": "v",
          "punct": ""
        },
        {
          "text": "declined",
          "c": "v",
          "punct": ""
        },
        {
          "text": "considerably",
          "c": "adv",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "销售额大幅下降了。",
      "tokens": [
        {
          "text": "销售额",
          "c": "n",
          "punct": ""
        },
        {
          "text": "大幅",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "下降",
          "c": "v",
          "punct": ""
        },
        {
          "text": "了",
          "c": "part",
          "punct": "。"
        }
      ]
    },
    "topicId": "work"
  },
  {
    "id": "elo-036",
    "level": "B2",
    "topic": "Trabalho e negócios",
    "title": "Prazo até sexta-feira",
    "pinyin": "wo3 men5 xu1 yao4 zai4 xing1 qi1 wu3 zhi1 qian2 wan2 cheng2 zhe4 xiang4 gong1 zuo4",
    "natural": "We need to finish this by Friday.",
    "phonetic": "ui NÍID ta FÍ-nish dhis bai FRÁI-dei",
    "features": [
      "Formas fracas"
    ],
    "speech": "To no infinitivo pode soar /tə/. By é /baɪ/ e indica prazo-limite, não duração.",
    "compare": "EN deixa o prazo no final; ZH coloca 在星期五之前 antes de 完成. A versão chinesa explicita a tarefa.",
    "literal": "Nós + precisamos + em + sexta-feira + antes + concluir + esta + tarefa.",
    "pt": {
      "text": "Precisamos concluir isso até sexta-feira.",
      "tokens": [
        {
          "text": "Precisamos",
          "c": "v",
          "punct": ""
        },
        {
          "text": "concluir",
          "c": "v",
          "punct": ""
        },
        {
          "text": "isso",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "até",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "sexta-feira",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "We need to finish this by Friday.",
      "tokens": [
        {
          "text": "We",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "need",
          "c": "v",
          "punct": ""
        },
        {
          "text": "to",
          "c": "part",
          "punct": ""
        },
        {
          "text": "finish",
          "c": "v",
          "punct": ""
        },
        {
          "text": "this",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "by",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "Friday",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我们需要在星期五之前完成这项工作。",
      "tokens": [
        {
          "text": "我们",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "需要",
          "c": "v",
          "punct": ""
        },
        {
          "text": "在",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "星期五",
          "c": "n",
          "punct": ""
        },
        {
          "text": "之前",
          "c": "loc",
          "punct": ""
        },
        {
          "text": "完成",
          "c": "v",
          "punct": ""
        },
        {
          "text": "这",
          "c": "det",
          "punct": ""
        },
        {
          "text": "项",
          "c": "clf",
          "punct": ""
        },
        {
          "text": "工作",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "work"
  },
  {
    "id": "elo-037",
    "level": "B2",
    "topic": "Trabalho e negócios",
    "title": "Esperar confirmação",
    "pinyin": "wo3 men5 zheng4 zai4 deng3 gong1 ying4 shang1 que4 ren4",
    "natural": "We're waiting for the supplier to confirm.",
    "phonetic": "uir UÊIɾing fer dha sa-PLÁI-er ta kan-FÂRM",
    "features": [
      "Contração",
      "Flapping",
      "Formas fracas"
    ],
    "speech": "We are → we're; waiting pode ter [ɾ] no americano; for e to perdem força.",
    "compare": "PT usa confirmação como nome; EN e ZH podem explicitar o fornecedor como quem confirma. 正在 indica ação em andamento.",
    "literal": "Nós + em andamento + esperar + fornecedor + confirmar.",
    "pt": {
      "text": "Estamos esperando a confirmação do fornecedor.",
      "tokens": [
        {
          "text": "Estamos",
          "c": "v",
          "punct": ""
        },
        {
          "text": "esperando",
          "c": "v",
          "punct": ""
        },
        {
          "text": "a",
          "c": "det",
          "punct": ""
        },
        {
          "text": "confirmação",
          "c": "n",
          "punct": ""
        },
        {
          "text": "do",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "fornecedor",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "We are waiting for the supplier to confirm.",
      "tokens": [
        {
          "text": "We",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "are",
          "c": "v",
          "punct": ""
        },
        {
          "text": "waiting",
          "c": "v",
          "punct": ""
        },
        {
          "text": "for",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "the",
          "c": "det",
          "punct": ""
        },
        {
          "text": "supplier",
          "c": "n",
          "punct": ""
        },
        {
          "text": "to",
          "c": "part",
          "punct": ""
        },
        {
          "text": "confirm",
          "c": "v",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我们正在等供应商确认。",
      "tokens": [
        {
          "text": "我们",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "正在",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "等",
          "c": "v",
          "punct": ""
        },
        {
          "text": "供应商",
          "c": "n",
          "punct": ""
        },
        {
          "text": "确认",
          "c": "v",
          "punct": "。"
        }
      ]
    },
    "topicId": "work"
  },
  {
    "id": "elo-038",
    "level": "B2",
    "topic": "Trabalho e negócios",
    "title": "Revisar antes de enviar",
    "pinyin": "wo3 men5 xian1 he2 dui4 xi4 jie2 zai4 fa1 bao4 gao4",
    "natural": "Let's review the details before we send the report.",
    "phonetic": "lets ri-VIÚU dha DÍI-teils bi-FÓR ui SÉND dha ri-PÓRT",
    "features": [
      "Contração",
      "Formas fracas"
    ],
    "speech": "Let us → let's; os dois the tendem a /ðə/. Dê destaque às ações review e send.",
    "compare": "EN conecta com before; ZH organiza a sequência com 先…再…, primeiro e depois. São estratégias equivalentes, não cópia literal.",
    "literal": "Nós + primeiro + conferir + detalhes + depois + enviar + relatório.",
    "pt": {
      "text": "Vamos revisar os detalhes antes de enviar o relatório.",
      "tokens": [
        {
          "text": "Vamos",
          "c": "v",
          "punct": ""
        },
        {
          "text": "revisar",
          "c": "v",
          "punct": ""
        },
        {
          "text": "os",
          "c": "det",
          "punct": ""
        },
        {
          "text": "detalhes",
          "c": "n",
          "punct": ""
        },
        {
          "text": "antes",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "de",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "enviar",
          "c": "v",
          "punct": ""
        },
        {
          "text": "o",
          "c": "det",
          "punct": ""
        },
        {
          "text": "relatório",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "Let us review the details before we send the report.",
      "tokens": [
        {
          "text": "Let",
          "c": "v",
          "punct": ""
        },
        {
          "text": "us",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "review",
          "c": "v",
          "punct": ""
        },
        {
          "text": "the",
          "c": "det",
          "punct": ""
        },
        {
          "text": "details",
          "c": "n",
          "punct": ""
        },
        {
          "text": "before",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "we",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "send",
          "c": "v",
          "punct": ""
        },
        {
          "text": "the",
          "c": "det",
          "punct": ""
        },
        {
          "text": "report",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我们先核对细节，再发报告。",
      "tokens": [
        {
          "text": "我们",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "先",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "核对",
          "c": "v",
          "punct": ""
        },
        {
          "text": "细节",
          "c": "n",
          "punct": "，"
        },
        {
          "text": "再",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "发",
          "c": "v",
          "punct": ""
        },
        {
          "text": "报告",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "work"
  },
  {
    "id": "elo-039",
    "level": "B2",
    "topic": "Trabalho e negócios",
    "title": "Preços oscilando",
    "pinyin": "jia4 ge2 bo1 dong4 hen3 da4",
    "natural": "Prices are fluctuating widely.",
    "phonetic": "PRÁI-siz ar FLÂK-tchu-êiɾing UÁID-li",
    "features": [
      "Linking",
      "Flapping"
    ],
    "speech": "Ligue prices‿are; no americano, o t de -ating pode virar [ɾ]. A sílaba forte de fluctuating é a primeira.",
    "compare": "EN usa advérbio para caracterizar a oscilação; ZH avalia a amplitude com 很大. Preço não precisa de marca explícita de plural.",
    "literal": "Preço + oscilar + muito + grande.",
    "pt": {
      "text": "Os preços estão oscilando bastante.",
      "tokens": [
        {
          "text": "Os",
          "c": "det",
          "punct": ""
        },
        {
          "text": "preços",
          "c": "n",
          "punct": ""
        },
        {
          "text": "estão",
          "c": "v",
          "punct": ""
        },
        {
          "text": "oscilando",
          "c": "v",
          "punct": ""
        },
        {
          "text": "bastante",
          "c": "adv",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "Prices are fluctuating widely.",
      "tokens": [
        {
          "text": "Prices",
          "c": "n",
          "punct": ""
        },
        {
          "text": "are",
          "c": "v",
          "punct": ""
        },
        {
          "text": "fluctuating",
          "c": "v",
          "punct": ""
        },
        {
          "text": "widely",
          "c": "adv",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "价格波动很大。",
      "tokens": [
        {
          "text": "价格",
          "c": "n",
          "punct": ""
        },
        {
          "text": "波动",
          "c": "v",
          "punct": ""
        },
        {
          "text": "很",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "大",
          "c": "adj",
          "punct": "。"
        }
      ]
    },
    "topicId": "work"
  },
  {
    "id": "elo-040",
    "level": "B2",
    "topic": "Trabalho e negócios",
    "title": "Mudar o plano se necessário",
    "pinyin": "ru2 guo3 you3 bi4 yao4 wo3 men5 ke3 yi3 tiao2 zheng3 ji4 hua4",
    "natural": "If necessary, we can adjust the plan.",
    "phonetic": "if NÉ-sa-sé-ri, ui kan‿a-DJÂST dha PLÉN",
    "features": [
      "Linking",
      "Formas fracas"
    ],
    "speech": "Can adjust → can‿adjust, com can fraco. The perde destaque antes de plan.",
    "compare": "PT/EN abreviam se for necessário; ZH usa 有必要, haver necessidade. Ajustar o plano é 调整计划.",
    "literal": "Se + houver + necessidade + nós + podemos + ajustar + plano.",
    "pt": {
      "text": "Se necessário, podemos ajustar o plano.",
      "tokens": [
        {
          "text": "Se",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "necessário",
          "c": "adj",
          "punct": ","
        },
        {
          "text": "podemos",
          "c": "v",
          "punct": ""
        },
        {
          "text": "ajustar",
          "c": "v",
          "punct": ""
        },
        {
          "text": "o",
          "c": "det",
          "punct": ""
        },
        {
          "text": "plano",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "If necessary, we can adjust the plan.",
      "tokens": [
        {
          "text": "If",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "necessary",
          "c": "adj",
          "punct": ","
        },
        {
          "text": "we",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "can",
          "c": "v",
          "punct": ""
        },
        {
          "text": "adjust",
          "c": "v",
          "punct": ""
        },
        {
          "text": "the",
          "c": "det",
          "punct": ""
        },
        {
          "text": "plan",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "如果有必要，我们可以调整计划。",
      "tokens": [
        {
          "text": "如果",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "有",
          "c": "v",
          "punct": ""
        },
        {
          "text": "必要",
          "c": "n",
          "punct": "，"
        },
        {
          "text": "我们",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "可以",
          "c": "v",
          "punct": ""
        },
        {
          "text": "调整",
          "c": "v",
          "punct": ""
        },
        {
          "text": "计划",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "work"
  },
  {
    "id": "elo-041",
    "level": "C1",
    "topic": "Relações e comunicação",
    "title": "Discordar com cuidado",
    "pinyin": "zhe4 he2 wo3 yu4 qi1 de5 bu2 tai4 yi2 yang4",
    "natural": "It's not quite what I expected.",
    "phonetic": "its nóʔ KUAIT uót‿ai ik-SPÉK-tid",
    "features": [
      "Glottalization",
      "Linking"
    ],
    "speech": "Variante britânica: o t de not antes de /k/ pode ser [ʔ]. Not quite → noʔ quite. Essa parada não é obrigatória em todos os sotaques.",
    "compare": "Not quite e 不太 suavizam a discordância. 和 introduz a comparação em ZH, e 的 recupera aquilo que se esperava.",
    "literal": "Isto + com + eu + esperar + nominalização + não + muito + igual.",
    "pt": {
      "text": "Não é exatamente o que eu esperava.",
      "tokens": [
        {
          "text": "Não",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "é",
          "c": "v",
          "punct": ""
        },
        {
          "text": "exatamente",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "o",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "que",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "eu",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "esperava",
          "c": "v",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "It is not quite what I expected.",
      "tokens": [
        {
          "text": "It",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "is",
          "c": "v",
          "punct": ""
        },
        {
          "text": "not",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "quite",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "what",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "expected",
          "c": "v",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "这和我预期的不太一样。",
      "tokens": [
        {
          "text": "这",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "和",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "预期",
          "c": "v",
          "punct": ""
        },
        {
          "text": "的",
          "c": "part",
          "punct": ""
        },
        {
          "text": "不",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "太",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "一样",
          "c": "adj",
          "punct": "。"
        }
      ]
    },
    "topicId": "people"
  },
  {
    "id": "elo-042",
    "level": "C1",
    "topic": "Relações e comunicação",
    "title": "Condição irreal no passado",
    "pinyin": "ru2 guo3 wo3 zao3 zhi1 dao4 jiu4 hui4 deng3 yi2 xia4",
    "natural": "If I'd known, I'd have waited.",
    "phonetic": "if aid NÔUN, aid-av UÊIɾid",
    "features": [
      "Contração",
      "Formas fracas",
      "Flapping"
    ],
    "speech": "O primeiro I'd = I had; o segundo = I would. I'd have pode soar /aɪdəv/. Waited pode ter [ɾ].",
    "compare": "EN marca a condição irreal com had known e would have; ZH usa 早知道 e o contexto, sem essas flexões verbais.",
    "literal": "Se + eu + antes + soubesse + então + teria + esperado + um pouco.",
    "pt": {
      "text": "Se eu soubesse, teria esperado.",
      "tokens": [
        {
          "text": "Se",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "eu",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "soubesse",
          "c": "v",
          "punct": ","
        },
        {
          "text": "teria",
          "c": "v",
          "punct": ""
        },
        {
          "text": "esperado",
          "c": "v",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "If I had known, I would have waited.",
      "tokens": [
        {
          "text": "If",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "had",
          "c": "v",
          "punct": ""
        },
        {
          "text": "known",
          "c": "v",
          "punct": ","
        },
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "would",
          "c": "v",
          "punct": ""
        },
        {
          "text": "have",
          "c": "v",
          "punct": ""
        },
        {
          "text": "waited",
          "c": "v",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "如果我早知道，就会等一下。",
      "tokens": [
        {
          "text": "如果",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "早",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "知道",
          "c": "v",
          "punct": "，"
        },
        {
          "text": "就",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "会",
          "c": "v",
          "punct": ""
        },
        {
          "text": "等",
          "c": "v",
          "punct": ""
        },
        {
          "text": "一下",
          "c": "adv",
          "punct": "。"
        }
      ]
    },
    "topicId": "people"
  },
  {
    "id": "elo-043",
    "level": "C1",
    "topic": "Compras e dinheiro",
    "title": "Preço e qualidade",
    "pinyin": "wo3 men5 bu4 jin3 kao3 lv4 jia4 ge2 hai2 zhong4 shi4 zhi4 liang4",
    "natural": "We not only consider price but also value quality.",
    "phonetic": "ui nat ÔUN-li kan-SÍ-der PRÁIS bat‿ÓL-sou VÉ-liu KUÓ-laɾi",
    "features": [
      "Linking",
      "Flapping"
    ],
    "speech": "But + also liga t à vogal; quality pode ter [ɾ] no americano. O destaque alterna price e quality.",
    "compare": "Not only…but also e 不仅…还… ampliam o argumento. Em ZH, 考虑 e 重视 são escolhas lexicais diferentes, como considerar e valorizar.",
    "literal": "Nós + não apenas + considerar + preço + também + valorizar + qualidade.",
    "pt": {
      "text": "Não consideramos apenas o preço; também valorizamos a qualidade.",
      "tokens": [
        {
          "text": "Não",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "consideramos",
          "c": "v",
          "punct": ""
        },
        {
          "text": "apenas",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "o",
          "c": "det",
          "punct": ""
        },
        {
          "text": "preço",
          "c": "n",
          "punct": ";"
        },
        {
          "text": "também",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "valorizamos",
          "c": "v",
          "punct": ""
        },
        {
          "text": "a",
          "c": "det",
          "punct": ""
        },
        {
          "text": "qualidade",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "We not only consider price but also value quality.",
      "tokens": [
        {
          "text": "We",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "not",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "only",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "consider",
          "c": "v",
          "punct": ""
        },
        {
          "text": "price",
          "c": "n",
          "punct": ""
        },
        {
          "text": "but",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "also",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "value",
          "c": "v",
          "punct": ""
        },
        {
          "text": "quality",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我们不仅考虑价格，还重视质量。",
      "tokens": [
        {
          "text": "我们",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "不仅",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "考虑",
          "c": "v",
          "punct": ""
        },
        {
          "text": "价格",
          "c": "n",
          "punct": "，"
        },
        {
          "text": "还",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "重视",
          "c": "v",
          "punct": ""
        },
        {
          "text": "质量",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "shopping"
  },
  {
    "id": "elo-044",
    "level": "C1",
    "topic": "Trabalho e negócios",
    "title": "Superar expectativas",
    "pinyin": "jie2 guo3 bi3 wo3 men5 yu4 qi1 de5 geng4 hao3",
    "natural": "The result was better than we'd expected.",
    "phonetic": "dha ri-ZÂLT waz BÉɾer dhan uid‿ik-SPÉK-tid",
    "features": [
      "Contração",
      "Flapping",
      "Linking"
    ],
    "speech": "We had → we'd; ligue we'd‿expected. Better pode ter [ɾ]. Had marca a expectativa anterior ao resultado.",
    "compare": "比 introduz a referência antes de 更好. EN compara com uma oração; ZH usa 的 para nominalizar a expectativa.",
    "literal": "Resultado + comparado a + nós + esperar + nominalização + mais + bom.",
    "pt": {
      "text": "O resultado foi melhor do que esperávamos.",
      "tokens": [
        {
          "text": "O",
          "c": "det",
          "punct": ""
        },
        {
          "text": "resultado",
          "c": "n",
          "punct": ""
        },
        {
          "text": "foi",
          "c": "v",
          "punct": ""
        },
        {
          "text": "melhor",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "do",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "que",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "esperávamos",
          "c": "v",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "The result was better than we had expected.",
      "tokens": [
        {
          "text": "The",
          "c": "det",
          "punct": ""
        },
        {
          "text": "result",
          "c": "n",
          "punct": ""
        },
        {
          "text": "was",
          "c": "v",
          "punct": ""
        },
        {
          "text": "better",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "than",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "we",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "had",
          "c": "v",
          "punct": ""
        },
        {
          "text": "expected",
          "c": "v",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "结果比我们预期的更好。",
      "tokens": [
        {
          "text": "结果",
          "c": "n",
          "punct": ""
        },
        {
          "text": "比",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "我们",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "预期",
          "c": "v",
          "punct": ""
        },
        {
          "text": "的",
          "c": "part",
          "punct": ""
        },
        {
          "text": "更",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "好",
          "c": "adj",
          "punct": "。"
        }
      ]
    },
    "topicId": "work"
  },
  {
    "id": "elo-045",
    "level": "C1",
    "topic": "Natureza e clima",
    "title": "Esclarecer o objetivo",
    "pinyin": "mu4 di4 bu2 shi4 xue1 jian3 cheng2 ben3 er2 shi4 jian3 shao3 lang4 fei4",
    "natural": "The goal isn't to cut costs but to reduce waste.",
    "phonetic": "dha GÔUL Í-zant ta KÂT KÓSTS bat ta ri-DÚUS UÊIST",
    "features": [
      "Contração",
      "Formas fracas"
    ],
    "speech": "Is not → isn't; to pode soar /tə/ nas duas ocorrências. O contraste principal está em costs e waste.",
    "compare": "PT/EN usam não…mas; ZH tem 不是…而是… para corrigir o enquadramento. 目的 é objetivo, não pessoa.",
    "literal": "Objetivo + não + ser + cortar + custos + mas sim + reduzir + desperdício.",
    "pt": {
      "text": "O objetivo não é cortar custos, mas reduzir desperdício.",
      "tokens": [
        {
          "text": "O",
          "c": "det",
          "punct": ""
        },
        {
          "text": "objetivo",
          "c": "n",
          "punct": ""
        },
        {
          "text": "não",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "é",
          "c": "v",
          "punct": ""
        },
        {
          "text": "cortar",
          "c": "v",
          "punct": ""
        },
        {
          "text": "custos",
          "c": "n",
          "punct": ","
        },
        {
          "text": "mas",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "reduzir",
          "c": "v",
          "punct": ""
        },
        {
          "text": "desperdício",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "The goal is not to cut costs but to reduce waste.",
      "tokens": [
        {
          "text": "The",
          "c": "det",
          "punct": ""
        },
        {
          "text": "goal",
          "c": "n",
          "punct": ""
        },
        {
          "text": "is",
          "c": "v",
          "punct": ""
        },
        {
          "text": "not",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "to",
          "c": "part",
          "punct": ""
        },
        {
          "text": "cut",
          "c": "v",
          "punct": ""
        },
        {
          "text": "costs",
          "c": "n",
          "punct": ""
        },
        {
          "text": "but",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "to",
          "c": "part",
          "punct": ""
        },
        {
          "text": "reduce",
          "c": "v",
          "punct": ""
        },
        {
          "text": "waste",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "目的不是削减成本，而是减少浪费。",
      "tokens": [
        {
          "text": "目的",
          "c": "n",
          "punct": ""
        },
        {
          "text": "不",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "是",
          "c": "v",
          "punct": ""
        },
        {
          "text": "削减",
          "c": "v",
          "punct": ""
        },
        {
          "text": "成本",
          "c": "n",
          "punct": "，"
        },
        {
          "text": "而是",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "减少",
          "c": "v",
          "punct": ""
        },
        {
          "text": "浪费",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "nature"
  },
  {
    "id": "elo-046",
    "level": "C1",
    "topic": "Trabalho e negócios",
    "title": "Impedir um erro",
    "pinyin": "yao4 bu2 shi4 ni3 bang1 mang2 wo3 men5 jiu4 hui4 cuo4 guo4 jie2 zhi3 ri4 qi1",
    "natural": "Without your help, we'd have missed the deadline.",
    "phonetic": "ui-DHÁUT yer HÉLP, uid-av MÍST dha DÉD-lain",
    "features": [
      "Contração",
      "Formas fracas"
    ],
    "speech": "We would → we'd; we'd have → /wiːdəv/. Your pode perder destaque. Não escreva would of.",
    "compare": "PT e ZH formulam uma condição negativa; EN compacta a condição em without your help. O resultado passado irreal vem do contexto e do modal.",
    "literal": "Se não fosse + você + ajudar + nós + então + teríamos + perdido + prazo.",
    "pt": {
      "text": "Se não fosse sua ajuda, teríamos perdido o prazo.",
      "tokens": [
        {
          "text": "Se",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "não",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "fosse",
          "c": "v",
          "punct": ""
        },
        {
          "text": "sua",
          "c": "det",
          "punct": ""
        },
        {
          "text": "ajuda",
          "c": "n",
          "punct": ","
        },
        {
          "text": "teríamos",
          "c": "v",
          "punct": ""
        },
        {
          "text": "perdido",
          "c": "v",
          "punct": ""
        },
        {
          "text": "o",
          "c": "det",
          "punct": ""
        },
        {
          "text": "prazo",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "Without your help, we would have missed the deadline.",
      "tokens": [
        {
          "text": "Without",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "your",
          "c": "det",
          "punct": ""
        },
        {
          "text": "help",
          "c": "n",
          "punct": ","
        },
        {
          "text": "we",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "would",
          "c": "v",
          "punct": ""
        },
        {
          "text": "have",
          "c": "v",
          "punct": ""
        },
        {
          "text": "missed",
          "c": "v",
          "punct": ""
        },
        {
          "text": "the",
          "c": "det",
          "punct": ""
        },
        {
          "text": "deadline",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "要不是你帮忙，我们就会错过截止日期。",
      "tokens": [
        {
          "text": "要不是",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "你",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "帮忙",
          "c": "v",
          "punct": "，"
        },
        {
          "text": "我们",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "就",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "会",
          "c": "v",
          "punct": ""
        },
        {
          "text": "错过",
          "c": "v",
          "punct": ""
        },
        {
          "text": "截止日期",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "work"
  },
  {
    "id": "elo-047",
    "level": "C1",
    "topic": "Sociedade e ideias",
    "title": "Separar correlação e causa",
    "pinyin": "zhe4 xie1 shu4 ju4 biao3 ming2 cun2 zai4 guan1 lian2 dan4 bu4 neng2 zheng4 ming2 yin1 guo3 guan1 xi5",
    "natural": "These data suggest a relationship but don't establish causation.",
    "phonetic": "dhíiz DÊIɾa sa-DJÉST‿a ri-LÊI-shan-ship bat dôunt‿i-STÉ-blish ko-ZÊI-shan",
    "features": [
      "Contração",
      "Linking"
    ],
    "speech": "Do not → don't; suggest‿a e don't‿establish conectam consoante e vogal. Data tem mais de uma pronúncia aceita.",
    "compare": "EN diferencia suggest de establish; ZH contrasta 表明存在 e 不能证明. A escolha verbal calibra a força da conclusão.",
    "literal": "Estes + dados + indicam + existir + relação + mas + não + poder + provar + causalidade.",
    "pt": {
      "text": "Esses dados sugerem uma relação, mas não comprovam causalidade.",
      "tokens": [
        {
          "text": "Esses",
          "c": "det",
          "punct": ""
        },
        {
          "text": "dados",
          "c": "n",
          "punct": ""
        },
        {
          "text": "sugerem",
          "c": "v",
          "punct": ""
        },
        {
          "text": "uma",
          "c": "det",
          "punct": ""
        },
        {
          "text": "relação",
          "c": "n",
          "punct": ","
        },
        {
          "text": "mas",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "não",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "comprovam",
          "c": "v",
          "punct": ""
        },
        {
          "text": "causalidade",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "These data suggest a relationship but do not establish causation.",
      "tokens": [
        {
          "text": "These",
          "c": "det",
          "punct": ""
        },
        {
          "text": "data",
          "c": "n",
          "punct": ""
        },
        {
          "text": "suggest",
          "c": "v",
          "punct": ""
        },
        {
          "text": "a",
          "c": "det",
          "punct": ""
        },
        {
          "text": "relationship",
          "c": "n",
          "punct": ""
        },
        {
          "text": "but",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "do",
          "c": "v",
          "punct": ""
        },
        {
          "text": "not",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "establish",
          "c": "v",
          "punct": ""
        },
        {
          "text": "causation",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "这些数据表明存在关联，但不能证明因果关系。",
      "tokens": [
        {
          "text": "这些",
          "c": "det",
          "punct": ""
        },
        {
          "text": "数据",
          "c": "n",
          "punct": ""
        },
        {
          "text": "表明",
          "c": "v",
          "punct": ""
        },
        {
          "text": "存在",
          "c": "v",
          "punct": ""
        },
        {
          "text": "关联",
          "c": "n",
          "punct": "，"
        },
        {
          "text": "但",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "不",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "能",
          "c": "v",
          "punct": ""
        },
        {
          "text": "证明",
          "c": "v",
          "punct": ""
        },
        {
          "text": "因果关系",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "society"
  },
  {
    "id": "elo-048",
    "level": "C1",
    "topic": "Relações e comunicação",
    "title": "Reconhecer uma objeção",
    "pinyin": "wo3 li3 jie3 ni3 de5 gu4 lv4 dan4 bu4 tong2 yi4 zhe4 ge5 jie2 lun4",
    "natural": "I understand your concern, although I disagree with the conclusion.",
    "phonetic": "ai an-der-STÉND yer kan-SÂRN, ol-DHÔU‿ai dis-a-GRÍI uidh dha kan-KLÚU-zhan",
    "features": [
      "Formas fracas",
      "Linking"
    ],
    "speech": "Your pode ser fraco; although‿I liga vogais sem uma pausa artificial. O grupo with the contém dois sons dentais próximos.",
    "compare": "PT/EN usam concessão explícita; ZH usa contraste com 但. 理解 não significa concordar: compreensão e concordância são verbos distintos.",
    "literal": "Eu + compreender + você + posse + preocupação + mas + não + concordar + esta + conclusão.",
    "pt": {
      "text": "Eu entendo sua preocupação, embora discorde da conclusão.",
      "tokens": [
        {
          "text": "Eu",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "entendo",
          "c": "v",
          "punct": ""
        },
        {
          "text": "sua",
          "c": "det",
          "punct": ""
        },
        {
          "text": "preocupação",
          "c": "n",
          "punct": ","
        },
        {
          "text": "embora",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "discorde",
          "c": "v",
          "punct": ""
        },
        {
          "text": "da",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "conclusão",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "I understand your concern, although I disagree with the conclusion.",
      "tokens": [
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "understand",
          "c": "v",
          "punct": ""
        },
        {
          "text": "your",
          "c": "det",
          "punct": ""
        },
        {
          "text": "concern",
          "c": "n",
          "punct": ","
        },
        {
          "text": "although",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "disagree",
          "c": "v",
          "punct": ""
        },
        {
          "text": "with",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "the",
          "c": "det",
          "punct": ""
        },
        {
          "text": "conclusion",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我理解你的顾虑，但不同意这个结论。",
      "tokens": [
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "理解",
          "c": "v",
          "punct": ""
        },
        {
          "text": "你",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "的",
          "c": "part",
          "punct": ""
        },
        {
          "text": "顾虑",
          "c": "n",
          "punct": "，"
        },
        {
          "text": "但",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "不",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "同意",
          "c": "v",
          "punct": ""
        },
        {
          "text": "这",
          "c": "det",
          "punct": ""
        },
        {
          "text": "个",
          "c": "clf",
          "punct": ""
        },
        {
          "text": "结论",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "people"
  },
  {
    "id": "elo-049",
    "level": "C1",
    "topic": "Trabalho e negócios",
    "title": "Condicionar a aprovação",
    "pinyin": "zhi3 yao4 xiu1 gai3 wan2 cheng2 wo3 men5 jiu4 ke3 yi3 pi1 zhun3",
    "natural": "We can approve it provided that the changes are completed.",
    "phonetic": "ui kan‿a-PRÚUV‿it pra-VÁI-did dhat dha TCHÊIN-djiz ar kam-PLÍIɾid",
    "features": [
      "Linking",
      "Formas fracas"
    ],
    "speech": "Can approve e approve it se ligam. Provided that é um bloco de condição; that tende a perder destaque.",
    "compare": "Provided that e 只要…就… estabelecem condição suficiente. Não equivalem a promessa incondicional.",
    "literal": "Desde que + alterações + concluir + nós + então + podemos + aprovar.",
    "pt": {
      "text": "Podemos aprovar, desde que os ajustes sejam concluídos.",
      "tokens": [
        {
          "text": "Podemos",
          "c": "v",
          "punct": ""
        },
        {
          "text": "aprovar",
          "c": "v",
          "punct": ","
        },
        {
          "text": "desde",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "que",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "os",
          "c": "det",
          "punct": ""
        },
        {
          "text": "ajustes",
          "c": "n",
          "punct": ""
        },
        {
          "text": "sejam",
          "c": "v",
          "punct": ""
        },
        {
          "text": "concluídos",
          "c": "v",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "We can approve it provided that the changes are completed.",
      "tokens": [
        {
          "text": "We",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "can",
          "c": "v",
          "punct": ""
        },
        {
          "text": "approve",
          "c": "v",
          "punct": ""
        },
        {
          "text": "it",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "provided",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "that",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "the",
          "c": "det",
          "punct": ""
        },
        {
          "text": "changes",
          "c": "n",
          "punct": ""
        },
        {
          "text": "are",
          "c": "v",
          "punct": ""
        },
        {
          "text": "completed",
          "c": "v",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "只要修改完成，我们就可以批准。",
      "tokens": [
        {
          "text": "只要",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "修改",
          "c": "n",
          "punct": ""
        },
        {
          "text": "完成",
          "c": "v",
          "punct": "，"
        },
        {
          "text": "我们",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "就",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "可以",
          "c": "v",
          "punct": ""
        },
        {
          "text": "批准",
          "c": "v",
          "punct": "。"
        }
      ]
    },
    "topicId": "work"
  },
  {
    "id": "elo-050",
    "level": "C1",
    "topic": "Sociedade e ideias",
    "title": "Priorizar a precisão",
    "pinyin": "fen1 xi1 yue4 xiang2 xi4 jue2 ce4 jiu4 yue4 ke3 kao4",
    "natural": "The more detailed the analysis, the more reliable the decision.",
    "phonetic": "dha mor di-TÊILD dhi a-NÉ-la-sis, dha mor ri-LÁI-a-bol dha di-SÍ-zhan",
    "features": [
      "Formas fracas",
      "Linking"
    ],
    "speech": "Em the analysis, the pode ter /ði/ antes da vogal; nas outras ocorrências, geralmente /ðə/. Compare os dois grupos rítmicos.",
    "compare": "The inicial de cada comparativo tem função adverbial, diferente do artigo em the analysis. 越…越… expressa variação correlacionada.",
    "literal": "Análise + quanto mais + detalhada + decisão + então + mais + confiável.",
    "pt": {
      "text": "Quanto mais detalhada a análise, mais confiável a decisão.",
      "tokens": [
        {
          "text": "Quanto",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "mais",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "detalhada",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "a",
          "c": "det",
          "punct": ""
        },
        {
          "text": "análise",
          "c": "n",
          "punct": ","
        },
        {
          "text": "mais",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "confiável",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "a",
          "c": "det",
          "punct": ""
        },
        {
          "text": "decisão",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "The more detailed the analysis, the more reliable the decision.",
      "tokens": [
        {
          "text": "The",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "more",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "detailed",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "the",
          "c": "det",
          "punct": ""
        },
        {
          "text": "analysis",
          "c": "n",
          "punct": ","
        },
        {
          "text": "the",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "more",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "reliable",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "the",
          "c": "det",
          "punct": ""
        },
        {
          "text": "decision",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "分析越详细，决策就越可靠。",
      "tokens": [
        {
          "text": "分析",
          "c": "n",
          "punct": ""
        },
        {
          "text": "越",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "详细",
          "c": "adj",
          "punct": "，"
        },
        {
          "text": "决策",
          "c": "n",
          "punct": ""
        },
        {
          "text": "就",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "越",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "可靠",
          "c": "adj",
          "punct": "。"
        }
      ]
    },
    "topicId": "society"
  },
  {
    "id": "elo-051",
    "level": "C2",
    "topic": "Sociedade e ideias",
    "title": "Evitar uma conclusão precoce",
    "pinyin": "jin3 ping2 zhe4 xie1 shu4 ju4 jiu4 xia4 jie2 lun4 wei2 shi2 guo4 zao3",
    "natural": "It would be premature to draw conclusions from these data.",
    "phonetic": "it uad bi pri-ma-TCHÚR ta DRÓ kan-KLÚU-zhanz fram dhíiz DÊIɾa",
    "features": [
      "Formas fracas",
      "Flapping"
    ],
    "speech": "Would, to e from podem enfraquecer; data pode ter [ɾ] no americano. Draw conclusions é uma combinação a aprender inteira.",
    "compare": "EN usa sujeito antecipador it; ZH antepõe a ação avaliada e encerra com 为时过早. Atividade avançada: calibrar cautela, não apenas traduzir palavras.",
    "literal": "Somente com base em + estes + dados + já + tirar + conclusão + ser prematuro.",
    "pt": {
      "text": "Seria prematuro tirar conclusões com base nesses dados.",
      "tokens": [
        {
          "text": "Seria",
          "c": "v",
          "punct": ""
        },
        {
          "text": "prematuro",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "tirar",
          "c": "v",
          "punct": ""
        },
        {
          "text": "conclusões",
          "c": "n",
          "punct": ""
        },
        {
          "text": "com",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "base",
          "c": "n",
          "punct": ""
        },
        {
          "text": "nesses",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "dados",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "It would be premature to draw conclusions from these data.",
      "tokens": [
        {
          "text": "It",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "would",
          "c": "v",
          "punct": ""
        },
        {
          "text": "be",
          "c": "v",
          "punct": ""
        },
        {
          "text": "premature",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "to",
          "c": "part",
          "punct": ""
        },
        {
          "text": "draw",
          "c": "v",
          "punct": ""
        },
        {
          "text": "conclusions",
          "c": "n",
          "punct": ""
        },
        {
          "text": "from",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "these",
          "c": "det",
          "punct": ""
        },
        {
          "text": "data",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "仅凭这些数据就下结论，为时过早。",
      "tokens": [
        {
          "text": "仅",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "凭",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "这些",
          "c": "det",
          "punct": ""
        },
        {
          "text": "数据",
          "c": "n",
          "punct": ""
        },
        {
          "text": "就",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "下",
          "c": "v",
          "punct": ""
        },
        {
          "text": "结论",
          "c": "n",
          "punct": "，"
        },
        {
          "text": "为时过早",
          "c": "adj",
          "punct": "。"
        }
      ]
    },
    "topicId": "society"
  },
  {
    "id": "elo-052",
    "level": "C2",
    "topic": "Trabalho e negócios",
    "title": "Retomar o foco",
    "pinyin": "ji2 bian4 ru2 ci3 wo3 men5 reng2 ran2 xu1 yao4 yi2 ge4 ke3 xing2 de5 ji4 hua4",
    "natural": "Be that as it may, we still need a workable plan.",
    "phonetic": "bi dhét‿az it MÊI, ui stil NÍID‿a UÂR-ka-bol PLÉN",
    "features": [
      "Linking",
      "Formas fracas"
    ],
    "speech": "That‿as e need‿a se ligam; as pode soar /əz/. A primeira expressão constitui uma unidade de concessão.",
    "compare": "Be that as it may e 即便如此 retomam um argumento anterior. 可行的计划 põe a descrição antes do nome; PT normalmente usa plano viável.",
    "literal": "Mesmo que + assim + nós + ainda + precisar + um + classificador + viável + ligação + plano.",
    "pt": {
      "text": "Seja como for, ainda precisamos de um plano viável.",
      "tokens": [
        {
          "text": "Seja",
          "c": "v",
          "punct": ""
        },
        {
          "text": "como",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "for",
          "c": "v",
          "punct": ","
        },
        {
          "text": "ainda",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "precisamos",
          "c": "v",
          "punct": ""
        },
        {
          "text": "de",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "um",
          "c": "det",
          "punct": ""
        },
        {
          "text": "plano",
          "c": "n",
          "punct": ""
        },
        {
          "text": "viável",
          "c": "adj",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "Be that as it may, we still need a workable plan.",
      "tokens": [
        {
          "text": "Be",
          "c": "v",
          "punct": ""
        },
        {
          "text": "that",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "as",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "it",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "may",
          "c": "v",
          "punct": ","
        },
        {
          "text": "we",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "still",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "need",
          "c": "v",
          "punct": ""
        },
        {
          "text": "a",
          "c": "det",
          "punct": ""
        },
        {
          "text": "workable",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "plan",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "即便如此，我们仍然需要一个可行的计划。",
      "tokens": [
        {
          "text": "即便",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "如此",
          "c": "pro",
          "punct": "，"
        },
        {
          "text": "我们",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "仍然",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "需要",
          "c": "v",
          "punct": ""
        },
        {
          "text": "一",
          "c": "num",
          "punct": ""
        },
        {
          "text": "个",
          "c": "clf",
          "punct": ""
        },
        {
          "text": "可行",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "的",
          "c": "part",
          "punct": ""
        },
        {
          "text": "计划",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "work"
  },
  {
    "id": "elo-053",
    "level": "C2",
    "topic": "Sociedade e ideias",
    "title": "Distinguir evidência e ausência",
    "pinyin": "mei2 you3 zheng4 ju4 bing4 bu4 yi4 wei4 zhe5 mei2 you3 xiao4 guo3",
    "natural": "The absence of evidence doesn't prove the absence of an effect.",
    "phonetic": "dhi ÉB-sans av É-va-dans DÂ-zant PRÚUV dhi ÉB-sans av‿an i-FÉKT",
    "features": [
      "Contração",
      "Linking",
      "Formas fracas"
    ],
    "speech": "Does not → doesn't; of an → of‿an. The antes de absence tende a /ði/. Mantenha a oposição entre evidence e effect.",
    "compare": "PT/EN nominalizam ausência; ZH usa 没有 e 意味着 para construir a relação. A tradução preserva a lógica, não o número de substantivos.",
    "literal": "Não haver + evidência + enfaticamente + não + significar + não haver + efeito.",
    "pt": {
      "text": "A ausência de evidência não prova a ausência de efeito.",
      "tokens": [
        {
          "text": "A",
          "c": "det",
          "punct": ""
        },
        {
          "text": "ausência",
          "c": "n",
          "punct": ""
        },
        {
          "text": "de",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "evidência",
          "c": "n",
          "punct": ""
        },
        {
          "text": "não",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "prova",
          "c": "v",
          "punct": ""
        },
        {
          "text": "a",
          "c": "det",
          "punct": ""
        },
        {
          "text": "ausência",
          "c": "n",
          "punct": ""
        },
        {
          "text": "de",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "efeito",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "The absence of evidence does not prove the absence of an effect.",
      "tokens": [
        {
          "text": "The",
          "c": "det",
          "punct": ""
        },
        {
          "text": "absence",
          "c": "n",
          "punct": ""
        },
        {
          "text": "of",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "evidence",
          "c": "n",
          "punct": ""
        },
        {
          "text": "does",
          "c": "v",
          "punct": ""
        },
        {
          "text": "not",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "prove",
          "c": "v",
          "punct": ""
        },
        {
          "text": "the",
          "c": "det",
          "punct": ""
        },
        {
          "text": "absence",
          "c": "n",
          "punct": ""
        },
        {
          "text": "of",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "an",
          "c": "det",
          "punct": ""
        },
        {
          "text": "effect",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "没有证据并不意味着没有效果。",
      "tokens": [
        {
          "text": "没有",
          "c": "v",
          "punct": ""
        },
        {
          "text": "证据",
          "c": "n",
          "punct": ""
        },
        {
          "text": "并",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "不",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "意味着",
          "c": "v",
          "punct": ""
        },
        {
          "text": "没有",
          "c": "v",
          "punct": ""
        },
        {
          "text": "效果",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "society"
  },
  {
    "id": "elo-054",
    "level": "C2",
    "topic": "Trabalho e negócios",
    "title": "Evitar falsa escolha",
    "pinyin": "wo3 men5 bu2 bi4 zai4 su4 du4 he2 yan2 jin3 xing4 zhi1 jian1 er4 xuan3 yi1",
    "natural": "We don't have to choose between speed and rigor.",
    "phonetic": "ui dôunt HÉF ta TCHÚUZ bi-TUÍIN SPÍID an RÍ-ger",
    "features": [
      "Contração",
      "Assimilation",
      "Elision"
    ],
    "speech": "Have to pode soar /hæf tə/: v torna-se f antes do t. And sem ênfase pode perder d: speed‿and rigor.",
    "compare": "Don't have to expressa ausência de necessidade, não proibição. 不必 tem sentido semelhante; 之间 enquadra as duas alternativas.",
    "literal": "Nós + não + precisar + entre + velocidade + e + rigor + entre + escolher uma de duas.",
    "pt": {
      "text": "Não precisamos escolher entre rapidez e rigor.",
      "tokens": [
        {
          "text": "Não",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "precisamos",
          "c": "v",
          "punct": ""
        },
        {
          "text": "escolher",
          "c": "v",
          "punct": ""
        },
        {
          "text": "entre",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "rapidez",
          "c": "n",
          "punct": ""
        },
        {
          "text": "e",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "rigor",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "We do not have to choose between speed and rigor.",
      "tokens": [
        {
          "text": "We",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "do",
          "c": "v",
          "punct": ""
        },
        {
          "text": "not",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "have",
          "c": "v",
          "punct": ""
        },
        {
          "text": "to",
          "c": "part",
          "punct": ""
        },
        {
          "text": "choose",
          "c": "v",
          "punct": ""
        },
        {
          "text": "between",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "speed",
          "c": "n",
          "punct": ""
        },
        {
          "text": "and",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "rigor",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我们不必在速度和严谨性之间二选一。",
      "tokens": [
        {
          "text": "我们",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "不",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "必",
          "c": "v",
          "punct": ""
        },
        {
          "text": "在",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "速度",
          "c": "n",
          "punct": ""
        },
        {
          "text": "和",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "严谨性",
          "c": "n",
          "punct": ""
        },
        {
          "text": "之间",
          "c": "loc",
          "punct": ""
        },
        {
          "text": "二选一",
          "c": "v",
          "punct": "。"
        }
      ]
    },
    "topicId": "work"
  },
  {
    "id": "elo-055",
    "level": "C2",
    "topic": "Sociedade e ideias",
    "title": "Rever uma premissa",
    "pinyin": "zhi3 you3 zui4 chu1 de5 jia3 she4 cheng2 li4 zhe4 ge5 jie2 lun4 cai2 zhan4 de5 zhu4 jiao3",
    "natural": "The conclusion holds only if the initial assumption is valid.",
    "phonetic": "dha kan-KLÚU-zhan HÔULDZ‿ÔUN-li if dhi i-NÍ-shal a-SÂMP-shan iz VÉ-lid",
    "features": [
      "Linking",
      "Formas fracas"
    ],
    "speech": "Holds‿only liga /z/ à vogal; the initial costuma começar /ði/. Only deve permanecer audível: ele restringe a condição.",
    "compare": "Only if e 只有…才… marcam condição necessária. Não confunda com 只要…就…, condição suficiente. 站得住脚 é expressão de sustentação argumentativa.",
    "literal": "Somente se + inicial + ligação + premissa + valer + esta + conclusão + só então + sustentar-se.",
    "pt": {
      "text": "A conclusão só se sustenta se a premissa inicial for válida.",
      "tokens": [
        {
          "text": "A",
          "c": "det",
          "punct": ""
        },
        {
          "text": "conclusão",
          "c": "n",
          "punct": ""
        },
        {
          "text": "só",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "se",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "sustenta",
          "c": "v",
          "punct": ""
        },
        {
          "text": "se",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "a",
          "c": "det",
          "punct": ""
        },
        {
          "text": "premissa",
          "c": "n",
          "punct": ""
        },
        {
          "text": "inicial",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "for",
          "c": "v",
          "punct": ""
        },
        {
          "text": "válida",
          "c": "adj",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "The conclusion holds only if the initial assumption is valid.",
      "tokens": [
        {
          "text": "The",
          "c": "det",
          "punct": ""
        },
        {
          "text": "conclusion",
          "c": "n",
          "punct": ""
        },
        {
          "text": "holds",
          "c": "v",
          "punct": ""
        },
        {
          "text": "only",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "if",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "the",
          "c": "det",
          "punct": ""
        },
        {
          "text": "initial",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "assumption",
          "c": "n",
          "punct": ""
        },
        {
          "text": "is",
          "c": "v",
          "punct": ""
        },
        {
          "text": "valid",
          "c": "adj",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "只有最初的假设成立，这个结论才站得住脚。",
      "tokens": [
        {
          "text": "只有",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "最初",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "的",
          "c": "part",
          "punct": ""
        },
        {
          "text": "假设",
          "c": "n",
          "punct": ""
        },
        {
          "text": "成立",
          "c": "v",
          "punct": "，"
        },
        {
          "text": "这",
          "c": "det",
          "punct": ""
        },
        {
          "text": "个",
          "c": "clf",
          "punct": ""
        },
        {
          "text": "结论",
          "c": "n",
          "punct": ""
        },
        {
          "text": "才",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "站得住脚",
          "c": "v",
          "punct": "。"
        }
      ]
    },
    "topicId": "society"
  },
  {
    "id": "elo-056",
    "level": "C2",
    "topic": "Sociedade e ideias",
    "title": "Concessão sem desistir",
    "pinyin": "zhe4 xiang4 ti2 yi4 wu2 lun4 kan4 qi3 lai5 duo1 me5 you3 shuo1 fu2 li4 dou1 xu1 yao4 chong2 xin1 shen3 shi4",
    "natural": "However convincing it may seem, the proposal needs revision.",
    "phonetic": "rau-É-ver kan-VÍN-sing‿it mei SÍIM, dha pra-PÔU-zal níidz ri-VÍ-zhan",
    "features": [
      "Linking",
      "Formas fracas"
    ],
    "speech": "Convincing‿it conecta /ŋ/ à vogal; the perde destaque. However aqui introduz grau concessivo, não apenas porém.",
    "compare": "PT usa por mais…que; EN however + adjetivo; ZH organiza com 无论…都…. O predicado chinês usa reexaminar em vez do nome revisão.",
    "literal": "Esta + proposta + independentemente + parecer + quão + convincente + sempre + precisar + novamente + examinar.",
    "pt": {
      "text": "Por mais convincente que pareça, a proposta exige revisão.",
      "tokens": [
        {
          "text": "Por",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "mais",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "convincente",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "que",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "pareça",
          "c": "v",
          "punct": ","
        },
        {
          "text": "a",
          "c": "det",
          "punct": ""
        },
        {
          "text": "proposta",
          "c": "n",
          "punct": ""
        },
        {
          "text": "exige",
          "c": "v",
          "punct": ""
        },
        {
          "text": "revisão",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "However convincing it may seem, the proposal needs revision.",
      "tokens": [
        {
          "text": "However",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "convincing",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "it",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "may",
          "c": "v",
          "punct": ""
        },
        {
          "text": "seem",
          "c": "v",
          "punct": ","
        },
        {
          "text": "the",
          "c": "det",
          "punct": ""
        },
        {
          "text": "proposal",
          "c": "n",
          "punct": ""
        },
        {
          "text": "needs",
          "c": "v",
          "punct": ""
        },
        {
          "text": "revision",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "这项提议无论看起来多么有说服力，都需要重新审视。",
      "tokens": [
        {
          "text": "这",
          "c": "det",
          "punct": ""
        },
        {
          "text": "项",
          "c": "clf",
          "punct": ""
        },
        {
          "text": "提议",
          "c": "n",
          "punct": ""
        },
        {
          "text": "无论",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "看起来",
          "c": "v",
          "punct": ""
        },
        {
          "text": "多么",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "有说服力",
          "c": "adj",
          "punct": "，"
        },
        {
          "text": "都",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "需要",
          "c": "v",
          "punct": ""
        },
        {
          "text": "重新",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "审视",
          "c": "v",
          "punct": "。"
        }
      ]
    },
    "topicId": "society"
  },
  {
    "id": "elo-057",
    "level": "C2",
    "topic": "Sociedade e ideias",
    "title": "Separar hipótese e fato",
    "pinyin": "zhe4 reng2 ran2 shi4 yi4 zhong3 jia3 she4 er2 fei1 yi3 jing1 zheng4 shi2 de5 shi4 shi2",
    "natural": "This remains a hypothesis rather than an established fact.",
    "phonetic": "dhis ri-MÊINZ‿a rai-PÓ-tha-sis RÉ-dher dhan‿an i-STÉ-blisht FÉKT",
    "features": [
      "Linking",
      "Formas fracas"
    ],
    "speech": "Remains‿a e than‿an se ligam; established termina em /ʃt/. Th em hypothesis é /θ/, não o /ð/ de rather.",
    "compare": "EN usa rather than para corrigir a classificação. ZH usa 而非 e modifica 事实 com 已经证实的 antes do nome.",
    "literal": "Isto + ainda + ser + uma + espécie + hipótese + e + não + já + comprovado + ligação + fato.",
    "pt": {
      "text": "Isso continua sendo uma hipótese, não um fato comprovado.",
      "tokens": [
        {
          "text": "Isso",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "continua",
          "c": "v",
          "punct": ""
        },
        {
          "text": "sendo",
          "c": "v",
          "punct": ""
        },
        {
          "text": "uma",
          "c": "det",
          "punct": ""
        },
        {
          "text": "hipótese",
          "c": "n",
          "punct": ","
        },
        {
          "text": "não",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "um",
          "c": "det",
          "punct": ""
        },
        {
          "text": "fato",
          "c": "n",
          "punct": ""
        },
        {
          "text": "comprovado",
          "c": "adj",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "This remains a hypothesis rather than an established fact.",
      "tokens": [
        {
          "text": "This",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "remains",
          "c": "v",
          "punct": ""
        },
        {
          "text": "a",
          "c": "det",
          "punct": ""
        },
        {
          "text": "hypothesis",
          "c": "n",
          "punct": ""
        },
        {
          "text": "rather",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "than",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "an",
          "c": "det",
          "punct": ""
        },
        {
          "text": "established",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "fact",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "这仍然是一种假设，而非已经证实的事实。",
      "tokens": [
        {
          "text": "这",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "仍然",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "是",
          "c": "v",
          "punct": ""
        },
        {
          "text": "一",
          "c": "num",
          "punct": ""
        },
        {
          "text": "种",
          "c": "clf",
          "punct": ""
        },
        {
          "text": "假设",
          "c": "n",
          "punct": "，"
        },
        {
          "text": "而",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "非",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "已经",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "证实",
          "c": "v",
          "punct": ""
        },
        {
          "text": "的",
          "c": "part",
          "punct": ""
        },
        {
          "text": "事实",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "society"
  },
  {
    "id": "elo-058",
    "level": "C2",
    "topic": "Sociedade e ideias",
    "title": "Reconhecer limites",
    "pinyin": "cheng2 ren4 fang1 fa3 de5 ju2 xian4 xing4 bing4 bu4 yi4 wei4 zhe5 fou3 ding4 qi2 yan2 jiu1 jie2 guo3",
    "natural": "Acknowledging the method's limitations doesn't invalidate its findings.",
    "phonetic": "ak-NÓ-la-djing dha MÉ-thadz li-ma-TÊI-shanz DÂ-zant‿in-VÉ-la-deit its FÁIN-dingz",
    "features": [
      "Contração",
      "Linking"
    ],
    "speech": "Does not → doesn't; doesn't‿invalidate une t e vogal. Method's contém o s de posse, não a contração de is.",
    "compare": "A ação de reconhecer é o sujeito em PT/EN; ZH também antepõe 承认… como tópico. 的 liga método a limitações.",
    "literal": "Reconhecer + método + posse + limitações + enfaticamente + não + significar + negar + seus + pesquisa + resultados.",
    "pt": {
      "text": "Reconhecer os limites do método não invalida seus resultados.",
      "tokens": [
        {
          "text": "Reconhecer",
          "c": "v",
          "punct": ""
        },
        {
          "text": "os",
          "c": "det",
          "punct": ""
        },
        {
          "text": "limites",
          "c": "n",
          "punct": ""
        },
        {
          "text": "do",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "método",
          "c": "n",
          "punct": ""
        },
        {
          "text": "não",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "invalida",
          "c": "v",
          "punct": ""
        },
        {
          "text": "seus",
          "c": "det",
          "punct": ""
        },
        {
          "text": "resultados",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "Acknowledging the method's limitations does not invalidate its findings.",
      "tokens": [
        {
          "text": "Acknowledging",
          "c": "v",
          "punct": ""
        },
        {
          "text": "the",
          "c": "det",
          "punct": ""
        },
        {
          "text": "method's",
          "c": "n",
          "punct": ""
        },
        {
          "text": "limitations",
          "c": "n",
          "punct": ""
        },
        {
          "text": "does",
          "c": "v",
          "punct": ""
        },
        {
          "text": "not",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "invalidate",
          "c": "v",
          "punct": ""
        },
        {
          "text": "its",
          "c": "det",
          "punct": ""
        },
        {
          "text": "findings",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "承认方法的局限性并不意味着否定其研究结果。",
      "tokens": [
        {
          "text": "承认",
          "c": "v",
          "punct": ""
        },
        {
          "text": "方法",
          "c": "n",
          "punct": ""
        },
        {
          "text": "的",
          "c": "part",
          "punct": ""
        },
        {
          "text": "局限性",
          "c": "n",
          "punct": ""
        },
        {
          "text": "并",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "不",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "意味着",
          "c": "v",
          "punct": ""
        },
        {
          "text": "否定",
          "c": "v",
          "punct": ""
        },
        {
          "text": "其",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "研究",
          "c": "n",
          "punct": ""
        },
        {
          "text": "结果",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "society"
  },
  {
    "id": "elo-059",
    "level": "C2",
    "topic": "Sociedade e ideias",
    "title": "Reavaliar diante de evidências",
    "pinyin": "jian4 yu2 xin1 de5 zheng4 ju4 wo3 men5 xu1 yao4 chong2 xin1 kao3 lv4 zi4 ji3 de5 li4 chang3",
    "natural": "In light of new evidence, we need to reconsider our position.",
    "phonetic": "in LÁIɾ-av niú É-va-dans, ui níid ta ri-kan-SÍ-der‿áuer pa-ZÍ-shan",
    "features": [
      "Flapping",
      "Linking",
      "Formas fracas"
    ],
    "speech": "Light of pode ter [ɾ] no americano; of e to enfraquecem. Reconsider‿our liga r e vogal.",
    "compare": "À luz de/in light of/鉴于 introduzem a base para reavaliação. Evidence é normalmente incontável em EN; o plural português não exige evidences.",
    "literal": "Diante de + nova + ligação + evidência + nós + precisamos + novamente + considerar + própria + posse + posição.",
    "pt": {
      "text": "À luz de novas evidências, precisamos reconsiderar nossa posição.",
      "tokens": [
        {
          "text": "À",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "luz",
          "c": "n",
          "punct": ""
        },
        {
          "text": "de",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "novas",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "evidências",
          "c": "n",
          "punct": ","
        },
        {
          "text": "precisamos",
          "c": "v",
          "punct": ""
        },
        {
          "text": "reconsiderar",
          "c": "v",
          "punct": ""
        },
        {
          "text": "nossa",
          "c": "det",
          "punct": ""
        },
        {
          "text": "posição",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "In light of new evidence, we need to reconsider our position.",
      "tokens": [
        {
          "text": "In",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "light",
          "c": "n",
          "punct": ""
        },
        {
          "text": "of",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "new",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "evidence",
          "c": "n",
          "punct": ","
        },
        {
          "text": "we",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "need",
          "c": "v",
          "punct": ""
        },
        {
          "text": "to",
          "c": "part",
          "punct": ""
        },
        {
          "text": "reconsider",
          "c": "v",
          "punct": ""
        },
        {
          "text": "our",
          "c": "det",
          "punct": ""
        },
        {
          "text": "position",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "鉴于新的证据，我们需要重新考虑自己的立场。",
      "tokens": [
        {
          "text": "鉴于",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "新",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "的",
          "c": "part",
          "punct": ""
        },
        {
          "text": "证据",
          "c": "n",
          "punct": "，"
        },
        {
          "text": "我们",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "需要",
          "c": "v",
          "punct": ""
        },
        {
          "text": "重新",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "考虑",
          "c": "v",
          "punct": ""
        },
        {
          "text": "自己",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "的",
          "c": "part",
          "punct": ""
        },
        {
          "text": "立场",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "society"
  },
  {
    "id": "elo-060",
    "level": "C2",
    "topic": "Sociedade e ideias",
    "title": "Precisão acima da certeza",
    "pinyin": "tiao3 zhan4 zai4 yu2 ru2 he2 zai4 bu4 xi1 sheng1 qing1 xi1 du4 de5 qian2 ti2 xia4 chuan2 da2 bu4 que4 ding4 xing4",
    "natural": "The challenge is to communicate uncertainty without compromising clarity.",
    "phonetic": "dha TCHÉ-landj‿iz ta ka-MIÚ-na-keit an-SÂR-tan-ti ui-DHÁUT KÓM-pra-mai-zing KLÉ-raɾi",
    "features": [
      "Linking",
      "Flapping",
      "Formas fracas"
    ],
    "speech": "Challenge‿is liga a consoante à vogal; to fica fraco. Clarity pode ter [ɾ]. Uncertainty mantém o destaque em cer.",
    "compare": "PT/EN usam sem + ação; ZH explicita a condição 在…的前提下 e reorganiza a ação principal para o final.",
    "literal": "Desafio + reside em + como + sob + não + sacrificar + clareza + ligação + condição + sob + transmitir + incerteza.",
    "pt": {
      "text": "O desafio é comunicar incerteza sem comprometer a clareza.",
      "tokens": [
        {
          "text": "O",
          "c": "det",
          "punct": ""
        },
        {
          "text": "desafio",
          "c": "n",
          "punct": ""
        },
        {
          "text": "é",
          "c": "v",
          "punct": ""
        },
        {
          "text": "comunicar",
          "c": "v",
          "punct": ""
        },
        {
          "text": "incerteza",
          "c": "n",
          "punct": ""
        },
        {
          "text": "sem",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "comprometer",
          "c": "v",
          "punct": ""
        },
        {
          "text": "a",
          "c": "det",
          "punct": ""
        },
        {
          "text": "clareza",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "The challenge is to communicate uncertainty without compromising clarity.",
      "tokens": [
        {
          "text": "The",
          "c": "det",
          "punct": ""
        },
        {
          "text": "challenge",
          "c": "n",
          "punct": ""
        },
        {
          "text": "is",
          "c": "v",
          "punct": ""
        },
        {
          "text": "to",
          "c": "part",
          "punct": ""
        },
        {
          "text": "communicate",
          "c": "v",
          "punct": ""
        },
        {
          "text": "uncertainty",
          "c": "n",
          "punct": ""
        },
        {
          "text": "without",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "compromising",
          "c": "v",
          "punct": ""
        },
        {
          "text": "clarity",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "挑战在于如何在不牺牲清晰度的前提下传达不确定性。",
      "tokens": [
        {
          "text": "挑战",
          "c": "n",
          "punct": ""
        },
        {
          "text": "在于",
          "c": "v",
          "punct": ""
        },
        {
          "text": "如何",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "在",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "不",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "牺牲",
          "c": "v",
          "punct": ""
        },
        {
          "text": "清晰度",
          "c": "n",
          "punct": ""
        },
        {
          "text": "的",
          "c": "part",
          "punct": ""
        },
        {
          "text": "前提",
          "c": "n",
          "punct": ""
        },
        {
          "text": "下",
          "c": "loc",
          "punct": ""
        },
        {
          "text": "传达",
          "c": "v",
          "punct": ""
        },
        {
          "text": "不确定性",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "society"
  },
  {
    "id": "elo-061",
    "level": "A1",
    "topic": "Hotel e hospedagem",
    "title": "Confirmar uma reserva",
    "pinyin": "wo3 you3 yu4 ding4",
    "natural": "I have a reservation.",
    "phonetic": "ai HÉV‿a ré-zer-VÊI-shan",
    "features": [
      "Linking",
      "Formas fracas"
    ],
    "speech": "Have + a se liga sem pausa: have‿a. O artigo a é curto e sem destaque.",
    "compare": "PT e EN usam artigo antes do nome; ZH pode dizer 有预订 sem artigo. O sujeito vem antes do verbo nos três.",
    "literal": "Eu + ter + reserva.",
    "pt": {
      "text": "Eu tenho uma reserva.",
      "tokens": [
        {
          "text": "Eu",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "tenho",
          "c": "v",
          "punct": ""
        },
        {
          "text": "uma",
          "c": "det",
          "punct": ""
        },
        {
          "text": "reserva",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "I have a reservation.",
      "tokens": [
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "have",
          "c": "v",
          "punct": ""
        },
        {
          "text": "a",
          "c": "det",
          "punct": ""
        },
        {
          "text": "reservation",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我有预订。",
      "tokens": [
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "有",
          "c": "v",
          "punct": ""
        },
        {
          "text": "预订",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "hotel"
  },
  {
    "id": "elo-062",
    "level": "A2",
    "topic": "Hotel e hospedagem",
    "title": "Pedir outro quarto",
    "pinyin": "wo3 men5 ke3 yi3 huan4 fang2 jian1 ma5",
    "natural": "Can we change rooms?",
    "phonetic": "kan ui TCHÊINDJ RÚMZ",
    "features": [
      "Formas fracas",
      "Linking"
    ],
    "speech": "Can perde destaque e pode soar /kən/. Ligue can‿we; rooms mantém o z final sonoro.",
    "compare": "EN coloca can antes do sujeito; ZH conserva sujeito + modal + verbo e encerra com 吗. PT pode omitir nós.",
    "literal": "Nós + poder + trocar + quarto + pergunta.",
    "pt": {
      "text": "Podemos trocar de quarto?",
      "tokens": [
        {
          "text": "Podemos",
          "c": "v",
          "punct": ""
        },
        {
          "text": "trocar",
          "c": "v",
          "punct": ""
        },
        {
          "text": "de",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "quarto",
          "c": "n",
          "punct": "?"
        }
      ]
    },
    "en": {
      "text": "Can we change rooms?",
      "tokens": [
        {
          "text": "Can",
          "c": "v",
          "punct": ""
        },
        {
          "text": "we",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "change",
          "c": "v",
          "punct": ""
        },
        {
          "text": "rooms",
          "c": "n",
          "punct": "?"
        }
      ]
    },
    "zh": {
      "text": "我们可以换房间吗？",
      "tokens": [
        {
          "text": "我们",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "可以",
          "c": "v",
          "punct": ""
        },
        {
          "text": "换",
          "c": "v",
          "punct": ""
        },
        {
          "text": "房间",
          "c": "n",
          "punct": ""
        },
        {
          "text": "吗",
          "c": "part",
          "punct": "？"
        }
      ]
    },
    "topicId": "hotel"
  },
  {
    "id": "elo-063",
    "level": "A2",
    "topic": "Hotel e hospedagem",
    "title": "Perguntar sobre o café da manhã",
    "pinyin": "bao1 han2 zao3 can1 ma5",
    "natural": "Is breakfast included?",
    "phonetic": "iz BRÉK-fast‿in-KLÚ-did",
    "features": [
      "Linking"
    ],
    "speech": "Ligue o t final de breakfast ao início de included: breakfast‿included. Is costuma ser breve.",
    "compare": "EN inverte is; PT pode usar só a entonação. ZH omite o tópico já conhecido e pergunta se inclui café da manhã.",
    "literal": "Incluir + café da manhã + pergunta.",
    "pt": {
      "text": "O café da manhã está incluído?",
      "tokens": [
        {
          "text": "O",
          "c": "det",
          "punct": ""
        },
        {
          "text": "café",
          "c": "n",
          "punct": ""
        },
        {
          "text": "da",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "manhã",
          "c": "n",
          "punct": ""
        },
        {
          "text": "está",
          "c": "v",
          "punct": ""
        },
        {
          "text": "incluído",
          "c": "adj",
          "punct": "?"
        }
      ]
    },
    "en": {
      "text": "Is breakfast included?",
      "tokens": [
        {
          "text": "Is",
          "c": "v",
          "punct": ""
        },
        {
          "text": "breakfast",
          "c": "n",
          "punct": ""
        },
        {
          "text": "included",
          "c": "adj",
          "punct": "?"
        }
      ]
    },
    "zh": {
      "text": "包含早餐吗？",
      "tokens": [
        {
          "text": "包含",
          "c": "v",
          "punct": ""
        },
        {
          "text": "早餐",
          "c": "n",
          "punct": ""
        },
        {
          "text": "吗",
          "c": "part",
          "punct": "？"
        }
      ]
    },
    "topicId": "hotel"
  },
  {
    "id": "elo-064",
    "level": "B1",
    "topic": "Hotel e hospedagem",
    "title": "Negociar a saída",
    "pinyin": "wo3 xiang3 wan3 yi4 dianr3 tui4 fang2",
    "natural": "I'd like to check out later.",
    "phonetic": "aid LÁIK ta TCHÉK‿aut LÊIɾer",
    "features": [
      "Contração",
      "Linking",
      "Flapping"
    ],
    "speech": "I would → I'd; to pode soar /tə/. Check‿out forma um bloco; o t de later pode virar o toque rápido /ɾ/ americano.",
    "compare": "EN usa check out como verbo com partícula. ZH coloca 晚一点儿, um pouco mais tarde, antes de 退房.",
    "literal": "Eu + querer + tarde + um pouco + encerrar hospedagem.",
    "pt": {
      "text": "Eu gostaria de sair mais tarde.",
      "tokens": [
        {
          "text": "Eu",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "gostaria",
          "c": "v",
          "punct": ""
        },
        {
          "text": "de",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "sair",
          "c": "v",
          "punct": ""
        },
        {
          "text": "mais",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "tarde",
          "c": "adv",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "I would like to check out later.",
      "tokens": [
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "would",
          "c": "v",
          "punct": ""
        },
        {
          "text": "like",
          "c": "v",
          "punct": ""
        },
        {
          "text": "to",
          "c": "part",
          "punct": ""
        },
        {
          "text": "check",
          "c": "v",
          "punct": ""
        },
        {
          "text": "out",
          "c": "part",
          "punct": ""
        },
        {
          "text": "later",
          "c": "adv",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我想晚一点儿退房。",
      "tokens": [
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "想",
          "c": "v",
          "punct": ""
        },
        {
          "text": "晚",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "一点儿",
          "c": "num",
          "punct": ""
        },
        {
          "text": "退房",
          "c": "v",
          "punct": "。"
        }
      ]
    },
    "topicId": "hotel"
  },
  {
    "id": "elo-065",
    "level": "A1",
    "topic": "Restaurante e alimentação",
    "title": "Pedir o cardápio",
    "pinyin": "wo3 ke3 yi3 kan4 cai4 dan1 ma5",
    "natural": "Can I see the menu?",
    "phonetic": "kan‿ai SÍI dha MÉN-iu",
    "features": [
      "Linking",
      "Formas fracas"
    ],
    "speech": "Can‿I une consoante e vogal. Can e the ficam mais leves que see e menu.",
    "compare": "EN inverte o modal e o sujeito. ZH usa 可以 antes de 看 e 吗 ao final, mantendo 我 no começo.",
    "literal": "Eu + poder + ver + cardápio + pergunta.",
    "pt": {
      "text": "Posso ver o cardápio?",
      "tokens": [
        {
          "text": "Posso",
          "c": "v",
          "punct": ""
        },
        {
          "text": "ver",
          "c": "v",
          "punct": ""
        },
        {
          "text": "o",
          "c": "det",
          "punct": ""
        },
        {
          "text": "cardápio",
          "c": "n",
          "punct": "?"
        }
      ]
    },
    "en": {
      "text": "Can I see the menu?",
      "tokens": [
        {
          "text": "Can",
          "c": "v",
          "punct": ""
        },
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "see",
          "c": "v",
          "punct": ""
        },
        {
          "text": "the",
          "c": "det",
          "punct": ""
        },
        {
          "text": "menu",
          "c": "n",
          "punct": "?"
        }
      ]
    },
    "zh": {
      "text": "我可以看菜单吗？",
      "tokens": [
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "可以",
          "c": "v",
          "punct": ""
        },
        {
          "text": "看",
          "c": "v",
          "punct": ""
        },
        {
          "text": "菜单",
          "c": "n",
          "punct": ""
        },
        {
          "text": "吗",
          "c": "part",
          "punct": "？"
        }
      ]
    },
    "topicId": "food"
  },
  {
    "id": "elo-066",
    "level": "A2",
    "topic": "Restaurante e alimentação",
    "title": "Pedir água",
    "pinyin": "wo3 xiang3 yao4 yi4 bei1 shui3",
    "natural": "I'd like a glass of water.",
    "phonetic": "aid LÁIK‿a GLÉS‿av UÓɾer",
    "features": [
      "Contração",
      "Linking",
      "Flapping"
    ],
    "speech": "I would → I'd; like‿a e glass‿of se ligam. Of pode soar /əv/; water pode ter /ɾ/ no inglês americano.",
    "compare": "PT e EN usam nome de recipiente + de/of. ZH usa 杯 como classificador de medida entre numeral e 水.",
    "literal": "Eu + gostaria + querer + um + copo + água.",
    "pt": {
      "text": "Eu gostaria de um copo de água.",
      "tokens": [
        {
          "text": "Eu",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "gostaria",
          "c": "v",
          "punct": ""
        },
        {
          "text": "de",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "um",
          "c": "det",
          "punct": ""
        },
        {
          "text": "copo",
          "c": "n",
          "punct": ""
        },
        {
          "text": "de",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "água",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "I would like a glass of water.",
      "tokens": [
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "would",
          "c": "v",
          "punct": ""
        },
        {
          "text": "like",
          "c": "v",
          "punct": ""
        },
        {
          "text": "a",
          "c": "det",
          "punct": ""
        },
        {
          "text": "glass",
          "c": "n",
          "punct": ""
        },
        {
          "text": "of",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "water",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我想要一杯水。",
      "tokens": [
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "想",
          "c": "v",
          "punct": ""
        },
        {
          "text": "要",
          "c": "v",
          "punct": ""
        },
        {
          "text": "一",
          "c": "num",
          "punct": ""
        },
        {
          "text": "杯",
          "c": "clf",
          "punct": ""
        },
        {
          "text": "水",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "food"
  },
  {
    "id": "elo-067",
    "level": "B1",
    "topic": "Restaurante e alimentação",
    "title": "Informar uma alergia",
    "pinyin": "wo3 dui4 hua1 sheng1 guo4 min3",
    "natural": "I'm allergic to peanuts.",
    "phonetic": "aim‿a-LÂR-djik ta PÍI-nats",
    "features": [
      "Contração",
      "Linking",
      "Formas fracas"
    ],
    "speech": "I am → I'm, ligado ao início de allergic. To enfraquece para /tə/; destaque allergic e peanuts.",
    "compare": "PT usa ter alergia; EN usa be allergic. ZH coloca 对花生 antes do predicado 过敏 para indicar a substância.",
    "literal": "Eu + em relação a + amendoim + alérgico.",
    "pt": {
      "text": "Eu tenho alergia a amendoim.",
      "tokens": [
        {
          "text": "Eu",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "tenho",
          "c": "v",
          "punct": ""
        },
        {
          "text": "alergia",
          "c": "n",
          "punct": ""
        },
        {
          "text": "a",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "amendoim",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "I am allergic to peanuts.",
      "tokens": [
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "am",
          "c": "v",
          "punct": ""
        },
        {
          "text": "allergic",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "to",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "peanuts",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我对花生过敏。",
      "tokens": [
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "对",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "花生",
          "c": "n",
          "punct": ""
        },
        {
          "text": "过敏",
          "c": "adj",
          "punct": "。"
        }
      ]
    },
    "topicId": "food"
  },
  {
    "id": "elo-068",
    "level": "A2",
    "topic": "Restaurante e alimentação",
    "title": "Pedir a conta",
    "pinyin": "wo3 men5 ke3 yi3 jie2 zhang4 ma5",
    "natural": "Can we have the bill?",
    "phonetic": "kan ui HÉV dha BÍL",
    "features": [
      "Formas fracas",
      "Linking"
    ],
    "speech": "Can e the ficam curtos. Ligue can‿we e mantenha bill como foco do pedido, sem vogal depois do l.",
    "compare": "PT e EN usam um nome para conta; ZH usa o verbo 结账, pagar/fechar a conta. 吗 transforma a frase em pergunta.",
    "literal": "Nós + poder + fechar a conta + pergunta.",
    "pt": {
      "text": "Podemos pedir a conta?",
      "tokens": [
        {
          "text": "Podemos",
          "c": "v",
          "punct": ""
        },
        {
          "text": "pedir",
          "c": "v",
          "punct": ""
        },
        {
          "text": "a",
          "c": "det",
          "punct": ""
        },
        {
          "text": "conta",
          "c": "n",
          "punct": "?"
        }
      ]
    },
    "en": {
      "text": "Can we have the bill?",
      "tokens": [
        {
          "text": "Can",
          "c": "v",
          "punct": ""
        },
        {
          "text": "we",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "have",
          "c": "v",
          "punct": ""
        },
        {
          "text": "the",
          "c": "det",
          "punct": ""
        },
        {
          "text": "bill",
          "c": "n",
          "punct": "?"
        }
      ]
    },
    "zh": {
      "text": "我们可以结账吗？",
      "tokens": [
        {
          "text": "我们",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "可以",
          "c": "v",
          "punct": ""
        },
        {
          "text": "结账",
          "c": "v",
          "punct": ""
        },
        {
          "text": "吗",
          "c": "part",
          "punct": "？"
        }
      ]
    },
    "topicId": "food"
  },
  {
    "id": "elo-069",
    "level": "A1",
    "topic": "Natureza e clima",
    "title": "Comentar a chuva",
    "pinyin": "xia4 yu3 le5",
    "natural": "It's raining.",
    "phonetic": "its RÊI-ning",
    "features": [
      "Contração",
      "Ritmo"
    ],
    "speech": "It is → it's. O grupo /ts/ deve ficar junto, sem uma vogal extra; raining recebe destaque.",
    "compare": "EN exige o sujeito it. PT não usa sujeito lexical. ZH usa 下雨; 了 aqui destaca a nova situação de chuva.",
    "literal": "Cair + chuva + nova situação.",
    "pt": {
      "text": "Está chovendo.",
      "tokens": [
        {
          "text": "Está",
          "c": "v",
          "punct": ""
        },
        {
          "text": "chovendo",
          "c": "v",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "It is raining.",
      "tokens": [
        {
          "text": "It",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "is",
          "c": "v",
          "punct": ""
        },
        {
          "text": "raining",
          "c": "v",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "下雨了。",
      "tokens": [
        {
          "text": "下",
          "c": "v",
          "punct": ""
        },
        {
          "text": "雨",
          "c": "n",
          "punct": ""
        },
        {
          "text": "了",
          "c": "part",
          "punct": "。"
        }
      ]
    },
    "topicId": "nature"
  },
  {
    "id": "elo-070",
    "level": "A2",
    "topic": "Natureza e clima",
    "title": "Passear no parque",
    "pinyin": "wo3 men5 qu4 gong1 yuan2 san4 bu4 ba5",
    "natural": "Let's walk in the park.",
    "phonetic": "lets UÓK‿in dha PÁRK",
    "features": [
      "Contração",
      "Linking"
    ],
    "speech": "Let us → let's, usado como convite. Walk‿in liga k e i; the fica curto.",
    "compare": "PT usa vamos como convite. EN usa let's. ZH combina ir ao parque e passear, com 吧 suavizando a proposta.",
    "literal": "Nós + ir + parque + passear + proposta.",
    "pt": {
      "text": "Vamos caminhar no parque.",
      "tokens": [
        {
          "text": "Vamos",
          "c": "v",
          "punct": ""
        },
        {
          "text": "caminhar",
          "c": "v",
          "punct": ""
        },
        {
          "text": "no",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "parque",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "Let us walk in the park.",
      "tokens": [
        {
          "text": "Let",
          "c": "v",
          "punct": ""
        },
        {
          "text": "us",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "walk",
          "c": "v",
          "punct": ""
        },
        {
          "text": "in",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "the",
          "c": "det",
          "punct": ""
        },
        {
          "text": "park",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我们去公园散步吧。",
      "tokens": [
        {
          "text": "我们",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "去",
          "c": "v",
          "punct": ""
        },
        {
          "text": "公园",
          "c": "n",
          "punct": ""
        },
        {
          "text": "散步",
          "c": "v",
          "punct": ""
        },
        {
          "text": "吧",
          "c": "part",
          "punct": "。"
        }
      ]
    },
    "topicId": "nature"
  },
  {
    "id": "elo-071",
    "level": "B1",
    "topic": "Natureza e clima",
    "title": "Verificar uma trilha",
    "pinyin": "xia4 yu3 hou4 zhe4 tiao2 xiao3 lu4 an1 quan2 ma5",
    "natural": "Is this trail safe after the rain?",
    "phonetic": "iz dhis TRÊIL SÊIF‿ÉF-ter dha RÊIN",
    "features": [
      "Linking",
      "Formas fracas"
    ],
    "speech": "Safe‿after liga f à vogal inicial. Is e the recebem menos destaque que trail, safe e rain.",
    "compare": "ZH coloca o contexto temporal 下雨后 no início e usa 条 para a trilha; 安全 funciona como predicado sem 是.",
    "literal": "Chover + depois + esta + classificador + trilha + segura + pergunta.",
    "pt": {
      "text": "Esta trilha é segura depois da chuva?",
      "tokens": [
        {
          "text": "Esta",
          "c": "det",
          "punct": ""
        },
        {
          "text": "trilha",
          "c": "n",
          "punct": ""
        },
        {
          "text": "é",
          "c": "v",
          "punct": ""
        },
        {
          "text": "segura",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "depois",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "da",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "chuva",
          "c": "n",
          "punct": "?"
        }
      ]
    },
    "en": {
      "text": "Is this trail safe after the rain?",
      "tokens": [
        {
          "text": "Is",
          "c": "v",
          "punct": ""
        },
        {
          "text": "this",
          "c": "det",
          "punct": ""
        },
        {
          "text": "trail",
          "c": "n",
          "punct": ""
        },
        {
          "text": "safe",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "after",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "the",
          "c": "det",
          "punct": ""
        },
        {
          "text": "rain",
          "c": "n",
          "punct": "?"
        }
      ]
    },
    "zh": {
      "text": "下雨后这条小路安全吗？",
      "tokens": [
        {
          "text": "下",
          "c": "v",
          "punct": ""
        },
        {
          "text": "雨",
          "c": "n",
          "punct": ""
        },
        {
          "text": "后",
          "c": "loc",
          "punct": ""
        },
        {
          "text": "这",
          "c": "det",
          "punct": ""
        },
        {
          "text": "条",
          "c": "clf",
          "punct": ""
        },
        {
          "text": "小路",
          "c": "n",
          "punct": ""
        },
        {
          "text": "安全",
          "c": "adj",
          "punct": ""
        },
        {
          "text": "吗",
          "c": "part",
          "punct": "？"
        }
      ]
    },
    "topicId": "nature"
  },
  {
    "id": "elo-072",
    "level": "B2",
    "topic": "Natureza e clima",
    "title": "Reduzir o uso de plástico",
    "pinyin": "wo3 men5 xu1 yao4 jian3 shao3 su4 liao4 de5 shi3 yong4",
    "natural": "We need to use less plastic.",
    "phonetic": "ui NÍID ta IÚZ les PLÉS-tik",
    "features": [
      "Formas fracas",
      "Linking"
    ],
    "speech": "To pode soar /tə/ e se junta a need. Use é verbo e termina em /z/; não acrescente vogal depois de plastic.",
    "compare": "PT e EN quantificam plástico com menos/less. ZH reorganiza como reduzir o uso do plástico; 的 liga material e uso.",
    "literal": "Nós + precisar + reduzir + plástico + de + uso.",
    "pt": {
      "text": "Precisamos usar menos plástico.",
      "tokens": [
        {
          "text": "Precisamos",
          "c": "v",
          "punct": ""
        },
        {
          "text": "usar",
          "c": "v",
          "punct": ""
        },
        {
          "text": "menos",
          "c": "det",
          "punct": ""
        },
        {
          "text": "plástico",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "We need to use less plastic.",
      "tokens": [
        {
          "text": "We",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "need",
          "c": "v",
          "punct": ""
        },
        {
          "text": "to",
          "c": "part",
          "punct": ""
        },
        {
          "text": "use",
          "c": "v",
          "punct": ""
        },
        {
          "text": "less",
          "c": "det",
          "punct": ""
        },
        {
          "text": "plastic",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我们需要减少塑料的使用。",
      "tokens": [
        {
          "text": "我们",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "需要",
          "c": "v",
          "punct": ""
        },
        {
          "text": "减少",
          "c": "v",
          "punct": ""
        },
        {
          "text": "塑料",
          "c": "n",
          "punct": ""
        },
        {
          "text": "的",
          "c": "part",
          "punct": ""
        },
        {
          "text": "使用",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "nature"
  },
  {
    "id": "elo-073",
    "level": "A1",
    "topic": "Saúde e bem-estar",
    "title": "Dizer que sente dor",
    "pinyin": "wo3 tou2 teng2",
    "natural": "My head hurts.",
    "phonetic": "mai HÉD HÂRTS",
    "features": [
      "Ritmo",
      "Linking"
    ],
    "speech": "Diga a sequência sem inserir vogal entre head e hurts. Preserve o h aspirado de hurts; não é preciso reduzir toda palavra.",
    "compare": "PT e EN usam possessivo. ZH pode usar 我 como tópico e 头疼 como comentário: quanto a mim, a cabeça dói.",
    "literal": "Eu + cabeça + dolorida.",
    "pt": {
      "text": "Minha cabeça dói.",
      "tokens": [
        {
          "text": "Minha",
          "c": "det",
          "punct": ""
        },
        {
          "text": "cabeça",
          "c": "n",
          "punct": ""
        },
        {
          "text": "dói",
          "c": "v",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "My head hurts.",
      "tokens": [
        {
          "text": "My",
          "c": "det",
          "punct": ""
        },
        {
          "text": "head",
          "c": "n",
          "punct": ""
        },
        {
          "text": "hurts",
          "c": "v",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我头疼。",
      "tokens": [
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "头",
          "c": "n",
          "punct": ""
        },
        {
          "text": "疼",
          "c": "adj",
          "punct": "。"
        }
      ]
    },
    "topicId": "health"
  },
  {
    "id": "elo-074",
    "level": "A2",
    "topic": "Saúde e bem-estar",
    "title": "Procurar uma farmácia",
    "pinyin": "fu4 jin4 you3 yao4 dian4 ma5",
    "natural": "Is there a pharmacy nearby?",
    "phonetic": "iz dhér‿a FÁR-ma-si nír-BÁI",
    "features": [
      "Linking",
      "Formas fracas"
    ],
    "speech": "There‿a liga r ao artigo fraco no inglês americano. Destaque pharmacy e nearby.",
    "compare": "EN usa a construção existencial there is invertida. ZH começa pelo lugar 附近 e usa 有 para existência.",
    "literal": "Proximidades + ter + farmácia + pergunta.",
    "pt": {
      "text": "Há uma farmácia perto daqui?",
      "tokens": [
        {
          "text": "Há",
          "c": "v",
          "punct": ""
        },
        {
          "text": "uma",
          "c": "det",
          "punct": ""
        },
        {
          "text": "farmácia",
          "c": "n",
          "punct": ""
        },
        {
          "text": "perto",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "daqui",
          "c": "adv",
          "punct": "?"
        }
      ]
    },
    "en": {
      "text": "Is there a pharmacy nearby?",
      "tokens": [
        {
          "text": "Is",
          "c": "v",
          "punct": ""
        },
        {
          "text": "there",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "a",
          "c": "det",
          "punct": ""
        },
        {
          "text": "pharmacy",
          "c": "n",
          "punct": ""
        },
        {
          "text": "nearby",
          "c": "adv",
          "punct": "?"
        }
      ]
    },
    "zh": {
      "text": "附近有药店吗？",
      "tokens": [
        {
          "text": "附近",
          "c": "n",
          "punct": ""
        },
        {
          "text": "有",
          "c": "v",
          "punct": ""
        },
        {
          "text": "药店",
          "c": "n",
          "punct": ""
        },
        {
          "text": "吗",
          "c": "part",
          "punct": "？"
        }
      ]
    },
    "topicId": "health"
  },
  {
    "id": "elo-075",
    "level": "B1",
    "topic": "Saúde e bem-estar",
    "title": "Marcar uma consulta",
    "pinyin": "wo3 xu1 yao4 yu4 yue1 kan4 yi1 sheng1",
    "natural": "I need to make an appointment.",
    "phonetic": "ai NÍID ta MÊIK‿an‿a-PÓINT-mant",
    "features": [
      "Linking",
      "Formas fracas"
    ],
    "speech": "To enfraquece; make‿an‿appointment forma uma sequência sem pausas entre as palavras.",
    "compare": "PT e EN usam verbo + nome para agendar. ZH combina 预约 com 看医生, consultar um médico.",
    "literal": "Eu + precisar + agendar + ver + médico.",
    "pt": {
      "text": "Eu preciso marcar uma consulta.",
      "tokens": [
        {
          "text": "Eu",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "preciso",
          "c": "v",
          "punct": ""
        },
        {
          "text": "marcar",
          "c": "v",
          "punct": ""
        },
        {
          "text": "uma",
          "c": "det",
          "punct": ""
        },
        {
          "text": "consulta",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "I need to make an appointment.",
      "tokens": [
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "need",
          "c": "v",
          "punct": ""
        },
        {
          "text": "to",
          "c": "part",
          "punct": ""
        },
        {
          "text": "make",
          "c": "v",
          "punct": ""
        },
        {
          "text": "an",
          "c": "det",
          "punct": ""
        },
        {
          "text": "appointment",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我需要预约看医生。",
      "tokens": [
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "需要",
          "c": "v",
          "punct": ""
        },
        {
          "text": "预约",
          "c": "v",
          "punct": ""
        },
        {
          "text": "看",
          "c": "v",
          "punct": ""
        },
        {
          "text": "医生",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "health"
  },
  {
    "id": "elo-076",
    "level": "A2",
    "topic": "Saúde e bem-estar",
    "title": "Pedir ajuda urgente",
    "pinyin": "wo3 xian4 zai4 xu1 yao4 yi1 sheng1",
    "natural": "I need a doctor now.",
    "phonetic": "ai NÍID‿a DÓK-ter NÁU",
    "features": [
      "Linking",
      "Formas fracas"
    ],
    "speech": "Need‿a liga d ao artigo fraco. Now recebe destaque quando a urgência importa; falar com clareza pode reduzir as contrações.",
    "compare": "ZH põe 现在 antes de 需要; PT e EN permitem agora/now ao final. ZH não exige artigo antes de 医生.",
    "literal": "Eu + agora + precisar + médico.",
    "pt": {
      "text": "Eu preciso de um médico agora.",
      "tokens": [
        {
          "text": "Eu",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "preciso",
          "c": "v",
          "punct": ""
        },
        {
          "text": "de",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "um",
          "c": "det",
          "punct": ""
        },
        {
          "text": "médico",
          "c": "n",
          "punct": ""
        },
        {
          "text": "agora",
          "c": "adv",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "I need a doctor now.",
      "tokens": [
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "need",
          "c": "v",
          "punct": ""
        },
        {
          "text": "a",
          "c": "det",
          "punct": ""
        },
        {
          "text": "doctor",
          "c": "n",
          "punct": ""
        },
        {
          "text": "now",
          "c": "adv",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我现在需要医生。",
      "tokens": [
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "现在",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "需要",
          "c": "v",
          "punct": ""
        },
        {
          "text": "医生",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "health"
  },
  {
    "id": "elo-077",
    "level": "A1",
    "topic": "Lazer e cultura",
    "title": "Gostar de música",
    "pinyin": "wo3 xi3 huan5 yin1 yue4",
    "natural": "I like music.",
    "phonetic": "ai LÁIK MIÚ-zik",
    "features": [
      "Ritmo"
    ],
    "speech": "Like e music recebem destaque. O k final de like se encadeia com m sem uma vogal extra entre eles.",
    "compare": "Gostar pede de em PT; like e 喜欢 recebem o objeto diretamente. Não se traduz cada preposição isoladamente.",
    "literal": "Eu + gostar + música.",
    "pt": {
      "text": "Eu gosto de música.",
      "tokens": [
        {
          "text": "Eu",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "gosto",
          "c": "v",
          "punct": ""
        },
        {
          "text": "de",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "música",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "I like music.",
      "tokens": [
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "like",
          "c": "v",
          "punct": ""
        },
        {
          "text": "music",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我喜欢音乐。",
      "tokens": [
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "喜欢",
          "c": "v",
          "punct": ""
        },
        {
          "text": "音乐",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "leisure"
  },
  {
    "id": "elo-078",
    "level": "A2",
    "topic": "Lazer e cultura",
    "title": "Convidar para o cinema",
    "pinyin": "ni3 xiang3 qu4 kan4 dian4 ying3 ma5",
    "natural": "Do you wanna go to the movies?",
    "phonetic": "dja UÓ-na GÔU ta dha MÚ-viz",
    "features": [
      "Formas fracas",
      "Assimilation"
    ],
    "speech": "Want to pode virar wanna em conversa informal. Do you pode aproximar-se de /dʒə/. A escrita formal mantém do you want to.",
    "compare": "EN usa do para perguntar e go to the movies. ZH usa ir + ver + filme, encerrando com 吗.",
    "literal": "Você + querer + ir + ver + filme + pergunta.",
    "pt": {
      "text": "Você quer ir ao cinema?",
      "tokens": [
        {
          "text": "Você",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "quer",
          "c": "v",
          "punct": ""
        },
        {
          "text": "ir",
          "c": "v",
          "punct": ""
        },
        {
          "text": "ao",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "cinema",
          "c": "n",
          "punct": "?"
        }
      ]
    },
    "en": {
      "text": "Do you want to go to the movies?",
      "tokens": [
        {
          "text": "Do",
          "c": "v",
          "punct": ""
        },
        {
          "text": "you",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "want",
          "c": "v",
          "punct": ""
        },
        {
          "text": "to",
          "c": "part",
          "punct": ""
        },
        {
          "text": "go",
          "c": "v",
          "punct": ""
        },
        {
          "text": "to",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "the",
          "c": "det",
          "punct": ""
        },
        {
          "text": "movies",
          "c": "n",
          "punct": "?"
        }
      ]
    },
    "zh": {
      "text": "你想去看电影吗？",
      "tokens": [
        {
          "text": "你",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "想",
          "c": "v",
          "punct": ""
        },
        {
          "text": "去",
          "c": "v",
          "punct": ""
        },
        {
          "text": "看",
          "c": "v",
          "punct": ""
        },
        {
          "text": "电影",
          "c": "n",
          "punct": ""
        },
        {
          "text": "吗",
          "c": "part",
          "punct": "？"
        }
      ]
    },
    "topicId": "leisure"
  },
  {
    "id": "elo-079",
    "level": "B1",
    "topic": "Lazer e cultura",
    "title": "Consultar o horário do museu",
    "pinyin": "bo2 wu4 guan3 ji3 dian3 guan1 men2",
    "natural": "What time does the museum close?",
    "phonetic": "uat TÁIM daz dha miu-ZÍI-am KLÔUZ",
    "features": [
      "Formas fracas",
      "Linking"
    ],
    "speech": "Does e the ficam curtos; close, como verbo, termina em /z/. Encadeie does‿the sem acrescentar uma pausa.",
    "compare": "EN desloca a pergunta para o início e usa does. ZH mantém 几点 antes do verbo, na posição da informação de horário.",
    "literal": "Museu + quantas + horas + fechar.",
    "pt": {
      "text": "A que horas o museu fecha?",
      "tokens": [
        {
          "text": "A",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "que",
          "c": "det",
          "punct": ""
        },
        {
          "text": "horas",
          "c": "n",
          "punct": ""
        },
        {
          "text": "o",
          "c": "det",
          "punct": ""
        },
        {
          "text": "museu",
          "c": "n",
          "punct": ""
        },
        {
          "text": "fecha",
          "c": "v",
          "punct": "?"
        }
      ]
    },
    "en": {
      "text": "What time does the museum close?",
      "tokens": [
        {
          "text": "What",
          "c": "det",
          "punct": ""
        },
        {
          "text": "time",
          "c": "n",
          "punct": ""
        },
        {
          "text": "does",
          "c": "v",
          "punct": ""
        },
        {
          "text": "the",
          "c": "det",
          "punct": ""
        },
        {
          "text": "museum",
          "c": "n",
          "punct": ""
        },
        {
          "text": "close",
          "c": "v",
          "punct": "?"
        }
      ]
    },
    "zh": {
      "text": "博物馆几点关门？",
      "tokens": [
        {
          "text": "博物馆",
          "c": "n",
          "punct": ""
        },
        {
          "text": "几",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "点",
          "c": "n",
          "punct": ""
        },
        {
          "text": "关门",
          "c": "v",
          "punct": "？"
        }
      ]
    },
    "topicId": "leisure"
  },
  {
    "id": "elo-080",
    "level": "B2",
    "topic": "Lazer e cultura",
    "title": "Conversar sobre um filme",
    "pinyin": "zhe4 bu4 dian4 ying3 rang4 wo3 xiang3 qi3 le5 tong2 nian2",
    "natural": "The film made me think about my childhood.",
    "phonetic": "dha FÍLM mêid mi THÍNK‿a-báut mai TCHÁILD-rud",
    "features": [
      "Linking",
      "Formas fracas"
    ],
    "speech": "The e o início de about são fracos. Think‿about une k e vogal. Th de think é soprado, com língua entre os dentes.",
    "compare": "EN usa made + pessoa + verbo sem to. ZH usa 让 para causar a lembrança, e 部 classifica o filme.",
    "literal": "Este + classificador + filme + fazer + eu + lembrar + aspecto + infância.",
    "pt": {
      "text": "O filme me fez pensar na minha infância.",
      "tokens": [
        {
          "text": "O",
          "c": "det",
          "punct": ""
        },
        {
          "text": "filme",
          "c": "n",
          "punct": ""
        },
        {
          "text": "me",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "fez",
          "c": "v",
          "punct": ""
        },
        {
          "text": "pensar",
          "c": "v",
          "punct": ""
        },
        {
          "text": "na",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "minha",
          "c": "det",
          "punct": ""
        },
        {
          "text": "infância",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "The film made me think about my childhood.",
      "tokens": [
        {
          "text": "The",
          "c": "det",
          "punct": ""
        },
        {
          "text": "film",
          "c": "n",
          "punct": ""
        },
        {
          "text": "made",
          "c": "v",
          "punct": ""
        },
        {
          "text": "me",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "think",
          "c": "v",
          "punct": ""
        },
        {
          "text": "about",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "my",
          "c": "det",
          "punct": ""
        },
        {
          "text": "childhood",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "这部电影让我想起了童年。",
      "tokens": [
        {
          "text": "这",
          "c": "det",
          "punct": ""
        },
        {
          "text": "部",
          "c": "clf",
          "punct": ""
        },
        {
          "text": "电影",
          "c": "n",
          "punct": ""
        },
        {
          "text": "让",
          "c": "v",
          "punct": ""
        },
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "想起",
          "c": "v",
          "punct": ""
        },
        {
          "text": "了",
          "c": "part",
          "punct": ""
        },
        {
          "text": "童年",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "leisure"
  },
  {
    "id": "elo-081",
    "level": "A1",
    "topic": "Serviços e tecnologia",
    "title": "Pedir a senha da internet",
    "pinyin": "mi4 ma3 shi4 shen2 me5",
    "natural": "What's the password?",
    "phonetic": "uats dha PÉS-uârd",
    "features": [
      "Contração",
      "Formas fracas"
    ],
    "speech": "What is → what's. The fica curto; password é o foco. O contexto indica a rede cuja senha se pede.",
    "compare": "EN traz what ao início. ZH mantém 什么 depois de 是, na posição da resposta esperada.",
    "literal": "Senha + ser + o quê?",
    "pt": {
      "text": "Qual é a senha?",
      "tokens": [
        {
          "text": "Qual",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "é",
          "c": "v",
          "punct": ""
        },
        {
          "text": "a",
          "c": "det",
          "punct": ""
        },
        {
          "text": "senha",
          "c": "n",
          "punct": "?"
        }
      ]
    },
    "en": {
      "text": "What is the password?",
      "tokens": [
        {
          "text": "What",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "is",
          "c": "v",
          "punct": ""
        },
        {
          "text": "the",
          "c": "det",
          "punct": ""
        },
        {
          "text": "password",
          "c": "n",
          "punct": "?"
        }
      ]
    },
    "zh": {
      "text": "密码是什么？",
      "tokens": [
        {
          "text": "密码",
          "c": "n",
          "punct": ""
        },
        {
          "text": "是",
          "c": "v",
          "punct": ""
        },
        {
          "text": "什么",
          "c": "pro",
          "punct": "？"
        }
      ]
    },
    "topicId": "services"
  },
  {
    "id": "elo-082",
    "level": "A2",
    "topic": "Serviços e tecnologia",
    "title": "Relatar falta de conexão",
    "pinyin": "wang3 luo4 bu4 neng2 yong4 le5",
    "natural": "The internet isn't working.",
    "phonetic": "dhi ÍN-ter-net Í-zant UÂR-king",
    "features": [
      "Contração",
      "Formas fracas"
    ],
    "speech": "Is not → isn't. Antes da vogal de internet, the pode soar /ði/. Não coloque vogal extra depois do t de internet.",
    "compare": "EN nega o auxiliar is. ZH diz que a rede não pode mais ser usada; 了 marca a mudança de situação.",
    "literal": "Rede + não poder + usar + nova situação.",
    "pt": {
      "text": "A internet não está funcionando.",
      "tokens": [
        {
          "text": "A",
          "c": "det",
          "punct": ""
        },
        {
          "text": "internet",
          "c": "n",
          "punct": ""
        },
        {
          "text": "não",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "está",
          "c": "v",
          "punct": ""
        },
        {
          "text": "funcionando",
          "c": "v",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "The internet is not working.",
      "tokens": [
        {
          "text": "The",
          "c": "det",
          "punct": ""
        },
        {
          "text": "internet",
          "c": "n",
          "punct": ""
        },
        {
          "text": "is",
          "c": "v",
          "punct": ""
        },
        {
          "text": "not",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "working",
          "c": "v",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "网络不能用了。",
      "tokens": [
        {
          "text": "网络",
          "c": "n",
          "punct": ""
        },
        {
          "text": "不能",
          "c": "v",
          "punct": ""
        },
        {
          "text": "用",
          "c": "v",
          "punct": ""
        },
        {
          "text": "了",
          "c": "part",
          "punct": "。"
        }
      ]
    },
    "topicId": "services"
  },
  {
    "id": "elo-083",
    "level": "B1",
    "topic": "Serviços e tecnologia",
    "title": "Enviar uma encomenda",
    "pinyin": "wo3 xiang3 ba3 zhe4 ge5 bao1 guo3 ji4 dao4 ba1 xi1",
    "natural": "I'd like to send this package to Brazil.",
    "phonetic": "aid LÁIK ta SÉND dhis PÉ-kidj ta bra-ZÍL",
    "features": [
      "Contração",
      "Formas fracas"
    ],
    "speech": "I would → I'd. As duas ocorrências de to podem enfraquecer para /tə/, mantendo send, package e Brazil em destaque.",
    "compare": "ZH usa 把 para antecipar o pacote antes de 寄到, enviar até. EN e PT normalmente colocam o objeto depois de enviar/send.",
    "literal": "Eu + querer + marcador de objeto + este + pacote + enviar + até + Brasil.",
    "pt": {
      "text": "Eu gostaria de enviar este pacote para o Brasil.",
      "tokens": [
        {
          "text": "Eu",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "gostaria",
          "c": "v",
          "punct": ""
        },
        {
          "text": "de",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "enviar",
          "c": "v",
          "punct": ""
        },
        {
          "text": "este",
          "c": "det",
          "punct": ""
        },
        {
          "text": "pacote",
          "c": "n",
          "punct": ""
        },
        {
          "text": "para",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "o",
          "c": "det",
          "punct": ""
        },
        {
          "text": "Brasil",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "I would like to send this package to Brazil.",
      "tokens": [
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "would",
          "c": "v",
          "punct": ""
        },
        {
          "text": "like",
          "c": "v",
          "punct": ""
        },
        {
          "text": "to",
          "c": "part",
          "punct": ""
        },
        {
          "text": "send",
          "c": "v",
          "punct": ""
        },
        {
          "text": "this",
          "c": "det",
          "punct": ""
        },
        {
          "text": "package",
          "c": "n",
          "punct": ""
        },
        {
          "text": "to",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "Brazil",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我想把这个包裹寄到巴西。",
      "tokens": [
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "想",
          "c": "v",
          "punct": ""
        },
        {
          "text": "把",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "这个",
          "c": "det",
          "punct": ""
        },
        {
          "text": "包裹",
          "c": "n",
          "punct": ""
        },
        {
          "text": "寄",
          "c": "v",
          "punct": ""
        },
        {
          "text": "到",
          "c": "v",
          "punct": ""
        },
        {
          "text": "巴西",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "services"
  },
  {
    "id": "elo-084",
    "level": "B2",
    "topic": "Serviços e tecnologia",
    "title": "Pedir confirmação por escrito",
    "pinyin": "ni3 neng2 tong1 guo4 dian4 zi3 you2 jian4 que4 ren4 zhe4 jian4 shi4 ma5",
    "natural": "Could you confirm that by email?",
    "phonetic": "ka-dja kan-FÂRM dhét bai‿ÍI-meil",
    "features": [
      "Assimilation",
      "Linking"
    ],
    "speech": "Could you pode unir d + y em /dʒ/. By‿email pode ganhar uma transição suave /j/ entre as vogais.",
    "compare": "PT e EN deixam o meio ao final. ZH coloca 通过电子邮件, por e-mail, antes de 确认.",
    "literal": "Você + poder + por meio de + e-mail + confirmar + esse assunto + pergunta.",
    "pt": {
      "text": "Você poderia confirmar isso por e-mail?",
      "tokens": [
        {
          "text": "Você",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "poderia",
          "c": "v",
          "punct": ""
        },
        {
          "text": "confirmar",
          "c": "v",
          "punct": ""
        },
        {
          "text": "isso",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "por",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "e-mail",
          "c": "n",
          "punct": "?"
        }
      ]
    },
    "en": {
      "text": "Could you confirm that by email?",
      "tokens": [
        {
          "text": "Could",
          "c": "v",
          "punct": ""
        },
        {
          "text": "you",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "confirm",
          "c": "v",
          "punct": ""
        },
        {
          "text": "that",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "by",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "email",
          "c": "n",
          "punct": "?"
        }
      ]
    },
    "zh": {
      "text": "你能通过电子邮件确认这件事吗？",
      "tokens": [
        {
          "text": "你",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "能",
          "c": "v",
          "punct": ""
        },
        {
          "text": "通过",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "电子邮件",
          "c": "n",
          "punct": ""
        },
        {
          "text": "确认",
          "c": "v",
          "punct": ""
        },
        {
          "text": "这件事",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "吗",
          "c": "part",
          "punct": "？"
        }
      ]
    },
    "topicId": "services"
  },
  {
    "id": "elo-085",
    "level": "A1",
    "topic": "Relações e comunicação",
    "title": "Apresentar uma amiga",
    "pinyin": "zhe4 shi4 wo3 de5 peng2 you5",
    "natural": "This is my friend.",
    "phonetic": "dhis‿iz mai FRÉND",
    "features": [
      "Linking"
    ],
    "speech": "This‿is liga s à vogal seguinte. My recebe menos destaque que friend numa apresentação neutra.",
    "compare": "PT e EN usam possessivo. ZH usa 我 + 的 antes de 朋友; o substantivo não marca gênero nesta frase.",
    "literal": "Esta + ser + eu + de + amiga.",
    "pt": {
      "text": "Esta é minha amiga.",
      "tokens": [
        {
          "text": "Esta",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "é",
          "c": "v",
          "punct": ""
        },
        {
          "text": "minha",
          "c": "det",
          "punct": ""
        },
        {
          "text": "amiga",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "This is my friend.",
      "tokens": [
        {
          "text": "This",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "is",
          "c": "v",
          "punct": ""
        },
        {
          "text": "my",
          "c": "det",
          "punct": ""
        },
        {
          "text": "friend",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "这是我的朋友。",
      "tokens": [
        {
          "text": "这",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "是",
          "c": "v",
          "punct": ""
        },
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "的",
          "c": "part",
          "punct": ""
        },
        {
          "text": "朋友",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "people"
  },
  {
    "id": "elo-086",
    "level": "B1",
    "topic": "Relações e comunicação",
    "title": "Dizer que sente saudade",
    "pinyin": "wo3 xiang3 nian4 wo3 de5 jia1 ren2",
    "natural": "I miss my family.",
    "phonetic": "ai MÍS mai FÉ-ma-li",
    "features": [
      "Ritmo",
      "Formas fracas"
    ],
    "speech": "My pode ficar leve entre miss e family. Encadeie miss my sem acrescentar vogal depois do s.",
    "compare": "PT usa sentir falta de; EN usa miss diretamente. ZH usa 想念 e liga 我 a 家人 com 的.",
    "literal": "Eu + sentir saudade + eu + de + família.",
    "pt": {
      "text": "Eu sinto falta da minha família.",
      "tokens": [
        {
          "text": "Eu",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "sinto",
          "c": "v",
          "punct": ""
        },
        {
          "text": "falta",
          "c": "n",
          "punct": ""
        },
        {
          "text": "da",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "minha",
          "c": "det",
          "punct": ""
        },
        {
          "text": "família",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "I miss my family.",
      "tokens": [
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "miss",
          "c": "v",
          "punct": ""
        },
        {
          "text": "my",
          "c": "det",
          "punct": ""
        },
        {
          "text": "family",
          "c": "n",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "我想念我的家人。",
      "tokens": [
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "想念",
          "c": "v",
          "punct": ""
        },
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "的",
          "c": "part",
          "punct": ""
        },
        {
          "text": "家人",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "people"
  },
  {
    "id": "elo-087",
    "level": "A2",
    "topic": "Casa e rotina",
    "title": "Pedir para abrir a janela",
    "pinyin": "ni3 neng2 da3 kai1 chuang1 hu5 ma5",
    "natural": "Can you open the window?",
    "phonetic": "kan ia‿ÔU-pan dha UÍN-dou",
    "features": [
      "Formas fracas",
      "Linking"
    ],
    "speech": "Can e you podem ficar leves. You‿open se conecta sem pausa, com transição arredondada entre as vogais.",
    "compare": "EN coloca can antes de you; ZH mantém 你 antes de 能 e acrescenta 吗. 打开 é uma unidade verbal.",
    "literal": "Você + poder + abrir + janela + pergunta.",
    "pt": {
      "text": "Você pode abrir a janela?",
      "tokens": [
        {
          "text": "Você",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "pode",
          "c": "v",
          "punct": ""
        },
        {
          "text": "abrir",
          "c": "v",
          "punct": ""
        },
        {
          "text": "a",
          "c": "det",
          "punct": ""
        },
        {
          "text": "janela",
          "c": "n",
          "punct": "?"
        }
      ]
    },
    "en": {
      "text": "Can you open the window?",
      "tokens": [
        {
          "text": "Can",
          "c": "v",
          "punct": ""
        },
        {
          "text": "you",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "open",
          "c": "v",
          "punct": ""
        },
        {
          "text": "the",
          "c": "det",
          "punct": ""
        },
        {
          "text": "window",
          "c": "n",
          "punct": "?"
        }
      ]
    },
    "zh": {
      "text": "你能打开窗户吗？",
      "tokens": [
        {
          "text": "你",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "能",
          "c": "v",
          "punct": ""
        },
        {
          "text": "打开",
          "c": "v",
          "punct": ""
        },
        {
          "text": "窗户",
          "c": "n",
          "punct": ""
        },
        {
          "text": "吗",
          "c": "part",
          "punct": "？"
        }
      ]
    },
    "topicId": "home"
  },
  {
    "id": "elo-088",
    "level": "B1",
    "topic": "Casa e rotina",
    "title": "Combinar tarefas da casa",
    "pinyin": "ru2 guo3 ni3 zuo4 fan4 wo3 jiu4 xi3 wan3",
    "natural": "I'll wash the dishes if you cook.",
    "phonetic": "ail UÓSH dha DÍ-shiz‿if ia KÚK",
    "features": [
      "Contração",
      "Linking",
      "Formas fracas"
    ],
    "speech": "I will → I'll; dishes‿if liga z à vogal. You pode enfraquecer quando cook recebe o foco.",
    "compare": "EN usa if + presente para uma condição futura. ZH frequentemente põe 如果 no início e 就 na consequência.",
    "literal": "Se + você + cozinhar + eu + então + lavar + tigelas.",
    "pt": {
      "text": "Eu lavo a louça se você cozinhar.",
      "tokens": [
        {
          "text": "Eu",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "lavo",
          "c": "v",
          "punct": ""
        },
        {
          "text": "a",
          "c": "det",
          "punct": ""
        },
        {
          "text": "louça",
          "c": "n",
          "punct": ""
        },
        {
          "text": "se",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "você",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "cozinhar",
          "c": "v",
          "punct": "."
        }
      ]
    },
    "en": {
      "text": "I will wash the dishes if you cook.",
      "tokens": [
        {
          "text": "I",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "will",
          "c": "v",
          "punct": ""
        },
        {
          "text": "wash",
          "c": "v",
          "punct": ""
        },
        {
          "text": "the",
          "c": "det",
          "punct": ""
        },
        {
          "text": "dishes",
          "c": "n",
          "punct": ""
        },
        {
          "text": "if",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "you",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "cook",
          "c": "v",
          "punct": "."
        }
      ]
    },
    "zh": {
      "text": "如果你做饭，我就洗碗。",
      "tokens": [
        {
          "text": "如果",
          "c": "conj",
          "punct": ""
        },
        {
          "text": "你",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "做饭",
          "c": "v",
          "punct": "，"
        },
        {
          "text": "我",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "就",
          "c": "adv",
          "punct": ""
        },
        {
          "text": "洗",
          "c": "v",
          "punct": ""
        },
        {
          "text": "碗",
          "c": "n",
          "punct": "。"
        }
      ]
    },
    "topicId": "home"
  },
  {
    "id": "elo-089",
    "level": "A2",
    "topic": "Transporte e viagens",
    "title": "Pedir uma parada",
    "pinyin": "ni3 neng2 zai4 zhe4 li3 ting2 che1 ma5",
    "natural": "Can you stop here?",
    "phonetic": "kan ia STÓP HÍR",
    "features": [
      "Formas fracas",
      "Linking"
    ],
    "speech": "Can you pode soar /kən jə/. Preserve o h de here e não acrescente vogal depois de stop.",
    "compare": "PT e EN deixam aqui/here após o verbo. ZH usa 在这里 antes de 停车, parar o veículo.",
    "literal": "Você + poder + em + aqui + parar o veículo + pergunta.",
    "pt": {
      "text": "Você pode parar aqui?",
      "tokens": [
        {
          "text": "Você",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "pode",
          "c": "v",
          "punct": ""
        },
        {
          "text": "parar",
          "c": "v",
          "punct": ""
        },
        {
          "text": "aqui",
          "c": "adv",
          "punct": "?"
        }
      ]
    },
    "en": {
      "text": "Can you stop here?",
      "tokens": [
        {
          "text": "Can",
          "c": "v",
          "punct": ""
        },
        {
          "text": "you",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "stop",
          "c": "v",
          "punct": ""
        },
        {
          "text": "here",
          "c": "adv",
          "punct": "?"
        }
      ]
    },
    "zh": {
      "text": "你能在这里停车吗？",
      "tokens": [
        {
          "text": "你",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "能",
          "c": "v",
          "punct": ""
        },
        {
          "text": "在",
          "c": "prep",
          "punct": ""
        },
        {
          "text": "这里",
          "c": "pro",
          "punct": ""
        },
        {
          "text": "停车",
          "c": "v",
          "punct": ""
        },
        {
          "text": "吗",
          "c": "part",
          "punct": "？"
        }
      ]
    },
    "topicId": "transport"
  },
  {
    "id": "elo-090",
    "level": "B1",
    "topic": "Transporte e viagens",
    "title": "Perguntar sobre um atraso",
    "pinyin": "huo3 che1 wan3 dian3 le5 ma5",
    "natural": "Is the train delayed?",
    "phonetic": "iz dha TRÊIN di-LÊID",
    "features": [
      "Formas fracas",
      "Linking"
    ],
    "speech": "Is e the são curtos; train e a sílaba final de delayed recebem destaque. Evite vogal extra depois de delayed.",
    "compare": "EN inverte is numa pergunta. ZH usa 晚点 como predicado e termina com 了吗 para perguntar pela situação atual.",
    "literal": "Trem + atrasar + situação atual + pergunta.",
    "pt": {
      "text": "O trem está atrasado?",
      "tokens": [
        {
          "text": "O",
          "c": "det",
          "punct": ""
        },
        {
          "text": "trem",
          "c": "n",
          "punct": ""
        },
        {
          "text": "está",
          "c": "v",
          "punct": ""
        },
        {
          "text": "atrasado",
          "c": "adj",
          "punct": "?"
        }
      ]
    },
    "en": {
      "text": "Is the train delayed?",
      "tokens": [
        {
          "text": "Is",
          "c": "v",
          "punct": ""
        },
        {
          "text": "the",
          "c": "det",
          "punct": ""
        },
        {
          "text": "train",
          "c": "n",
          "punct": ""
        },
        {
          "text": "delayed",
          "c": "adj",
          "punct": "?"
        }
      ]
    },
    "zh": {
      "text": "火车晚点了吗？",
      "tokens": [
        {
          "text": "火车",
          "c": "n",
          "punct": ""
        },
        {
          "text": "晚点",
          "c": "v",
          "punct": ""
        },
        {
          "text": "了",
          "c": "part",
          "punct": ""
        },
        {
          "text": "吗",
          "c": "part",
          "punct": "？"
        }
      ]
    },
    "topicId": "transport"
  }
];
