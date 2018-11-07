
(function (window) {

var names = ["prabha", "kittu", "raki", "kishu", "kamal", "keith", "jadu", "ramu", "kuma", "redd"];
for (var i in names) {
  var firstLetter = ((names[i]).charAt(0)).toLowerCase();  
  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);
