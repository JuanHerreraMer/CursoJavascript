const eyes = document.querySelector('.eyes');
const head = document.querySelector('.head');
const ears = document.querySelector('.ears');
const nose = document.querySelector('.nose');
const snout = document.querySelector('.snout');

let cursorPos = {x:0, y:0};
let windowWidth = window.innerWidth;
let windowsHeight = window.innerHeight;

const definirTamaPantalla = () => {
    windowWidth = window.innerWidth;
    windowsHeight = window.innerHeight;
}

const mouseMove = (e) => {
    cursorPos = {x:e.clientX, y:e.clientY}
    iniciarSeguimiento();
}
function touchMove(e){
    cursorPos={x:e.targetTouche[0].offsetX,y:e.targetTouches[0].offsetY}
    iniciarSeguimiento()
}

const seguirCursor = (elemento, xR, yR) => {
    const elementoOffset = elemento.getBoundingClientRect();
    const centerX = elementoOffset.x + elementoOffset.width / 2;
    const centerY = elementoOffset.y + elementoOffset.height / 2;
    const distanceLeft = Math.round(((cursorPos.x - centerX) * 100) / window.innerWidth);
    const distanceTop = Math.round(((cursorPos.y - centerY) * 100) / window.innerHeight);

    elemento.style.transform = `translate(${distanceLeft/xR}px, ${distanceTop/yR}px)`;
}

const iniciarSeguimiento = () => {
    if (ears) seguirCursor(ears, 0, 0);
    if (head) seguirCursor(head, 6, 6);
    if (eyes) seguirCursor(eyes, 1.8, 1.8);
    if (snout) seguirCursor(snout, 1.5, 1.5);
    if (nose) seguirCursor(nose, 1, 1);
}

window.addEventListener('resize', definirTamaPantalla);
window.addEventListener("mousemove", mouseMove);
window.addEventListener('touchmove',touchMove);