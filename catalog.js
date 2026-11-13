// Catalogue partagé (accueil + pages produit)
  // ===== Catalogue (mêmes produits que la boutique Etsy) =====
  window.L=id=>'https://www.etsy.com/listing/'+id;
  window.CATS=[
    {id:'all',fr:'tout voir',en:'see all'},
    {id:'pf',fr:'affiches premières fois',en:'first times posters',subs:[
      {id:'bebe',fr:'bébé',en:'baby'},{id:'enfant',fr:'enfant',en:'child'},{id:'famille',fr:'famille',en:'family'},{id:'animaux',fr:'animaux',en:'pets'}]},
    {id:'dater',fr:'affiches à dater',en:'posters to date',subs:[
      {id:'grossesse',fr:'grossesse',en:'pregnancy'},{id:'enfance',fr:'enfance',en:'childhood'}]},
    {id:'voyage',fr:'affiches voyage',en:'travel posters'},
    {id:'lettres',fr:'lettres à écrire',en:'letters to write',subs:[
      {id:'collections',fr:'les collections',en:'the collections'},{id:'coffret',fr:'le coffret',en:'the gift box'}]}
  ];
  window.P=[
    {slug:'bebe',cat:'pf',sub:'bebe',ic:'i-soleil',w:'rose',fr:'les premières fois de bébé',en:"baby's first times",dfr:"Avec le prénom de l'enfant. Vous notez la date de chaque première fois.",den:"With the child's name. Write down the date of each first time.",papier:4572582204,pdf:4403564080},
    {slug:'bebe-chretien',cat:'pf',sub:'bebe',ic:'i-coeurs-bocal',w:'beige',fr:'les premières fois de bébé · version chrétienne',en:"baby's first times · Christian version",dfr:'Avec le baptême et les grandes fêtes chrétiennes.',den:'With the baptism and the main Christian holidays.',papier:1811950988,pdf:4604538396},
    {slug:'bebe-juif',cat:'pf',sub:'bebe',ic:'i-lune',w:'bleu',fr:'les premières fois de bébé · version juive',en:"baby's first times · Jewish version",dfr:'Avec les grandes fêtes juives.',den:'With the main Jewish holidays.',papier:4403812540,pdf:4604518173},
    {slug:'bebe-musulman',cat:'pf',sub:'bebe',ic:'i-lune',w:'vert',fr:'les premières fois de bébé · version musulmane',en:"baby's first times · Muslim version",dfr:'Avec les grandes fêtes musulmanes.',den:'With the main Muslim holidays.',papier:1811925226,pdf:4604539174},
    {slug:'grand',cat:'pf',sub:'enfant',ic:'i-abc',w:'jaune',fr:'les premières fois de grand',en:'growing up first times',dfr:"Pour les enfants un peu plus grands : premier jour d'école, premier vélo, première dent qui tombe…",den:'For slightly older children: first day of school, first bike, first lost tooth…',papier:4403562900,pdf:4604519475},
    {slug:'maman',cat:'pf',sub:'famille',ic:'i-maman',w:'rose',fr:'les premières fois de maman',en:"mum's first times",dfr:'Toutes les premières fois vécues en devenant maman.',den:'All the first times of becoming a mum.',papier:1811922712,pdf:4604515035},
    {slug:'papa',cat:'pf',sub:'famille',ic:'i-ballons',w:'bleu',fr:'les premières fois de super papa',en:"super dad's first times",dfr:'Toutes les premières fois vécues en devenant papa.',den:'All the first times of becoming a dad.',papier:4403566828,pdf:4604519191},
    {slug:'mamie-papi',cat:'pf',sub:'famille',ic:'i-mains',w:'beige',fr:'les premières fois de mamie et papi',en:"grandma and grandpa's first times",dfr:'Pour les grands-parents, qui ont toute leur place dans l’histoire.',den:'For grandparents, who have their place in the story too.',papier:1811921450,pdf:4604517973},
    {slug:'chien-chat',cat:'pf',sub:'animaux',ic:'i-poulpe',w:'jaune',fr:'les premières fois de mon chien ou de mon chat',en:"my dog's or cat's first times",dfr:'Pour garder les souvenirs de votre compagnon à quatre pattes.',den:'To keep the memories of your four-legged friend.',papier:1826111585,pdf:4604517473},
    {slug:'grossesse',cat:'dater',sub:'grossesse',ic:'i-test',w:'rose',fr:'ma grossesse',en:'my pregnancy',dfr:"Du test positif à l'arrivée à la maternité, toutes les étapes à noter.",den:'From the positive test to the maternity ward, every step to write down.',papier:4403618773,pdf:4604518957},
    {slug:'betises',cat:'dater',sub:'enfance',ic:'i-bain',w:'bleu',fr:'les premières petites bêtises',en:'first little mischiefs',dfr:'Lancer la purée, dessiner sur les murs… pour en rire plus tard.',den:'Throwing mashed potatoes, drawing on the walls… to laugh about later.',papier:4403567769,pdf:4604520009},
    {slug:'fruits-legumes',cat:'dater',sub:'enfance',ic:'i-biberon',w:'vert',fr:'les premiers fruits et légumes',en:'first fruits and vegetables',dfr:'Pour noter chaque nouvel aliment goûté pendant la diversification.',den:'To note each new food tasted while starting solids.',papier:4403561166,pdf:4604541918},
    {slug:'city-world-trip',cat:'voyage',ic:'i-ballons-coeurs',w:'bleu',fr:'city trip ou world trip',en:'city trip or world trip',dfr:'Cochez et datez chaque ville ou chaque pays visité.',den:'Tick and date each city or country you visit.',papier:1826131923,pdf:4604539864},
    {slug:'coffret-lettres',cat:'lettres',sub:'coffret',ic:'i-coeurs-bocal',w:'beige',fr:'le coffret des 5 collections',en:'the 5 collections gift box',dfr:'Les 41 lettres des 5 collections, avec leurs enveloppes.',den:'All 41 letters from the 5 collections, with their envelopes.',papier:4608146536,pp:'45,90',pd:'34,90',pdf:4608123621,en_:4608175678},
    {slug:'lettres-proches',cat:'lettres',sub:'collections',ic:'i-coeurs-bocal',w:'rose',fr:"lettres aux personnes que j'aime",en:'letters to the people I love',dfr:'Des lettres à écrire et à glisser dans leurs enveloppes.',den:'Letters to write and slip into their envelopes.',papier:4608144376,pp:'22,90',pd:'13,90',pdf:4608119591,en_:4608156013},
    {slug:'lettres-reconfort',cat:'lettres',sub:'collections',ic:'i-soleil',w:'jaune',fr:'lettres de réconfort',en:'comfort letters',dfr:'Des mots doux à ouvrir dans les moments difficiles.',den:'Kind words to open in difficult moments.',papier:4608146182,pp:'22,90',pd:'13,90',pdf:4608142844,en_:4608175054},
    {slug:'lettres-couple',cat:'lettres',sub:'collections',ic:'i-ballons-coeurs',w:'rose',fr:'lettres de couple',en:'letters for couples',dfr:'Des lettres à écrire à la personne qu’on aime.',den:'Letters to write to the one you love.',papier:4608125849,pp:'15,90',pd:'9,90',pdf:4608122075,en_:4608154361},
    {slug:'lettres-plus-tard',cat:'lettres',sub:'collections',ic:'i-mains',w:'beige',fr:'lettres à mon enfant pour plus tard',en:'letters to my child for later',dfr:'À ouvrir le jour de ses 18 ans, de son premier amour…',den:'To open on their 18th birthday, their first love…',papier:4608125207,pp:'15,90',pd:'9,90',pdf:4608140982,en_:4608153381},
    {slug:'lettres-souvenirs',cat:'lettres',sub:'collections',ic:'i-poussette',w:'vert',fr:"lettres souvenirs d'enfance",en:'childhood memories letters',dfr:"Pour raconter à son enfant ses premières années.",den:'To tell your child about their first years.',papier:4608145578,pp:'16,90',pd:'13,90',pdf:4608121561,en_:4608153871},
  ];
