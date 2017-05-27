(function () {

// some random hates found on the internets
// var other = parseTextFile("configs/hlasky_slovien.txt").concat(parseTextFile("configs/romovia_slovien.txt")).concat(parseTextFile("configs/migranti_slovien.txt"));
// var goodGuysSentences = adjustGysSentences(parseTextFile("configs/hlasky_dobri_chlapci.txt"));
// var badGuysSentences = adjustGysSentences(parseTextFile("configs/hlasky_zli_chlapci.txt"));
// var goodGuys = parseTextFile("configs/dobri_chlapci.txt");
// var badGuys = parseTextFile("configs/zli_chlapci.txt");
// var swearWords = ['KURVY', 'NIHILSTY', 'ŽIDIA', 'KOKOTI', 'NENAZRANE SVINE', 'KOLABORANTI', 'YDIOTI', 'NA STRÁŽ'];
// var swearWordsLvl2 = ['KURVAAAA', 'PIIIČAA', 'ZMRRRD', 'JEBAŤ TO CELE', 'KOKOOOOT', 'STRIELAŤ ICH DO RADU', 
//                           'HAJZLY DO PLYNU', 'NASTRÁˇY'];
  
var other;
var goodGuysSentences;
var badGuysSentences;
var goodGuys;
var badGuys;
var swearWords;
var swearWordsLvl2;
  
function generatePost() {
  var rage = parseInt(document.getElementById('rageFactor').value) / 12;
  var post = getPost(undefined, rage);
  document.getElementById('post').innerHTML = '';
  document.getElementById('post').insertAdjacentHTML('afterbegin', post);
}

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
//   var swearWords = ['KURVY', 'NIHILSTY', 'ŽIDIA', 'KOKOTI', 'SVINE', 'KOLABORANTI', 'YDIOTI', 'NA STRÁŽ'];
//   var swearWordsLvl2 = ['KURVAAAA', 'PIIIČAA', 'ZMRRRD', 'JEBAŤ EU', 'KOKOOOOT', 'STRIELAŤ MIGRANTOV', 
//                           'CIGÁNI DO PLYNU', 'NASTRÁˇY'];
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
    console.log(item);
    var sentenceTemplate = item[0][1];
    return sentenceTemplate.formatUnicorn(shuffle(goodGuys));
  } else if (r < 0.25) {
    //badGuysSentences
    var item = badGuysSentences.splice(Math.floor(Math.random() * badGuysSentences.length), 1);
    var sentenceTemplate = item[0][1];
    return sentenceTemplate.formatUnicorn(shuffle(badGuys));
  } else {
    //other
    return other.splice(Math.floor(Math.random() * other.length), 1);
  }
}
  
// add number of guys to template:
function adjustGysSentences(guysSentences) {
  var adjustedSentences = [];
  for (i = 0; i < guysSentences.length; i++) {
    adjustedSentences[i] = [0, guysSentences[i]];
    for (j = 0; j < 10; j++) {
      if(guysSentences[i].indexOf('{' + j.toString() + '}') >= 0) {
//         console.log(j);
        adjustedSentences[i] = [j+1, guysSentences[i]]
      }
    }
  }
  return adjustedSentences;
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
  var role = getRole();
  if (role == 2) {
    var colors = ["(53,130,0)","(78,130,0)","(102,130,0)","(128,129,0)","(129,107,0)","(129,82,0)","(144,77,0)",
                  "(159,69,0)","(174,58,0)","(189,43,0)","(204,26,0)"];
    var images = ["", 
                  "", 
                  "", 
                  "",
                  "",
                  ""];
  }
  else {
    var colors = ["(53,130,0)","(78,130,0)","(102,130,0)","(128,129,0)","(129,107,0)","(129,82,0)","(144,77,0)",
                  "(159,69,0)","(174,58,0)","(189,43,0)","(204,26,0)"];
    var images = ["https://cdn.pbrd.co/images/aFqRkATQ6.jpg", 
                  "http://fakt24.sk/gallery/photos/14668911561997/thumbnail_14668911561997.jpg", 
                  "https://a-static.projektn.sk/2017/05/skautka.jpeg", 
                  "http://img.topky.sk/big/1736737.jpg",
                  "http://i.sme.sk/cdata/2/49/4906652/kotleba.jpg",
                  "https://i.ytimg.com/vi/gJe7fY-yowk/maxresdefault.jpg"];
  }
  document.body.style.background = "rgb" + colors[rage];
  document.getElementById('xichty').src = images[parseInt(rage/2)];
}
  
