import { Subject, QuizQuestion } from '@/types/learning';

const q = (id: string, text: string, options: string[], correctIndex: number, explanation: string, difficulty: 'easy' | 'medium' | 'hard' = 'medium'): QuizQuestion => ({
  id, text, options, correctIndex, explanation, difficulty, type: 'mcq'
});

export const subjects: Subject[] = [
  {
    id: 'history',
    name: 'History',
    fullName: 'India and the Contemporary World II',
    icon: '🏛️',
    colorClass: 'history',
    chapters: [
      {
        id: 'h1', subjectId: 'history', name: 'Rise of Nationalism in Europe',
        lessons: [
          {
            id: 'h1l1', chapterId: 'h1', title: 'The French Revolution & Nationalism',
            concept: 'The French Revolution of 1789 was the first clear expression of nationalism. It transferred sovereignty from the monarchy to the body of French citizens.',
            explanation: 'Before the revolution, France was ruled by an absolute monarch. The revolution introduced ideas of la patrie (the fatherland) and le citoyen (the citizen), emphasizing that people were the nation.',
            visualization: 'monarchy_to_republic',
            interactionPrompt: 'Tap to see how power shifted from the King to the People',
            question: q('h1l1q', 'What was the main idea that the French Revolution introduced?', ['Divine right of kings', 'Sovereignty belongs to citizens', 'Colonial expansion', 'Military dictatorship'], 1, 'The French Revolution transferred sovereignty from the monarchy to the citizens, introducing the concept of a nation belonging to its people.')
          },
          {
            id: 'h1l2', chapterId: 'h1', title: 'Napoleon and Nationalism',
            concept: 'Napoleon carried forward revolutionary ideas across Europe through his conquests, introducing the Napoleonic Code which abolished privileges based on birth.',
            explanation: 'The Napoleonic Code established equality before law, secured the right to property, and abolished all feudal privileges. This spread modern ideas across Europe.',
            visualization: 'napoleon_map',
            interactionPrompt: 'Explore the territories Napoleon influenced',
            question: q('h1l2q', 'What did the Napoleonic Code establish?', ['Monarchy in all nations', 'Equality before the law', 'Colonial rule', 'Religious governance'], 1, 'The Napoleonic Code established equality before the law, right to property, and abolished feudal privileges across Napoleon\'s territories.')
          },
          {
            id: 'h1l3', chapterId: 'h1', title: 'Unification of Germany & Italy',
            concept: 'Germany was unified under Prussian leadership by Otto von Bismarck through three wars. Italy was unified through the efforts of Mazzini, Garibaldi, and Cavour.',
            explanation: 'Bismarck used a policy of "blood and iron" combining warfare and diplomacy. In Italy, Mazzini provided the ideological framework, Cavour the diplomatic strategy, and Garibaldi the military campaigns.',
            visualization: 'unification_timeline',
            interactionPrompt: 'Compare the paths of German and Italian unification',
            question: q('h1l3q', 'Who is known as the architect of German unification?', ['Mazzini', 'Garibaldi', 'Otto von Bismarck', 'Cavour'], 2, 'Otto von Bismarck, the chief minister of Prussia, used his policy of "blood and iron" to unify Germany through three wars.')
          },
        ]
      },
      {
        id: 'h2', subjectId: 'history', name: 'Nationalism in India',
        lessons: [
          {
            id: 'h2l1', chapterId: 'h2', title: 'Mahatma Gandhi & Non-Cooperation',
            concept: 'Gandhi proposed non-cooperation with the British as a way to assert Indian independence. If Indians refused to cooperate, British rule would collapse.',
            explanation: 'The Non-Cooperation Movement (1920-22) involved boycott of foreign goods, surrender of titles, boycott of government institutions, and promotion of khadi and Indian goods.',
            visualization: 'non_cooperation',
            interactionPrompt: 'Explore the different forms of non-cooperation',
            question: q('h2l1q', 'Why did Gandhi call off the Non-Cooperation Movement?', ['British agreed to demands', 'Violence at Chauri Chaura', 'Lack of public support', 'World War began'], 1, 'Gandhi called off the movement after the violent incident at Chauri Chaura in February 1922, where a mob set fire to a police station killing 22 policemen.')
          },
          {
            id: 'h2l2', chapterId: 'h2', title: 'Civil Disobedience Movement',
            concept: 'The Civil Disobedience Movement began with the famous Dandi March in 1930. Gandhi and followers walked 240 miles to make salt, breaking the British salt law.',
            explanation: 'Salt was chosen because it was something every Indian used and the British tax on salt affected everyone. The movement went beyond non-cooperation — people were now breaking laws.',
            visualization: 'dandi_march',
            interactionPrompt: 'Follow Gandhi\'s route from Sabarmati to Dandi',
            question: q('h2l2q', 'Why was salt chosen as a symbol for the Civil Disobedience Movement?', ['Salt was expensive', 'Salt affected every Indian', 'British produced salt', 'Salt was scarce'], 1, 'Salt was chosen because the British salt tax affected every Indian household regardless of class, making it a powerful unifying symbol.')
          },
          {
            id: 'h2l3', chapterId: 'h2', title: 'Sense of Collective Belonging',
            concept: 'Nationalism spreads when people begin to feel they belong to a common nation. This sense was created through history, fiction, folklore, songs, and symbols.',
            explanation: 'Bankim Chandra Chattopadhyay wrote "Vande Mataram" which became the national song. Rabindranath Tagore wrote "Amar Sonar Bangla." These cultural expressions helped create a shared identity.',
            visualization: 'cultural_nationalism',
            interactionPrompt: 'Discover the cultural symbols of Indian nationalism',
            question: q('h2l3q', 'Who wrote "Vande Mataram"?', ['Rabindranath Tagore', 'Bankim Chandra Chattopadhyay', 'Mahatma Gandhi', 'Jawaharlal Nehru'], 1, 'Bankim Chandra Chattopadhyay wrote "Vande Mataram" in his novel Anandamath (1882), which became a hymn of Indian nationalism.')
          },
        ]
      },
      {
        id: 'h3', subjectId: 'history', name: 'The Making of a Global World',
        lessons: [
          {
            id: 'h3l1', chapterId: 'h3', title: 'Silk Routes & Pre-modern World',
            concept: 'The Silk Routes connected Asia, Europe, and Africa. Trade in goods, ideas, and even diseases helped shape the world long before modern globalization.',
            explanation: 'The term "Silk Routes" refers to multiple routes used for trade. Along with silk, spices, textiles, and precious metals were exchanged. Buddhism, Islam, and Christianity also spread through these routes.',
            visualization: 'silk_route',
            interactionPrompt: 'Trace the ancient trade routes across continents',
            question: q('h3l1q', 'What besides goods traveled along the Silk Routes?', ['Only silk', 'Ideas, diseases, and religions', 'Only spices', 'Only gold'], 1, 'Besides goods, the Silk Routes facilitated the exchange of ideas, religions (Buddhism, Islam, Christianity), technologies, and even diseases across continents.')
          },
        ]
      },
      {
        id: 'h4', subjectId: 'history', name: 'The Age of Industrialisation',
        lessons: [
          {
            id: 'h4l1', chapterId: 'h4', title: 'Proto-Industrialisation',
            concept: 'Before factories, there was proto-industrialisation — production for international markets using traditional methods, organized by merchants.',
            explanation: 'In the 17th-18th centuries, merchants could not expand production in towns due to guild restrictions. They turned to the countryside, where peasants did piece-work.',
            visualization: 'proto_industry',
            interactionPrompt: 'Compare traditional and factory production',
            question: q('h4l1q', 'Why did merchants turn to the countryside for production?', ['Better raw materials', 'Guild restrictions in towns', 'More factories there', 'Government orders'], 1, 'Guild restrictions in towns prevented merchants from expanding production, so they turned to the countryside where peasants worked from home.')
          },
        ]
      },
      {
        id: 'h5', subjectId: 'history', name: 'Print Culture and the Modern World',
        lessons: [
          {
            id: 'h5l1', chapterId: 'h5', title: 'The Print Revolution',
            concept: 'The printing press, developed by Gutenberg around 1440, revolutionized the spread of knowledge. Books could now be produced quickly and cheaply.',
            explanation: 'Before print, books were hand-copied — expensive and rare. Gutenberg\'s press used movable metal type, enabling mass production. This democratized knowledge and sparked cultural revolutions.',
            visualization: 'printing_press',
            interactionPrompt: 'See how the printing press transformed society',
            question: q('h5l1q', 'What was the significance of Gutenberg\'s printing press?', ['Made books more expensive', 'Enabled mass production of books', 'Only printed religious texts', 'Was only used in Germany'], 1, 'Gutenberg\'s press enabled mass production of books, making knowledge accessible and affordable, which transformed European society.')
          },
        ]
      },
    ]
  },
  {
    id: 'geography',
    name: 'Geography',
    fullName: 'Contemporary India II',
    icon: '🌍',
    colorClass: 'geography',
    chapters: [
      {
        id: 'g1', subjectId: 'geography', name: 'Resources and Development',
        lessons: [
          {
            id: 'g1l1', chapterId: 'g1', title: 'Types of Resources',
            concept: 'Resources are classified based on origin (biotic/abiotic), exhaustibility (renewable/non-renewable), ownership, and status of development.',
            explanation: 'Biotic resources come from living organisms (forests, animals). Abiotic come from non-living things (rocks, metals). Renewable resources can be replenished (solar energy, wind). Non-renewable take millions of years to form (fossil fuels).',
            visualization: 'resource_types',
            interactionPrompt: 'Sort resources into their categories',
            question: q('g1l1q', 'Which is a non-renewable resource?', ['Solar energy', 'Fossil fuels', 'Forests', 'Wind energy'], 1, 'Fossil fuels like coal, petroleum, and natural gas are non-renewable because they take millions of years to form.')
          },
          {
            id: 'g1l2', chapterId: 'g1', title: 'Soil as a Resource',
            concept: 'India has diverse soil types — alluvial, black, red, laterite, arid, and forest soils. Each supports different types of agriculture.',
            explanation: 'Alluvial soil (most fertile, found in Indo-Gangetic plains) supports wheat and rice. Black soil (Deccan plateau) is ideal for cotton. Red soil is found in eastern and southern India.',
            visualization: 'soil_map',
            interactionPrompt: 'Tap regions to discover soil types',
            question: q('g1l2q', 'Which soil type is best for growing cotton?', ['Alluvial soil', 'Red soil', 'Black soil', 'Laterite soil'], 2, 'Black soil (also called regur) is ideal for cotton cultivation due to its high moisture-holding capacity. It is found in the Deccan plateau region.')
          },
        ]
      },
      {
        id: 'g2', subjectId: 'geography', name: 'Forest and Wildlife Resources',
        lessons: [
          {
            id: 'g2l1', chapterId: 'g2', title: 'Biodiversity in India',
            concept: 'India is one of the world\'s richest countries in biological diversity. The country has about 8% of the world\'s total species.',
            explanation: 'India has 47,000+ plant species and 89,000+ animal species. Many are endemic (found nowhere else). Conservation is crucial as many species face extinction.',
            visualization: 'biodiversity',
            interactionPrompt: 'Explore India\'s biodiversity hotspots',
            question: q('g2l1q', 'What percentage of world\'s species does India have?', ['2%', '5%', '8%', '15%'], 2, 'India has approximately 8% of the world\'s total number of species, making it one of the most mega-diverse countries.')
          },
        ]
      },
      {
        id: 'g3', subjectId: 'geography', name: 'Water Resources',
        lessons: [
          {
            id: 'g3l1', chapterId: 'g3', title: 'Water Scarcity & Conservation',
            concept: 'Despite abundant rainfall, India faces water scarcity due to unequal distribution, over-exploitation, and growing demand from agriculture and industry.',
            explanation: 'Rainwater harvesting, watershed management, and building check dams are some methods to conserve water. Ancient India had sophisticated water harvesting systems.',
            visualization: 'water_cycle',
            interactionPrompt: 'Discover traditional water harvesting methods',
            question: q('g3l1q', 'What is the main cause of water scarcity in India?', ['Low rainfall', 'Unequal distribution and over-use', 'No rivers', 'Salty groundwater'], 1, 'Despite good rainfall, India faces water scarcity mainly due to unequal distribution across regions and seasons, and over-exploitation of groundwater.')
          },
        ]
      },
      {
        id: 'g4', subjectId: 'geography', name: 'Agriculture',
        lessons: [
          {
            id: 'g4l1', chapterId: 'g4', title: 'Types of Farming',
            concept: 'India has diverse farming types: subsistence (for family use), commercial (for market), and plantation farming. The Green Revolution modernized Indian agriculture.',
            explanation: 'Subsistence farming uses traditional methods on small plots. Commercial farming uses modern inputs on larger areas. The Green Revolution (1960s) introduced HYV seeds, fertilizers, and irrigation.',
            visualization: 'farming_types',
            interactionPrompt: 'Compare different farming methods',
            question: q('g4l1q', 'What did the Green Revolution introduce?', ['Traditional seeds', 'HYV seeds and modern techniques', 'Organic farming only', 'Slash and burn'], 1, 'The Green Revolution introduced High Yielding Variety (HYV) seeds, chemical fertilizers, and modern irrigation techniques to boost food production.')
          },
        ]
      },
      {
        id: 'g5', subjectId: 'geography', name: 'Minerals and Energy Resources',
        lessons: [
          {
            id: 'g5l1', chapterId: 'g5', title: 'Types of Minerals',
            concept: 'Minerals are classified as metallic (ferrous and non-ferrous) and non-metallic. India is rich in iron ore, manganese, mica, and bauxite.',
            explanation: 'Ferrous minerals contain iron (iron ore, manganese). Non-ferrous include gold, copper, bauxite. Non-metallic minerals include mica, salt, and limestone.',
            visualization: 'mineral_map',
            interactionPrompt: 'Locate major mineral deposits on India\'s map',
            question: q('g5l1q', 'Which is a ferrous mineral?', ['Bauxite', 'Mica', 'Iron ore', 'Limestone'], 2, 'Iron ore is a ferrous mineral because it contains iron. India is one of the largest producers of iron ore in the world.')
          },
        ]
      },
      {
        id: 'g6', subjectId: 'geography', name: 'Manufacturing Industries',
        lessons: [
          {
            id: 'g6l1', chapterId: 'g6', title: 'Importance of Manufacturing',
            concept: 'Manufacturing transforms raw materials into finished goods, creating employment and contributing to national income. It is the backbone of economic development.',
            explanation: 'Manufacturing contributes about 17% of India\'s GDP. The National Manufacturing Policy aims to increase this to 25%. Industries are classified by size (small/large), raw materials, and ownership.',
            visualization: 'industry_types',
            interactionPrompt: 'Explore India\'s major industrial regions',
            question: q('g6l1q', 'What percentage of India\'s GDP comes from manufacturing?', ['5%', '17%', '35%', '50%'], 1, 'Manufacturing currently contributes about 17% of India\'s GDP, and the government aims to increase this share through industrial policies.')
          },
        ]
      },
      {
        id: 'g7', subjectId: 'geography', name: 'Lifelines of National Economy',
        lessons: [
          {
            id: 'g7l1', chapterId: 'g7', title: 'Transport Networks',
            concept: 'India\'s transport network includes roadways, railways, waterways, airways, and pipelines. The Golden Quadrilateral connects the four major cities.',
            explanation: 'Railways are the most important means of transport, carrying millions daily. The Golden Quadrilateral highway connects Delhi, Mumbai, Chennai, and Kolkata.',
            visualization: 'transport_map',
            interactionPrompt: 'Trace the Golden Quadrilateral route',
            question: q('g7l1q', 'Which cities does the Golden Quadrilateral connect?', ['Delhi-Mumbai-Pune-Kolkata', 'Delhi-Mumbai-Chennai-Kolkata', 'Delhi-Jaipur-Mumbai-Chennai', 'Mumbai-Pune-Hyderabad-Chennai'], 1, 'The Golden Quadrilateral connects Delhi, Mumbai, Chennai, and Kolkata — the four metro cities forming a quadrilateral shape.')
          },
        ]
      },
    ]
  },
  {
    id: 'civics',
    name: 'Civics',
    fullName: 'Democratic Politics II',
    icon: '⚖️',
    colorClass: 'civics',
    chapters: [
      {
        id: 'c1', subjectId: 'civics', name: 'Power Sharing',
        lessons: [
          {
            id: 'c1l1', chapterId: 'c1', title: 'Why Power Sharing?',
            concept: 'Power sharing is desirable because it reduces conflict between social groups and ensures political stability. It is the very spirit of democracy.',
            explanation: 'Belgium is a great example — Dutch, French, and German speakers share power through a complex federal structure. This prevented the kind of ethnic conflict seen in Sri Lanka.',
            visualization: 'belgium_model',
            interactionPrompt: 'Compare Belgium and Sri Lanka\'s approach to diversity',
            question: q('c1l1q', 'Why did Belgium adopt power sharing?', ['International pressure', 'To accommodate linguistic diversity', 'Military requirement', 'Economic necessity'], 1, 'Belgium adopted power sharing to accommodate its diverse linguistic communities (Dutch, French, German) and prevent ethnic conflict.')
          },
          {
            id: 'c1l2', chapterId: 'c1', title: 'Forms of Power Sharing',
            concept: 'Power is shared among different organs of government (legislature, executive, judiciary), across different levels (central, state, local), and among social groups.',
            explanation: 'Horizontal distribution: among legislature, executive, judiciary. Vertical distribution: among central, state, local governments. Also shared through community governments and among political parties/pressure groups.',
            visualization: 'power_forms',
            interactionPrompt: 'Explore the different dimensions of power sharing',
            question: q('c1l2q', 'What is horizontal distribution of power?', ['Power shared between center and states', 'Power shared among legislature, executive, judiciary', 'Power shared among political parties', 'Power shared among communities'], 1, 'Horizontal distribution means power is shared among different organs of government — legislature, executive, and judiciary — at the same level.')
          },
        ]
      },
      {
        id: 'c2', subjectId: 'civics', name: 'Federalism',
        lessons: [
          {
            id: 'c2l1', chapterId: 'c2', title: 'What is Federalism?',
            concept: 'Federalism is a system where power is divided between a central authority and constituent units (states). India follows a federal structure with a strong center.',
            explanation: 'India\'s constitution divides subjects into Union List (defense, foreign affairs), State List (police, agriculture), and Concurrent List (education, forests). Residuary subjects go to the center.',
            visualization: 'federal_structure',
            interactionPrompt: 'Sort subjects into Union, State, and Concurrent lists',
            question: q('c2l1q', 'Which list contains subjects handled by both center and state?', ['Union List', 'State List', 'Concurrent List', 'Residuary List'], 2, 'The Concurrent List contains subjects on which both central and state governments can make laws, such as education and forests.')
          },
        ]
      },
      {
        id: 'c3', subjectId: 'civics', name: 'Gender, Religion and Caste',
        lessons: [
          {
            id: 'c3l1', chapterId: 'c3', title: 'Gender & Politics',
            concept: 'Despite constitutional equality, women face discrimination in politics and society. Only about 14% of India\'s MPs are women.',
            explanation: 'The feminist movement has pushed for equal rights. Reservation of 1/3 seats in local bodies (panchayats/municipalities) has increased women\'s political participation at the grassroots.',
            visualization: 'gender_politics',
            interactionPrompt: 'Explore women\'s representation in Indian politics',
            question: q('c3l1q', 'What fraction of seats is reserved for women in local government?', ['1/4', '1/3', '1/2', '1/5'], 1, 'One-third (1/3) of seats in panchayats and municipalities are reserved for women, which has significantly boosted grassroots participation.')
          },
        ]
      },
      {
        id: 'c4', subjectId: 'civics', name: 'Political Parties',
        lessons: [
          {
            id: 'c4l1', chapterId: 'c4', title: 'Role of Political Parties',
            concept: 'Political parties are essential for democracy. They contest elections, form governments, make policies, and provide opposition and accountability.',
            explanation: 'India has a multi-party system with national parties (BJP, INC, CPI-M) and state/regional parties (TMC, DMK, TDP). Parties need recognition from the Election Commission.',
            visualization: 'party_system',
            interactionPrompt: 'Explore India\'s major political parties',
            question: q('c4l1q', 'How many national parties does India currently have?', ['2', '4', '6', '8'], 2, 'India currently recognizes 6 national parties based on Election Commission criteria including minimum vote share across states.')
          },
        ]
      },
      {
        id: 'c5', subjectId: 'civics', name: 'Outcomes of Democracy',
        lessons: [
          {
            id: 'c5l1', chapterId: 'c5', title: 'Evaluating Democracy',
            concept: 'Democracy is evaluated not just by elections but by its ability to promote equality, dignity, accountability, and resolve conflicts peacefully.',
            explanation: 'Democracy may be slower in decision-making than dictatorships, but it ensures that decisions are more acceptable and legitimate. It provides a method of dealing with differences.',
            visualization: 'democracy_outcomes',
            interactionPrompt: 'Compare democratic and non-democratic outcomes',
            question: q('c5l1q', 'What is the most basic outcome of democracy?', ['Economic growth', 'Military strength', 'Accountable and responsive government', 'Fast decisions'], 2, 'The most basic outcome of democracy is producing a government that is accountable to the citizens and responsive to their needs.')
          },
        ]
      },
    ]
  },
  {
    id: 'economics',
    name: 'Economics',
    fullName: 'Understanding Economic Development',
    icon: '💰',
    colorClass: 'economics',
    chapters: [
      {
        id: 'e1', subjectId: 'economics', name: 'Development',
        lessons: [
          {
            id: 'e1l1', chapterId: 'e1', title: 'What is Development?',
            concept: 'Development means different things to different people. It involves not just income but also quality of life indicators like health, education, and equality.',
            explanation: 'National income and per capita income are common measures, but Human Development Index (HDI) — which includes life expectancy, education, and income — gives a fuller picture. Kerala has lower per capita income but higher HDI than Punjab.',
            visualization: 'development_indicators',
            interactionPrompt: 'Compare development indicators across states',
            question: q('e1l1q', 'What does HDI measure?', ['Only income', 'Income, health, and education', 'Only GDP', 'Only population'], 1, 'The Human Development Index (HDI) measures three dimensions: health (life expectancy), education (mean years of schooling), and standard of living (per capita income).')
          },
        ]
      },
      {
        id: 'e2', subjectId: 'economics', name: 'Sectors of Indian Economy',
        lessons: [
          {
            id: 'e2l1', chapterId: 'e2', title: 'Primary, Secondary, Tertiary',
            concept: 'The economy is divided into three sectors: Primary (agriculture, fishing), Secondary (manufacturing, construction), and Tertiary (services like banking, transport).',
            explanation: 'In India, the tertiary sector has grown the most and now contributes over 50% of GDP, though agriculture still employs the most people. This creates disguised unemployment.',
            visualization: 'sectors_chart',
            interactionPrompt: 'Explore how sector contributions changed over time',
            question: q('e2l1q', 'Which sector contributes most to India\'s GDP?', ['Primary', 'Secondary', 'Tertiary', 'All equal'], 2, 'The tertiary (service) sector contributes over 50% of India\'s GDP, though the primary sector still employs the largest workforce.')
          },
        ]
      },
      {
        id: 'e3', subjectId: 'economics', name: 'Money and Credit',
        lessons: [
          {
            id: 'e3l1', chapterId: 'e3', title: 'Modern Forms of Money',
            concept: 'Money evolved from barter to coins to paper currency to digital payments. Modern money is authorized by the central government (RBI in India).',
            explanation: 'The Reserve Bank of India (RBI) issues currency notes. Banks accept deposits and provide loans, creating credit. The interest rate difference between deposits and loans is how banks earn.',
            visualization: 'money_evolution',
            interactionPrompt: 'Trace the evolution of money through history',
            question: q('e3l1q', 'Who issues currency notes in India?', ['State Bank of India', 'Finance Ministry', 'Reserve Bank of India', 'Prime Minister'], 2, 'The Reserve Bank of India (RBI) is the central bank that has the authority to issue currency notes on behalf of the government.')
          },
        ]
      },
      {
        id: 'e4', subjectId: 'economics', name: 'Globalisation and the Indian Economy',
        lessons: [
          {
            id: 'e4l1', chapterId: 'e4', title: 'What is Globalisation?',
            concept: 'Globalisation is the integration of economies through trade, investment, and technology. MNCs play a key role by producing goods across multiple countries.',
            explanation: 'Liberalization policies in 1991 opened India to foreign investment. SEZs attract companies with tax benefits. While globalisation has created opportunities, its benefits haven\'t been equally shared.',
            visualization: 'globalisation_flow',
            interactionPrompt: 'See how global supply chains work',
            question: q('e4l1q', 'When did India liberalize its economy?', ['1947', '1971', '1991', '2001'], 2, 'India liberalized its economy in 1991, removing trade barriers, reducing government regulations, and opening up to foreign investment under the New Economic Policy.')
          },
        ]
      },
      {
        id: 'e5', subjectId: 'economics', name: 'Consumer Rights',
        lessons: [
          {
            id: 'e5l1', chapterId: 'e5', title: 'Consumer Protection',
            concept: 'Consumers have the right to be informed, choose, seek redressal, and be protected against exploitation. The Consumer Protection Act empowers consumers.',
            explanation: 'COPRA (1986, updated 2019) established consumer courts at district, state, and national levels. ISI and Agmark are certification marks ensuring product quality. Right to Information (RTI) also empowers consumers.',
            visualization: 'consumer_rights',
            interactionPrompt: 'Explore the consumer complaint process',
            question: q('e5l1q', 'At how many levels do consumer courts operate?', ['1', '2', '3', '4'], 2, 'Consumer courts operate at three levels: District Forum, State Commission, and National Commission, providing a hierarchical system for grievance redressal.')
          },
        ]
      },
    ]
  },
];
