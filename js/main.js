// déclarer les variables qui vont recevoir le canvas et le context
let ctx;
let elementCanvas = document.getElementById("canvas");
let xCanvas;
let yCanvas;

// fonction getMouseLocation(e) qui va retourner la position de la souris
function getMouseLocation(e) {
  console.log("getMouseLocation works!");
  e.preventDefault();
  // Calcule du Coordonées de la souris sur l'élément window
  let xMousePosWindow;
  let yMousePosWindow;
  xMousePosWindow = e.clientX + window.pageXOffset;
  yMousePosWindow = e.clientY + window.pageYOffset;
  // Calcule du Coordonées de la souris sur le canvas
  let xMousePosCanvas = xMousePosWindow - canvas.offsetLeft;
  let yMousePosCanvas = yMousePosWindow - canvas.offsetTop;
  xCanvas = xMousePosCanvas;
  yCanvas = yMousePosCanvas;
  console.log(xCanvas);
  console.log(yCanvas);
}

// fonction onClickCanvas(e) qui va récuperer la position du clic et appeler differente méthodes pour génerer le dessin
// function onClickCanvas(){

// }

// au chargement de la page, on va récupérer le canvas, le context et installer un écouteur
document.addEventListener("DOMContentLoaded", () => {
  ctx = canvas.getContext("2d");
  elementCanvas.addEventListener("onmousemove", getMouseLocation);
});

