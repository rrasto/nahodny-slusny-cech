(function () {

// some random hates found on the internets
var other = ['Nebudu nám vnucovat právo šaria , pivo a klobásku im povinne dať. ',
  ' to by sa za komunistov nestalo!!!!',
  ' republiku si  rozvracať nedáme ',
  ' a médja mlčja',
  ' ja niesom rasista..',
  ' Můžete laskavě vysvětlit proč pánskou módu prezentujete na "černochovi"??',
  ' Chci se zeptat jestli tento černý model je opravdu nutný ve vašem letáku. je?',
  ' a vyrešilo byse to kdy by byl Ortel na hradu ',
  ' známá  z německa říkala, že  vůbec nepracujou a  jenom pořád berou dávky ',
  ' a nejhorší jsou ti užitecní idioti co by nejrači pozvali všechny ty muslimské teroristy.kdybysme jeli mi k nim,tak nás odstřelí hned všechny v moři!!',
  'Čina a Rusko jsou aspoň pro tuto zemy přínos ,což se o těch agentech CIA říct nedá !!!',
  '1000íce migrantů nám chce brát naše hodnoty,musíme chránit naše hranice!!!  ',
  'Stejně tak jako USA  nebyly nikdy na měsícy ,tak media mlčí o te velké pravdě o imigrantech ',
  ' je to všechno naplánované kvůli new world order(NWO).',
  'Otevřete už konecně oči, vy tupé ovce! !',
  ' jinak já jsem hrdý na naše hodnoty, co si dokázal ty ty havlomrde jeden,kurvo ?  ',
  ' mymochodem Ortel zpíva jenom pravdu jako Kryl a toho slavíka si přístě snad odnese a toho cigána by měli zavřít někam do zoo .',
  'Snad bude MÉNĚ PŘIVANDROVALCŮ JESTLI MI ROZUMÍTE??!!!',
  ' a ikdyž to není pravda tak by MOHLA BÝT!!!',
  ' 100tisíce imigrantů se sem valí a v ČT zase nic!!',
  ' jediný Okamura to tam říka tak jak to doopravdy je...',
  ' aspoň že ti naši hokejisti něco hrajou, kuci jedni naši,my jsi dyktovat z EU NEDÁME !!',
  '. Pan   prezident  je dobrý člověk,proto média lžou  ',
  ' už to psali i v parlamentních listech ',
  ' lidi probuďte se už konečně kam až to necháme zajít?!',
  ' svrhněme tuto prohnilou vládu a nastolme vládu pracujícího lidu!!!!!',
  ' tohle už je snad horší než ten negr  v bile ',
  ' k lopatám je nahnat všechny ',
  ' kdyby ty cikorky pracovaly,tagby tohle nebylo!',
  ' ..šulini jedni,ať táhnou někam jinam ',
  ' pivo bych jim všem povině naordinoval ',
  ' zapalte ohně ',
  ' a co má jako znamenat ten černoch na letáku???',
  ' a běžte s multi-kulti do prdele!!',
  ' čechy čechům!!!!',
  ' Něco se děje ,dneska u nas byl velky chemtrails, nahoda? ',
  'Odstraňte ty multikulty pičoviny!',
  ' protože zatím ještě platí že mi tady jsme doma a ne ti paraziti...',
  ' je to řízena genocida bíle rasy ',
  ' vnucují nám islamisty, ale samy bysije domú nevzali ',
  ' Nevím proč by všichni ti havloidní studenti museli dostudovat,lopat je taky hodně ',
  ' nejsem rasista,evropa je bíla afrika je černá a asie je žlutá ',
  ' a vubec proc se v nasich ceskych letacich pro ceskou republiku neustale objevuji modelove NEGROIDNIHO typu??!',
  ' Tak s tímhle jděte víte kam..... stejně jako s chemtrails',
  ' přece nejsem xenofob ,když si to myslím ',
  ' raději podejte zprávu že vaše vláda s tím kolaborantem sobotkou přislíbila přijmout 29.000 ks čmoudů invazistů a kolik za to bude inkasovat od EU?',
  ' nejsem islamofob , ale ',
  ' jako ja nejsem rasista ,ale muslimaky bych postřílel hned na hranici!',
  ' protože jedinym řešením migrační krize je kulomet...',
  ' jenže Rusko aspoň nedělá ty valky kvůli te ropě ',
  ' a na naše důchodce musíme SBÍRAT VIČKA???? ',
  ' ale DVTV je prozápadní bulvární žumpa takže asitak..',
  ' všichni pravdoláskaři bysi mněli vspomenout na humanytárni bonbardovaní havlem!!',
  ' holt v téhle vlasti už začalo působit právo šaria kam to až zajde.....',
  ' z mojich daní nebudu platit tyhle "nepřízpůsobivé" ',
  ' nebuďte ovce....',
  ' to nejsou totiž uprchlíci ,mají totiž mobilní telefony a značkové obleční ',
  ' oni ale nechou aby ste vědeli pravdu...to se jim tak hodí ',
  'Hehehe,natrtkalisi ,ať se starají.'];

var goodGuysSentences = [
  [1, ' polytike sice moc nerozumjem , ale ten {0} je dobrý, ten by xce narobiť porjadki .'],
  [1, ' {0} chce aby sme mohly brániť našu svojstojú rodnú svojeť .'],
  [1, ' {0} to mislí uprimně .'],
  [1, ' {0} aspom vravý praudu .'],
  [1, ' a {0} a {1} by mali vyhráť volbi '],
  [1, ' mislím,že {0} je jedinný rozumný , lebo aspoň má gule a vravý čo si mislí. '],
  [2, 'Každý kdo má modzog a nie je pyča preda musý vedeť že {0} a {1} to s nami mislý dobre .'],
  [1, ' {0} tam aspoň zoptimalizuje tých vlastizradcov  !!!  ']
];

var badGuysSentences = [
  [2, ' za fšecko muožu {0} a {1} .'],
  [2, 'Exystuje tajný plán , ktorý vitvorily {0} a {1} a teraz sa to šecko deje, otvorte oči '],
  [2, '{0} a {1} len okrádajú štát a slušných pracovytých luďí.'],
  [1, '{0} do plinu!!!!'],
  [1, ' , lebo toto sú veci bez ktorých by táto republika fungovala: {0} a {1} '],
  [1, ' je to jednoduché.. {0}? Mám riešenie - vyhostit do afriky!!!!'],
  [1, 'Je predsa úúúplne jasné že korporácie a {1} kcú aby sme si to mislely .'],
  [2, '{0} a {1} nemusia pracovať a muožu len dostávať dávky a my na naše děti musíme len zbierať vrchnáky, aby byly zdravé, pre toto som kľúčami neštrngal, zlatý komunisti!!! ! '],
  [1, 'Inak fčera som sa díval na oblohu a bola tam velká dávka chemtrails , viac než obvikle a muože za to a Kiska!!!!!!']
];

var goodGuys = ['pan Kotleba', 'ing. mgr. Kotleba', 'Kotleba', 'Kollár', 'pán premiér', 'Slovenské Hnutie Obrody', 'pán Švec',
   'pán prezident Putin', 'Putin', 'Magát', 'prezident Trump', 'pán Mazúrek', 'ĽSNS', 'Sme Rodina', 'Orbán'];

var badGuys = ['Kiska', 'vlastizrádca Kiska', 'slniečkári', 'kolaboranti', 'moslimáci',
 'Radičová', 'fašisti na ukrajine', 'kiskoidi', 'birokrati z EU', 'Obama', 'nihilisti', 'zapredanci', 'protinárodné živly',
 'makrela', 'Merkelova', 'nadnárodné elity', 'braislavská kaviareň', 'novinárskí zapredanci',
 'iluminati', 'USA ambasáda', 'CIA', 'nadnárodné korporácie', 'diktát z EU', 'islam', 'cigáni'];

// monkey patch the formatting function into strings
 String.prototype.formatUnicorn = String.prototype.formatUnicorn ||
 function () {
   "use strict";
   var str = this.toString();
   if (arguments.length) {
     var t = typeof arguments[0];
     var key;
     var args = ("string" === t || "number" === t) ?
     Array.prototype.slice.call(arguments)
     : arguments[0];

     for (key in args) {
       str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
     }
   }

   return str;
 };

// randomly use capslock and add some bangs
function buranize(sentence, howMuchCapslock, howMuchTypos) {
  var splits = sentence.split(/([\s,.!?]+)/g);
  var result = splits.map(function (chunk) {
    if (Math.random() < howMuchCapslock && (chunk.length > 2 || howMuchCapslock > 0.6)) {
      return chunk.toUpperCase();
    } else {
      return chunk;
    }
  }).join('');
  var swearWords = ['KURVY', 'NIHILSTY', 'ŽIDIA', 'KOKOTI', 'SVINE', 'KOLABORANTI', 'YDIOTI'];
  var swearWordsLvl2 = ['KURVAAAA', 'PIIIČAA', 'ZMRRRD', 'JEBAŤ EU', 'KOKOOOOT', 'STRIELAŤ MIGRANTY', 'CIGÁNI DO PLYNU'];
  if (howMuchCapslock > 0.4) {
    result += '!!!';
  }
  if (howMuchCapslock > 0.6) {
    var wordLvl1 = swearWords.splice(Math.floor(Math.random() * swearWords.length), 1);
    result += '!! ' + wordLvl1 + '!!!!';
  }
  if (howMuchCapslock > 0.8) {
    var wordLvl2 = swearWordsLvl2.splice(Math.floor(Math.random() * swearWordsLvl2.length), 1);
    result +=  '!!! ' + wordLvl2 + '!!!!!!!!!!!!!!!?!!!!!!';
  }
  return result;
  // todo add random typos
}

// shuffle the array (w/ plain JS)
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getRandomSentence() {
  var r = Math.random();
  if (r < 0.12) {
    //goodGuysSentences
    var item = goodGuysSentences.splice(Math.floor(Math.random() * goodGuysSentences.length), 1);
    // var numberOfPeople = item[0][0];
    var sentenceTemplate = item[0][1];
    return sentenceTemplate.formatUnicorn(shuffle(goodGuys));
  } else if (r < 0.25) {
    //badGuysSentences
    var item = badGuysSentences.splice(Math.floor(Math.random() * badGuysSentences.length), 1);
    // var numberOfPeople = item[0][0];
    var sentenceTemplate = item[0][1];
    return sentenceTemplate.formatUnicorn(shuffle(badGuys));
  } else {
    //other
    return other.splice(Math.floor(Math.random() * other.length), 1);
  }
}

function getPost(length, capslock) {
  // length 2 - 5
  length = length || Math.random() * 3 + 2;
  capslock = capslock || 0.05;
  var goodGuysSentencesBak = goodGuysSentences.slice(0);
  var badGuysSentencesBak = badGuysSentences.slice(0);
  var otherBak = other.slice(0);

  var post = '';
  for (var i = 0; i < length; i++) {
    post += getRandomSentence();
  }

  goodGuysSentences = goodGuysSentencesBak;
  badGuysSentences = badGuysSentencesBak;
  other = otherBak;
  return buranize(post, capslock);
}

function generatePost() {
  var rage = parseInt(document.getElementById('rageFactor').value) / 12;
  var post = getPost(undefined, rage);
  document.getElementById('post').innerHTML = '';
  document.getElementById('post').insertAdjacentHTML('afterbegin', post);
}

// hacky export, but let's keep it simple
window.generatePost = generatePost;

return {
  getPost: getPost
};
})();
