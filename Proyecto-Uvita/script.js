
const cilindro = document.getElementById("cilindro");
let angulo = 0;



document.getElementById("next").addEventListener("click", () => {
  angulo -= 90;
  cilindro.style.transform = `rotateY(${angulo}deg)`;
});

document.getElementById("prev").addEventListener("click", () => {
  angulo += 90;
  cilindro.style.transform = `rotateY(${angulo}deg)`;
});

function setFaces() {
  const w = cilindro.offsetWidth;
  const N = 4; // numero de imagenes
  const angle = 360 / N;
  const tz = w / (2 * Math.tan(Math.PI / N));

  [...cilindro.children].forEach((face, i) => {
    face.style.transform = `rotateY(${i * angle}deg) translateZ(${tz + 20}px)`;
  });
}

window.addEventListener("resize", setFaces);
setFaces();