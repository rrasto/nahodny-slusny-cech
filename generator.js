(function () {

// some random hates found on the internets
var other = ['Nebudu nám vnucovat právo šaria , pivo a klobásku im povinne dať. ',
  ' to by sa za komunistov nestalo!!!!',
  ' je to prauda, aj na Slobodnom Vysjelaci to pisali !1!!',
  ' Jediny pravi prezident Slovákov navždy zostáva dotchor Jozef Tiso. ',
  ' nje dr. Tiso , ale vlastizracca Kiska bi mal visjet!!',
  ' som Slovan a Putin je muoj prezident ',
  ' za Slovenského štátu bolo najlepšie , starý otec my to na vlasné oči rozprávali',
  ' holokaust sú len sionistické rosprávky čo nám tlačja imperjalisti na čele s USA !',
  ' republyku si rozvracať nedáme ',
  ' a médja mlčja',
  ' ja niesom rasista...',
  ' známá  z Nemecka spomínala, že vuobec nepracuju a len berú dávky ',
  ' Čina a Rusko sú aspoň pre tento národ prínos, to sa o tých Sorošových zapredancoch povedať nedá !!!',
  ' 1000íce migrantov nám chce brať naše hodnoty,musíme chrániť naše hranice!!!  ',
  ' Otvorte už konecne oči, vy tupé ouce!!!11!',
  ' nje je to síce prauda ale MOHLA BY BÝŤ!!!',
  ' sprisahali sa proti našim hokejistom abi nič nehraly,my jsi dyktovat z EU NEDÁME !!',
  '. Pan   Kotleba  je dobrý človek,médjá klamu  ',
  ' už to písal aj Tibor , Eliot a Rostas v Zem a Vek ',
  ' ludja prebuďte se už konečne , kam až to necháme zajsť?!',
  ' chce to už konečne krvavú revolúciu a nastoliť vládu pracujíceho ľudu!!!!!',
  ' k lopatám ich nahnať fšecky ',
  ' zapalte ohne zvrchovanosti ',
  ' a bežte s tým multi-kulti do prdele!!',
  ' na stráaž !!!!',
  ' na stráˇy!!!!',
  ' nastráž! !!!',
  ' nastráˇy !!!!',
  ' nastráš !!!!',
  ' verný sebe , svorne naprd !!!!',
  ' Tento fašistycký štát zlyháva na plnej čjare , aspoň vo vlakoch nás chránia naši slušný chlapci v zelenom !!!',
  ' Nječo je vo vzduchu ,dneska u nas bol velky chemtrails, náhoda? ',
  ' Odstraňte tie multikulty pičoviny!',
  ' je to riadená genocida bielej rasy ',
  ' nech si ich vezmú k sebe domou !1!!! ',
  ' neisom rasista,europa je biela afrika je čierna a ázja je žltá ',
  ' preca niesom xenofob ,keď si to myslím ',
  ' njesom rasista , ale ',
  ' akože ja njesom islamofob ,ale moslimakou by som strielal rovno na na hranici!',
  ' pretože jedinym řiešením migračnej krízy je gulomet...',
  ' lenže Rusko aspoň aspom nerozpútava tie vojny kvoli rope ',
  ' a na našich duochodcov musíme ZBIERAŤ VRCHNÁKY???? ',
  ' fšecci pravdoláskari by si maly spomenúť na humanytárne bonbardovanie Havlom!!',
  ' z mojich daní sa nebudu platiť týchto "neprispuosobivých" ',
  ' nebuďte ouce....',
  ' to niesú žiadny utečenci ,majú totiž mobilné telefony a značkové handri ',
  'Hehehe,natrtkali si ,nech sa starajú.'];

var goodGuysSentences = [
  [1, ' polytike sice moc nerozumjem , ale ten {0} je dobrý, ten by xce narobiť porjadki .'],
  [1, ' {0} chce aby sme mohly brániť našu svojstojú rodnú svojeť .'],
  [1, ' {0} to mislí uprimne z našim národom .'],
  [1, ' {0} aspom vravý tomuto národu praudu .'],
  [1, ' a {0} a {1} by mali vyhráť volbi '],
  [1, ' mislím,že {0} je jedinný rozumný , lebo aspoň má gule a vravý čo si mislí. '],
  [2, ' Každý kdo má modzog a nie je pyča preda musý vedeť že {0} a {1} to s nami mislja dobre .'],
  [1, ' {0} tam aspoň zoptimalizuje počet vlastizradcov tochto ťažko skúšaného národa !!!']
];

var badGuysSentences = [
  [2, ' za fšecko muožu {0} a {1} .'],
  [2, ' Exystuje tajný plán , ktorý vitvorily {0} a {1} a teraz sa to šecko deje, otvorte oči '],
  [2, ' {0} a {1} len okrádajú štát a slušných pracovytých luďí čo pre tento národ tvorja hodnoty .'],
  [1, ' {0} do plinu !!!!'],
  [1, ' , lebo toto sú veci bez ktorých by táto krajina fungovala: {0} a {1} '],
  [1, ' je to jednoduché.. {0}? Mám riešenie - vyhostit do Afriky!!!!'],
  [1, 'Je predsa úúúplne jasné že korporácie a {1} kcú aby sme si to mislely .'],
  [2, '{0} a {1} nemusia pracovať a muožu len dostávať dávky a my na naše děti musíme len zbierať vrchnáky, aby byly zdravé, pre toto som kľúčami neštrngal, zlatý komunisti!!! ! '],
  [1, 'Inak fčera som sa díval na oblohu a bola tam velká dávka chemtrails , viac než obvikle a muože za to a Kiska!!!!!!']
];

var goodGuys = ['pan Kotleba', 'ing. mgr. Kotleba', 'Kotleba', 'Kollár', 'pán premiér', 'Slovenské Hnutie Obrody', 'pán Švec', 'náš biedny národ',
   'pán prezident Putin', 'Putin', 'Magát', 'prezident Trump', 'pán Mazúrek', 'ĽSNS', 'Sme Rodina', 'Orbán', 'tento národ', 'náš náarod'];

var badGuys = ['Kiska', 'vlastizraca Kiska', 'slniečkáry', 'kolaboranti', 'moslimáci', 'Soroš', 'admini Deylymejl',
 'Radičová', 'fašisti na Ukrajine', 'kiskoidi', 'birokrati z EU', 'Obama', 'nihilisti', 'zapredanci', 'protinárodné živly',
 'makrela', 'Merkelova', 'nadnárodné elity', 'braislavská kaviareň', 'novinárskí zapredanci', 'praudoláskary', 'ukrofašisti',
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
  
function changeBackground() {
  var rage = parseInt(document.getElementById('rageFactor').value);
  var colors = ["(53,130,0)","(94,130,0)","(129,123,0)","(129,82,0)","(129,55,0)",
                "(128,27,0)","(138,0,0)","(160,0,0)","(192,0,0)","(223,0,0)","(255,0,0)"];
  document.body.style.background = "rgb" + colors[rage];
}

function generatePost() {
  var rage = parseInt(document.getElementById('rageFactor').value) / 12;
  var post = getPost(undefined, rage);
  //changeBackground(rage);
  document.getElementById('post').innerHTML = '';
  document.getElementById('post').insertAdjacentHTML('afterbegin', post);
}

// hacky export, but let's keep it simple
window.generatePost = generatePost;

return {
  getPost: getPost
};
})();

function changeBackground() {
  var rage = parseInt(document.getElementById('rageFactor').value);
  var colors = ["(53,130,0)","(94,130,0)","(129,123,0)","(129,82,0)","(129,55,0)",
                "(128,27,0)","(138,0,0)","(160,0,0)","(192,0,0)","(223,0,0)","(255,0,0)"];
  document.body.style.background = "rgb" + colors[rage];
}
