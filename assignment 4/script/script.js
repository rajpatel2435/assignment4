(function() {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  //use for loop
  let lengthOfNames=names.length;
    for (let i = 0; i < lengthOfNames; i++) {
        //convert into lower case
        let firstLetter = names[i].charAt(0).toLowerCase();

        //check the condition of first letter J then call bye function
        if (firstLetter === 'j') {
           console.log("Bye"+" "+names[i])
        } else {
            console.log("Hello"+ " "+names[i])
        }
    }
})();