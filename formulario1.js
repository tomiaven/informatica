queryselector
// Capturar y validar género
let radio = document.querySelector('input[name="genero"]:checked');
if (!radio) {
alert('Selecciona un género.');
return;
}
if (radio.value === 'hombre') {
saludo = 'Bienvenido';
} else {
saludo = 'Bienvenida';
}
alert(`${saludo}, ${nombre}`);
//Capturar país y determinar saludo específico
let pais = document.getElementById("pais").value;
let frasePais = "";
if (pais === "arg") frasePais = "Gracias por visitarnos";
if (pais === "bra") frasePais = "Obrigado por nos visitar";
if (pais === "usa") frasePais = "Thanks for visiting us";
document.body.innerHTML =
 `<div>
 <h1>${saludo} ${nombre}!</h1>
 <p>${frasePais}.</p>
 </div>`;
