/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  //write your code here
  let excuse = document.getElementById("excuse2");
  // pillamos una salida aleatoria de cada array con un numero aleatorio
  let randomNumberWho = Math.floor(Math.random() * who.length);
  let randomNumberAction = Math.floor(Math.random() * action.length);
  let randomNumberWhat = Math.floor(Math.random() * what.length);
  let randomNumberWhen = Math.floor(Math.random() * when.length);
  //creamos una variable que será la que nos dará el contenido del array extraido aleatoriamente
  let randomWho = who[randomNumberWho];
  let randomAction = action[randomNumberAction];
  let randomWhat = what[randomNumberWhat];
  let randomWhen = when[randomNumberWhen];
  // cambiamos la excusa
  excuse.textContent =
    randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;
};
