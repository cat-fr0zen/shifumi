const btnlist = document.querySelectorAll(".btnj")
let draw = document.getElementById("draw")
let win = document.getElementById("win")
let lose = document.getElementById("lose")

console.log(btnlist)
btnlist.forEach(bouton => {
  bouton.addEventListener("click",()=>{
    const playerChoice = button.textContent;
    const robotChoice = choices[Math.floor(Math.random() * 3)];
    let outcome;

    if (playerChoice === robotChoice) {
        outcome = 'draw';
    } else if (
        (playerChoice === 'Pierre' && robotChoice === 'Ciseaux') ||
        (playerChoice === 'Ciseaux' && robotChoice === 'Feuille') ||
        (playerChoice === 'Feuille' && robotChoice === 'Pierre')
    ) {
        outcome = 'win';
    } else {
        outcome = 'lose';
    }

  })
})
