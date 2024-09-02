let input = document.getElementById('input');
let btn = document.getElementById('btn');
let wrong = document.querySelector('.wrong');
let guesses = document.getElementById("guesses");

let answer= Math.floor(Math.random()*100)+1;
console.log(answer);
let numGuesses = 0;


btn.addEventListener("click",()=>{
    guessesNumber();
})

function guessesNumber(){
    if (input.value<1 || input.value >100 || isNaN(input.value)){
         wrong.innerHTML = "Enter Between 1 to 100";
        } else{
            numGuesses ++;
            guesses.innerHTML="No of Guess : "+numGuesses;
            if(input.value > answer){
                wrong.innerHTML= "You Guess to High";
                input.value= "";
            }
            else if(input.value < answer){
                wrong.innerHTML= "You Guess to Low";
                input.value= "";
            }
            else{
                wrong.innerHTML= "Congratulations! You guessed the correct number in " + numGuesses + " guesses!";
                
                setTimeout(()=>{
                    resetGame();
                },5000)
            }
        }
}

function resetGame(){
    numGuesses = 0;
    answer=answer= Math.floor(Math.random()*100)+1;
    input.value = "";
    wrong.value=""; 
    guesses.innerHTML = "No of Guess: 0";
   
}