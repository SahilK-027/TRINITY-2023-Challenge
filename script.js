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
let temp = document.querySelector("#num") ;
let originalWord = "trinity";
let guessRemaining = 3;

function clickHandler(){
    if(guessRemaining > 0){
        guessRemaining--;
        temp.innerHTML = guessRemaining ;
        let guessedWord = document.querySelector("#word").value;
        guessedWord = guessedWord.toLowerCase() ;
        if(guessedWord == originalWord){
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