function changeTopic() {
  var topic = 1;
  var radiosT = document.getElementsByName('tema');
  for (i = 0; i < radiosT.length; i++) {
      if (radiosT[i].checked) {
          topic = parseInt(radiosT[i].value);
          break;
      }
  }
  var role = getRole();
  if (role == 2) {
    var keyword = "slniecko";
    goodGuysSentences = [[0, ""]];
    badGuysSentences = [[0, ""]];
    goodGuys = [""];
    badGuys = [""];
    swearWords = ['HLUPÁCI', 'MILITARISTI', 'SEBCI', 'LÁSKA', 'NEVZDELANCI', 'KVETINOVÁ REVOLÚCIA', 'DÚHA'];
    swearWordsLvl2 = ['FAŠISTI', 'NENAZRANE SVINE', 'VRAHOVIA', 'IGNORANTIII', 'VYPATLANCI'];
  }
  else {
    var keyword = "slovien";
    goodGuysSentences = adjustGysSentences(parseTextFile("configs/hlasky_dobri_chlapci.txt"));
    badGuysSentences = adjustGysSentences(parseTextFile("configs/hlasky_zli_chlapci.txt"));
    goodGuys = parseTextFile("configs/dobri_chlapci.txt");
    badGuys = parseTextFile("configs/zli_chlapci.txt");
    swearWords = ['KURVY', 'NIHILSTY', 'ŽIDIA', 'KOKOTI', 'NENAZRANE SVINE', 'KOLABORANTI', 'YDIOTI', 'NA STRÁŽ'];
    swearWordsLvl2 = ['KURVAAAA', 'PIIIČAA', 'ZMRRRD', 'JEBAŤ TO CELE', 'KOKOOOOT', 'STRIELAŤ ICH DO RADU', 
                          'HAJZLY DO PLYNU', 'NASTRÁˇY'];
  }
  if (topic == 2) {
    other = parseTextFile("configs/romovia_" + keyword + ".txt");
  } 
  else if (topic == 3) {
    other = parseTextFile("configs/migranti_" + keyword + ".txt");
  }
  else if (topic == 4) {
    other = parseTextFile("configs/lgbt_" + keyword + ".txt");
  }
  else {
    other = parseTextFile("configs/hlasky_" + keyword + ".txt")
      .concat(parseTextFile("configs/romovia_" + keyword + ".txt"))
      .concat(parseTextFile("configs/migranti_" + keyword + ".txt"))
      .concat(parseTextFile("configs/lgbt_" + keyword + ".txt"))
  }
}
  
function getRole() {
  var role = 1;
  var radiosR = document.getElementsByName('role');
  for (i = 0; i < radiosR.length; i++) {
      if (radiosR[i].checked) {
          role = parseInt(radiosR[i].value);
          break;
      }
  }
  return role;
}
  
function changeRole() {
  changeTopic();
  changeBackground();
}

// hacky export, but let's keep it simple
window.generatePost = generatePost;
window.changeBackground = changeBackground;
window.changeTopic = changeTopic;
window.changeRole = changeRole;
  
changeTopic();

return {
  getPost: getPost
};
})();

function parseTextFile(pathOfFileToReadFrom) {
  var request = new XMLHttpRequest();
  request.open("GET", pathOfFileToReadFrom, false);
  request.send(null);
  var returnValue = request.responseText.split("\n");
  for (var i = 0; i < returnValue.length; i++) {
    returnValue[i] = returnValue[i] + " ";
  }
  return returnValue;
}
