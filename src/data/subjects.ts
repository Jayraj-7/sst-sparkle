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
          {
            id: 'h1l4', chapterId: 'h1', title: 'The Romantic Imagination & Nationalism',
            concept: 'Romanticism was a cultural movement that developed national feeling through art, poetry, stories, and music. It helped shape nationalist sentiment across Europe.',
            explanation: 'Romantic artists and poets glorified folk culture, vernacular languages, and shared heritage. Grimm Brothers collected folk tales to preserve German identity. Karol Kurpinski celebrated Polish nationalism through opera.',
            visualization: 'romantic_art',
            interactionPrompt: 'Explore how art shaped national identity',
            question: q('h1l4q', 'How did Romanticism contribute to nationalism?', ['Through military conquests', 'By developing folk culture and national identity', 'Through trade agreements', 'By imposing one language'], 1, 'Romanticism fostered nationalism by celebrating folk culture, vernacular languages, and shared heritage, helping people feel a common national identity.')
          },
          {
            id: 'h1l5', chapterId: 'h1', title: 'Revolutions of 1848 & Liberal Nationalism',
            concept: 'The year 1848 saw liberal revolutions across Europe demanding constitutionalism, national unification, and freedom of press. Most were suppressed but planted seeds of change.',
            explanation: 'Liberals wanted parliamentary government, rule of law, and individual rights. In the German states, the Frankfurt Parliament tried to unify Germany democratically but failed. Women participated actively but were denied voting rights.',
            visualization: 'revolutions_1848',
            interactionPrompt: 'Track the wave of revolutions across European cities',
            question: q('h1l5q', 'What did the Frankfurt Parliament attempt?', ['Establish a military dictatorship', 'Unify Germany through democratic means', 'Abolish all monarchies', 'Create a European union'], 1, 'The Frankfurt Parliament (1848) attempted to unify the German states into a single democratic nation with a constitution, though it ultimately failed.')
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
          {
            id: 'h2l4', chapterId: 'h2', title: 'The Rowlatt Act & Jallianwala Bagh',
            concept: 'The Rowlatt Act (1919) gave the British power to detain people without trial. The Jallianwala Bagh massacre was a turning point that united Indians against colonial rule.',
            explanation: 'On April 13, 1919, General Dyer opened fire on a peaceful gathering in Jallianwala Bagh, Amritsar, killing hundreds. This event deeply shocked India and galvanized the freedom movement.',
            visualization: 'jallianwala_bagh',
            interactionPrompt: 'Understand the chain of events leading to the massacre',
            question: q('h2l4q', 'What did the Rowlatt Act allow?', ['Freedom of speech', 'Detention without trial', 'Voting rights for Indians', 'Self-governance'], 1, 'The Rowlatt Act (1919) gave the British government enormous powers to repress political activities and allowed detention of political prisoners without trial.')
          },
          {
            id: 'h2l5', chapterId: 'h2', title: 'Quit India Movement',
            concept: 'In August 1942, Gandhi launched the Quit India Movement demanding an immediate end to British rule. The slogan was "Do or Die."',
            explanation: 'The Quit India resolution was passed on August 8, 1942. The British arrested all Congress leaders immediately. Despite this, the movement spread across India with strikes, demonstrations, and underground activities.',
            visualization: 'quit_india',
            interactionPrompt: 'Trace how the movement spread without leaders',
            question: q('h2l5q', 'What was the famous slogan of the Quit India Movement?', ['Jai Hind', 'Do or Die', 'Swaraj is my birthright', 'Inquilab Zindabad'], 1, '"Do or Die" was Gandhi\'s call during the Quit India Movement of 1942, urging Indians to either free India or die trying.')
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
          {
            id: 'h3l2', chapterId: 'h3', title: 'Colonialism & the Global Economy',
            concept: 'European colonialism reshaped the global economy. Colonies provided raw materials while colonizers sold manufactured goods, creating an unequal trade system.',
            explanation: 'The Atlantic slave trade, indentured labour from India, and exploitation of resources created a global economy that benefited Europe at the expense of colonies in Asia, Africa, and the Americas.',
            visualization: 'colonial_trade',
            interactionPrompt: 'See how colonial trade routes connected the world',
            question: q('h3l2q', 'What was the role of colonies in the global economy?', ['They manufactured goods', 'They provided raw materials', 'They controlled trade routes', 'They set prices'], 1, 'Colonies primarily served as sources of cheap raw materials and markets for manufactured goods from colonial powers.')
          },
          {
            id: 'h3l3', chapterId: 'h3', title: 'The Great Depression',
            concept: 'The Great Depression (1929-1930s) was the worst economic downturn in modern history, beginning in the USA and spreading worldwide.',
            explanation: 'Overproduction, stock market crash, and bank failures led to massive unemployment and poverty. It affected India too — agricultural prices fell, leading to rural distress.',
            visualization: 'great_depression',
            interactionPrompt: 'See how the depression spread from the USA globally',
            question: q('h3l3q', 'What triggered the Great Depression?', ['World War II', 'Stock market crash of 1929', 'Oil crisis', 'Trade surplus'], 1, 'The Great Depression was triggered by the stock market crash of October 1929, combined with overproduction and bank failures in the United States.')
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
          {
            id: 'h4l2', chapterId: 'h4', title: 'The Factory System',
            concept: 'The factory system began in England in the 1730s. Cotton and metals were the leading sectors. New machines like the spinning jenny and steam engine transformed production.',
            explanation: 'Factories allowed mass production but displaced hand workers. The cotton industry used machines like the spinning jenny, water frame, and power loom. The steam engine by James Watt powered the Industrial Revolution.',
            visualization: 'factory_system',
            interactionPrompt: 'Explore how machines changed manufacturing',
            question: q('h4l2q', 'Which sectors led the industrial revolution in England?', ['Agriculture and services', 'Cotton and metals', 'Shipping and banking', 'Mining and textiles'], 1, 'Cotton and metals were the leading sectors of the early Industrial Revolution in England, with new machines transforming production.')
          },
          {
            id: 'h4l3', chapterId: 'h4', title: 'Industrialisation in India',
            concept: 'Indian industries grew despite colonial constraints. The first cotton mill was set up in Bombay in 1854, and the first jute mill in Bengal in 1855.',
            explanation: 'Indian industrialists like Dwarkanath Tagore, Jamsetjee Nusserwanjee Tata, and Seth Hukumchand built enterprises. However, colonial policies favoured British goods, making competition difficult.',
            visualization: 'indian_industry',
            interactionPrompt: 'Discover early Indian industrial pioneers',
            question: q('h4l3q', 'Where was the first cotton mill in India set up?', ['Calcutta', 'Madras', 'Bombay', 'Delhi'], 2, 'The first cotton mill in India was set up in Bombay (now Mumbai) in 1854, marking the beginning of modern Indian industrialisation.')
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
          {
            id: 'h5l2', chapterId: 'h5', title: 'Print & the Reformation',
            concept: 'Martin Luther\'s ideas spread rapidly through print, challenging the Catholic Church. Print played a crucial role in the Protestant Reformation.',
            explanation: 'Luther\'s 95 Theses (1517) were printed and spread across Europe in weeks. This showed how print could challenge established authorities and mobilize public opinion.',
            visualization: 'reformation_print',
            interactionPrompt: 'See how Luther\'s ideas spread through print',
            question: q('h5l2q', 'How did print help the Reformation?', ['It didn\'t help', 'Spread Luther\'s ideas rapidly', 'Only Catholics used print', 'Print was banned'], 1, 'Print allowed Luther\'s 95 Theses and other reform ideas to spread across Europe rapidly, mobilizing public opinion against the Catholic Church.')
          },
          {
            id: 'h5l3', chapterId: 'h5', title: 'Print in India',
            concept: 'Print arrived in India with the Portuguese in Goa (16th century). Indian reformers and nationalists used print to spread ideas and mobilize opinion.',
            explanation: 'Raja Ram Mohan Roy published the Sambad Kaumudi to campaign against social evils. Vernacular newspapers and books helped build national consciousness. The Vernacular Press Act (1878) tried to suppress Indian-language press.',
            visualization: 'print_india',
            interactionPrompt: 'Explore how print shaped Indian reform movements',
            question: q('h5l3q', 'What was the Vernacular Press Act?', ['Promoted Indian languages', 'Censored Indian-language newspapers', 'Started printing in Hindi', 'Funded printing presses'], 1, 'The Vernacular Press Act (1878) was enacted by the British to censor and control the Indian-language press, which was increasingly critical of colonial rule.')
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
          {
            id: 'g1l3', chapterId: 'g1', title: 'Resource Planning',
            concept: 'Resource planning involves identification and inventory of resources, evolving a planning structure, and matching development plans with national goals.',
            explanation: 'India has diverse resources but their distribution is uneven. Jharkhand is rich in minerals but lacks infrastructure. Rajasthan has solar potential but limited water. Planning ensures balanced development.',
            visualization: 'resource_planning',
            interactionPrompt: 'Match regions with their key resources',
            question: q('g1l3q', 'Which state is rich in mineral resources?', ['Kerala', 'Jharkhand', 'Rajasthan', 'Punjab'], 1, 'Jharkhand is one of India\'s richest states in mineral resources, including coal, iron ore, and mica.')
          },
          {
            id: 'g1l4', chapterId: 'g1', title: 'Land Degradation & Conservation',
            concept: 'Land degradation is caused by deforestation, overgrazing, mining, and over-irrigation. Conservation measures include afforestation and proper land management.',
            explanation: 'About 130 million hectares of India\'s land is degraded. Mining leaves deep scars, overgrazing removes vegetation cover, and industrial waste pollutes land. Shelter belts, contour plowing, and proper waste disposal help.',
            visualization: 'land_degradation',
            interactionPrompt: 'Identify causes and solutions for land degradation',
            question: q('g1l4q', 'What is a major cause of land degradation in India?', ['Afforestation', 'Overgrazing and deforestation', 'Crop rotation', 'Terrace farming'], 1, 'Overgrazing, deforestation, mining, and over-irrigation are major causes of land degradation in India, affecting about 130 million hectares.')
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
          {
            id: 'g2l2', chapterId: 'g2', title: 'Conservation of Forests',
            concept: 'Forests are classified as Reserved (most restricted), Protected, and Unclassed. The Indian Wildlife Protection Act (1972) and Project Tiger protect biodiversity.',
            explanation: 'Project Tiger (1973) was launched to protect the dwindling tiger population. National parks and wildlife sanctuaries serve as protected habitats. Joint Forest Management involves local communities.',
            visualization: 'forest_types',
            interactionPrompt: 'Explore different types of forest reserves',
            question: q('g2l2q', 'When was Project Tiger launched?', ['1947', '1960', '1973', '1990'], 2, 'Project Tiger was launched in 1973 to protect tigers and their habitats. It has been one of India\'s most successful conservation programs.')
          },
          {
            id: 'g2l3', chapterId: 'g2', title: 'Community-Based Conservation',
            concept: 'Local communities play a vital role in conservation. The Chipko Movement and sacred groves are examples of community-led environmental protection.',
            explanation: 'The Chipko Movement (1970s) saw villagers hugging trees to prevent logging. Many communities protect "sacred groves" — forest patches with cultural significance. Bishnoi community in Rajasthan has protected wildlife for centuries.',
            visualization: 'community_conservation',
            interactionPrompt: 'Discover community conservation success stories',
            question: q('g2l3q', 'What was the Chipko Movement?', ['A political party', 'Villagers protecting trees from logging', 'A dance form', 'An industrial revolution'], 1, 'The Chipko Movement was a forest conservation movement where villagers, especially women, hugged trees to prevent them from being cut down by contractors.')
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
          {
            id: 'g3l2', chapterId: 'g3', title: 'Multi-Purpose River Projects',
            concept: 'Dams serve multiple purposes — irrigation, electricity generation, water supply, flood control, and navigation. But they also cause displacement and environmental damage.',
            explanation: 'Major projects include Bhakra Nangal (Sutlej), Hirakud (Mahanadi), and Sardar Sarovar (Narmada). Jawaharlal Nehru called dams "temples of modern India" but opposition grew due to displacement.',
            visualization: 'dam_projects',
            interactionPrompt: 'Explore major dam projects and their impacts',
            question: q('g3l2q', 'Who called dams "temples of modern India"?', ['Mahatma Gandhi', 'Jawaharlal Nehru', 'B.R. Ambedkar', 'Sardar Patel'], 1, 'Jawaharlal Nehru called dams "temples of modern India" because he saw them as symbols of progress and development for the newly independent nation.')
          },
          {
            id: 'g3l3', chapterId: 'g3', title: 'Rainwater Harvesting',
            concept: 'Rainwater harvesting is the collection and storage of rainwater for future use. India has a rich tradition of water harvesting systems.',
            explanation: 'Tamil Nadu made rooftop rainwater harvesting compulsory. Traditional systems include tankas in Rajasthan, johads in Haryana, and bamboo drip irrigation in Meghalaya.',
            visualization: 'rainwater_harvesting',
            interactionPrompt: 'Explore traditional water harvesting across India',
            question: q('g3l3q', 'Which state made rooftop rainwater harvesting compulsory?', ['Kerala', 'Maharashtra', 'Tamil Nadu', 'Gujarat'], 2, 'Tamil Nadu was the first state to make rooftop rainwater harvesting compulsory for all buildings, serving as a model for others.')
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
          {
            id: 'g4l2', chapterId: 'g4', title: 'Major Crops of India',
            concept: 'India grows two main types of crops: Kharif (monsoon crops like rice, maize) and Rabi (winter crops like wheat, mustard). Some crops like sugarcane are grown year-round.',
            explanation: 'Rice is the staple food of eastern and southern India, needing high rainfall. Wheat is grown in the northern plains during winter. India is the largest producer of pulses and second largest of rice and wheat.',
            visualization: 'crop_map',
            interactionPrompt: 'Match crops to their growing seasons and regions',
            question: q('g4l2q', 'Which is a Kharif crop?', ['Wheat', 'Mustard', 'Rice', 'Barley'], 2, 'Rice is a Kharif crop, sown during the monsoon season (June-September) and harvested in autumn. It requires high temperature and humidity.')
          },
          {
            id: 'g4l3', chapterId: 'g4', title: 'Food Security & Technology',
            concept: 'India faces challenges of feeding its large population. Government programs like MSP, PDS, and MNREGA support farmers and ensure food security.',
            explanation: 'Minimum Support Price (MSP) protects farmers from price crashes. Public Distribution System (PDS) provides subsidized food to the poor. Despite challenges, India has moved from food deficit to surplus.',
            visualization: 'food_security',
            interactionPrompt: 'Understand India\'s food distribution system',
            question: q('g4l3q', 'What is MSP?', ['Maximum Selling Price', 'Minimum Support Price', 'Market Standard Price', 'Managed Supply Plan'], 1, 'MSP (Minimum Support Price) is a price set by the government to protect farmers from steep drops in market prices, ensuring they get a fair return.')
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
          {
            id: 'g5l2', chapterId: 'g5', title: 'Energy Resources',
            concept: 'India uses conventional energy (coal, petroleum, natural gas) and non-conventional energy (solar, wind, nuclear, geothermal). Transition to renewables is critical.',
            explanation: 'Coal provides 55% of India\'s energy. India has the 4th largest coal reserves. Solar energy potential is huge — the Thar Desert receives abundant sunshine. Wind energy is growing rapidly.',
            visualization: 'energy_sources',
            interactionPrompt: 'Compare conventional and renewable energy sources',
            question: q('g5l2q', 'What percentage of India\'s energy comes from coal?', ['25%', '40%', '55%', '70%'], 2, 'Coal provides about 55% of India\'s energy needs. India has the 4th largest coal reserves in the world, found mainly in Jharkhand, Chhattisgarh, and Odisha.')
          },
          {
            id: 'g5l3', chapterId: 'g5', title: 'Conservation of Resources',
            concept: 'Mineral resources are finite and non-renewable. Conservation through recycling, using alternatives, and developing renewable energy is essential.',
            explanation: 'At current rates of consumption, India\'s coal reserves may last about 200 years. Using energy-efficient technologies, recycling metals, and developing solar/wind power can reduce dependence on non-renewable resources.',
            visualization: 'conservation',
            interactionPrompt: 'Explore ways to conserve mineral resources',
            question: q('g5l3q', 'Why is conservation of minerals important?', ['They are cheap', 'They are non-renewable and finite', 'They are easy to find', 'They grow back'], 1, 'Conservation is crucial because minerals are non-renewable — once exhausted, they cannot be replaced. It takes millions of years for them to form.')
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
          {
            id: 'g6l2', chapterId: 'g6', title: 'Iron & Steel Industry',
            concept: 'Iron and steel is a basic industry that provides raw material for other industries. India has abundant iron ore and cheap labour, making it competitive globally.',
            explanation: 'Major steel plants: TISCO (Jamshedpur), Bhilai, Durgapur, Rourkela, Bokaro. India is one of the top steel producers. The industry needs iron ore, coking coal, limestone, and manganese.',
            visualization: 'steel_industry',
            interactionPrompt: 'Locate major steel plants across India',
            question: q('g6l2q', 'Where is TISCO located?', ['Bhilai', 'Jamshedpur', 'Rourkela', 'Bokaro'], 1, 'TISCO (Tata Iron and Steel Company) is located in Jamshedpur, Jharkhand. It was established in 1907 and is one of India\'s oldest steel plants.')
          },
          {
            id: 'g6l3', chapterId: 'g6', title: 'Textile & IT Industries',
            concept: 'The cotton textile industry is India\'s largest employer after agriculture. The IT industry has transformed India into a global technology hub.',
            explanation: 'Mumbai (Bombay) was the traditional center of cotton textiles. IT industry is concentrated in Bangalore, Hyderabad, Pune, and Gurgaon. India\'s IT exports exceed $150 billion.',
            visualization: 'textile_it',
            interactionPrompt: 'Compare traditional and modern industries in India',
            question: q('g6l3q', 'Which city is India\'s traditional cotton textile center?', ['Delhi', 'Chennai', 'Mumbai', 'Kolkata'], 2, 'Mumbai (formerly Bombay) has been India\'s traditional center of the cotton textile industry since the 19th century.')
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
          {
            id: 'g7l2', chapterId: 'g7', title: 'Indian Railways',
            concept: 'Indian Railways is one of the largest railway networks in the world, with over 67,000 km of track. It is the principal mode of transport for freight and passengers.',
            explanation: 'Indian Railways connects remote areas, promotes national integration, and is a major employer (1.3 million+). Konkan Railway is an engineering marvel. Railway zones include Northern, Southern, Eastern, Western, and Central.',
            visualization: 'railways_network',
            interactionPrompt: 'Explore India\'s railway network and major routes',
            question: q('g7l2q', 'How long is India\'s railway network?', ['30,000 km', '50,000 km', '67,000 km', '100,000 km'], 2, 'Indian Railways has over 67,000 km of track, making it one of the largest railway networks in the world and a lifeline of the Indian economy.')
          },
          {
            id: 'g7l3', chapterId: 'g7', title: 'International Trade & Tourism',
            concept: 'International trade (import-export) is vital for India\'s economy. Tourism — both domestic and international — is a major foreign exchange earner.',
            explanation: 'India exports IT services, gems, textiles, and petroleum products. It imports crude oil, gold, and electronics. Tourism contributes about 5% to GDP and creates millions of jobs.',
            visualization: 'trade_tourism',
            interactionPrompt: 'Discover India\'s major exports and imports',
            question: q('g7l3q', 'What is India\'s largest import item?', ['Gold', 'Electronics', 'Crude oil', 'Textiles'], 2, 'Crude oil is India\'s largest import by value, as India imports over 80% of its crude oil requirements to meet energy demands.')
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
          {
            id: 'c1l3', chapterId: 'c1', title: 'The Sri Lanka Story',
            concept: 'Sri Lanka\'s majoritarian policies favoring the Sinhala community led to civil war, showing what happens when power is not shared equitably.',
            explanation: 'In 1956, an Act recognized Sinhala as the only official language. Preferential policies for Sinhalese in government jobs and university admissions led to ethnic tension and eventually a devastating civil war.',
            visualization: 'sri_lanka',
            interactionPrompt: 'Trace the consequences of majoritarian policies',
            question: q('c1l3q', 'What was the consequence of majoritarian policies in Sri Lanka?', ['Economic growth', 'Civil war', 'Rapid industrialisation', 'Better education'], 1, 'Majoritarian policies in Sri Lanka that favoured the Sinhala community led to ethnic conflict and a devastating civil war that lasted decades.')
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
          {
            id: 'c2l2', chapterId: 'c2', title: 'Decentralisation in India',
            concept: 'The 73rd and 74th Amendments (1992) strengthened local self-government (Panchayats and Municipalities), bringing democracy closer to the people.',
            explanation: 'Panchayati Raj has three tiers: Gram Panchayat, Panchayat Samiti (block), and Zila Parishad (district). One-third seats are reserved for women. Local bodies handle local issues like water supply, roads, and sanitation.',
            visualization: 'decentralisation',
            interactionPrompt: 'Explore the three tiers of Panchayati Raj',
            question: q('c2l2q', 'How many tiers does Panchayati Raj have?', ['1', '2', '3', '4'], 2, 'Panchayati Raj has three tiers: Gram Panchayat (village), Panchayat Samiti (block/taluka), and Zila Parishad (district).')
          },
          {
            id: 'c2l3', chapterId: 'c2', title: 'Language Policy & Federalism',
            concept: 'India\'s language policy is a successful example of federal accommodation. Hindi was made the official language but states can use their own languages.',
            explanation: 'The Constitution lists 22 scheduled languages. States can conduct business in their own language. This flexibility has prevented language-based conflicts, unlike Sri Lanka.',
            visualization: 'language_policy',
            interactionPrompt: 'Discover India\'s linguistic diversity and policy',
            question: q('c2l3q', 'How many scheduled languages does India\'s Constitution recognize?', ['14', '18', '22', '28'], 2, 'India\'s Constitution recognizes 22 scheduled languages in the Eighth Schedule, reflecting the country\'s rich linguistic diversity.')
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
          {
            id: 'c3l2', chapterId: 'c3', title: 'Religion & Politics',
            concept: 'Communalism is when religion is used in politics. Secularism in India means the state treats all religions equally and doesn\'t have an official religion.',
            explanation: 'The Indian Constitution guarantees freedom of religion but separates religion from political power. Communal politics can lead to violence, as seen in various communal riots.',
            visualization: 'secularism',
            interactionPrompt: 'Understand India\'s secular model vs. other countries',
            question: q('c3l2q', 'What does secularism mean in the Indian context?', ['No religion allowed', 'State treats all religions equally', 'Only one religion recognized', 'Religion is mandatory'], 1, 'Indian secularism means the state treats all religions equally, doesn\'t have an official religion, and guarantees freedom of religion to all citizens.')
          },
          {
            id: 'c3l3', chapterId: 'c3', title: 'Caste & Politics',
            concept: 'Caste is an important factor in Indian politics. The Constitution abolished untouchability and provides reservation for disadvantaged groups.',
            explanation: 'Reservation in education and government jobs helps SCs, STs, and OBCs. Caste influences voting patterns, party ticket distribution, and government formation. But caste-based politics can also be divisive.',
            visualization: 'caste_politics',
            interactionPrompt: 'Explore how caste interacts with democracy',
            question: q('c3l3q', 'What did the Constitution do about untouchability?', ['Ignored it', 'Abolished it', 'Promoted it', 'Defined it'], 1, 'The Indian Constitution abolished untouchability under Article 17 and made its practice a punishable offence.')
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
          {
            id: 'c4l2', chapterId: 'c4', title: 'Challenges to Political Parties',
            concept: 'Political parties face challenges like internal democracy deficit, dynastic succession, money and muscle power, and not offering meaningful policy choices.',
            explanation: 'Many parties are controlled by one family. Party tickets often go to those with money rather than merit. Anti-defection law tries to reduce party-switching but has its own problems.',
            visualization: 'party_challenges',
            interactionPrompt: 'Identify and analyze challenges facing parties',
            question: q('c4l2q', 'What is dynastic succession in parties?', ['Democratic elections within party', 'Leadership passed within a family', 'Choosing leaders by seniority', 'Random selection'], 1, 'Dynastic succession means the leadership of a political party is passed from one generation to the next within the same family, undermining internal democracy.')
          },
          {
            id: 'c4l3', chapterId: 'c4', title: 'Party Systems Around the World',
            concept: 'Countries have different party systems: one-party (China), two-party (USA, UK), or multi-party (India, France). Each has its own advantages and challenges.',
            explanation: 'Multi-party systems give more choices but can lead to unstable coalitions. Two-party systems offer stability but limit choices. India\'s multi-party system reflects its diversity.',
            visualization: 'party_systems_world',
            interactionPrompt: 'Compare party systems across countries',
            question: q('c4l3q', 'What type of party system does India have?', ['One-party', 'Two-party', 'Multi-party', 'No-party'], 2, 'India has a multi-party system with several national and regional parties, reflecting the country\'s social diversity and federal structure.')
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
          {
            id: 'c5l2', chapterId: 'c5', title: 'Democracy & Economic Growth',
            concept: 'Democracies don\'t always outperform dictatorships in economic growth, but they provide better distribution, dignity, and personal freedom.',
            explanation: 'Some dictatorships (like China) have shown high growth, but democracies provide freedom, equality, and dignity. The development record of democracies is mixed but they handle diversity better.',
            visualization: 'democracy_growth',
            interactionPrompt: 'Compare economic outcomes across regime types',
            question: q('c5l2q', 'What advantage do democracies have over dictatorships?', ['Faster growth', 'Better freedom and dignity', 'Stronger military', 'Lower taxes'], 1, 'While dictatorships may sometimes show faster economic growth, democracies provide better freedom, dignity, equality, and conflict resolution.')
          },
          {
            id: 'c5l3', chapterId: 'c5', title: 'Democracy & Social Diversity',
            concept: 'Democracy is best suited to handle social differences and conflicts. It develops procedures to accommodate diverse groups peacefully.',
            explanation: 'In a diverse country like India, democracy allows various groups to voice their concerns through elections, protests, and representation. It reduces the risk of violent conflict.',
            visualization: 'democracy_diversity',
            interactionPrompt: 'See how democracy accommodates diversity',
            question: q('c5l3q', 'Why is democracy suited for diverse societies?', ['It suppresses minorities', 'It accommodates differences peacefully', 'It ignores diversity', 'It creates uniformity'], 1, 'Democracy is suited for diverse societies because it provides mechanisms to accommodate different groups, negotiate differences, and find peaceful solutions.')
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
          {
            id: 'e1l2', chapterId: 'e1', title: 'Comparing Development',
            concept: 'Countries and states are compared using per capita income, literacy rate, infant mortality rate, and HDI. India is classified as a developing country.',
            explanation: 'Sri Lanka has better human development indicators than India despite lower total income. This shows that total income alone doesn\'t determine quality of life. Public facilities like health and education matter too.',
            visualization: 'country_comparison',
            interactionPrompt: 'Compare development indicators of different countries',
            question: q('e1l2q', 'Why might a country with lower income have better development indicators?', ['It\'s impossible', 'Better public services and equality', 'It has less population', 'It imports everything'], 1, 'A country with lower income can have better development indicators if it invests more in public services like health and education and distributes resources more equally.')
          },
          {
            id: 'e1l3', chapterId: 'e1', title: 'Sustainability & Development',
            concept: 'Sustainable development meets present needs without compromising future generations\' ability to meet their needs. It balances economic growth with environmental protection.',
            explanation: 'Overuse of groundwater, deforestation, and pollution threaten sustainability. Renewable energy, conservation, and responsible consumption are key to sustainable development.',
            visualization: 'sustainability',
            interactionPrompt: 'Explore sustainable vs unsustainable development',
            question: q('e1l3q', 'What is sustainable development?', ['Maximum growth at any cost', 'Development without harming future needs', 'Only using renewable energy', 'No industrial growth'], 1, 'Sustainable development means meeting present needs without compromising the ability of future generations to meet their own needs.')
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
          {
            id: 'e2l2', chapterId: 'e2', title: 'Organised & Unorganised Sectors',
            concept: 'The organised sector has registered businesses with regular working hours and benefits. The unorganised sector has small, unregistered units with no worker protection.',
            explanation: 'About 92% of India\'s workers are in the unorganised sector — without job security, health benefits, or pensions. Government schemes like MNREGA aim to provide some protection.',
            visualization: 'organised_unorganised',
            interactionPrompt: 'Compare working conditions in both sectors',
            question: q('e2l2q', 'What percentage of India\'s workers are in the unorganised sector?', ['40%', '60%', '80%', '92%'], 3, 'About 92% of India\'s workers are in the unorganised sector, working without formal contracts, job security, or benefits.')
          },
          {
            id: 'e2l3', chapterId: 'e2', title: 'Disguised Unemployment',
            concept: 'Disguised unemployment exists when more people are employed than needed — removing some wouldn\'t reduce output. It\'s common in Indian agriculture.',
            explanation: 'If a farm needs 3 workers but has 8 family members working on it, 5 are disguisedly unemployed. MNREGA guarantees 100 days of employment to address rural unemployment.',
            visualization: 'disguised_unemployment',
            interactionPrompt: 'Identify disguised unemployment in different scenarios',
            question: q('e2l3q', 'What is MNREGA?', ['A farming technique', 'Guaranteed 100 days of rural employment', 'A type of loan', 'An export scheme'], 1, 'MNREGA (Mahatma Gandhi National Rural Employment Guarantee Act) guarantees 100 days of wage employment per year to rural households willing to do unskilled manual work.')
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
          {
            id: 'e3l2', chapterId: 'e3', title: 'Formal & Informal Credit',
            concept: 'Formal credit comes from banks and cooperatives (regulated, lower interest). Informal credit comes from moneylenders and friends (unregulated, higher interest).',
            explanation: 'About 85% of rural loans still come from informal sources charging high interest (36-60% per year vs 8-12% from banks). This keeps poor people trapped in debt cycles.',
            visualization: 'credit_sources',
            interactionPrompt: 'Compare interest rates and terms of formal vs informal credit',
            question: q('e3l2q', 'Why are informal loans problematic?', ['Too easy to get', 'Very high interest rates trapping borrowers', 'Banks don\'t exist', 'Government promotes them'], 1, 'Informal loans charge very high interest rates (36-60% per year) and can trap borrowers in debt cycles, unlike regulated bank loans.')
          },
          {
            id: 'e3l3', chapterId: 'e3', title: 'Self-Help Groups (SHGs)',
            concept: 'Self-Help Groups are small groups of poor people who pool savings and lend to each other. They provide an alternative to exploitative moneylenders.',
            explanation: 'SHGs typically have 15-20 members who meet regularly. They save small amounts and can borrow from the group pool. Successful SHGs can get bank loans. Grameen Bank of Bangladesh is a famous model.',
            visualization: 'shg_model',
            interactionPrompt: 'See how SHGs work and empower communities',
            question: q('e3l3q', 'What is a Self-Help Group?', ['A political party', 'A group that pools savings and provides credit', 'A government bank', 'A multinational company'], 1, 'A Self-Help Group (SHG) is a small group of poor people who pool their savings and lend to each other, providing an alternative to exploitative moneylenders.')
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
          {
            id: 'e4l2', chapterId: 'e4', title: 'MNCs & Foreign Investment',
            concept: 'Multinational Corporations (MNCs) operate in multiple countries. They invest through joint ventures, buying local companies, or setting up new factories.',
            explanation: 'MNCs choose locations with cheap labour, raw materials, and good infrastructure. Foreign Direct Investment (FDI) brings capital and technology. But MNCs can also displace local businesses.',
            visualization: 'mnc_operations',
            interactionPrompt: 'Trace how an MNC operates across countries',
            question: q('e4l2q', 'What is FDI?', ['Foreign Direct Investment', 'Free Development Initiative', 'Financial Distribution Income', 'Federal Deposit Insurance'], 0, 'FDI (Foreign Direct Investment) is investment made by a company in one country into business interests in another country, bringing capital and technology.')
          },
          {
            id: 'e4l3', chapterId: 'e4', title: 'Impact of Globalisation',
            concept: 'Globalisation has created winners and losers. IT professionals and large businesses have benefited, but small producers and workers often face competition and job insecurity.',
            explanation: 'Fair trade practices, labour standards, and WTO regulations aim to make globalisation more equitable. Government policies can protect vulnerable groups while encouraging growth.',
            visualization: 'globalisation_impact',
            interactionPrompt: 'Analyze the winners and losers of globalisation',
            question: q('e4l3q', 'Who are the main losers of globalisation in India?', ['IT professionals', 'Large companies', 'Small producers and workers', 'Government employees'], 2, 'Small producers, local manufacturers, and unorganised workers are often the losers of globalisation as they face competition from cheaper imports and MNCs.')
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
          {
            id: 'e5l2', chapterId: 'e5', title: 'Consumer Rights & Awareness',
            concept: 'Consumers have six fundamental rights: Right to Safety, Information, Choose, Be Heard, Seek Redressal, and Consumer Education.',
            explanation: 'Right to Safety means protection from hazardous products. Right to Information means knowing product details (ingredients, manufacturing date, expiry). Consumer awareness campaigns use the slogan "Jago Grahak Jago."',
            visualization: 'consumer_awareness',
            interactionPrompt: 'Identify the six consumer rights in action',
            question: q('e5l2q', 'What is the consumer awareness slogan in India?', ['Jai Jawan Jai Kisan', 'Jago Grahak Jago', 'Atithi Devo Bhava', 'Incredible India'], 1, '"Jago Grahak Jago" (Wake up Consumer) is the Indian government\'s consumer awareness campaign slogan to educate people about their rights.')
          },
          {
            id: 'e5l3', chapterId: 'e5', title: 'Consumer Protection Act 2019',
            concept: 'The updated Consumer Protection Act 2019 introduced new features like e-commerce coverage, Central Consumer Protection Authority, and product liability provisions.',
            explanation: 'The 2019 Act covers online purchases, enables filing complaints electronically, and holds manufacturers liable for defective products. It also prohibits misleading advertisements.',
            visualization: 'copra_2019',
            interactionPrompt: 'Compare the 1986 and 2019 Consumer Protection Acts',
            question: q('e5l3q', 'What new aspect does the 2019 Act cover?', ['Only physical stores', 'E-commerce transactions', 'Only food products', 'Only electronics'], 1, 'The Consumer Protection Act 2019 covers e-commerce transactions, addressing the growing trend of online shopping and protecting digital consumers.')
          },
        ]
      },
    ]
  },
];
