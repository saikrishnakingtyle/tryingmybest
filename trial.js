let computerChoice = (Math.floor(Math.random()*2));

let yourChoice = prompt("Type to Guess the toss(Head or Tail) / (Heads or Tails)");

console.log(`your choice is ${typeof(yourChoice)} ${yourChoice}`);
console.log(`computer chose ${typeof(Number((computerChoice)))} ${computerChoice}`);


let chosenimg = `/image${computerChoice}.jpg`; 

document.querySelector("img").setAttribute("src",chosenimg);
document.querySelector(".yourchoice").innerHTML = yourChoice;

if(computerChoice == 0){
    
    document.querySelector(".computerchoice").innerHTML = "Heads";
}else{
    computerChoice = "ails"
    document.querySelector(".computerchoice").innerHTML = "Tails";
}

// document.querySelector(".computerChoice").innerHTML = computerChoice;

let head = "head"

if(yourChoice === "") {
    // document.querySelector("")
    document.querySelector("h1").innerHTML = "Enter Something!";
    console.log("Enter something");
}else  if (yourChoice.toLowerCase() == "head" && computerChoice == 0){
    document.querySelector("h1").innerHTML = "You win";
    console.log("You Win");
}else if (yourChoice.toLowerCase() == "tail" && computerChoice == 1){
    document.querySelector("h1").innerHTML = "You win";
    console.log("You Win");
}else if (yourChoice.toLowerCase() == "heads" && computerChoice == 0){
    document.querySelector("h1").innerHTML = "You win";
    console.log("You Win");
}else if (yourChoice.toLowerCase() == "tails" && computerChoice == 1){
    document.querySelector("h1").innerHTML = "You win";
    console.log("You Win");
} else if (yourChoice.toLocaleLowerCase() !== "heads" && yourChoice.toLocaleLowerCase() !== "head"){
    if (yourChoice.toLocaleLowerCase() !== "tails" && yourChoice.toLocaleLowerCase() !== "tail"){
        document.querySelector("h1").innerHTML = "Use something Suggested";
        console.log("Use something Suggested!")
    }else{
    document.querySelector("h1").innerHTML = "You win";
    console.log("you loose3");
} 
}
else {
    document.querySelector("h1").innerHTML = "You loose";
    console.log("you loose3");
}
