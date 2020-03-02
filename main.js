function getLength(){
    //alert("Method called");
        const MESSAGE = "The word length is: "; 
      //  alert('We are about to get the value');
        let input = document.getElementById("wordIn").value;
        
        let wordLen = input.length;

      //  alert('We Got the value: '+ speedInMPH);
      //  alert('We did a conversion');
        document.getElementById("wordLenOut").innerHTML = MESSAGE + wordLen;
    }
    
  
    