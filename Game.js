let btn = document.getElementById('btn');
let output = document.getElementById('OutputText');

let number = [Math.floor(Math.random() * 100)]

btn.addEventListener('click', function(){
    const input = document.getElementById('userInput').value;
    if (input > 100) {
        output.innerHTML = "Please enter a number between 1 and 100.";
        return;
    }

    if (input == number){
        output.innerHTML = 'You guessed right, your number was $(number)'
    } else if (input < number){
        output.innerHTML = "You guessed too low, Try Again!"
    };
    if (input > number){
        output.innerHTML = "You guessed too high, Try Again!"
    }
})