let correctGuess = 0;
const svg = document.querySelector("svg");

const userInput = document.querySelector("#country");
userInput.addEventListener("input", (event) => {
const selectedCountry = event.target.value;
console.log( selectedCountry );
colorCountry( selectedCountry );
});

function colorCountry( countryClass ){
    if ( countryClass === "" ){
        return;
    }
    console.log(`.${countryClass}`);
   
    const countryPath = svg.querySelectorAll(
        `.${countryClass}, [name='${countryClass}']`);

                console.log("Countrypath", countryPath);
   
    if ( countryPath.length === 0 ){
        userInput.style.border = "6px solid tomato";
    } else {
        userInput.style.border = "6px solid transparent";
        countryPath.forEach( path => path.style.fill = "yellowgreen" );
        userInput.value = "";
        correctGuess++;
    updateScore();
    }
}


function updateScore(){
const counter = document.getElementById("countryCounter");
counter.textContent = correctGuess;
} 



