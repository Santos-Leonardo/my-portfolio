const PROJECTS = [

    {
        name: 'Due Diligence System',
        shortName: 'due-diligence-system',
        summaryEN: 'I designed and built an innovative due diligence automation system that reduced a full-day manual process into just four minutes. The platform aggregates large volumes of data by scraping and collecting information from multiple external sources, including Google News, YouTube, SEC filings, Reddit, background-check APIs, and litigation-check APIs. The system then organizes and sanitizes all incoming data and sends it to AI models, which summarize and convert the raw data into clear, concise, and actionable reports.\nThese results are presented through a modern, intuitive front-end. Every output is automatically stored in both the internal database and the company’s Google Drive. New and innovative features will be added to the project in the future.',
        summaryPT: 'Desenvolvi um sistema inovador de automação de due diligence que reduziu um processo manual de um dia inteiro para apenas quatro minutos. A plataforma agrega grandes volumes de dados, coletando informações de diversas fontes externas, incluindo Google News, YouTube, registros da SEC, Reddit, APIs de verificação de antecedentes e APIs de verificação de litígios. O sistema então organiza e higieniza todos os dados recebidos e os envia para modelos de IA, que resumem e convertem os dados brutos em relatórios claros, concisos e acionáveis.\nEsses resultados são apresentados por meio de uma interface moderna e intuitiva. Cada relatório é armazenado automaticamente tanto no banco de dados interno quanto no Google Drive da empresa. Novas funcionalidades inovadoras serão adicionadas ao projeto futuramente.',
        stack: ['react', 'typescript', 'python', 'mysql', 'restapi', 'git'],
        link: 'https://dd.investdig.com/',
        github: '',
        ai: true,
        photos: 9
    },
    {
        name: 'GAIA - SIG Web Platform',
        shortName: 'gaia-sig-web-platform',
        summaryEN: 'GAIA is a revolutionary GIS web platform designed to transform how environmental data is analyzed and decisions are made. Engineered for real-time geospatial analysis, GAIA handles massive datasets with unmatched speed and precision, enabling scientists, researchers, and policymakers to act on critical environmental information.\nIts intuitive interface combines spatial analytics with robust visualization tools, offering interaction with shapefiles, marine detection data, vessel routes, dynamic environmental layers, and much more. GAIA also stands alone in its ability to assess human impact on whales and dolphins along the entire Brazilian coastline. This innovative proprietary functionality empowers users to predict risk zones, and support conservation strategies that directly influence policy-making and operational planning.\n I made the entire system from scratch, designing and building the interface and making the best UX decisions. I handle all the databases in cleaning, formatting, and effectively structuring them. Beyond implementing everything, I also came up with most of the system functionalities. The system is considered the best of its kind and was delivered more than a year ahead of schedule.',
        summaryPT: 'O Sistema GAIA é uma plataforma SIG web revolucionária, projetada para transformar a forma como os dados ambientais são analisados e as decisões são tomadas. Concebido para análise geoespacial em tempo real, o Sistema GAIA lida com enormes conjuntos de dados com velocidade e precisão incomparáveis, permitindo que cientistas, pesquisadores e políticos atuem com base em informações ambientais críticas.\nSua interface intuitiva combina análise espacial com ferramentas de visualização robustas, oferecendo interação com shapefiles, dados de detecção marinha, rotas de embarcações, camadas ambientais dinâmicas, dentre diversos outros recursos. O Sistema GAIA também se destaca por sua capacidade de avaliar o impacto humano sobre baleias e golfinhos ao longo de toda a costa brasileira. Essa funcionalidade proprietária e inovadora permite que os usuários prevejam zonas de risco e apoiem estratégias de conservação que influenciam diretamente a formulação de políticas e o planejamento operacional.\nFiz todo o sistema do zero, projetando e construindo a interface e tomando as melhores decisões de UX, assim como tudo relacionado ao banco de dados e, inclusive, dando ideias de funcionalidades. O sistema é considerado o melhor do gênero e foi entregue mais de um ano antes do previsto.',
        stack: ['angular', 'python', 'typescript', 'postgresql', 'mysql', 'sqlite', 'git', 'seo'],
        link: 'https://www.gaia.aqualie.org.br',
        github: '',
        ai: false,
        photos: 9
    },
    {
        name: 'Dolphin Classifier',
        shortName: 'dolphin-classifier',
        summaryEN: 'The Dolphin Classifier is a pioneering AI-powered system designed to automatically identify dolphin species along the Brazilian coast with accuracy and speed. Using advanced acoustic analysis and machine learning models, the system transforms complex bioacoustic data into actionable insights. What once demanded days of manual processing is now completed in minutes, dramatically accelerating research workflows and empowering scientists to focus on decision-making. By streamlining the species classification process, it has driven the user conversion rate to nearly 90%, reflecting the system’s reliability and ease of use.\nI developed the entire system from scratch, designing and building the user interface while making key UX decisions and structuring the database for efficiency. I also converted the original AI script from R to Python and integrated it into a web API. The final system was delivered over a year ahead of schedule.',
        summaryPT: 'O Dolphin Classifier é um sistema alimentado por IA, projetado para identificar automaticamente espécies de golfinhos ao longo da costa brasileira, com precisão e rapidez. Usando análises acústicas avançadas e modelos de aprendizado de máquina, o sistema transforma dados bioacústicos complexos em insights práticos. O que antes exigia dias de processamento manual agora é concluído em minutos, acelerando drasticamente os fluxos de trabalho de pesquisa e permitindo que cientistas se concentrem na tomada de decisões. Ao otimizar o processo de classificação de espécies, a taxa de conversão de usuários aumentou para quase 90%, refletindo a confiabilidade e a facilidade de uso do sistema.\nDesenvolvi todo o sistema a partir do zero, projetando e construindo a interface do usuário com a melhores práticas de UX e estruturando todo o banco de dados para. Também converti o script original da AI de R para Python e o interi a uma API da Web. O sistema final foi entregue mais de um ano antes do previsto.',
        stack: ['angular', 'python', 'typescript', 'mysql', 'git', 'seo'],
        link: 'https://www.classificador.aqualie.org.br',
        github: '',
        ai: true,
        photos: 9
    },
    {
        name: 'Green Cash - Wallet App',
        shortName: 'green-cash-wallet-app',
        summaryEN: 'I developed a large-scale mobile application (also fully functional on the web) for an environmental startup. As a wallet app, it supports bank transfers, transaction history, and the ability for users to donate their balance directly to partnered NGOs. Another feature of the platform is its QR-code scanning capability, which reads supermarket receipts and automatically identifies which purchased products are recyclable. The app then displays detailed information about recyclable items and calculates how much the user can earn by disposing of them correctly.\nIt integrates seamlessly with another product in the company’s ecosystem, enabling users to log in using an auto-generated secure code. The system also includes a secure onboarding flow, allowing users to create accounts, verify documents, update personal information, and manage authentication features such as email confirmation and password recovery. The app has support for multiple languages.',
        summaryPT: 'Desenvolvi um aplicativo móvel de grande escala (também totalmente funcional na web) para uma startup ambiental. Como um aplicativo de carteira digital, ele suporta transferências bancárias, histórico de transações e a possibilidade de os usuários doarem seu saldo diretamente para ONGs parceiras. Outro recurso da plataforma é a capacidade de leitura de QR Code, que lê recibos de supermercado e identifica automaticamente quais produtos comprados são recicláveis. O aplicativo exibe então informações detalhadas sobre os itens recicláveis e calcula quanto o usuário pode ganhar ao descartá-los corretamente.\nEle se integra perfeitamente a outro produto do ecossistema da empresa, permitindo que os usuários façam login usando um código de segurança gerado automaticamente. O sistema também inclui um fluxo de integração seguro, permitindo que os usuários criem contas, verifiquem documentos, atualizem informações pessoais e gerenciem recursos de autenticação, como confirmação por e-mail e recuperação de senha. O app tem suporte a vários idiomas.',
        stack: ['angular', 'typescript', 'mysql', 'node', 'css', 'git'],
        link: '',
        github: '',
        ai: false,
        photos: 6
    },
    {
        name: 'Core Integration Server',
        shortName: 'core-integration-server',
        summaryEN: 'I built a fully functional and scalable Node.js back-end designed to serve multiple front-end applications through a centralized REST API. The server acts as the core orchestrator, managing secure authentication, enforcing strict authorization rules, and ensuring that only permitted services and users can access specific resources. It integrates with several internal and external systems, including direct communication with the OpenAI API, enabling data exchange and complex operations while maintaining reliability and performance.\nThe server handles structured data processing, formatting, and storage for advanced transformations, content generation, and automated workflows. This data is then safely persisted in robust database layers.',
        summaryPT: 'Desenvolvi um backend Node.js totalmente funcional e escalável, projetado para atender a múltiplas aplicações front-end por meio de uma API REST centralizada. O servidor atua como o orquestrador principal, gerenciando autenticação segura, aplicando regras de autorização rigorosas e garantindo que apenas serviços e usuários autorizados possam acessar recursos específicos. Ele se integra a diversos sistemas internos e externos, incluindo comunicação direta com a API da OpenAI, permitindo troca de dados e operações complexas, mantendo a confiabilidade e o desempenho.\nO servidor lida com o processamento, formatação e armazenamento de dados estruturados, geração de conteúdo e fluxos de trabalho automatizados. Esses dados são então armazenados com segurança em camadas robustas de banco de dados.',
        stack: ['node', 'typescript', 'python', 'mysql', 'git'],
        link: '',
        github: '',
        ai: true,
        photos: 0
    },
    {
        name: 'Offshore Transmitter',
        shortName: 'offshore-transmitter',
        summaryEN: 'The Offshore Transmitter is a Windows-based system engineered for real-time data transmission from oceanographic and acoustic monitoring devices. Purpose-built to support high-stakes scientific missions, it enables reliable streaming of environmental data directly from the field to research centers. By eliminating the traditional wait for physical data retrieval, Aqualie Live accelerated scientific operations at an unprecedented scale, reducing data processing time by over 60 days.\nI engineered and designed the entire system architecture—from the algorithm and data transmission method to the user interface and data handling workflows. This includes how data is stored, processed on the server, and retrieved through the API.',
        summaryPT: 'O Transmissor Offshore é um sistema baseado em Windows, projetado para transmissão de dados em tempo real a partir de dispositivos de monitoramento oceanográfico e acústico. Desenvolvido especificamente para apoiar missões científicas de alto risco, ele permite o streaming confiável de dados ambientais diretamente do campo para os centros de pesquisa. Ao eliminar a tradicional espera pela recuperação física de dados, o Aqualie Live acelerou as operações científicas em uma escala sem precedentes, reduzindo o tempo de processamento de dados em mais de 60 dias.\nEu projetei toda a arquitetura do sistema - desde os algoritmos e o método de transmissão de dados até a interface do usuário, incluindo como os dados são armazenados, processados no servidor e recuperados através da API.',
        stack: ['python', 'sqlite', 'mysql', 'git'],
        link: '',
        github: '',
        ai: false,
        photos: 3
    },
    {
        name: 'AI-Assisted Intelligence Server',
        shortName: 'ai-assisted-intelligence-server',
        summaryEN: 'This Python server is designed to perform advanced tasks that require data intelligence, automation, and deep external integrations. By integrating with OpenAI models, the server performs intelligent summarization, classification, decision assistance, and content validation. It also connects directly to the SEC API, scrapes data from YouTube and Google News, and aggregates information from multiple web sources to support complex workflows.\nEquipped with robust document parsers and audio transcription tools, it processes videos, PDFs, articles, and regulatory documents, transforming them into structured, analyzable formats.',
        summaryPT: 'Este servidor Python foi projetado para executar tarefas avançadas que exigem inteligência de dados, automação e integrações externas profundas. Ao integrar-se com modelos da OpenAI, o servidor realiza sumarizações, classificação, auxília tomada de decisões e validação de conteúdo. Ele também se conecta diretamente à API da SEC, extrai dados do YouTube e do Google News e agrega informações de múltiplas fontes da web para dar suporte a fluxos de trabalho complexos.\nEquipado com analisadores de documentos robustos e ferramentas de transcrição de áudio, ele processa vídeos, PDFs, artigos e documentos regulatórios, transformando-os em formatos estruturados e analisáveis.',
        stack: ['python', 'restapi', 'git'],
        link: '',
        github: '',
        ai: true,
        photos: 0
    },
    {
        name: 'DIG Website',
        shortName: 'dig-website',
        summaryEN: 'I redevelopment a company’s website, replacing their old platform with a modern, high-performance system built from scratch. The website integrates real-time financial data through external APIs, displaying up-to-the-second information on stocks, cryptocurrencies, and commodities. I also implemented secure communication features, allowing users to directly contact the company’s board and easily subscribe to newsletters.\nThe project focused on usability, SEO, visual clarity, and trust. I designed and implemented a fully responsive interface with a professional, finance-oriented aesthetic.',
        summaryPT: 'Redesenvolvi o website de uma empresa, substituindo sua antiga plataforma por um sistema moderno e de alto desempenho, construído do zero. O website integra dados financeiros em tempo real por meio de APIs externas, exibindo informações atualizadas sobre ações, criptomoedas e commodities. Também implementei recursos de comunicação segura, permitindo que os usuários entrem em contato diretamente com a diretoria da empresa e se inscrevam facilmente em newsletters.\nO projeto focou em usabilidade, SEO, clareza visual e confiança. Desenvolvi e implementei uma interface totalmente responsiva com uma estética profissional voltada para o setor financeiro.',
        stack: ['angular', 'typescript', 'mysql', 'seo', 'git'],
        link: 'https://www.investdig.com/',
        github: '',
        ai: false,
        photos: 9
    },
    {
        name: 'CMS (Aqualie Institute)',
        shortName: 'cms-aqualie-institute',
        summaryEN: 'This CMS was designed to give the management team full control over their content without requiring technical knowledge. Built with simplicity and strong security practices in mind, the system provides a fast and intuitive interface where administrators can create, edit, and delete a wide range of content types. I implemented authentication layers, permission controls, input sanitization, and secure file handling to maintain system integrity.',
        summaryPT: 'Este CMS foi projetado para dar à equipe de gestão controle total sobre o conteúdo, sem exigir conhecimento técnico. Construído com simplicidade e fortes práticas de segurança, o sistema oferece uma interface rápida e intuitiva onde os administradores podem criar, editar e excluir vários tipos de conteúdo. Implementei camadas de autenticação, controles de permissão, higienização de entrada e manipulação segura de arquivos para manter a integridade do sistema.',
        stack: ['react', 'typescript', 'mysql', 'restapi', 'git'],
        link: '',
        github: '',
        ai: false,
        photos: 3
    },
    {
        name: 'Labs - Academic Management System',
        shortName: 'labs-academic-management-system',
        summaryEN: 'I built an online academic management system designed to centralize classroom activities and streamline the interaction between teachers and students. The platform supports curricular units, classes, attendance, and participation records. Teachers can create lessons within each unit, track student presence, and register positive or negative participation events. Students have access to their personal dashboards, displaying a chronological history of merits and difficulties, as well as a visual or tabular presence map. On the teacher side, classroom management is optimized through a clear, table-based interface listing all students in each unit.\nBeyond classroom control, the system includes a structured exercise workflow that guides both teachers and students through multi-step assignments. Teachers can create exercises with defined checkpoints, while students immediately see newly published tasks and mark each phase as completed. As students progress, the teacher views a real-time progress table with visual indicators, can respond when a student requests help, and assigns a final grade once all steps are completed. Because this is an internal use only system with sensitive data, no images can be shown.',
        summaryPT: 'Desenvolvi um sistema online de gestão acadêmica projetado para centralizar as atividades em sala de aula e otimizar a interação entre professores e alunos. A plataforma suporta unidades curriculares, turmas, frequência e registros de participação. Os professores podem criar aulas dentro de cada unidade, acompanhar a presença dos alunos e registrar eventos de participação positivos ou negativos. Os alunos têm acesso aos seus painéis pessoais, que exibem um histórico cronológico de méritos e dificuldades, bem como um mapa de presença visual ou tabular. Para os professores, a gestão da sala de aula é otimizada por meio de uma interface clara, baseada em tabelas, que lista todos os alunos de cada unidade.\nAlém do controle da sala de aula, o sistema inclui um fluxo de trabalho estruturado para exercícios que guia professores e alunos em tarefas com várias etapas. Os professores podem criar exercícios com pontos de verificação definidos, enquanto os alunos visualizam imediatamente as novas tarefas publicadas e marcam cada fase como concluída. À medida que os alunos progridem, o professor visualiza uma tabela de progresso em tempo real com indicadores visuais, pode responder quando um aluno solicita ajuda e atribuir uma nota final após a conclusão de todas as etapas. Por se tratar de um sistema de uso interno com dados sensíveis, nenhuma imagem pode ser exibida.',
        stack: ['angular', 'php', 'mysql'],
        link: 'https://pae.ipportalegre.pt/',
        github: '',
        ai: false,
        photos: 3
    },
    {
        name: 'Bikcraft',
        shortName: 'bikcraft',
        summaryEN: 'For this project, I was responsible for implementing the entire website based on an existing UI design. The platform was built for a local small business in handcrafted bikes and offering insurance services. My role was to translate the design into a smooth, clean, and fully functional website. This is a fictional company, though the project is real.',
        summaryPT: 'Neste projeto, fui responsável pela implementação de todo o website, baseado em um design de interface já existente. A plataforma foi criada para uma pequena empresa local de fabricação de bicicletas artesanais e que oferece serviços de seguro. Meu papel foi traduzir o design em um website fluido, limpo e totalmente funcional. Esta é uma empresa fictícia, embora o projeto seja real.',
        stack: ['javascript', 'php', 'html', 'css', 'seo'],
        link: '',
        github: '',
        ai: false,
        photos: 9
    },
    {
        name: 'EcoPoint System',
        shortName: 'ecopoint-system',
        summaryEN: 'The EcoPoint System automates and manages the full operational workflow of multiple recycling stations. Users authenticate using a secure code generated by another app in the company’s ecosystem. The system connects directly to a physical barcode scanner, allowing users to scan the packaging of products they purchased in supermarkets. Once scanned, the platform checks whether each item is already registered in the user’s account and validates eligibility for rewards.\nWhen a package is correctly returned, the system automatically credits a monetary reward to the user’s wallet in the companion app. It also guides users by showing exactly which recycling container each item belongs to, ensuring proper disposal.',
        summaryPT: 'O Sistema de EcoPoint automatiza e gerencia todo o fluxo de trabalho de várias estações de reciclagem. Os usuários se autenticam usando um código de segurança gerado por outro aplicativo no ecossistema da empresa. O sistema se conecta diretamente a um leitor de código de barras físico, permitindo que os usuários escaneiem as embalagens dos produtos que compraram em supermercados. Após a leitura, a plataforma verifica se cada item já está cadastrado na conta do usuário e valida a elegibilidade para recompensas.\nQuando uma embalagem é devolvida corretamente, o sistema credita automaticamente uma recompensa monetária na carteira do usuário no aplicativo complementar. Ele também orienta os usuários, mostrando exatamente a qual contêiner de reciclagem cada item pertence, garantindo o descarte correto.',
        stack: ['angular', 'typescript', 'mysql', 'node', 'git'],
        link: '',
        github: '',
        ai: false,
        photos: 3
    },
    {
        name: 'REST API Server',
        shortName: 'rest-api-server',
        summaryEN: 'I designed a dedicated API, responsible for exposing structured, secure, and high-performance endpoints to all internal and external consumers. It centralizes the logic for data access, transformation, validation, and response formatting, ensuring consistent communication across the entire ecosystem. Built with scalability in mind, the server manages rate-limiting, caching strategies, and fault-tolerant request handling to ensure optimal performance.\nBeyond serving requests, this API server is engineered with strict authentication and authorization flows, integrating cleanly with external providers, internal business logic layers, and multiple databases.',
        summaryPT: 'Desenvolvi uma API dedicada, responsável por expor endpoints estruturados, seguros e de alto desempenho para todos os consumidores internos e externos. Ela centraliza a lógica de acesso, transformação, validação e formatação de respostas dos dados, garantindo uma comunicação consistente em todo o ecossistema. Construído com foco em escalabilidade, o servidor gerencia rate-limiting, cache e tratamento de requisições tolerante a falhas.\nAlém de atender às requisições, este servidor foi projetado com fluxos rigorosos de autenticação e autorização, integrando-se perfeitamente com provedores externos, camadas de lógica de negócios internas e múltiplos bancos de dados.',
        stack: ['node', 'typescript', 'mysql', 'sqlite', 'git'],
        link: '',
        github: '',
        ai: false,
        photos: 0
    },
    {
        name: 'Management System (Green Cash)',
        shortName: 'management-system-green-cash',
        summaryEN: 'I developed a management system for the company’s executive board, designed to centralize operational functions. The platform handles highly sensitive data, including internal messages, financial transactions, cashback operations, credit management, and day-to-day business activities. The system provides a structured, intuitive interface that keeps complex workflows organized and accessible, and was built with security as a core priority.',
        summaryPT: 'Desenvolvi um sistema de gestão para a diretoria executiva da empresa, projetado para centralizar as funções operacionais. A plataforma lida com dados altamente sensíveis, incluindo mensagens internas, transações financeiras, operações de cashback, gestão de crédito e atividades comerciais do dia a dia. O sistema oferece uma interface estruturada e intuitiva que mantém fluxos de trabalho complexos organizados e acessíveis, e foi construído com a segurança como prioridade fundamental.',
        stack: ['angular', 'typescript', 'mysql', 'node', 'git'],
        link: '',
        github: '',
        ai: false,
        photos: 3
    },
    {
        name: 'ATAALO Website',
        shortName: 'ataalo-website',
        summaryEN: 'With the website, travelers around the world could easily hire tourism guides. The entire website is crafted with a modern, visually immersive design, optimized for speed, simplicity, and an intuitive user-centered experience. Each guide and city has a personalized page filled with curated images, essential information, ratings, and recommended experiences.',
        summaryPT: 'Neste site, viajantes do mundo todo podiam contratar guias turísticos com facilidade. Todo o site foi desenvolvido com um design moderno e visualmente envolvente, otimizado para velocidade, simplicidade e uma experiência intuitiva e centrada no usuário. Cada guia e cidade possui uma página personalizada repleta de imagens selecionadas, informações essenciais, avaliações e experiências recomendadas.',
        stack: ['javascript', 'html', 'css', 'adobexd', 'seo'],
        link: 'http://ataalo.com/',
        github: '',
        ai: false,
        photos: 0
    },
    {
        name: 'CipherWall',
        shortName: 'cipherwall',
        summaryEN: 'I built this project to validate and compare a custom encryption algorithm across different data types and sizes. The system automatically generates test packages, applies encryption using multiple algorithms, and then performs decryption to evaluate accuracy, speed, and reliability. This enabled a structured, repeatable way to measure performance and determine which approach delivers the best results for each scenario.',
        summaryPT: 'Desenvolvi este projeto para validar e comparar um algoritmo de criptografia personalizado em diferentes tipos e tamanhos de dados. O sistema gera automaticamente pacotes de teste, aplica criptografia usando múltiplos algoritmos e, em seguida, realiza a descriptografia para avaliar a precisão, a velocidade e a confiabilidade. Isso possibilitou uma maneira estruturada e repetível de medir o desempenho e determinar qual abordagem oferece os melhores resultados para cada cenário.',
        stack: ['php', 'html', 'css'],
        link: '',
        github: '',
        ai: false,
        photos: 0
    },
    {
        name: 'Blog (Green Cash)',
        shortName: 'blog-green-cash',
        summaryEN: 'I built a simple, modern blog focused on environmental content, designed with a clear and user-friendly interface. The layout prioritizes readability, smooth navigation, and a clean visual structure to keep users engaged. Native carousels were implemented to highlight featured articles and important topics, enhancing the overall browsing experience. The blog has a section to users subscribe to the company\'s newsletter.',
        summaryPT: 'Criei um blog simples e moderno focado em conteúdo ambiental, projetado com uma interface clara e intuitiva. O layout prioriza a legibilidade, a navegação fluida e uma estrutura visual limpa para manter os usuários engajados. Carrosséis nativos foram implementados para destacar artigos em destaque e tópicos importantes, aprimorando a experiência geral de navegação. O blog possui uma sessão para que os usuários se inscrevam na newsletter da empresa.',
        stack: ['javascript', 'php', 'html', 'css', 'seo'],
        link: '',
        github: '',
        ai: false,
        photos: 3
    },
    {
        name: 'DevsBook',
        shortName: 'devsbook',
        summaryEN: 'I developed a small social media platform inspired by Facebook, built from the ground up to support core features. Users can create posts, like and comment on content, manage friend connections, upload images, and personalize their profile pages. The platform integrates with a database to handle user data, media uploads, and all social interactions.',
        summaryPT: 'Desenvolvi uma pequena plataforma de mídia social inspirada no Facebook, construída do zero para suportar funcionalidades essenciais. Os usuários podem criar publicações, curtir e comentar conteúdo, gerenciar conexões de amigos, fazer upload de imagens e personalizar seus perfis. A plataforma integra-se a um banco de dados para gerenciar dados de usuários, uploads de mídia e todas as interações sociais.',
        stack: ['php', 'html', 'css', 'mysql'],
        link: '',
        github: '',
        ai: false,
        photos: 3
    },
    {
        name: 'TimeTrack System',
        shortName: 'timetrack-system',
        summaryEN: 'I built a productivity time-tracking system designed to help users measure how many hours they dedicate to work, study, or any other task. The interface allows users to create unlimited trackers, each with its own name and description, making it easy to organize activities and maintain clarity. The system supports starting, pausing, and resuming timers. When a task is completed, the entry is automatically saved to the history, giving users a clear record of their productivity over time.',
        summaryPT: 'Criei um sistema de controle de produtividade projetado para ajudar os usuários a mensurar quantas horas dedicam ao trabalho, estudo ou qualquer outra tarefa. A interface permite a criação de um número ilimitado de registros, cada um com seu próprio nome e descrição, facilitando a organização das atividades e mantendo a clareza. O sistema permite iniciar, pausar e retomar os cronômetros. Ao concluir uma tarefa, o registro é salvo automaticamente no histórico, fornecendo aos usuários um registro claro de sua produtividade ao longo do tempo.',
        stack: ['javascript', 'html', 'css'],
        link: '',
        github: '',
        ai: false,
        photos: 3
    },
    {
        name: 'Draw Board For Kids',
        shortName: 'draw-board-for-kids',
        summaryEN: 'I created an interactive drawing board designed to spark creativity and curiosity in children. The system provides a simple, intuitive interface where kids can draw freely using multiple colors.',
        summaryPT: 'Criei uma lousa de desenho interativa projetada para despertar a criatividade e a curiosidade nas crianças. O sistema oferece uma interface simples e intuitiva, onde as crianças podem desenhar livremente usando diversas cores.',
        stack: ['javascript', 'html', 'css'],
        link: '',
        github: '',
        ai: false,
        photos: 0
    },
    {
        name: 'JS Quiz',
        shortName: 'js-quiz',
        summaryEN: 'This is a simple quiz game focused on JavaScript-related questions, designed to help users test their knowledge in a fun and interactive way. The interface is straightforward and easy to use, allowing players to progress through a series of questions. At the end of the quiz, the system calculates and displays the final score.',
        summaryPT: 'Este é um jogo de perguntas simples focado em JavaScript, projetado para ajudar os usuários a testarem seus conhecimentos de forma divertida e interativa. A interface é intuitiva e fácil de usar, permitindo que os jogadores avancem por uma série de perguntas. Ao final do quiz, o sistema calcula e exibe a pontuação final.',
        stack: ['javascript', 'html', 'css'],
        link: '',
        github: '',
        ai: false,
        photos: 3
    }
];

export default PROJECTS;
