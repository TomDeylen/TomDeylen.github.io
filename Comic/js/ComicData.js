var traces = ["Daily Life", "Hamsters?", "Nuts", "Anchovies", "...stuff?"]

var comics =
[
	{id: '0',chapter:"Introductions", title:"Moving in", Link:'Comics/01-Introductions/Comic1.png'},
	{id: '1',chapter:"Introductions", title:"Stuck without a clue", Link:'Comics/01-Introductions/Comic2.png'},
	{id: '2',chapter:"Introductions", title:"Observant", Link:'Comics/01-Introductions/Comic3.png'},
	{id: '3',chapter:"Introductions", title:"The Tour", Link:'Comics/01-Introductions/Comic4.png'},
	{id: '4',chapter:"Introductions", title:"Itty bitty living space", Link:'Comics/01-Introductions/Comic5.png'},
	{id: '5',chapter:"Introductions", title:"Steves room", Link:'Comics/01-Introductions/Comic6.png'},
	{id: '6',chapter:"Introductions", title:"Rent prices these days", Link:'Comics/01-Introductions/Comic7.png'},
	{id: '7',chapter:"Introductions", title:"The bookshelf: Swedish Engineering", Link:'Comics/01-Introductions/Comic8.png'},
	{id: '8', chapter:"Introductions", title:"The bookshelf: Ancient Swedish ways", Link:'Comics/01-Introductions/Comic9.png'},
	{id: '9',chapter:"Introductions", title:"The bookshelf: The tools for the job", Link:'Comics/01-Introductions/Comic10.png'},
	{id: '10',chapter:"Introductions", title:"The bookshelf: Security mesures", Link:'Comics/01-Introductions/Comic11.png'},
	{id: '11',chapter:"Introductions", title:"The bookshelf: To Adventure!", Link:'Comics/01-Introductions/Comic12.png'},
	{id: '12',chapter:"Introductions", title:"The bookshelf: Always read the instructions", Link:'Comics/01-Introductions/Comic13.png'},
	{id: '13',chapter:"Introductions", title:"The bookshelf: Hammer time", Link:'Comics/01-Introductions/Comic14.png'},
	{id: '14',chapter:"Introductions", title:"The bookshelf: Easy peasy", Link:'Comics/01-Introductions/Comic15.png'},
	{id: '15',chapter:"Introductions", title:"The bookshelf: Homless guy-1, Adrian-0", Link:'Comics/01-Introductions/Comic16.png'},

	{id: '16',chapter:"Setting the scene", title:"Finding a Job", Link:'Comics/02-Setting the scene/Strip 17.png'},	
	{id: '17',chapter:"Setting the scene", title:"The Job Search Begins", Link:'Comics/02-Setting the scene/Strip 18.png'},	
	{id: '18',chapter:"Setting the scene", title:"Cousins buisness", Link:'Comics/02-Setting the scene/Strip 19.png'},	
	{id: '19',chapter:"Setting the scene", title:"You're Hired", Link:'Comics/02-Setting the scene/Strip 20.png'},	
	{id: '20',chapter:"Setting the scene", title:"Extreame Interview", Link:'Comics/02-Setting the scene/Strip 21.png'},	
	{id: '21',chapter:"Setting the scene", title:"Jack CO. Not assosiated with the lawsuit on Jack Inc.", Link:'Comics/02-Setting the scene/Strip 22.png'},	
	{id: '22',chapter:"Setting the scene", title:"Exciting!!", Link:'Comics/02-Setting the scene/Strip 23.png'},	
	{id: '23',chapter:"Setting the scene", title:"Not Brainwashed", Link:'Comics/02-Setting the scene/Strip 24.png'},	
	{id: '24',chapter:"Setting the scene", title:"Escaped", Link:'Comics/02-Setting the scene/Strip 25.png'},
	{id: '25',chapter:"Setting the scene", title:"The Job", Link:'Comics/02-Setting the scene/Strip 26.png'},	
	{id: '26',chapter:"Setting the scene", title:"A Proper Interview", Link:'Comics/02-Setting the scene/Strip 27.png'},	
	{id: '27',chapter:"Setting the scene", title:"Need to know for work", Link:'Comics/02-Setting the scene/Strip 28.png'},	
	{id: '28',chapter:"Setting the scene", title:"The Hate is strong", Link:'Comics/02-Setting the scene/Strip 29.png'},	
	{id: '29',chapter:"Setting the scene", title:"The Deli", Link:'Comics/02-Setting the scene/Strip 30.png'},
	{id: '30',chapter:"Setting the scene", title:"...So Crazy", Link:'Comics/02-Setting the scene/Strip 31.png'},
	{id: '31',chapter:"Setting the scene", title:"All hail the Meat Union", Link:'Comics/02-Setting the scene/Strip 32.png'},
	{id: '32',chapter:"Setting the scene", title:"Seems shy", Link:'Comics/02-Setting the scene/Strip 33.png'},
	{id: '33',chapter:"Setting the scene", title:"Job assignment", Link:'Comics/02-Setting the scene/Strip 34.png'},
	{id: '34',chapter:"Setting the scene", title:"Avoid at all costs", Link:'Comics/02-Setting the scene/Strip 35.png'},
	{id: '35',chapter:"Setting the scene", title:"Can I also grab these for free too?", Link:'Comics/02-Setting the scene/Strip 36.png'},
	{id: '36',chapter:"Setting the scene", title:"You are being recorded", Link:'Comics/02-Setting the scene/Strip 37.png'},
	{id: '37',chapter:"Setting the scene", title:"System Access", Link:'Comics/02-Setting the scene/Strip 38.png'},
	{id: '38',chapter:"Setting the scene", title:"We even have voice boxes with thier whiney voices", Link:'Comics/02-Setting the scene/Strip 39.png'},
	{id: '39',chapter:"Setting the scene", title:"Get Working", Link:'Comics/02-Setting the scene/Strip 40.png'},
	{id: '40',chapter:"Setting the scene", title:"You are doing it wrong", Link:'Comics/02-Setting the scene/Strip 41.png'},
	{id: '41',chapter:"Setting the scene", title:"First part of training", Link:'Comics/02-Setting the scene/Strip 42.png'},
	{id: '42',chapter:"Setting the scene", title:"It only took half the electric grid", Link:'Comics/02-Setting the scene/Strip 43.png'},
	{id: '43',chapter:"Setting the scene", title:"Museun il eodiya", Link:'Comics/02-Setting the scene/Strip 44.png'},
	{id: '44',chapter:"Setting the scene", title:"Best place for him", Link:'Comics/02-Setting the scene/Strip 45.png'},
	
	{id: '45',chapter:"Attack of the Spider", title:"The Begining", Link:'Comics/03- Attack of the Spider/Strip 46.png'},
	{id: '46',chapter:"Attack of the Spider", title:"Part 2", Link:'Comics/03- Attack of the Spider/Strip 47.png'},
	{id: '47',chapter:"Attack of the Spider", title:"Part III", Link:'Comics/03- Attack of the Spider/Strip 48.png'},
	{id: '48',chapter:"Attack of the Spider", title:"The Final Chapter", Link:'Comics/03- Attack of the Spider/Strip 49.png'},
	{id: '49',chapter:"Attack of the Spider", title:"A new Begining", Link:'Comics/03- Attack of the Spider/Strip 50.png'},
	{id: '50',chapter:"Attack of the Spider", title:"Spider Lives", Link:'Comics/03- Attack of the Spider/Strip 51.png'},
	{id: '51',chapter:"Attack of the Spider", title:"The new Blood", Link:'Comics/03- Attack of the Spider/Strip 52.png'},
	{id: '52',chapter:"Attack of the Spider", title:"Spider takes Manhattan", Link:'Comics/03- Attack of the Spider/Strip 53.png'},
	{id: '53',chapter:"Attack of the Spider", title:"The Final Spider", Link:'Comics/03- Attack of the Spider/Strip 54.png'},
	
	{id: '54',chapter:"This chapter needs a title", title:"The Bosses keep coming", Link:'Comics/04-This chapter needs a title/Strip 55.png'},
	{id: '55',chapter:"This chapter needs a title", title:"Only the good move on", Link:'Comics/04-This chapter needs a title/Strip 56.png'},
	{id: '56',chapter:"This chapter needs a title", title:"Big details", Link:'Comics/04-This chapter needs a title/Strip 57.png'},
	{id: '57',chapter:"This chapter needs a title", title:"Fresh Corn", Link:'Comics/04-This chapter needs a title/Strip 58.png'},
	{id: '58',chapter:"This chapter needs a title", title:"Not good enough", Link:'Comics/04-This chapter needs a title/Strip 59.png'},
	{id: '59',chapter:"This chapter needs a title", title:"... and capsicum", Link:'Comics/04-This chapter needs a title/Strip 60.png'},
	
	{id: '60',chapter:"Down with the sickness", title:"Back and forth", Link:'Comics/04-This chapter needs a title/Strip 61.png'},
	{id: '61',chapter:"Down with the sickness", title:"Probably should see a doctor", Link:'Comics/04-This chapter needs a title/Strip 62.png'},
	{id: '62',chapter:"Down with the sickness", title:"Railway installed", Link:'Comics/04-This chapter needs a title/Strip 63.png'},
	{id: '63',chapter:"Down with the sickness", title:"Hi Doctor Nick!", Link:'Comics/04-This chapter needs a title/Strip 64.png'},
	{id: '64',chapter:"Down with the sickness", title:"Bye Doctor Nick!", Link:'Comics/04-This chapter needs a title/Strip 65.png'},
	{id: '65',chapter:"Down with the sickness", title:"Pneumonia on First", Link:'Comics/04-This chapter needs a title/Strip 66.png'},
	{id: '66',chapter:"Down with the sickness", title:"Doctor Love", Link:'Comics/04-This chapter needs a title/Strip 67.png'},
	{id: '67',chapter:"Down with the sickness", title:"Days of our doctor", Link:'Comics/04-This chapter needs a title/Strip 68.png'},
	{id: '68',chapter:"Down with the sickness", title:"Thunder dome", Link:'Comics/04-This chapter needs a title/Strip 69.png'},
	{id: '69',chapter:"Down with the sickness", title:"Ready for the show", Link:'Comics/04-This chapter needs a title/Strip 70.png'},
	{id: '70',chapter:"Down with the sickness", title:"Bathroom break", Link:'Comics/04-This chapter needs a title/Strip 71.png'},
	{id: '71',chapter:"Down with the sickness", title:"A little distracted", Link:'Comics/04-This chapter needs a title/Strip 72.png'},
	
	{id: '72',chapter:"To the Movies", title:"Got things to do", Link:'Comics/04-This chapter needs a title/Strip 73.png'},
	{id: '73',chapter:"To the Movies", title:"Getting out of work", Link:'Comics/04-This chapter needs a title/Strip 74.png'},
	{id: '74',chapter:"To the Movies", title:"Complaining Together", Link:'Comics/04-This chapter needs a title/Strip 75.png'},
	{id: '75',chapter:"To the Movies", title:"You need to see it 12 times to get it", Link:'Comics/04-This chapter needs a title/Strip 76.png'},
	{id: '76',chapter:"To the Movies", title:"44 hour marathon", Link:'Comics/04-This chapter needs a title/Strip 77.png'},
	{id: '77',chapter:"To the Movies", title:"Sore Throat", Link:'Comics/04-This chapter needs a title/Strip 78.png'},
	{id: '78',chapter:"To the Movies", title:"Sneaking out", Link:'Comics/04-This chapter needs a title/Strip 79.png'},
	{id: '79',chapter:"To the Movies", title:"Movie vs DVD", Link:'Comics/04-This chapter needs a title/Strip 80.png'},
	{id: '80',chapter:"To the Movies", title:"To the Movies!", Link:'Comics/04-This chapter needs a title/Strip 81.png'},
	{id: '81',chapter:"To the Movies", title:"SAVINGS!", Link:'Comics/04-This chapter needs a title/Strip 82.png'},
	{id: '82',chapter:"To the Movies", title:"6:30 session", Link:'Comics/04-This chapter needs a title/Strip 83.png'},
	{id: '83',chapter:"To the Movies", title:"Mini Hats!", Link:'Comics/04-This chapter needs a title/Strip 84.png'},
	{id: '84',chapter:"To the Movies", title:"Always go before the movie", Link:'Comics/04-This chapter needs a title/Strip 85.png'},
	{id: '85',chapter:"To the Movies", title:"Adventure Victims Unit", Link:'Comics/04-This chapter needs a title/Strip 86.png'},
	{id: '86',chapter:"To the Movies", title:"Technical Dificulties", Link:'Comics/04-This chapter needs a title/Strip 87.png'},
	
	{id: '87',chapter:"Buttering them up", title:"Margarine of Power!", Link:'Comics/05- Buttering them up/Strip 88.png'},
	{id: '88',chapter:"Buttering them up", title:"Using Toons to sell products? Unposible", Link:'Comics/05- Buttering them up/Strip 89.png'},
	{id: '89',chapter:"Buttering them up", title:"The Refengateers", Link:'Comics/05- Buttering them up/Strip 90.png'},
	{id: '90',chapter:"Buttering them up", title:"The Breadsaver", Link:'Comics/05- Buttering them up/Strip 91.png'},
	{id: '91',chapter:"Buttering them up", title:"Can never get away", Link:'Comics/05- Buttering them up/Strip 92.png'},
	{id: '92',chapter:"Buttering them up", title:"Shock Jock Prune Juce: Goes through the day", Link:'Comics/05- Buttering them up/Strip 93.png'},
	{id: '93',chapter:"Buttering them up", title:"Season 2 - Episode 23", Link:'Comics/05- Buttering them up/Strip 94.png'},
	{id: '94',chapter:"Buttering them up", title:"NOTHING... TO... DO", Link:'Comics/05- Buttering them up/Strip 95.png'},
	{id: '95',chapter:"Buttering them up", title:"Love that series", Link:'Comics/05- Buttering them up/Strip 96.png'},
	{id: '96',chapter:"Buttering them up", title:"Increase my paycheck", Link:'Comics/05- Buttering them up/Strip 97.png'},
	{id: '97',chapter:"Buttering them up", title:"Shirts!", Link:'Comics/05- Buttering them up/Strip 98.png'},
	{id: '98',chapter:"Buttering them up", title:"The competition!", Link:'Comics/05- Buttering them up/Strip 99.png'},
	{id: '99',chapter:"Buttering them up", title:"One upman ship", Link:'Comics/05- Buttering them up/Strip 100.png'},
	{id: '100',chapter:"Buttering them up", title:"The Revengateer Jet", Link:'Comics/05- Buttering them up/Strip 101.png'},
	{id: '101',chapter:"Buttering them up", title:"Eternal Hatred", Link:'Comics/05- Buttering them up/Strip 102.png'},
	{id: '102',chapter:"Buttering them up", title:"Actors from the Cartoon", Link:'Comics/05- Buttering them up/Strip 103.png'},
	{id: '103',chapter:"Buttering them up", title:"The Sound of one mind snapping", Link:'Comics/05- Buttering them up/Strip 104.png'},
	{id: '104',chapter:"Buttering them up", title:"Kidnapping solves all the problems", Link:'Comics/05- Buttering them up/Strip 105.png'},
	{id: '105',chapter:"Buttering them up", title:"TRIPPLE PAY!!", Link:'Comics/05- Buttering them up/Strip 106.png'},
	{id: '106',chapter:"Buttering them up", title:"Working on it", Link:'Comics/05- Buttering them up/Strip 107.png'},
	{id: '107',chapter:"Buttering them up", title:"Miss direction", Link:'Comics/05- Buttering them up/Strip 108.png'},
	{id: '108',chapter:"Buttering them up", title:"Has 'beans'", Link:'Comics/05- Buttering them up/Strip 109.png'},
	{id: '109',chapter:"Buttering them up", title:"Good for a laugh", Link:'Comics/05- Buttering them up/Strip 110.png'},
	{id: '110',chapter:"Buttering them up", title:"Nothing can stop me now!", Link:'Comics/05- Buttering them up/Strip 111.png'},
	{id: '111',chapter:"Buttering them up", title:"Revenjette", Link:'Comics/05- Buttering them up/Strip 112.png'},
	{id: '112',chapter:"Buttering them up", title:"Don't cross her", Link:'Comics/05- Buttering them up/Strip 113.png'},
	{id: '113',chapter:"Buttering them up", title:"'Fresh' Mayo", Link:'Comics/05- Buttering them up/Strip 114.png'},
	{id: '114',chapter:"Buttering them up", title:"Want a burger", Link:'Comics/05- Buttering them up/Strip 115.png'},
	{id: '115',chapter:"Buttering them up", title:"Disguise", Link:'Comics/05- Buttering them up/Strip 116.png'},
	{id: '116',chapter:"Buttering them up", title:"Cosplay", Link:'Comics/05- Buttering them up/Strip 117.png'},
	{id: '117',chapter:"Buttering them up", title:"5 minutes", Link:'Comics/05- Buttering them up/Strip 118.png'},
	{id: '118',chapter:"Buttering them up", title:"Don't like you", Link:'Comics/05- Buttering them up/Strip 119.png'},
	{id: '119',chapter:"Buttering them up", title:"... crap", Link:'Comics/05- Buttering them up/Strip 120.png'},
	{id: '120',chapter:"Buttering them up", title:"Is this the correct location?", Link:'Comics/05- Buttering them up/Strip 121.png'},
	{id: '121',chapter:"Buttering them up", title:"Music at law", Link:'Comics/05- Buttering them up/Strip 122.png'},
	{id: '122',chapter:"Buttering them up", title:"You're worse", Link:'Comics/05- Buttering them up/Strip 123.png'},
	
	{id: '123',chapter:"Copy Cats", title:"Realworldia", Link:'Comics/06-Copy Cats/Strip 124.png'},
	{id: '124',chapter:"Copy Cats", title:"Lotto Tickets", Link:'Comics/06-Copy Cats/Strip 125.png'},
	{id: '125',chapter:"Copy Cats", title:"Damaged goods", Link:'Comics/06-Copy Cats/Strip 126.png'},
	
	{id: '126',chapter:"Game Mojo", title:"The new Game!", Link:'Comics/06-Copy Cats/Strip 127.png'},
	{id: '127',chapter:"Game Mojo", title:"Going slow", Link:'Comics/06-Copy Cats/Strip 128.png'},
	{id: '128',chapter:"Game Mojo", title:"Showing tactics", Link:'Comics/06-Copy Cats/Strip 129.png'},
	{id: '129',chapter:"Game Mojo", title:"The skill of the Irish", Link:'Comics/06-Copy Cats/Strip 130.png'},
	{id: '130',chapter:"Game Mojo", title:"... fun....", Link:'Comics/06-Copy Cats/Strip 131.png'},
	{id: '131',chapter:"Game Mojo", title:"Recorded your mistakes", Link:'Comics/06-Copy Cats/Strip 132.png'},
	{id: '132',chapter:"Game Mojo", title:"Defeate you!", Link:'Comics/06-Copy Cats/Strip 133.png'},
	{id: '133',chapter:"Game Mojo", title:"Lost the Mojo", Link:'Comics/06-Copy Cats/Strip 134.png'},
	{id: '134',chapter:"Game Mojo", title:"Gamer Funeral", Link:'Comics/06-Copy Cats/Strip 135.png'},
	{id: '135',chapter:"Game Mojo", title:"A good distraction", Link:'Comics/06-Copy Cats/Strip 136.png'},
	{id: '136',chapter:"Game Mojo", title:"Dangerous in here too", Link:'Comics/06-Copy Cats/Strip 137.png'},
	{id: '137',chapter:"Game Mojo", title:"Fix by obliteration", Link:'Comics/06-Copy Cats/Strip 138.png'},
	{id: '138',chapter:"Game Mojo", title:"Dishes", Link:'Comics/06-Copy Cats/Strip 139.png'},
	{id: '139',chapter:"Game Mojo", title:"Funeral part two", Link:'Comics/06-Copy Cats/Strip 140.png'},
	{id: '140',chapter:"Game Mojo", title:"Back to the games", Link:'Comics/06-Copy Cats/Strip 141.png'},
	{id: '141',chapter:"Game Mojo", title:"Sick of the attitude", Link:'Comics/06-Copy Cats/Strip 142.png'},
	{id: '142',chapter:"Game Mojo", title:"For the names, they are a changin'", Link:'Comics/06-Copy Cats/Strip 143.png'},
	{id: '143',chapter:"Robbed", title:"Early open", Link:'Comics/06-Copy Cats/Strip 144.png'},
	{id: '144',chapter:"Robbed", title:"Shop lifters", Link:'Comics/06-Copy Cats/Strip 145.png'},
	{id: '145',chapter:"Robbed", title:"Take everything or nothing!!", Link:'Comics/06-Copy Cats/Strip 146.png'},
	{id: '146',chapter:"Robbed", title:"And again", Link:'Comics/06-Copy Cats/Strip 147.png'},
	{id: '147',chapter:"Robbed", title:"Swinging on a Star", Link:'Comics/06-Copy Cats/Strip 148.png'},
	{id: '148',chapter:"Robbed", title:"Security", Link:'Comics/06-Copy Cats/Strip 149.png'},
	{id: '149',chapter:"Robbed", title:"I do the clubbing and the dancing", Link:'Comics/06-Copy Cats/Strip 150.png'},
	{id: '150',chapter:"Robbed", title:"High tech", Link:'Comics/06-Copy Cats/Strip 151.png'},
	{id: '151',chapter:"Robbed", title:"Is it legal?", Link:'Comics/06-Copy Cats/Strip 152.png'},
	{id: '152',chapter:"Robbed", title:"Rocket proof", Link:'Comics/06-Copy Cats/Strip 153.png'},
	{id: '153',chapter:"Robbed", title:"More Upfront", Link:'Comics/06-Copy Cats/Strip 154.png'},
	{id: '154',chapter:"Robbed", title:"Don't want trouble", Link:'Comics/06-Copy Cats/Strip 155.png'},
	{id: '155',chapter:"Robbed", title:"Trying to stay calm", Link:'Comics/06-Copy Cats/Strip 156.png'},
	{id: '156',chapter:"Robbed", title:"Report", Link:'Comics/06-Copy Cats/Strip 157.png'},
	{id: '157',chapter:"Robbed", title:"Just want to work", Link:'Comics/06-Copy Cats/Strip 158.png'},
	{id: '158',chapter:"Robbed", title:"Need to talk", Link:'Comics/06-Copy Cats/Strip 159.png'},
	
	{id: '159',chapter:"Supply unchained", title:"To re-re-re-iterate, get us money", Link:'Comics/06-Copy Cats/Strip 160.png'},
	{id: '160',chapter:"Supply unchained", title:"New and improved", Link:'Comics/06-Copy Cats/Strip 161.png'},
	{id: '161',chapter:"Supply unchained", title:"Slack of inventory", Link:'Comics/06-Copy Cats/Strip 162.png'},
	{id: '162',chapter:"Supply unchained", title:"Money comes in, money does not come out", Link:'Comics/06-Copy Cats/Strip 163.png'},
	{id: '163',chapter:"Supply unchained", title:"Easy", Link:'Comics/06-Copy Cats/Strip 164.png'},
	{id: '164',chapter:"Supply unchained", title:"Zero Transfer", Link:'Comics/06-Copy Cats/Strip 165.png'},
	{id: '165',chapter:"Supply unchained", title:"Need to buy", Link:'Comics/06-Copy Cats/Strip 166.png'},
	{id: '166',chapter:"Supply unchained", title:"Have a plan!", Link:'Comics/06-Copy Cats/Strip 167.png'},
	{id: '167',chapter:"Supply unchained", title:"Lederhosen", Link:'Comics/06-Copy Cats/Strip 168.png'},
	{id: '168',chapter:"Supply unchained", title:"Ooo ya ya!", Link:'Comics/06-Copy Cats/Strip 169.png'},
	{id: '169',chapter:"Supply unchained", title:"Electronic groceries!", Link:'Comics/06-Copy Cats/Strip 170.png'},
	{id: '170',chapter:"Supply unchained", title:"The... device", Link:'Comics/06-Copy Cats/Strip 171.png'},
];