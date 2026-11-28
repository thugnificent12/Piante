/* Schede di cura generali per piante comuni.
   Sono indicazioni generali (non controllate su fonti una per una): nell'app compaiono
   sempre con la scritta "Dati generali: da verificare". Le temperature minime sono stime. */
(function(){
const X1='Tossica se mangiata: tienila lontana da cani, gatti e bambini.';
const X2='Molto tossica (anche poche foglie o fiori): lontana da bambini e animali.';
const X3='La linfa irrita la pelle e gli occhi: usa i guanti quando la tagli. Tossica se mangiata.';
const XL='Molto tossica per i gatti, anche solo il polline: meglio non averla in casa con gatti.';
const ACIDA='Acqua senza calcare (piovana o demineralizzata) se puoi: il calcare ingiallisce le foglie.';
const M49=[4,5,6,7,8,9],M48=[4,5,6,7,8],M310=[3,4,5,6,7,8,9,10];

const T={
 verde:{
  luce:'Luce forte ma non diretta. Il sole diretto può bruciare le foglie.',
  acqua:'Quando i primi 3-5 cm di terra sono asciutti (infila un dito). In inverno meno. Svuota sempre il sottovaso.',
  tipoAcqua:'Acqua del rubinetto lasciata riposare un giorno, non fredda.',
  terra:'Terriccio per piante verdi, soffice, con un po\' di perlite perché scoli bene.',
  concime:'Liquido per piante verdi, 1 volta al mese da aprile a settembre.',
  tipo:'Sempreverde. Cresce in primavera-estate, in inverno rallenta.',
  potatura:'In primavera togli le foglie secche e accorcia i rami troppo lunghi. Forbici pulite.',
  rinvaso:'Ogni 2 anni in primavera, vaso più grande di 3-5 cm.',
  fd:30,fm:M49,pr:{months:[3,4,5],every:300,label:'Pota'},
  problemi:[
   ['Foglie gialle','troppa acqua','aspetta che la terra asciughi'],
   ['Punte marroni','aria secca o poca acqua','annaffia con più regolarità e tienila lontana dai termosifoni'],
   ['Ragnatele fini sotto le foglie','ragnetto rosso','lava le foglie e aumenta l\'umidità'],
   ['Cotone bianco sui nodi','cocciniglia','pulisci con un cotone e un po\' di alcol']
  ]},
 ombra:{
  luce:'Tollera poca luce, ma cresce meglio con luce media. Evita il sole diretto.',
  acqua:'Quando la terra è asciutta per metà vaso. In inverno meno. Svuota sempre il sottovaso.',
  tipoAcqua:'Acqua del rubinetto lasciata riposare un giorno.',
  terra:'Terriccio universale con un po\' di perlite.',
  concime:'Liquido per piante verdi, 1 volta al mese da aprile a settembre.',
  tipo:'Sempreverde, resistente. Cresce piano.',
  potatura:'Togli solo foglie secche o rovinate. Forbici pulite.',
  rinvaso:'Ogni 2-3 anni in primavera.',
  fd:30,fm:M49,pr:null,
  problemi:[
   ['Foglie gialle e molli','troppa acqua','smetti di annaffiare e controlla le radici'],
   ['Punte marroni','aria secca','tienila lontana dai termosifoni'],
   ['Cotone bianco sui nodi','cocciniglia','pulisci con un cotone e un po\' di alcol']
  ]},
 umida:{
  luce:'Luce media o filtrata, mai sole diretto.',
  acqua:'Terra sempre un po\' umida ma non bagnata: non lasciarla seccare del tutto.',
  tipoAcqua:'Acqua senza calcare (piovana, o del rubinetto lasciata riposare) a temperatura ambiente.',
  terra:'Terriccio soffice e ricco, che trattiene un po\' di umidità ma scola.',
  concime:'Liquido diluito a metà, 1 volta al mese da aprile a settembre.',
  tipo:'Sempreverde. Ama l\'aria umida: tienila lontana da termosifoni e correnti.',
  potatura:'Togli le foglie secche alla base.',
  rinvaso:'Ogni anno o ogni 2 anni in primavera.',
  fd:30,fm:M49,pr:null,
  problemi:[
   ['Punte marroni e secche','aria secca o acqua calcarea','usa acqua senza calcare e vaporizza intorno alla pianta'],
   ['Foglie arrotolate','terra troppo asciutta','annaffia e controlla che la terra resti umida'],
   ['Ragnatele fini sotto le foglie','ragnetto rosso','lava le foglie e aumenta l\'umidità']
  ]},
 grassa:{
  luce:'Molta luce, anche qualche ora di sole.',
  acqua:'Poca acqua: solo quando la terra è asciutta fino in fondo. In inverno quasi niente.',
  tipoAcqua:'Acqua del rubinetto va bene.',
  terra:'Terriccio per cactus e grasse, molto drenante (con pomice o sabbia grossa).',
  concime:'Concime per grasse, 1 volta al mese da aprile ad agosto.',
  tipo:'Sempreverde. Cresce in primavera-estate, in inverno riposa.',
  potatura:'Di solito non serve. Togli le foglie secche in basso.',
  rinvaso:'Ogni 2-3 anni in primavera, vaso poco più grande.',
  fd:30,fm:M48,pr:null,
  problemi:[
   ['Foglie molli e trasparenti','troppa acqua','smetti di annaffiare, controlla le radici'],
   ['Fusto lungo e pallido','poca luce','spostala dove c\'è più luce, piano piano'],
   ['Cotone bianco tra le foglie','cocciniglia','tampona con un cotone e un po\' di alcol']
  ]},
 cactus:{
  luce:'Sole pieno o molta luce.',
  acqua:'Poca acqua: solo quando la terra è asciutta fino in fondo. Da fine settembre riduci, in inverno quasi niente.',
  tipoAcqua:'Acqua del rubinetto va bene.',
  terra:'Terriccio per cactus, che scola molto bene (con pomice o sabbia grossa).',
  concime:'Concime per cactus, 1 volta al mese da aprile ad agosto.',
  tipo:'Cactus sempreverde. Cresce in estate, in inverno riposa quasi all\'asciutto.',
  potatura:'Non si pota.',
  rinvaso:'Ogni 2-3 anni in primavera, con guanti spessi.',
  fd:30,fm:M48,pr:null,
  problemi:[
   ['Base molle e scura','marciume per troppa acqua','smetti di annaffiare, controlla le radici'],
   ['Fusto lungo e sottile','poca luce','spostala al sole piano piano'],
   ['Cotone bianco tra le spine','cocciniglia','tampona con un cotone e un po\' di alcol']
  ]},
 felce:{
  luce:'Luce media o ombra luminosa, mai sole diretto.',
  acqua:'Terra sempre leggermente umida, mai secca.',
  tipoAcqua:'Acqua senza calcare (piovana, o del rubinetto lasciata riposare).',
  terra:'Terriccio soffice e ricco, con torba o fibra di cocco.',
  concime:'Liquido diluito a metà, 1 volta al mese da aprile a settembre.',
  tipo:'Sempreverde. Ama l\'aria umida: vaporizza spesso, lontano dai termosifoni.',
  potatura:'Taglia alla base le fronde secche.',
  rinvaso:'Ogni 1-2 anni in primavera.',
  fd:30,fm:M49,pr:null,
  problemi:[
   ['Fronde secche e marroni','aria secca o terra asciutta','annaffia più spesso e vaporizza'],
   ['Fronde gialle','troppa acqua o troppa luce','controlla la terra e sposta in un posto meno luminoso'],
   ['Puntini marroni sotto le fronde','cocciniglia','pulisci con un cotone e un po\' di alcol']
  ]},
 med:{
  luce:'Sole pieno, almeno 6 ore.',
  acqua:'Poca: quando la terra è asciutta a 3-4 cm. Odia i ristagni.',
  tipoAcqua:'Acqua del rubinetto va bene.',
  terra:'Terriccio sabbioso, che scola molto bene.',
  concime:'Poco: 1 volta in primavera, basta un concime leggero.',
  tipo:'Perenne sempreverde. Resiste al freddo.',
  potatura:'Dopo la fioritura accorcia i rami di un terzo, senza tagliare il legno vecchio.',
  rinvaso:'Ogni 2-3 anni in primavera, in un vaso più grande.',
  fd:60,fm:[4,5,6],pr:{months:[6,7,8],every:300,label:'Pota'},
  problemi:[
   ['Foglie gialle e terra sempre bagnata','troppa acqua','annaffia meno e controlla il drenaggio'],
   ['Rami secchi dal basso','troppa acqua o gelo','togli i rami secchi e controlla il drenaggio'],
   ['Puntini bianchi appiccicosi','cocciniglia o afidi','lava con acqua e un po\' di sapone di Marsiglia diluito']
  ]},
 erba:{
  luce:'Sole o mezz\'ombra luminosa.',
  acqua:'Terra sempre un po\' umida, non lasciarla seccare.',
  tipoAcqua:'Acqua del rubinetto va bene.',
  terra:'Terriccio universale ricco, in vaso profondo.',
  concime:'Liquido leggero ogni 3-4 settimane da aprile a settembre.',
  tipo:'Aromatica. Raccogli spesso le foglie e le cime: la fa ramificare.',
  potatura:'Taglia le cime e togli i fiori per avere più foglie.',
  rinvaso:'Si mette in un vaso grande appena la compri, poi ogni anno terra nuova.',
  fd:28,fm:M49,pr:null,
  problemi:[
   ['Foglie gialle','troppa acqua o poca luce','controlla la terra e spostala al sole'],
   ['Insetti piccoli sulle cime','afidi','lavali con acqua e un po\' di sapone di Marsiglia diluito'],
   ['Sale a fiore troppo presto','caldo o poca acqua','taglia i fiori e annaffia con più regolarità']
  ]},
 agrume:{
  luce:'Sole pieno, 6 ore o più. In inverno in un posto luminoso e fresco.',
  acqua:'Quando i primi 3-4 cm di terra sono asciutti. In inverno meno.',
  tipoAcqua:'Acqua del rubinetto lasciata riposare, non fredda. Meglio senza troppo calcare.',
  terra:'Terriccio per agrumi, un po\' acido e che scola bene.',
  concime:'Concime per agrumi (con microelementi) ogni 3-4 settimane da marzo a ottobre.',
  tipo:'Sempreverde. Teme il gelo: d\'inverno riparalo.',
  potatura:'A fine inverno togli i rami secchi e incrociati e accorcia i rami lunghi.',
  rinvaso:'Ogni 2-3 anni a fine inverno, con terra per agrumi.',
  fd:25,fm:M310,pr:{months:[2,3],every:300,label:'Pota'},
  problemi:[
   ['Foglie gialle con le nervature verdi','manca il ferro (clorosi)','usa un concime con ferro chelato'],
   ['Foglie arrotolate e appiccicose','afidi','lavali con acqua e un po\' di sapone di Marsiglia diluito'],
   ['Foglie che cadono','freddo, troppa o poca acqua','controlla la terra e riparala dal gelo'],
   ['Croste sui rami e foglie appiccicose','cocciniglia','pulisci con un cotone e un po\' di alcol']
  ]},
 orto:{
  luce:'Sole pieno, almeno 6-8 ore.',
  acqua:'Spesso e con regolarità: terra sempre un po\' umida, senza ristagni. Meglio al mattino, alla base della pianta.',
  tipoAcqua:'Acqua del rubinetto va bene.',
  terra:'Terriccio ricco per orto, in un vaso grande.',
  concime:'Concime per orto ogni 2 settimane mentre cresce, da aprile a settembre.',
  tipo:'Pianta di una sola stagione (annuale): si pianta in primavera e dà frutti in estate. Teme il freddo.',
  potatura:'Togli le foglie gialle e secche in basso.',
  rinvaso:'Si mette subito nel vaso definitivo, grande.',
  fd:14,fm:M49,pr:null,
  problemi:[
   ['Foglie gialle in basso','poca acqua o poco concime','annaffia con regolarità e concima'],
   ['Polvere bianca sulle foglie','oidio (muffa)','togli le foglie malate e non bagnare le foglie'],
   ['Insetti piccoli sulle cime','afidi','lavali con acqua e un po\' di sapone di Marsiglia diluito'],
   ['Foglie mangiate di notte','lumache','metti trappole o raccoglile la sera']
  ]},
 fiore:{
  luce:'Sole o mezz\'ombra luminosa.',
  acqua:'Terra sempre un po\' umida, senza ristagni. Controlla ogni giorno quando fa caldo.',
  tipoAcqua:'Acqua del rubinetto va bene.',
  terra:'Terriccio universale ricco.',
  concime:'Concime per piante fiorite, diluito, ogni 1-2 settimane da aprile a settembre.',
  tipo:'Fiorisce da primavera ad autunno. Si pianta di nuovo ogni anno.',
  potatura:'Togli i fiori appassiti: fa fiorire di più.',
  rinvaso:'Si mette subito nel vaso definitivo.',
  fd:14,fm:M49,pr:null,
  problemi:[
   ['Foglie e boccioli che cadono','troppa o poca acqua','controlla la terra e annaffia con regolarità'],
   ['Foglie appiccicose, insetti sulle cime','afidi','lavali con acqua e un po\' di sapone di Marsiglia diluito'],
   ['Muffa grigia sui fiori','umidità troppo alta','togli le parti malate e non bagnare i fiori']
  ]},
 arbusto:{
  luce:'Sole o mezz\'ombra luminosa.',
  acqua:'Quando i primi 3 cm di terra sono asciutti. In inverno meno.',
  tipoAcqua:'Acqua del rubinetto va bene.',
  terra:'Terriccio universale ricco, con un po\' di sabbia o perlite per il drenaggio.',
  concime:'Concime per piante da fiore o da esterno, 1 volta al mese da aprile a settembre.',
  tipo:'Arbusto perenne. Cresce e fiorisce in primavera-estate.',
  potatura:'Togli i rami secchi e rovinati. Accorcia dopo la fioritura.',
  rinvaso:'Ogni 2-3 anni a fine inverno, in un vaso più grande.',
  fd:30,fm:M49,pr:{months:[3,4,5,9],every:300,label:'Pota'},
  problemi:[
   ['Foglie gialle','troppa acqua o poco concime','controlla la terra e concima'],
   ['Foglie appiccicose, insetti sulle cime','afidi','lavali con acqua e un po\' di sapone di Marsiglia diluito'],
   ['Polvere bianca sulle foglie','oidio (muffa)','togli le foglie malate e non bagnare le foglie']
  ]},
 bulbo:{
  luce:'Sole o mezz\'ombra luminosa.',
  acqua:'Moderata mentre cresce e fiorisce. Dopo la fioritura sempre meno. Mai ristagni.',
  tipoAcqua:'Acqua del rubinetto va bene.',
  terra:'Terriccio ricco che scola molto bene (i bulbi marciscono se restano bagnati).',
  concime:'Concime per piante fiorite 1-2 volte mentre le foglie crescono.',
  tipo:'Bulbosa: fiorisce, poi la parte verde secca e il bulbo riposa sotto terra.',
  potatura:'Dopo la fioritura togli il fiore, ma lascia le foglie finché ingialliscono da sole.',
  rinvaso:'Si ripianta ogni anno o ogni 2 anni al momento giusto per quella specie.',
  fd:30,fm:[3,4,5],pr:null,
  problemi:[
   ['Fiori che non escono','bulbo piantato troppo poco o poca luce','controlla la profondità e la luce'],
   ['Bulbo molle','troppa acqua','smetti di annaffiare, il marciume non torna indietro']
  ]},
 palma:{
  luce:'Luce forte ma non diretta (le palme da esterno vogliono il sole).',
  acqua:'Quando la terra è asciutta per i primi 3-5 cm. In inverno meno. Svuota il sottovaso.',
  tipoAcqua:'Acqua del rubinetto lasciata riposare un giorno.',
  terra:'Terriccio per palme o piante verdi, soffice e drenante.',
  concime:'Concime per palme, 1 volta al mese da aprile a settembre.',
  tipo:'Sempreverde. Cresce piano, in primavera-estate.',
  potatura:'Taglia solo le foglie completamente secche, vicino al tronco.',
  rinvaso:'Ogni 2-3 anni in primavera. Non ama essere disturbata.',
  fd:30,fm:M49,pr:null,
  problemi:[
   ['Punte marroni','aria secca o acqua calcarea','vaporizza e usa acqua senza calcare'],
   ['Ragnatele sotto le foglie','ragnetto rosso','lava le foglie e aumenta l\'umidità'],
   ['Croste sulle foglie','cocciniglia','pulisci con un cotone e un po\' di alcol']
  ]}
};

const CARN={
 luce:'Sole pieno (almeno 4-6 ore di sole diretto).',
 acqua:'Tieni il vasetto sempre con 1-2 cm di acqua nel sottovaso.',
 tipoAcqua:'Solo acqua piovana o demineralizzata: il calcare e i sali la danneggiano.',
 terra:'Torba bionda con perlite o sabbia di quarzo, senza concime.',
 concime:'Niente concime. Si nutre da sola con gli insetti.',
 tipo:'Carnivora. Cresce in primavera-estate; in inverno riposa al fresco.',
 potatura:'Taglia solo le parti secche e nere.',
 rinvaso:'Ogni 1-2 anni in primavera, sempre con torba e perlite.',
 fd:null,fm:[],pr:null,
 problemi:[
  ['Foglie nere','normale a fine stagione, o troppa luce/sali','togli le parti nere, usa solo acqua pura'],
  ['Non si chiude o non cattura','troppa luce o troppa acqua dura','usa acqua piovana e più sole']
 ]
};

/* [nome, alias, nome scientifico, tipo, giorni acqua estate, giorni acqua inverno (0 = nessun promemoria), min °C, fuori(1/0), avviso tossica, correzioni] */
const L=[
 /* da appartamento, foglie */
 ['Pothos',['pothos','potos','epipremnum','scindapsus aureus','devil\'s ivy'],'Epipremnum aureum','ombra',7,12,12,0,X1],
 ['Philodendron scandens',['philodendron','filodendro','philodendron hederaceum','heartleaf philodendron'],'Philodendron hederaceum','verde',7,12,12,0,X1],
 ['Ficus benjamina',['ficus','benjamin','weeping fig'],'Ficus benjamina','verde',7,14,10,0,X1,{luce:'Luce forte ma non diretta. Non ama gli spostamenti e le correnti: se la sposti perde le foglie.'}],
 ['Ficus lyrata',['ficus lira','fiddle leaf fig','fiddle-leaf'],'Ficus lyrata','verde',7,14,12,0,X1],
 ['Ficus elastica',['gomma','pianta della gomma','rubber plant','ficus robusta'],'Ficus elastica','verde',8,14,10,0,X3],
 ['Ficus ginseng',['ficus microcarpa','ginseng','ficus bonsai'],'Ficus microcarpa','verde',7,14,10,0,X1],
 ['Dracena marginata',['dracaena marginata','dracena','dragon tree'],'Dracaena marginata','ombra',10,18,10,0,X1],
 ['Tronchetto della felicità',['dracaena fragrans','tronchetto','massangeana','corn plant'],'Dracaena fragrans','ombra',8,14,10,0,X1],
 ['Zamioculcas',['zz plant','zamioculcas zamiifolia','pianta zz'],'Zamioculcas zamiifolia','ombra',14,30,10,0,X1,{acqua:'Poca: quando la terra è asciutta fino in fondo (ogni 2-3 settimane). Sopporta bene la dimenticanza.'}],
 ['Spatifillo',['spathiphyllum','giglio della pace','peace lily'],'Spathiphyllum wallisii','umida',5,8,10,0,X1,{luce:'Luce media o poca luce. Fiorisce meglio con luce media.',acqua:'Terra sempre un po\' umida. Se si affloscia è sete: si riprende dopo l\'acqua.'}],
 ['Falangio',['pianta ragno','chlorophytum','chlorophytum comosum','spider plant','nastrino'],'Chlorophytum comosum','verde',6,10,5,0,null,{luce:'Luce media o forte, senza sole diretto.'}],
 ['Dieffenbachia',['dieffenbachia','dumb cane'],'Dieffenbachia seguine','verde',7,12,15,0,X3],
 ['Aglaonema',['aglaonema','sempreverde cinese','chinese evergreen'],'Aglaonema commutatum','ombra',7,12,14,0,X1],
 ['Calathea',['calathea','goeppertia','pianta della preghiera'],'Goeppertia makoyana','umida',5,8,15,0,null],
 ['Maranta',['maranta leuconeura','pianta della preghiera','prayer plant'],'Maranta leuconeura','umida',5,8,15,0,null],
 ['Pilea',['pilea peperomioides','pianta del denaro cinese','chinese money plant','pilea'],'Pilea peperomioides','verde',7,12,10,0,null,{acqua:'Quando i primi 3 cm di terra sono asciutti. Girala ogni tanto verso la luce.'}],
 ['Peperomia',['peperomia obtusifolia','peperomia'],'Peperomia obtusifolia','verde',10,16,12,0,null,{acqua:'Quando la terra è asciutta per metà vaso: le foglie carnose trattengono acqua.'}],
 ['Schefflera',['schefflera arboricola','ombrellina','umbrella tree'],'Schefflera arboricola','verde',7,12,10,0,X1],
 ['Yucca',['yucca elephantipes','yucca gigantea','palma yucca'],'Yucca gigantea','ombra',10,21,5,0,X1,{luce:'Luce forte, anche un po\' di sole. In estate può stare all\'aperto.'}],
 ['Anthurium',['anthurium andraeanum','anturium','fior di fenicottero','flamingo flower'],'Anthurium andraeanum','umida',5,8,15,0,X1,{luce:'Luce forte ma non diretta, per fiorire.'}],
 ['Syngonium',['syngonium podophyllum','sinconio','arrowhead plant'],'Syngonium podophyllum','verde',7,12,15,0,X1],
 ['Alocasia',['alocasia','orecchio d\'elefante','elephant ear','alocasia amazonica'],'Alocasia × amazonica','umida',6,12,15,0,X1,{tipo:'Sempreverde in casa. Se fa freddo perde le foglie e riposa: annaffia pochissimo finché ricresce.'}],
 ['Croton',['codiaeum variegatum','croton','codiaeum'],'Codiaeum variegatum','verde',5,8,15,0,X3,{luce:'Molta luce, anche un po\' di sole: serve per tenere i colori.'}],
 ['Tradescantia',['tradescantia','erba miseria','tradescantia zebrina','wandering jew'],'Tradescantia zebrina','verde',6,10,10,0,'Può irritare la pelle: usa i guanti se hai la pelle sensibile.'],
 ['Edera',['hedera helix','edera comune','english ivy','ivy'],'Hedera helix','arbusto',6,14,-15,1,X1,{luce:'Mezz\'ombra o ombra luminosa.',tipo:'Rampicante sempreverde. Resiste al freddo.'}],
 ['Cissus',['cissus rhombifolia','edera da appartamento','grape ivy','vite da appartamento'],'Cissus rhombifolia','verde',7,12,10,0,null],
 ['Aspidistra',['aspidistra elatior','pianta di ferro','cast iron plant'],'Aspidistra elatior','ombra',10,18,0,0,null,{luce:'Ombra o luce scarsa: bruciare al sole è facile.'}],
 ['Fittonia',['fittonia','nerve plant','fittonia albivenis'],'Fittonia albivenis','umida',4,6,15,0,null],
 ['Scindapsus',['scindapsus pictus','pothos argentato','satin pothos'],'Scindapsus pictus','ombra',8,14,12,0,X1],
 ['Monstera adansonii',['adansonii','monstera piccola','swiss cheese vine'],'Monstera adansonii','verde',6,10,12,0,X1],
 ['Rhaphidophora tetrasperma',['rhaphidophora','mini monstera','monstera minima'],'Rhaphidophora tetrasperma','verde',7,12,12,0,X1],
 ['Strelitzia',['strelitzia reginae','uccello del paradiso','bird of paradise'],'Strelitzia reginae','verde',7,14,10,0,X1,{luce:'Molta luce e qualche ora di sole.'}],
 ['Clivia',['clivia miniata','clivia'],'Clivia miniata','verde',10,21,5,0,X1,{luce:'Luce media o forte, senza sole diretto. In inverno tienila al fresco (10-12 °C) per farla fiorire.',acqua:'Quando la terra è asciutta per i primi 3 cm. In inverno poca acqua, in un posto fresco.'}],
 ['Pachira',['pachira aquatica','castagno della guyana','money tree','albero dei soldi'],'Pachira aquatica','verde',10,18,10,0,null],
 ['Cyperus',['cyperus','papiro','papiro da appartamento','umbrella papyrus'],'Cyperus alternifolius','umida',2,4,5,0,null,{acqua:'Ama stare con un po\' d\'acqua nel sottovaso: tienilo sempre umido.',luce:'Luce forte e anche un po\' di sole.'}],
 ['Beaucarnea',['beaucarnea recurvata','nolina','pianta zampa d\'elefante','ponytail palm'],'Beaucarnea recurvata','grassa',14,30,8,0,null,{luce:'Molta luce, anche sole. Il fusto gonfio tiene acqua di riserva.'}],
 /* felci, palme */
 ['Felce di Boston',['nephrolepis','nephrolepis exaltata','felce','boston fern'],'Nephrolepis exaltata','felce',3,5,10,0,null],
 ['Asplenium',['asplenium nidus','nido d\'uccello','bird\'s nest fern','felce nido'],'Asplenium nidus','felce',5,8,12,0,null,{acqua:'Terra sempre leggermente umida. Versa l\'acqua intorno, non al centro della rosetta.'}],
 ['Kentia',['howea forsteriana','kentia','palma kentia'],'Howea forsteriana','palma',7,14,8,0,null],
 ['Palma da salotto',['chamaedorea elegans','palma da salotto','parlor palm'],'Chamaedorea elegans','palma',5,8,10,0,null],
 ['Areca',['dypsis lutescens','areca','palma areca','chrysalidocarpus'],'Dypsis lutescens','palma',5,8,12,0,null],
 ['Palma nana',['chamaerops humilis','palma nana','palma di san pietro','mediterranean fan palm'],'Chamaerops humilis','palma',10,30,-8,1,null,{luce:'Sole pieno o mezz\'ombra luminosa.'}],
 ['Cycas',['cycas revoluta','sago palm','palma sago'],'Cycas revoluta','palma',10,21,-5,1,X2,{luce:'Sole o mezz\'ombra luminosa.'}],
 /* fiori in casa */
 ['Violetta africana',['saintpaulia','african violet','saintpaulia ionantha','violetta'],'Streptocarpus ionanthus','umida',5,7,12,0,null,{luce:'Luce forte ma non diretta.',acqua:'Dal sottovaso, con acqua tiepida: scola dopo 15 minuti. Non bagnare le foglie.',tipoAcqua:'Acqua tiepida, a temperatura ambiente, senza calcare.'}],
 ['Orchidea Phalaenopsis',['phalaenopsis','orchidea','orchid','moth orchid'],'Phalaenopsis','verde',7,10,12,0,null,{
  luce:'Molta luce ma senza sole diretto.',
  acqua:'Immergi il vaso in acqua per 10-15 minuti, poi scola bene. Annaffia quando le radici diventano argentee.',
  tipoAcqua:'Acqua senza calcare, tiepida (piovana o lasciata riposare).',
  terra:'Corteccia per orchidee, non terriccio.',
  concime:'Concime per orchidee, diluito, ogni 2 settimane da aprile a settembre.',
  tipo:'Sempreverde. Fiorisce in genere in inverno-primavera; dopo la fioritura riposa.',
  potatura:'Dopo la fioritura taglia lo stelo sopra un nodo se è verde, alla base se è secco.',
  rinvaso:'Ogni 2 anni dopo la fioritura, con corteccia nuova.',fd:14}],
 ['Begonia',['begonia','begonia rex','begonia semperflorens'],'Begonia × semperflorens-cultorum','fiore',5,8,8,0,X1,{luce:'Luce forte ma non diretta. Le begonie da foglia (rex) sono più delicate.',acqua:'Quando i primi 2 cm di terra sono asciutti. Non bagnare le foglie.'}],
 ['Ciclamino',['cyclamen','cyclamen persicum','ciclamino'],'Cyclamen persicum','bulbo',4,4,5,0,X1,{luce:'Luce forte ma non diretta, e fresco.',acqua:'Dal sottovaso, quando la terra è asciutta in superficie. Non bagnare il cuore.',tipo:'Fiorisce in autunno-inverno. In estate perde le foglie e riposa.',temp:'Sta bene fresco, tra 10 e 15 °C.'}],
 ['Stella di Natale',['poinsettia','euphorbia pulcherrima','stella di natale'],'Euphorbia pulcherrima','verde',7,7,10,0,X3,{luce:'Molta luce ma non sole diretto. Niente correnti d\'aria.',tipo:'Fiorisce in inverno (le "foglie" rosse). Dopo si può tenere per l\'anno dopo.'}],
 ['Kalanchoe',['kalanchoe','kalanchoe blossfeldiana','kalanchoe blossfeldiana'],'Kalanchoe blossfeldiana','grassa',12,21,10,0,X1],
 ['Gardenia',['gardenia jasminoides','gardenia'],'Gardenia jasminoides','arbusto',4,7,5,0,X1,{luce:'Luce forte ma non diretta.',acqua:'Terra sempre un po\' umida, mai secca.',tipoAcqua:ACIDA,terra:'Terriccio acido (per azalee).',tipo:'Sempreverde. Teme gli sbalzi di temperatura.'}],
 ['Gelsomino da appartamento',['jasminum polyanthum','gelsomino','jasmine','gelsomino rosa'],'Jasminum polyanthum','arbusto',5,10,3,0,null,{luce:'Sole o luce forte.',tipo:'Rampicante sempreverde. Fiorisce in inverno-primavera in un posto fresco.'}],
 ['Ibisco',['hibiscus rosa-sinensis','hibiscus','ibisco cinese','rosa cinese'],'Hibiscus rosa-sinensis','arbusto',3,8,8,0,null,{luce:'Sole o luce molto forte.',acqua:'Terra sempre un po\' umida in estate: ha molta sete.'}],
 ['Bougainvillea',['bougainvillea','buganvillea'],'Bougainvillea glabra','arbusto',4,14,3,1,X1,{luce:'Sole pieno, almeno 6 ore.',acqua:'Quando la terra è asciutta per i primi 3 cm. Fiorisce meglio un po\' all\'asciutto.',tipo:'Rampicante. Perde le foglie con il freddo. Teme il gelo.'}],
 ['Mandevilla',['mandevilla','dipladenia','dipladenia'],'Mandevilla sanderi','arbusto',4,14,5,1,X1,{luce:'Sole pieno o luce molto forte.',tipo:'Rampicante. Fiorisce da primavera a autunno; teme il freddo.'}],
 ['Lantana',['lantana camara','lantana'],'Lantana camara','arbusto',4,14,0,1,X1,{luce:'Sole pieno.',tipo:'Arbusto fiorito: da primavera ad autunno. Teme il gelo.'}],
 ['Geranio',['pelargonium','geranio','geranio zonale','pelargonium zonale','geranio edera'],'Pelargonium zonale','arbusto',4,14,3,1,X1,{luce:'Sole pieno o mezz\'ombra luminosa.',acqua:'Quando i primi 2 cm di terra sono asciutti. Meglio poco che troppo.',potatura:'Togli i fiori e le foglie appassiti. A fine inverno accorcia i rami.',tipo:'Fiorisce da primavera ad autunno. Teme il gelo: in inverno riparalo.'}],
 ['Fucsia',['fuchsia','fucsia'],'Fuchsia × hybrida','arbusto',3,14,0,1,null,{luce:'Mezz\'ombra luminosa. Non regge il sole forte.',tipo:'Arbusto fiorito da primavera ad autunno. Teme il caldo forte e il gelo.'}],
 /* grasse e cactus */
 ['Aloe vera',['aloe','aloe vera','aloe barbadensis'],'Aloe vera','grassa',14,30,5,0,'La linfa gialla sotto la buccia è irritante: non mangiarla. Tossica per cani e gatti.'],
 ['Echeveria',['echeveria','rosetta grassa'],'Echeveria elegans','grassa',10,28,5,0,null],
 ['Haworthia',['haworthia','haworthia fasciata','zebra plant'],'Haworthiopsis attenuata','grassa',14,30,5,0,null,{luce:'Luce forte ma senza sole diretto forte.'}],
 ['Albero di giada',['crassula ovata','albero di giada','jade plant','pianta di giada','crassula'],'Crassula ovata','grassa',12,28,5,0,X1],
 ['Coda d\'asino',['sedum morganianum','coda di asino','burro\'s tail'],'Sedum morganianum','grassa',14,30,8,0,null,{luce:'Molta luce, senza sole diretto forte.'}],
 ['Semprevivo',['sempervivum','semprevivi','houseleek'],'Sempervivum tectorum','grassa',10,30,-20,1,null,{luce:'Sole pieno.',tipo:'Perenne, resiste al freddo e al gelo.'}],
 ['Fico d\'India',['opuntia ficus-indica','fico d\'india','prickly pear','opuntia'],'Opuntia ficus-indica','cactus',14,45,-5,1,null,{tipo:'Cactus perenne. Resiste anche a un po\' di freddo se la terra è asciutta.'}],
 ['Cuscino della suocera',['echinocactus grusonii','cuscino della suocera','golden barrel cactus'],'Echinocactus grusonii','cactus',14,45,5,0,null],
 ['Mammillaria',['mammillaria','mammillaria'],'Mammillaria','cactus',12,45,5,0,null],
 ['Orecchie di coniglio',['opuntia microdasys','orecchie di coniglio','bunny ears cactus'],'Opuntia microdasys','cactus',14,45,5,0,null,{potatura:'Non si pota. Attenzione ai peletti sottili (glochidi): irritano la pelle.'}],
 ['Cereus',['cereus peruvianus','cereus','cactus colonna','peruvian apple cactus'],'Cereus repandus','cactus',14,45,5,0,null],
 ['Cactus di Natale',['schlumbergera','cactus di natale','christmas cactus','schlumbergera truncata'],'Schlumbergera truncata','verde',7,10,10,0,null,{luce:'Luce forte ma non diretta.',tipo:'Fiorisce in autunno-inverno: per fiorire servono notti lunghe e fresche (ottobre-novembre).',acqua:'Quando i primi 2 cm di terra sono asciutti. Non lasciarla seccare del tutto.'}],
 ['Rhipsalis',['rhipsalis','cactus a fili','mistletoe cactus'],'Rhipsalis baccifera','verde',8,14,10,0,null,{luce:'Luce media o forte, senza sole diretto.'}],
 ['Corona di spine',['euphorbia milii','corona di cristo','crown of thorns','euphorbia'],'Euphorbia milii','grassa',10,28,8,0,X3,{luce:'Sole o molta luce.'}],
 ['Agave',['agave americana','agave','century plant'],'Agave americana','grassa',14,45,-3,1,X3,{luce:'Sole pieno.',tipo:'Perenne sempreverde. Resiste al freddo se la terra è asciutta.'}],
 ['Gasteria',['gasteria','lingua di bue','ox tongue'],'Gasteria carinata','grassa',14,30,5,0,null,{luce:'Luce forte, senza sole diretto forte.'}],
 ['Rosario',['senecio rowleyanus','rosario','string of pearls','collana di perle'],'Curio rowleyanus','grassa',12,28,8,0,X1],
 ['Portulacaria',['portulacaria afra','albero degli elefanti','elephant bush'],'Portulacaria afra','grassa',12,28,5,0,null],
 ['Aeonium',['aeonium','aeonium arboreum'],'Aeonium arboreum','grassa',10,21,3,0,null,{tipo:'Succulenta. Cresce in autunno-inverno-primavera, in estate riposa: annaffia poco.'}],
 ['Hoya',['hoya carnosa','fiore di cera','wax plant','hoya'],'Hoya carnosa','grassa',12,21,10,0,null,{luce:'Luce forte ma non diretta.',acqua:'Quando la terra è asciutta per metà vaso. Poca acqua in inverno.',terra:'Terriccio soffice con corteccia e perlite.',tipo:'Rampicante sempreverde. Non togliere gli steli dei fiori: rifiorisce sullo stesso punto.'}],
 ['Ceropegia',['ceropegia woodii','catena di cuori','string of hearts','cuori'],'Ceropegia woodii','grassa',14,28,10,0,null,{luce:'Luce forte ma non diretta.'}],
 /* carnivore */
 ['Venere acchiappamosche',['dionaea','dionaea muscipula','venus flytrap','venere acchiappamosche'],'Dionaea muscipula','carn',2,10,-5,0,null,{tipo:'Carnivora. In inverno (novembre-febbraio) ha bisogno di un periodo di freddo (2-10 °C) per riposare.',rinvaso:'Ogni 1-2 anni in primavera, sempre con torba e perlite.'}],
 ['Sarracenia',['sarracenia','pianta a trombetta','pitcher plant'],'Sarracenia purpurea','carn',2,10,-10,0,null,{luce:'Sole pieno, tutto il giorno.',tipo:'Carnivora. In inverno ha bisogno di freddo (riposo). Resiste al gelo se il vaso non si congela del tutto.'}],
 ['Drosera',['drosera capensis','drosera','sundew'],'Drosera capensis','carn',2,5,5,0,null,{luce:'Sole o luce molto forte.'}],
 /* aromatiche */
 ['Rosmarino',['rosmarino','rosmarinus','salvia rosmarinus','rosemary'],'Salvia rosmarinus','med',7,21,-8,1,null],
 ['Salvia',['salvia officinalis','salvia','sage'],'Salvia officinalis','med',7,21,-10,1,null],
 ['Timo',['thymus vulgaris','timo','thyme'],'Thymus vulgaris','med',8,21,-15,1,null],
 ['Origano',['origanum vulgare','origano','oregano'],'Origanum vulgare','med',7,21,-15,1,null],
 ['Maggiorana',['origanum majorana','maggiorana','marjoram'],'Origanum majorana','erba',5,0,0,1,null,{luce:'Sole pieno.',tipo:'In molte zone fredde si tratta come annuale: teme il gelo.'}],
 ['Prezzemolo',['petroselinum crispum','prezzemolo','parsley'],'Petroselinum crispum','erba',3,7,-10,1,null,{luce:'Mezz\'ombra o sole non troppo forte.',tipo:'Biennale: nel secondo anno va a seme.'}],
 ['Coriandolo',['coriandrum sativum','coriandolo','cilantro','coriander'],'Coriandrum sativum','erba',3,0,0,1,null,{luce:'Sole o mezz\'ombra. Sul sole troppo caldo va a seme.',tipo:'Annuale: si semina in primavera e in autunno.'}],
 ['Erba cipollina',['allium schoenoprasum','erba cipollina','chives'],'Allium schoenoprasum','erba',3,10,-25,1,null,{tipo:'Perenne. In inverno la parte verde secca e in primavera ricresce.'}],
 ['Aneto',['anethum graveolens','aneto','dill'],'Anethum graveolens','erba',3,0,0,1,null,{luce:'Sole pieno.',tipo:'Annuale: si semina in primavera.'}],
 ['Melissa',['melissa officinalis','melissa','lemon balm','cedronella'],'Melissa officinalis','erba',4,10,-15,1,null,{tipo:'Perenne. In inverno la parte verde secca e in primavera ricresce.'}],
 ['Dragoncello',['artemisia dracunculus','dragoncello','estragon','tarragon'],'Artemisia dracunculus','erba',6,14,-15,1,null,{luce:'Sole pieno.',terra:'Terriccio ben drenante, non troppo ricco.'}],
 ['Alloro',['laurus nobilis','alloro','lauro','bay laurel'],'Laurus nobilis','arbusto',7,21,-5,1,null,{luce:'Sole o mezz\'ombra.',tipo:'Sempreverde, cresce piano. Resiste al freddo.'}],
 ['Citronella',['cymbopogon','citronella','lemongrass','lemon grass'],'Cymbopogon citratus','erba',4,14,10,1,null,{luce:'Sole pieno.',tipo:'Perenne, ma teme il freddo: in inverno portala dentro.'}],
 /* orto e frutta */
 ['Pomodoro',['solanum lycopersicum','pomodoro','pomodorino','tomato'],'Solanum lycopersicum','orto',2,0,5,1,'Foglie e steli non vanno mangiati.',{tipo:'Pianta di una sola stagione: si pianta ad aprile-maggio e dà frutti in estate. Va legata a un sostegno. Teme il freddo (sotto 10 °C rallenta).',potatura:'Togli i germogli che nascono tra il fusto e le foglie (le femminelle).',problemi:[['Macchia scura sul fondo del frutto','poco calcio per sbalzi d\'acqua','annaffia con regolarità, senza lasciar seccare'],['Macchie scure sulle foglie e sui frutti','peronospora','togli le foglie malate e non bagnare le foglie'],['Foglie arrotolate e gialle','caldo o troppa acqua','controlla la terra e dai ombra nelle ore calde'],['Insetti piccoli sulle cime','afidi','lavali con acqua e un po\' di sapone di Marsiglia diluito']]}],
 ['Peperoncino',['capsicum annuum','capsicum','peperoncino','chili','chilli pepper'],'Capsicum annuum','orto',3,14,8,1,null,{tipo:'Si pianta in primavera e dà frutti in estate. In inverno si può tenere dentro vicino a una finestra luminosa.',acqua:'Quando i primi 2 cm di terra sono asciutti: non ama né sete né ristagni.',luce:'Sole pieno, almeno 6 ore.'}],
 ['Peperone',['capsicum annuum','peperone','pepper'],'Capsicum annuum','orto',3,0,8,1,null],
 ['Melanzana',['solanum melongena','melanzana','aubergine','eggplant'],'Solanum melongena','orto',2,0,8,1,null],
 ['Zucchina',['cucurbita pepo','zucchina','zucchine','zucchini','courgette'],'Cucurbita pepo','orto',2,0,5,1,null,{tipo:'Pianta di una sola stagione: si pianta ad aprile-maggio. Ha bisogno di molto spazio.'}],
 ['Cetriolo',['cucumis sativus','cetriolo','cucumber'],'Cucumis sativus','orto',2,0,8,1,null],
 ['Lattuga',['lactuca sativa','lattuga','insalata','lettuce'],'Lactuca sativa','orto',2,0,0,1,null,{luce:'Mezz\'ombra luminosa. Col caldo forte va a seme.',tipo:'Si semina da marzo a settembre. Meglio in autunno e in primavera.'}],
 ['Rucola',['eruca sativa','rucola','arugula','rocket'],'Eruca vesicaria','orto',2,0,-5,1,null,{luce:'Sole o mezz\'ombra. Col caldo forte va a seme.',tipo:'Si semina da marzo a settembre. Cresce in poche settimane.'}],
 ['Fragola',['fragaria','fragola','fragaria × ananassa','strawberry'],'Fragaria × ananassa','arbusto',3,10,-15,1,null,{tipo:'Perenne. In inverno perde le foglie vecchie e in primavera ricresce. Fruttifica in primavera-estate.',luce:'Sole o mezz\'ombra luminosa.',terra:'Terriccio ricco e un po\' acido, che scola bene.',potatura:'Dopo la raccolta togli le foglie vecchie e i primi stoloni.'}],
 ['Mirtillo',['vaccinium','mirtillo','blueberry','vaccinium corymbosum'],'Vaccinium corymbosum','arbusto',3,10,-20,1,null,{terra:'Terriccio molto acido (per azalee), mai calcare.',tipoAcqua:'Solo acqua piovana o senza calcare: il calcare lo fa morire.',tipo:'Arbusto caducifoglio: perde le foglie in inverno. Resiste bene al freddo.'}],
 ['Limone',['citrus limon','limone','lemon'],'Citrus limon','agrume',4,12,0,1,null],
 ['Arancio',['citrus sinensis','arancio','arancia','orange tree'],'Citrus sinensis','agrume',4,12,0,1,null],
 ['Mandarino',['citrus reticulata','mandarino','clementino','tangerine'],'Citrus reticulata','agrume',4,12,0,1,null],
 ['Kumquat',['citrus japonica','fortunella','kumquat','mandarino cinese'],'Citrus japonica','agrume',4,12,-5,1,null],
 ['Olivo',['olea europaea','olivo','ulivo','olive tree'],'Olea europaea','med',10,30,-8,1,null,{potatura:'A fine inverno-primavera, per tenerlo basso e arieggiato.',pr:{months:[2,3,4],every:300,label:'Pota'}}],
 ['Fico',['ficus carica','fico','fig tree'],'Ficus carica','arbusto',5,0,-12,1,'La linfa irrita la pelle.',{tipo:'Albero caducifolio: perde le foglie in inverno. Resiste al freddo.',luce:'Sole pieno.'}],
 ['Melograno',['punica granatum','melograno','pomegranate'],'Punica granatum','arbusto',7,0,-10,1,null,{tipo:'Arbusto caducifoglio: perde le foglie in inverno. Resiste al freddo.',luce:'Sole pieno.'}],
 /* balcone e giardino */
 ['Petunia',['petunia','surfinia','petunia hybrida'],'Petunia × hybrida','fiore',2,0,2,1,null,{luce:'Sole pieno.',tipo:'Fiorisce da primavera ad autunno. Si pianta di nuovo ogni anno.'}],
 ['Tagete',['tagetes','tagete','marigold'],'Tagetes','fiore',3,0,2,1,null,{luce:'Sole pieno.'}],
 ['Calendula',['calendula officinalis','calendula','pot marigold'],'Calendula officinalis','fiore',3,10,-5,1,null,{tipo:'Annuale: fiorisce da primavera ad autunno, e anche in inverno nei posti miti.'}],
 ['Viola del pensiero',['viola × wittrockiana','viola del pensiero','pansy','pansè'],'Viola × wittrockiana','fiore',4,7,-10,1,null,{luce:'Sole o mezz\'ombra.',tipo:'Fiorisce in autunno, inverno e primavera. D\'estate va sostituita.'}],
 ['Primula',['primula','primrose','primula vulgaris'],'Primula vulgaris','fiore',3,5,-10,1,null,{luce:'Mezz\'ombra luminosa.',tipo:'Fiorisce in inverno e primavera.'}],
 ['Verbena',['verbena','verbena × hybrida','verbena hybrida'],'Verbena × hybrida','fiore',3,0,0,1,null,{luce:'Sole pieno.'}],
 ['Impatiens',['impatiens walleriana','balsamina','busy lizzie','begonia di sole'],'Impatiens walleriana','fiore',2,0,5,1,null,{luce:'Mezz\'ombra o ombra luminosa. Non regge il sole forte.'}],
 ['Gerbera',['gerbera','gerbera jamesonii'],'Gerbera jamesonii','fiore',4,7,3,1,null,{luce:'Sole o luce forte.',acqua:'Alla base, senza bagnare il centro del fiore.'}],
 ['Ortensia',['hydrangea','hydrangea macrophylla','ortensia'],'Hydrangea macrophylla','arbusto',2,0,-10,1,X1,{luce:'Mezz\'ombra. Il sole forte brucia foglie e fiori.',acqua:'Ha molta sete: terra sempre umida in estate.',tipoAcqua:ACIDA,tipo:'Arbusto caducifoglio: perde le foglie in inverno. Resiste al freddo.',potatura:'A fine inverno togli i rami secchi; i fiori nascono spesso sul legno dell\'anno prima: non tagliare troppo.',pr:{months:[2,3],every:300,label:'Pota'}}],
 ['Oleandro',['nerium oleander','oleandro'],'Nerium oleander','arbusto',3,14,-5,1,X2,{luce:'Sole pieno.',tipo:'Sempreverde. Fiorisce in estate. Resiste a un po\' di freddo.'}],
 ['Rosa',['rosa','rosa','rosa rampicante','rose'],'Rosa','arbusto',4,0,-20,1,null,{luce:'Sole almeno 5-6 ore.',tipo:'Arbusto caducifoglio: perde le foglie in inverno. Resiste molto bene al freddo.',potatura:'A fine inverno (febbraio-marzo) accorcia i rami; togli i fiori appassiti in estate.',pr:{months:[2,3],every:300,label:'Pota'}}],
 ['Gelsomino rampicante',['trachelospermum jasminoides','falso gelsomino','gelsomino rampicante','star jasmine'],'Trachelospermum jasminoides','arbusto',4,14,-5,1,null,{tipo:'Rampicante sempreverde. Profumato, fiorisce in primavera.'}],
 ['Camelia',['camellia japonica','camelia','camellia'],'Camellia japonica','arbusto',4,10,-10,1,null,{luce:'Mezz\'ombra. Non vuole il sole forte.',tipoAcqua:ACIDA,terra:'Terriccio acido (per azalee).',tipo:'Sempreverde. Fiorisce in inverno-primavera.'}],
 ['Azalea',['rhododendron','azalea','azalea japonica'],'Rhododendron','arbusto',3,10,-10,1,X1,{luce:'Mezz\'ombra luminosa.',tipoAcqua:ACIDA,terra:'Terriccio acido (per azalee), che scola bene.',tipo:'Arbusto che fiorisce in primavera.'}],
 ['Agapanto',['agapanthus','agapanto','african lily'],'Agapanthus','bulbo',4,21,-5,1,X1,{luce:'Sole pieno o mezz\'ombra luminosa.',tipo:'Perenne: fiorisce in estate. Le foglie possono seccare in inverno e ricrescere.'}],
 ['Dalia',['dahlia','dalia'],'Dahlia','bulbo',3,0,0,1,null,{luce:'Sole pieno.',tipo:'Perenne con tubero: fiorisce in estate. D\'inverno la parte verde secca; il tubero va protetto dal gelo.'}],
 ['Tulipano',['tulipa','tulipano','tulip'],'Tulipa','bulbo',4,0,-20,1,X1,{tipo:'Bulbosa: si pianta in autunno e fiorisce in primavera.'}],
 ['Narciso',['narcissus','narciso','daffodil'],'Narcissus','bulbo',4,0,-20,1,X1,{tipo:'Bulbosa: si pianta in autunno e fiorisce in primavera.'}],
 ['Giacinto',['hyacinthus','giacinto','hyacinth'],'Hyacinthus orientalis','bulbo',4,0,-20,1,X1,{tipo:'Bulbosa: si pianta in autunno e fiorisce in primavera.'}],
 ['Giglio',['lilium','giglio','lily'],'Lilium','bulbo',4,0,-15,1,XL,{tipo:'Bulbosa: fiorisce in estate.'}],
 ['Bambù',['fargesia','bambù','bambu','bamboo','phyllostachys'],'Fargesia','arbusto',3,14,-20,1,null,{luce:'Mezz\'ombra o sole non troppo forte.',acqua:'Terra sempre un po\' umida: ha sete.',tipo:'Sempreverde. Le specie "a cespo" (Fargesia) non invadono; quelle "a rizoma" sì.'}],
 ['Acero giapponese',['acer palmatum','acero giapponese','japanese maple','acero palmato'],'Acer palmatum','arbusto',4,0,-15,1,null,{luce:'Mezz\'ombra. Il sole forte brucia le foglie.',tipo:'Albero caducifoglio: perde le foglie in inverno, bel colore in autunno.'}],
 ['Bosso',['buxus sempervirens','bosso','boxwood'],'Buxus sempervirens','arbusto',5,21,-20,1,X1,{luce:'Sole o mezz\'ombra.',tipo:'Sempreverde, resiste al freddo.'}],
 ['Pitosforo',['pittosporum tobira','pitosforo','pittosporo','japanese cheesewood'],'Pittosporum tobira','arbusto',6,21,-8,1,null,{tipo:'Sempreverde. Fiorisce in primavera con profumo.'}]
];

const POTA_T={verde:'nodo',ombra:'nodo',umida:'secche',grassa:'nopota',cactus:'nopota',felce:'secche',med:'legno',erba:'cima',agrume:'nodo',orto:'secche',fiore:'fiori',arbusto:'nodo',bulbo:'bulbo',palma:'secche',carn:'secche'};
/* eccezioni per nome */
const POTA_O={
 'Zamioculcas':'secche','Aspidistra':'secche','Aglaonema':'secche','Yucca':'secche','Falangio':'secche','Calathea':'secche','Maranta':'secche','Spatifillo':'secche','Fittonia':'nodo','Alocasia':'secche','Anthurium':'secche','Clivia':'secche','Cyperus':'secche',
 'Aloe vera':'secche','Echeveria':'secche','Haworthia':'secche','Gasteria':'secche','Semprevivo':'secche','Agave':'secche','Beaucarnea':'secche',
 'Albero di giada':'nodo','Portulacaria':'nodo','Aeonium':'nodo','Corona di spine':'nodo','Hoya':'nodo','Ceropegia':'nodo','Rosario':'nodo','Coda d\'asino':'nodo','Kalanchoe':'fiori',
 'Cactus di Natale':'ruota','Rhipsalis':'ruota','Ciclamino':'secche','Stella di Natale':'nodo','Begonia':'fiori',
 'Erba cipollina':'ciuffo','Prezzemolo':'ciuffo','Coriandolo':'ciuffo','Aneto':'ciuffo','Citronella':'ciuffo','Agapanto':'secche','Bambù':'secche','Mirtillo':'nodo','Fragola':'secche',
 'Pomodoro':'femminelle','Peperoncino':'nodo','Peperone':'nodo','Melanzana':'nodo','Zucchina':'secche','Cetriolo':'nodo','Lattuga':'ciuffo','Rucola':'ciuffo',
 'Fico d\'India':'nopota','Cuscino della suocera':'nopota','Mammillaria':'nopota','Orecchie di coniglio':'nopota','Cereus':'nopota',
 'Dalia':'bulbo','Giglio':'bulbo','Tulipano':'bulbo','Narciso':'bulbo','Giacinto':'bulbo'
};
const slug=s=>s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const E={};
for(const r of L){
  const [n,al,sci,tp,ws,ww,tm,fuori,tox,ov]=r,o=ov||{},t=T[tp]||CARN;
  const temp=o.temp||(fuori?'Resiste fino a circa '+tm+' °C. Se la minima scende sotto, riparala.':'Tienila sopra i '+tm+' °C.');
  const c={
    nome:n,sci:sci,alias:al,wiki:[sci,n],outdoor:!!fuori,verificata:false,fonti:[],
    luce:o.luce||t.luce,acqua:o.acqua||t.acqua,tipoAcqua:o.tipoAcqua||t.tipoAcqua,terra:o.terra||t.terra,
    concime:o.concime||t.concime,tipo:o.tipo||t.tipo,temp:temp,tMin:tm,tMinEst:true,
    potatura:o.potatura||t.potatura,rinvaso:o.rinvaso||t.rinvaso,
    waterSummer:ws||null,waterWinter:ww||null,
    fertDays:o.fd!==undefined?o.fd:t.fd,fertMonths:t.fm,
    prune:o.pr!==undefined?o.pr:(t.pr||null),
    problemi:o.problemi||t.problemi,
    pota:POTA_O[n]||POTA_T[tp]||'nodo'
  };
  if(tox)c.tossica=tox;
  E[slug(n)]=c;
}
window.EXTRA=E;
})();
