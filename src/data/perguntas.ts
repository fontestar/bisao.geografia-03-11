/* =========================================================================
 * JOGO DO BISÃO — BANCO DE PERGUNTAS
 * -------------------------------------------------------------------------
 * ESTRUTURA — 2 ASSUNTOS × 9 PERGUNTAS = 18 PERGUNTAS
 *
 *   perguntas = {
 *     assunto1: {
 *       nome: "Nome do Assunto 1",
 *       faceis:   [ 3 perguntas — 10 pontos cada ]
 *       medias:   [ 4 perguntas — 20 pontos cada ]
 *       dificeis: [ 2 perguntas — 30 pontos cada ]
 *     },
 *     assunto2: { ...mesma coisa... }
 *   }
 *
 * 18 cartas de pergunta + 6 cartas especiais = 24 cartas no tabuleiro.
 * As 24 posições são sorteadas a cada nova partida.
 *
 * -------------------------------------------------------------------------
 * COMO PREENCHER CADA PERGUNTA
 *
 *   {
 *     texto: "opcional",       // texto de apoio, exibido antes do enunciado
 *     pergunta: "Enunciado",
 *     alternativas: ["A", "B", "C", "D", "E"],
 *     correta: 0,              // 0=A | 1=B | 2=C | 3=D | 4=E
 *     explicacao: "opcional",  // correção comentada, aparece após a resposta
 *   }
 *
 * • SEMPRE 5 alternativas, na ordem A, B, C, D, E.
 * • `correta` é o ÍNDICE (começa em zero), não a letra.
 * • O texto de apoio funciona melhor entre 150 e 250 caracteres.
 *
 * -------------------------------------------------------------------------
 * GABARITO (equilibrado: A = 4, B = 3, C = 4, D = 4, E = 3)
 *
 *   EUROPA ....... Q1 C | Q2 E | Q3 A | Q4 D | Q5 B | Q6 C | Q7 A | Q8 E | Q9 D
 *   AMÉRICA ...... Q10 B | Q11 A | Q12 D | Q13 C | Q14 E | Q15 B | Q16 A
 *                  Q17 D | Q18 C
 * ========================================================================= */

export interface Pergunta {
  /** Texto de apoio exibido antes do enunciado (opcional) */
  texto?: string;
  /** Enunciado da pergunta */
  pergunta: string;
  /** Exatamente 5 alternativas, na ordem A, B, C, D, E */
  alternativas: string[];
  /** Índice (0 a 4) da alternativa correta */
  correta: number;
  /** Correção comentada, exibida após a resposta (opcional) */
  explicacao?: string;
}

export interface Assunto {
  nome: string;
  faceis: Pergunta[]; // 3 perguntas → 10 pontos cada
  medias: Pergunta[]; // 4 perguntas → 20 pontos cada
  dificeis: Pergunta[]; // 2 perguntas → 30 pontos cada
}

export interface BancoDePerguntas {
  assunto1: Assunto;
  assunto2: Assunto;
}

/** Identificadores dos assuntos, na ordem em que aparecem na tela inicial. */
export type AssuntoId = keyof BancoDePerguntas;
export const ORDEM_ASSUNTOS: AssuntoId[] = ["assunto1", "assunto2"];

