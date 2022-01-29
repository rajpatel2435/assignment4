(function(){
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
   
    for (var ind in names) {
      //select lowercase of firt letter from name array
      var firstLetter = names[ind].charAt(0).toLowerCase(); 
  

      if (firstLetter === 'j') {
        byeSpeaker.speak(names[ind]);
      } else {
        helloSpeaker.speak(names[ind]);
      }
    }
  
  })();