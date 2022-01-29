(function() {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  //use for loop
  let lengthOfNames=names.length
    for (var i = 0; i < lengthOfNames; i++) {
        //convert into lower case
        var firstLetter = names[i].charAt(0).toLowerCase();

        //check the condition of first letter J then call bye function
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();