(function(window){  //passing parameter here
 	
    
    let helloSpeaker = {};
	let speakWord = "Hello";

    
	helloSpeaker.speak = function speak(name) {
  		console.log(speakWord + " " + name);
	}

window.helloSpeaker = helloSpeaker;

})(window);