export const perguntas: BancoDePerguntas = {
  /* ======================================================================
   * ASSUNTO 1 — EUROPA
   * ==================================================================== */
  assunto1: {
    nome: "Europa",

    /* ---- 3 PERGUNTAS FÁCEIS (10 pontos) ---- */
    faceis: [
      {
        // Q1 — resposta: C
        texto:
          "Ao percorrer o extremo sul da Europa no verão, um geógrafo registra longos períodos de estiagem, invernos amenos e uma vegetação de arbustos baixos e densos, adaptada à falta de água.",
        pergunta:
          "As características observadas correspondem ao clima e à vegetação:",
        alternativas: [
          "Temperado oceânico, com floresta temperada",
          "Temperado continental, com estepes",
          "Mediterrâneo, com maquis e garrigues",
          "Polar, com tundra e taiga",
          "Temperado oceânico, com maquis e garrigues",
        ],
        correta: 2,
        explicacao:
          "Verões secos, invernos amenos e vegetação de maquis e garrigues caracterizam o clima mediterrâneo, no extremo sul.",
      },
      {
        // Q2 — resposta: E
        texto:
          "O relevo europeu pode ser dividido em três grandes unidades, distribuídas do norte ao sul do continente, que diferem quanto à idade geológica, à estabilidade e aos recursos minerais.",
        pergunta:
          "Qual alternativa relaciona corretamente a unidade de relevo às suas características?",
        alternativas: [
          "Norte: dobramentos modernos, marcados por terremotos e por atividade vulcânica frequente",
          "Centro: maciços antigos e estáveis, com abundância de minerais metálicos",
          "Sul: planícies sedimentares, com grandes reservas de combustíveis fósseis e relevo estável",
          "Norte: planícies e bacias sedimentares, como a Planície Germano-Polonesa",
          "Sul: dobramentos modernos e instáveis, como os Alpes e os Pirineus",
        ],
        correta: 4,
        explicacao:
          "O norte tem maciços antigos; o centro, planícies com combustíveis fósseis; o sul, dobramentos modernos e instáveis.",
      },
      {
        // Q3 — resposta: A
        texto:
          "O litoral europeu é bastante recortado, o que favorece a existência de penínsulas, mares e estreitos que historicamente facilitaram a circulação de pessoas e mercadorias.",
        pergunta:
          "Assinale a alternativa que associa corretamente o elemento geográfico à sua classificação ou localização:",
        alternativas: [
          "Jutlândia: península ocupada pela Dinamarca",
          "Balcânica: península onde se localiza a Dinamarca",
          "Báltico: estreito que liga o Mediterrâneo ao Atlântico",
          "Bósforo: mar interno banhado pelo continente europeu",
          "Dardanelos: mar situado no extremo norte da Europa",
        ],
        correta: 0,
        explicacao:
          "Báltico é mar; Bósforo e Dardanelos são estreitos; a península Balcânica está associada à Grécia.",
      },
    ],

    /* ---- 4 PERGUNTAS MÉDIAS (20 pontos) ---- */
    medias: [
      {
        // Q4 — resposta: D
        texto:
          "Com baixa natalidade e elevado envelhecimento, a população de vários países europeus deixou de se renovar naturalmente nos últimos anos, o que repercute sobre a economia e sobre as políticas públicas.",
        pergunta:
          "Entre as consequências diretamente associadas a esse quadro demográfico, estão:",
        alternativas: [
          "Redução da PEA, alívio sobre a previdência e necessidade de imigrantes",
          "Aumento da PEA, pressão sobre a previdência e redução dos gastos com saúde",
          "Redução da PEA, queda nos gastos com saúde e dispensa de imigrantes",
          "Redução da PEA, pressão sobre a previdência e aumento dos gastos com saúde",
          "Aumento da PEA, pressão sobre a previdência e necessidade de imigrantes",
        ],
        correta: 3,
        explicacao:
          "O envelhecimento reduz a PEA, pressiona a previdência e eleva os gastos com saúde; cada alternativa errada traz ao menos um item invertido.",
      },
      {
        // Q5 — resposta: B
        texto:
          "A Europa é um continente desenvolvido e industrializado, sobretudo em sua porção ocidental, mas a atividade industrial se distribui de forma desigual entre países e regiões.",
        pergunta: "Sobre as áreas industriais europeias, é correto afirmar que:",
        alternativas: [
          "O Eixo Renano, principal concentração industrial do continente, localiza-se na Área Britânica",
          "O Vale do Pó, no norte da Itália, é a região mais industrializada do país, com Turim e Milão",
          "O Mezzogiorno, no sul da Itália, concentra o principal parque industrial do país",
          "A Área Francesa abriga um importante tecnopolo, situado nos arredores de Londres",
          "A Área Germânica foi pioneira da industrialização e se destaca em setores como o têxtil",
        ],
        correta: 1,
        explicacao:
          "O Eixo Renano é germânico; o Mezzogiorno é rural; o tecnopolo francês fica em Paris; o pioneirismo industrial foi britânico.",
      },
      {
        // Q6 — resposta: C
        texto:
          "Alguns países europeus convivem com movimentos nacionalistas e separatistas, que em certos casos recorreram à luta armada em defesa de suas reivindicações.",
        pergunta: "Sobre esses movimentos, é correto afirmar que:",
        alternativas: [
          "O IRA, ligado ao País Basco, lutou pela separação da região em relação à Espanha",
          "A ETA organizou-se como grupo armado para defender a independência da Irlanda do Norte",
          "O IRA lutou pela independência do Ulster, em conflito entre católicos irlandeses e protestantes ingleses",
          "A Catalunha, uma das regiões mais pobres da Espanha, defende a separação por meio da luta armada",
          "Ulster e País Basco, hoje pacificados, abandonaram por completo o desejo de separação",
        ],
        correta: 2,
        explicacao:
          "IRA = Ulster (Reino Unido); ETA = País Basco (Espanha); a Catalunha é rica e usa plebiscitos; o desejo separatista persiste nas regiões pacificadas.",
      },
      {
        // Q7 — resposta: A
        texto:
          "Mudanças nas fronteiras e nos governos de países europeus nas últimas décadas foram acompanhadas por conflitos armados de grande impacto sobre a geopolítica do continente.",
        pergunta: "Sobre esses processos, é correto afirmar que:",
        alternativas: [
          "A Iugoslávia se fragmentou após grave guerra civil nos anos 1990, originando Croácia, Bósnia, Eslovênia e Sérvia",
          "A Rússia anexou a Criméia em 2022 e, em 2014, invadiu o restante do território ucraniano",
          "A Bélgica se dividiu em dois países após a guerra civil entre flamengos e valões, nos anos 1990",
          "A dissolução da Iugoslávia ocorreu de forma pacífica, sem grandes conflitos armados na região",
          "A Ucrânia surgiu da fragmentação iugoslava e teve a Criméia anexada pela Sérvia em 2014",
        ],
        correta: 0,
        explicacao:
          "A Criméia foi anexada em 2014 e a invasão ocorreu em 2022 (datas invertidas na alternativa B); na Bélgica não há luta armada nem divisão do país.",
      },
    ],

    /* ---- 2 PERGUNTAS DIFÍCEIS (30 pontos) ---- */
    dificeis: [
      {
        // Q8 — resposta: E
        texto:
          "Na Espanha e na Bélgica, regiões com identidade cultural própria reivindicam maior autonomia ou independência, mas as motivações e os métodos desses movimentos diferem entre si.",
        pergunta:
          "Considerando os casos espanhol e belga, é correto afirmar que:",
        alternativas: [
          "A Catalunha, de capital Barcelona e uma das regiões mais pobres da Espanha, já recorreu a um grupo terrorista para defender sua separação",
          "Na Bélgica, o norte flamengo, de cultura francesa e mais pobre, deseja a separação, tendo organizado inclusive um grupo armado para isso",
          "O País Basco, que nunca recorreu à violência, organizou plebiscitos de independência, enquanto a Catalunha foi palco de ações da ETA",
          "Na Bélgica, o sul valão, de cultura holandesa e mais rico, abriga a capital e deseja a separação, inclusive por meio da luta armada",
          "Na Bélgica, o sul valão, de cultura francesa, deseja se separar sem luta armada; na Catalunha, rica, o desejo já levou a plebiscitos",
        ],
        correta: 4,
        explicacao:
          "A Catalunha é rica e fez plebiscitos; a ETA atuou no País Basco; na Bélgica, o norte flamengo é de cultura holandesa e o sul valão, de cultura francesa, sem luta armada entre eles.",
      },
      {
        // Q9 — resposta: D
        texto:
          "A Europa convive com um paradoxo: o envelhecimento da população gera necessidade de imigrantes, mas a forte presença de imigrantes e refugiados tem alimentado reações hostis em parte da sociedade.",
        pergunta: "Esse paradoxo é corretamente explicado por:",
        alternativas: [
          "A recusa de imigrantes decorre do excesso de mão de obra jovem, que amplia a PEA e elimina qualquer necessidade de trabalhadores estrangeiros no continente",
          "O avanço da xenofobia enfraqueceu os grupos neonazistas, que passaram a defender a integração dos imigrantes e refugiados ao mercado de trabalho",
          "A alta natalidade da Europa Ocidental dispensa a imigração, o que explica o fortalecimento de grupos que defendem a expulsão de estrangeiros",
          "A baixa natalidade cria demanda por imigrantes, mas a forte presença de estrangeiros acentua a xenofobia e fortalece grupos neonazistas, que defendem sua expulsão",
          "A xenofobia ocorre apenas na porção oriental, de IDH baixo, pois o Ocidente, de IDH alto, não recebe imigrantes nem refugiados",
        ],
        correta: 3,
        explicacao:
          "A baixa natalidade e o envelhecimento exigem imigrantes, enquanto a xenofobia fortalece grupos neonazistas que pregam a expulsão deles.",
      },
    ],
  },

  /* ======================================================================
   * ASSUNTO 2 — CONTINENTE AMERICANO (EUA E CANADÁ)
   * ==================================================================== */
  assunto2: {
    nome: "Continente Americano (EUA e Canadá)",

    /* ---- 3 PERGUNTAS FÁCEIS (10 pontos) ---- */
    faceis: [
      {
        // Q10 — resposta: B
        texto:
          "A América pode ser regionalizada por diferentes critérios, e um mesmo país pode ocupar posições distintas em cada um deles.",
        pergunta:
          "Considerando os critérios geográfico e histórico-cultural, o México é classificado, respectivamente, como:",
        alternativas: [
          "América Central Istmica e América Anglo-Saxônica",
          "América do Norte e América Latina",
          "América do Norte e América Anglo-Saxônica",
          "América Central Insular e América Latina",
          "América do Sul e América Latina",
        ],
        correta: 1,
        explicacao:
          "Geograficamente, EUA, Canadá e México formam a América do Norte; culturalmente, o México é latino (colônia de exploração).",
      },
      {
        // Q11 — resposta: A
        texto:
          "O território dos EUA e do Canadá abrange grande diversidade climática, do frio intenso do extremo norte aos climas quentes do sul.",
        pergunta:
          "Qual alternativa associa corretamente a região ao seu clima e à sua vegetação?",
        alternativas: [
          "Califórnia: clima mediterrâneo, com maquis e garrigues",
          "Flórida: clima mediterrâneo, com maquis e garrigues",
          "Norte do Canadá: clima temperado, com floresta temperada caducifólia",
          "Sul do Canadá: clima frio, com tundra e taiga",
          "Califórnia: clima subtropical, com floresta úmida e pântanos",
        ],
        correta: 0,
        explicacao:
          "A Flórida é subtropical (floresta úmida e pântanos); o norte do Canadá é frio (taiga e tundra); o sul canadense é temperado.",
      },
      {
        // Q12 — resposta: D
        texto:
          "No sudeste do Canadá e no nordeste dos EUA localiza-se um grande conjunto lacustre, formado por lagos como Huron, Erie, Michigan, Superior e Ontário.",
        pergunta: "Esse conjunto, conhecido como Grandes Lagos, tem origem:",
        alternativas: [
          "Tectônica, ligada à falha transcorrente de San Andreas",
          "Vulcânica, associada à formação das Montanhas Rochosas",
          "Fluvial, resultante da bacia do Mississipi-Missouri",
          "Glacial, relacionada à ação de geleiras",
          "Erosiva, resultante do desgaste dos planaltos dos Apalaches",
        ],
        correta: 3,
        explicacao: "Os Grandes Lagos são de origem glacial.",
      },
    ],

    /* ---- 4 PERGUNTAS MÉDIAS (20 pontos) ---- */
    medias: [
      {
        // Q13 — resposta: C
        texto:
          "O relevo dos EUA e do Canadá se organiza em três grandes unidades, dispostas de oeste para leste, e a Califórnia é cortada por uma importante falha tectônica.",
        pergunta:
          "Qual alternativa descreve corretamente essa organização do relevo?",
        alternativas: [
          "As Montanhas Rochosas, a leste, formam planaltos velhos e desgastados, enquanto os Apalaches, a oeste, são dobramentos modernos",
          "O oeste é dominado por planícies, o centro por dobramentos modernos e o leste por Labrador e Apalaches, de relevo jovem",
          "O oeste tem dobramentos modernos, como as Rochosas; o centro, planícies; e o leste, planaltos velhos e desgastados, como os Apalaches",
          "O leste abriga as Rochosas, o centro, planícies, e o oeste, Labrador e Apalaches, com a falha de San Andreas no Canadá",
          "O centro é formado por planaltos antigos, o oeste por planícies e o leste por dobramentos modernos, cortados pela falha de San Andreas",
        ],
        correta: 2,
        explicacao:
          "Oeste = dobramentos modernos (Rochosas); centro = planícies; leste = planaltos velhos (Labrador e Apalaches); San Andreas fica na Califórnia.",
      },
      {
        // Q14 — resposta: E
        texto:
          "Cuba, ilha do Caribe, possui trajetória singular na América, o que se reflete em sua classificação nos diferentes critérios de regionalização do continente.",
        pergunta:
          "Cuba é classificada, respectivamente, nos critérios geográfico, histórico-cultural e econômico, como:",
        alternativas: [
          "América do Norte, América Latina e país desenvolvido",
          "América Central Istmica, América Anglo-Saxônica e país socialista",
          "América Central Insular, América Anglo-Saxônica e país subdesenvolvido",
          "América Central Istmica, América Latina e país socialista",
          "América Central Insular, América Latina e país socialista",
        ],
        correta: 4,
        explicacao:
          "Cuba é uma ilha (Central Insular), latina e o único país socialista do continente.",
      },
      {
        // Q15 — resposta: B
        texto:
          "A indústria dos EUA e do Canadá está organizada em grandes áreas, que se diferenciam pela idade e pela localização.",
        pergunta: "Sobre essa organização, é correto afirmar que:",
        alternativas: [
          "A Sun Belt, no nordeste, é a área industrial mais antiga dos EUA, enquanto a Manufacturing Belt é a mais recente",
          "A Manufacturing Belt, no nordeste, é a área mais antiga, e a Sun Belt, mais nova, abrange o sul do país e o Vale do Silício",
          "No Canadá, a indústria se concentra no norte do território, onde a taiga e a tundra favorecem a instalação das fábricas",
          "A Manufacturing Belt é a área mais recente dos EUA, localizada no sul, onde se encontra o Vale do Silício",
          "No Canadá, a indústria se destaca na região dos Grandes Lagos, no sudeste, e em Vancouver, no litoral do Atlântico",
        ],
        correta: 1,
        explicacao:
          "Vancouver fica no litoral do Pacífico (erro da alternativa E); no Canadá, a indústria está no sudeste e em Vancouver, não no norte.",
      },
      {
        // Q16 — resposta: A
        texto:
          "Embora EUA e Canadá sejam grandes produtores agropecuários, a organização da produção difere entre os dois países em função, principalmente, do clima.",
        pergunta:
          "Sobre a agropecuária nesses países, é correto afirmar que:",
        alternativas: [
          "No Canadá, a produção se restringe ao sul por causa do clima; nos EUA, organiza-se em cinturões, como o cotton belt e o corn belt",
          "No Canadá, a atividade ocupa todo o território, inclusive o norte de tundra e taiga, enquanto nos EUA se concentra na Califórnia",
          "Nos EUA, a produção se restringe ao sul por causa do clima, enquanto o Canadá se organiza nos belts, como o milk belt e o corn belt",
          "A Califórnia se destaca pela produção de algodão e milho, enquanto os belts reúnem principalmente a fruticultura estadunidense",
          "Nos dois países, a produção se organiza em cinturões, e a Califórnia é a única região agrícola importante dos EUA",
        ],
        correta: 0,
        explicacao:
          "Os belts são dos EUA; no Canadá o clima limita a produção ao sul; a Califórnia se destaca na produção de frutas.",
      },
    ],

    /* ---- 2 PERGUNTAS DIFÍCEIS (30 pontos) ---- */
    dificeis: [
      {
        // Q17 — resposta: D
        texto:
          "O Vale do Silício, na Califórnia, é o principal tecnopolo dos EUA e reúne empresas de tecnologia da informação, em uma região que também apresenta características físicas específicas.",
        pergunta:
          "Com base nas informações sobre os EUA, é correto afirmar que o Vale do Silício:",
        alternativas: [
          "Integra a Manufacturing Belt, área industrial mais antiga, situada em região de clima temperado, com floresta caducifólia",
          "Integra a Sun Belt, área industrial mais nova, situada em região de clima subtropical, com floresta úmida e pântanos",
          "Destaca-se pela produção de frutas, no setor agropecuário, em área de planaltos velhos e desgastados no leste do país",
          "Integra a Sun Belt, área industrial mais nova, em região de clima mediterrâneo e próxima à falha transcorrente de San Andreas",
          "Localiza-se no sudeste do Canadá, entre os Grandes Lagos, em área de dobramentos modernos e clima temperado",
        ],
        correta: 3,
        explicacao:
          "O Vale do Silício integra a Sun Belt e está na Califórnia, de clima mediterrâneo e cortada pela falha de San Andreas.",
      },
      {
        // Q18 — resposta: C
        texto:
          "Embora vizinhos e economicamente desenvolvidos, EUA e Canadá apresentam diferenças importantes em sua organização natural e produtiva, ao mesmo tempo em que compartilham elementos como os Grandes Lagos.",
        pergunta:
          "Sobre as semelhanças e diferenças entre os dois países, é correto afirmar que:",
        alternativas: [
          "A bacia do Mississipi-Missouri é a principal do Canadá, enquanto a do São Lourenço é a mais importante dos EUA, e os Grandes Lagos são de origem vulcânica",
          "A agropecuária se distribui por todo o território dos dois países, pois o clima temperado predomina do extremo norte do Canadá ao sul dos EUA",
          "O São Lourenço é a principal bacia canadense e o Mississipi-Missouri, a estadunidense; os Grandes Lagos, de origem glacial, ficam no sudeste do Canadá e no nordeste dos EUA",
          "O clima mediterrâneo, com maquis e garrigues, ocorre no sul do Canadá, enquanto o subtropical, com pântanos, ocorre no centro-norte dos EUA",
          "A indústria dos dois países se concentra no oeste, em torno das Rochosas e da falha de San Andreas, tendo Vancouver e o Vale do Silício como únicos polos",
        ],
        correta: 2,
        explicacao:
          "São Lourenço (Canadá) e Mississipi-Missouri (EUA); os Grandes Lagos, glaciais, ficam no sudeste canadense e no nordeste estadunidense.",
      },
    ],
  },
};
