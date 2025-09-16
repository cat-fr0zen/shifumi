const choices = ["pierre", "feuille", "ciseaux"];
const beats = { pierre: "ciseaux", ciseaux: "feuille", feuille: "pierre" };
 
const $ = (id) => document.getElementById(id);
const winEl = $("win"), drawEl = $("draw"), loseEl = $("lose"), logEl = $("log");
let score = { win: 0, draw: 0, lose: 0 };
 
function play(user) {
  const ia = choices[Math.floor(Math.random() * choices.length)];
  let res = "draw";
  if (user !== ia) res = beats[user] === ia ? "win" : "lose";
  score[res]++;
  render();
  logEl.textContent = `Toi: ${uc(user)} | IA: ${uc(ia)} → ${msg(res)}`;
}
 
function render() {
  winEl.textContent = score.win;
  drawEl.textContent = score.draw;
  loseEl.textContent = score.lose;
}
 
function uc(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
function msg(r) { return r === "win" ? "Victoire !" : r === "lose" ? "Défaite !" : "Égalité."; }
 
document.querySelectorAll("[data-play]").forEach((btn) => {
  btn.addEventListener("click", () => play(btn.dataset.play));
});
 
$("reset").addEventListener("click", () => {
  score = { win: 0, draw: 0, lose: 0 };
  render();
  logEl.textContent = "";
});
render();