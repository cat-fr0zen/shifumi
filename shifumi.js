const btnlist = document.querySelectorAll(".btnj");
const resultDisplay = document.getElementById('affichage');
const winDisplay = document.getElementById('win');
const drawDisplay = document.getElementById('draw');
const loseDisplay = document.getElementById('lose');
const resetButton = document.getElementById('réinitialise');
const result = { win: 0, draw: 0, lose: 0 };
const choix = ['Pierre' , 'Papier' , 'Ciseaux'];


function lesplurielsetsinguliers(count, singulier, pluriel) {
  return count + ' ' + (count > 1 ? pluriel : singulier);}

function miseajourscrore(){
winDisplay.textContent = lesplurielsetsinguliers(result.win, "victoire", "victoires");
drawDisplay.textContent = lesplurielsetsinguliers(result.draw, "égalité", "égalités");
loseDisplay.textContent = lesplurielsetsinguliers(result.lose, "défaite", "défaites");
}

console.log(btnlist)
btnlist.forEach(bouton => {
  bouton.addEventListener("click",()=>{
    const choix_du_joueur = bouton.textContent;
    const choix_du_robot = choix[Math.floor(Math.random() * 3)];
    let outcome;

    if (choix_du_joueur === choix_du_robot) {
        outcome = 'draw';
    } else if (
        (choix_du_joueur === 'Pierre' && choix_du_robot === 'Ciseaux') ||
        (choix_du_joueur === 'Ciseaux' && choix_du_robot === 'Papier') ||
        (choix_du_joueur === 'Papier' && choix_du_robot === 'Pierre')
    ) {
        outcome = 'win';
    } else {
        outcome = 'lose';
    }
    result[outcome]++;
    miseajourscrore()
  })
})

resetButton.addEventListener('click', () => {
  result.win = 0;
  result.draw = 0;
  result.lose = 0;
  miseajourscrore();
  resultDisplay.textContent = '';
});


