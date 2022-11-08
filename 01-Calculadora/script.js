const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach( (item) => {
    item.onclick = () => {
        switch(item.id) {
            case 'clear':
                display.innerText = "";
                break;
            case 'backspace':
                let string = display.innerText.toString();
                display.innerText = string.substr(0, string.length - 1);
                break;
            case 'equal':
                if(display.innerText !== ""){
                    //si en display hay operadores aritmeticos, eval resolverá el enunciado
                    display.innerText = eval(display.innerText); 
                }else{
                    display.innerText = "Null";
                    setTimeout( () => {
                        display.innerText = "";
                    }, 1000);
                }
                break;
            default:
                display.innerText+=item.id;
        }

    }
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");


let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark=!isDark;
}