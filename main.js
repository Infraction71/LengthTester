function getLength(){
    
        const MESSAGE = "The word length is: "; //For printing later
        let wordIN = document.getElementById("wordIn").value;  //Getting value 
        let wordLen = wordIN.length //Getting the length
        document.getElementById("wordLenOut").innerHTML = MESSAGE + wordLen; //printing the length :) 
    }
    
  
    