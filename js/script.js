let $insertText = document.getElementById("insert-text");
let $textDesencriptado = document.getElementById("text-desencriptado");
const $btnEncriptar = document.getElementById("btn-encriptar");
const $btnDesencriptar = document.getElementById("btn-desencriptar");
const $textIngresar = document.getElementById("text-ingresar");
const $btnCopy = document.getElementById("btn-copy");
const $img = document.querySelector(".svg");

// variables de vocales a remplazar
let a = "ai";
let e = "enter";
let i = "imes";
let o = "ober";
let u = "ufat";

// creamos una variable donde se guardara el nuevo valor
let resultText = "";

// función para encriptar el texto ingresado
function encriptar(text) {
  for (let idx = 0; idx < text.length; idx++) {
    if (text[idx] === "a") {
      resultText += a;
    } else if (text[idx] === "e") {
      resultText += e;
    } else if (text[idx] === "i") {
      resultText += i;
    } else if (text[idx] === "o") {
      resultText += o;
    } else if (text[idx] === "u") {
      resultText += u;
    } else {
      resultText += text[idx];
    }
  }
  return resultText;
}
// función para desencriptar
function desencriptar(text) {
  resultText = text
    .replaceAll(a, "a")
    .replaceAll(e, "e")
    .replaceAll(i, "i")
    .replaceAll(o, "o")
    .replaceAll(u, "u");
  return resultText;
}
// Una función para que se limpie la variable resultText
function LimpiarText() {
  resultText = "";
}
// creamos un función para que se actualicen las clases
function actualizarPantalla() {
  document.querySelector(".container-before").classList.add("ocultar");
  document.querySelector(".container-after").classList.add("active");
}
// añadimos un evento a el botón encriptar para que obtenga el valor de el textarea
// luego llamar a la  función encriptar pasándole el texto del textarea
// y devolver el texto ya desencriptado
$btnEncriptar.addEventListener("click", () => {
  LimpiarText();
  encriptar($insertText.value);
  $textDesencriptado.value = resultText;
  actualizarPantalla();
});
// añadimos un evento a el botón desencriptar para que obtenga el valor de el textarea
// obtiene el valor de textarea y lo desencriptar
// Luego se lo envía a la el textarea de mostrar el mensaje
$btnDesencriptar.addEventListener("click", () => {
  LimpiarText();
  desencriptar($insertText.value);
  $textDesencriptado.value = resultText;
  actualizarPantalla();
});
// Creamos un botón para copiar el texto ya sea encriptado o desencriptado y se guarde en el porta papeles
$btnCopy.addEventListener("click", (e) => {
  $textDesencriptado.select();
  document.execCommand("copy");
  $textDesencriptado.value = "";
});
