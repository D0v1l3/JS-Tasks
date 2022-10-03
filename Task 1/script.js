/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const kiloInput = document.getElementById("search");
const form = document.querySelector("form");
const outputDisplay = document.getElementById("output");
const outputLb = document.createElement("h2");
const outputG = document.createElement("h2");
const outputOz = document.createElement("h2");
outputDisplay.append(outputLb, outputG, outputOz);
outputDisplay.style.cssText =
  "text-align: center; line-height: 3em; border: 0.5em solid #000000; margin-left: 10%; margin-right: 10%";

function conversionOfKg(event) {
  event.preventDefault();
  const kilo = Number(kiloInput.value);
  outputLb.textContent = `${kilo * 2.2046} lb`;
  outputG.textContent = `${kilo / 0.001} g`;
  outputOz.textContent = `${kilo * 35.274} oz`;
}

form.addEventListener("submit", conversionOfKg);
