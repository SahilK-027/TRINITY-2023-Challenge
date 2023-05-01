console.log(
    ` Hello

    mmmmmmm          "             "      m          
       #     m mm  mmm    m mm   mmm    mm#mm  m   m 
       #     #"  "   #    #"  #    #      #    "m m" 
       #     #       #    #   #    #      #     #m#  
       #     #     mm#mm  #   #  mm#mm    "mm   "#      -BY SK027
                                                m"   
                                               ""    
    `
);

let originalWord = "trinity";
let guessRemaining = 3;
let num = document.getElementById('num');

function clickHandler(){
    if(guessRemaining > 0){
        guessRemaining--;
        // used innerHTML to decrement the remaining guesses value 
        num.innerHTML--;
        let guessedWord = document.querySelector("#word").value;
        // used .toLowerCase() and trim() function
        if(guessedWord.toLowerCase().trim() == originalWord){
            window.alert("🚀 You Win !!! 🎉");
        }
        else{
            window.alert("☹️ Please Try Again.");
        }
    }
    else{
        window.alert("❌ Out of health");
    }

}
