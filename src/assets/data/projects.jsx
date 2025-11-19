const PROJECTS = [

    {
        name: 'GAIA',
        shortName: 'gaia',
        summaryEN: 'GAIA is a revolutionary GIS web platform designed to transform how environmental data is analyzed and decisions are made. Engineered for real-time geospatial analysis, GAIA handles massive datasets with unmatched speed and precision, enabling scientists, researchers, and policymakers to act on critical environmental information.\nIts intuitive interface combines spatial analytics with robust visualization tools, offering interaction with shapefiles, marine detection data, vessel routes, dynamic environmental layers, and much more. GAIA also stands alone in its ability to assess human impact on whales and dolphins along the entire Brazilian coastline. This innovative proprietary functionality empowers users to predict risk zones, and support conservation strategies that directly influence policy-making and operational planning.\n I made the entire system from scratch, designing and building the interface and making the best UX decisions. I handle all the databases in cleaning, formatting, and effectively structuring them. Beyond implementing everything, I also came up with most of the system functionalities. The system is considered the best of its kind and was delivered more than a year ahead of schedule.',
        summaryPT: 'O Sistema GAIA é uma plataforma SIG web revolucionária, projetada para transformar a forma como os dados ambientais são analisados e as decisões são tomadas. Concebido para análise geoespacial em tempo real, o Sistema GAIA lida com enormes conjuntos de dados com velocidade e precisão incomparáveis, permitindo que cientistas, pesquisadores e políticos atuem com base em informações ambientais críticas.\nSua interface intuitiva combina análise espacial com ferramentas de visualização robustas, oferecendo interação com shapefiles, dados de detecção marinha, rotas de embarcações, camadas ambientais dinâmicas, dentre diversos outros recursos. O Sistema GAIA também se destaca por sua capacidade de avaliar o impacto humano sobre baleias e golfinhos ao longo de toda a costa brasileira. Essa funcionalidade proprietária e inovadora permite que os usuários prevejam zonas de risco e apoiem estratégias de conservação que influenciam diretamente a formulação de políticas e o planejamento operacional.\nFiz todo o sistema do zero, projetando e construindo a interface e tomando as melhores decisões de UX, assim como tudo relacionado ao banco de dados e, inclusive, dando ideias de funcionalidades. O sistema é considerado o melhor do gênero e foi entregue mais de um ano antes do previsto.',
        stack: ['angular', 'python', 'typescript', 'postgresql', 'mysql', 'sqlite', 'html', 'css', 'git'],
        link: 'https://www.gaia.aqualie.org.br',
        github: '',
        ai: false,
        photos: 9
    },
    {
        name: 'Dolphin Classifier',
        shortName: 'classifier',
        summaryEN: 'The Dolphin Classifier is a pioneering AI-powered system designed to automatically identify dolphin species along the Brazilian coast with accuracy and speed. Using advanced acoustic analysis and machine learning models, the system transforms complex bioacoustic data into actionable insights. What once demanded days of manual processing is now completed in minutes, dramatically accelerating research workflows and empowering scientists to focus on decision-making. By streamlining the species classification process, it has driven the user conversion rate to nearly 90%, reflecting the system’s reliability and ease of use.\nI developed the entire system from scratch, designing and building the user interface while making key UX decisions and structuring the database for efficiency. I also converted the original AI script from R to Python and integrated it into a web API. The final system was delivered over a year ahead of schedule.',
        summaryPT: 'O Dolphin Classifier é um sistema alimentado por IA, projetado para identificar automaticamente espécies de golfinhos ao longo da costa brasileira, com precisão e rapidez. Usando análises acústicas avançadas e modelos de aprendizado de máquina, o sistema transforma dados bioacústicos complexos em insights práticos. O que antes exigia dias de processamento manual agora é concluído em minutos, acelerando drasticamente os fluxos de trabalho de pesquisa e permitindo que cientistas se concentrem na tomada de decisões. Ao otimizar o processo de classificação de espécies, a taxa de conversão de usuários aumentou para quase 90%, refletindo a confiabilidade e a facilidade de uso do sistema.\nDesenvolvi todo o sistema a partir do zero, projetando e construindo a interface do usuário com a melhores práticas de UX e estruturando todo o banco de dados para. Também converti o script original da AI de R para Python e o interi a uma API da Web. O sistema final foi entregue mais de um ano antes do previsto.',
        stack: ['angular', 'python', 'typescript', 'mysql', 'html', 'css', 'git'],
        link: 'https://www.classificador.aqualie.org.br',
        github: '',
        ai: true,
        photos: 9
    },
    {
        name: 'Offshore Transmitter',
        shortName: 'transmitter',
        summaryEN: 'The Offshore Transmitter is a Windows-based system engineered for real-time data transmission from oceanographic and acoustic monitoring devices. Purpose-built to support high-stakes scientific missions, it enables reliable streaming of environmental data directly from the field to research centers. By eliminating the traditional wait for physical data retrieval, Aqualie Live accelerated scientific operations at an unprecedented scale, reducing data processing time by over 60 days.\nI engineered and designed the entire system architecture—from the algorithm and data transmission method to the user interface and data handling workflows. This includes how data is stored, processed on the server, and retrieved through the API.',
        summaryPT: 'O Transmissor Offshore é um sistema baseado em Windows, projetado para transmissão de dados em tempo real a partir de dispositivos de monitoramento oceanográfico e acústico. Desenvolvido especificamente para apoiar missões científicas de alto risco, ele permite o streaming confiável de dados ambientais diretamente do campo para os centros de pesquisa. Ao eliminar a tradicional espera pela recuperação física de dados, o Aqualie Live acelerou as operações científicas em uma escala sem precedentes, reduzindo o tempo de processamento de dados em mais de 60 dias.\nEu projetei toda a arquitetura do sistema - desde os algoritmos e o método de transmissão de dados até a interface do usuário, incluindo como os dados são armazenados, processados no servidor e recuperados através da API.',
        stack: ['python', 'sqlite', 'mysql', 'git'],
        link: '',
        github: '',
        ai: false,
        photos: 3
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
        name: 'AI-Assisted Intelligence Server',
        shortName: 'ai-server',
        summaryEN: 'This Python server is designed to perform advanced tasks that require data intelligence, automation, and deep external integrations. By integrating with OpenAI models, the server performs intelligent summarization, classification, decision assistance, and content validation. It also connects directly to the SEC API, scrapes data from YouTube and Google News, and aggregates information from multiple web sources to support complex workflows.\nEquipped with robust document parsers and audio transcription tools, it processes videos, PDFs, articles, and regulatory documents, transforming them into structured, analyzable formats.',
        summaryPT: 'Este servidor Python foi projetado para executar tarefas avançadas que exigem inteligência de dados, automação e integrações externas profundas. Ao integrar-se com modelos da OpenAI, o servidor realiza sumarizações, classificação, auxília tomada de decisões e validação de conteúdo. Ele também se conecta diretamente à API da SEC, extrai dados do YouTube e do Google News e agrega informações de múltiplas fontes da web para dar suporte a fluxos de trabalho complexos.\nEquipado com analisadores de documentos robustos e ferramentas de transcrição de áudio, ele processa vídeos, PDFs, artigos e documentos regulatórios, transformando-os em formatos estruturados e analisáveis.',
        stack: ['python', 'git'],
        link: '',
        github: '',
        ai: true,
        photos: 0
    },
    {
        name: 'REST API Server',
        shortName: 'api-server',
        summaryEN: 'I designed a dedicated API, responsible for exposing structured, secure, and high-performance endpoints to all internal and external consumers. It centralizes the logic for data access, transformation, validation, and response formatting, ensuring consistent communication across the entire ecosystem. Built with scalability in mind, the server manages rate-limiting, caching strategies, and fault-tolerant request handling to ensure optimal performance.\nBeyond serving requests, this API server is engineered with strict authentication and authorization flows, integrating cleanly with external providers, internal business logic layers, and multiple databases.',
        summaryPT: 'Desenvolvi uma API dedicada, responsável por expor endpoints estruturados, seguros e de alto desempenho para todos os consumidores internos e externos. Ela centraliza a lógica de acesso, transformação, validação e formatação de respostas dos dados, garantindo uma comunicação consistente em todo o ecossistema. Construído com foco em escalabilidade, o servidor gerencia rate-limiting, cache e tratamento de requisições tolerante a falhas.\nAlém de atender às requisições, este servidor foi projetado com fluxos rigorosos de autenticação e autorização, integrando-se perfeitamente com provedores externos, camadas de lógica de negócios internas e múltiplos bancos de dados.',
        stack: ['node', 'typescript', 'mysql', 'sqlite', 'git'],
        link: '',
        github: '',
        ai: false,
        photos: 0
    }
];

export default PROJECTS;
