//DEfino el DOM

let square1 = document.getElementById("1")
let square2 = document.getElementById("2")
let square3 = document.getElementById("3")
let square4 = document.getElementById("4")
let square5 = document.getElementById("5")
let square6 = document.getElementById("6")
let square7 = document.getElementById("7")
let square8 = document.getElementById("8")
let square9 = document.getElementById("9")

let divScoreX = document.getElementById("scoreX")
let divScoreO = document.getElementById("scoreO")



let showWinner = document.getElementById("showWinner")
let winner = document.getElementById("winner")

let buttonReset = document.getElementById("buttonReset")


//ASigno los eventos

square1.addEventListener("click", userAction.bind(undefined, square1))
square2.addEventListener("click", userAction.bind(undefined, square2))
square3.addEventListener("click", userAction.bind(undefined, square3))
square4.addEventListener("click", userAction.bind(undefined, square4))
square5.addEventListener("click", userAction.bind(undefined, square5))
square6.addEventListener("click", userAction.bind(undefined, square6))
square7.addEventListener("click", userAction.bind(undefined, square7))
square8.addEventListener("click", userAction.bind(undefined, square8))
square9.addEventListener("click", userAction.bind(undefined, square9))

buttonReset.onclick = resetGame



//Defino la cuenta general
let cuenta = 0
let cuentaCirculo = {
    "numeros": [],
    "nombre": "scoreO",
    "win": "O Wins!"
}
let cuentaEquis = {
    "numeros": [],
    "nombre": "scoreX",
    "win":"X Wins!"
}

//Recupero el SCORE general del localStorage
let scoreX= (localStorage.getItem("scoreX") == null) ? 0 :Number(localStorage.getItem("scoreX"))
let scoreO= (localStorage.getItem("scoreO") == null) ? 0 :Number(localStorage.getItem("scoreO"))


divScoreX.innerHTML = `${scoreX}`
divScoreO.innerHTML = `${scoreO}`



//Funciones



function resetGame(){
    localStorage.clear()
    location.reload()
    
}

function userAction(square) {

    if (square.innerHTML == "") {
        if (cuenta % 2 == 0 || cuenta == 0) {
            square.innerHTML = `<img src="equis.png" alt="" id="equis" class="equis">`
            cuentaEquis.numeros.push(Number(square.id))
            win(cuentaEquis, scoreX, divScoreX)
            cuenta++
        } else {
            square.innerHTML = `<img src="circulo.png" alt="" id="circulo" class="circulo">`
            cuentaCirculo.numeros.push(Number(square.id))
            win(cuentaCirculo, scoreO, divScoreO)
            cuenta++
        }
    }
}



function win(array, score, divScore) {
    let win123 = (array.numeros.includes(1) && array.numeros.includes(2) && array.numeros.includes(3) || array.numeros.includes(NaN)) ? `${array.nombre}` : 0
    let win456 = (array.numeros.includes(4) && array.numeros.includes(5) && array.numeros.includes(6) || array.numeros.includes(NaN)) ? `${array.nombre}` : 0
    let win789 = (array.numeros.includes(7) && array.numeros.includes(8) && array.numeros.includes(9) || array.numeros.includes(NaN)) ? `${array.nombre}` : 0
    let win147 = (array.numeros.includes(1) && array.numeros.includes(4) && array.numeros.includes(7) || array.numeros.includes(NaN)) ? `${array.nombre}` : 0
    let win258 = (array.numeros.includes(2) && array.numeros.includes(5) && array.numeros.includes(8) || array.numeros.includes(NaN)) ? `${array.nombre}` : 0
    let win369 = (array.numeros.includes(3) && array.numeros.includes(6) && array.numeros.includes(9) || array.numeros.includes(NaN)) ? `${array.nombre}` : 0
    let win159 = (array.numeros.includes(1) && array.numeros.includes(5) && array.numeros.includes(9) || array.numeros.includes(NaN)) ? `${array.nombre}` : 0
    let win753 = (array.numeros.includes(7) && array.numeros.includes(5) && array.numeros.includes(3) || array.numeros.includes(NaN)) ? `${array.nombre}` : 0
  
    switch (`${array.nombre}`) {
        case win123:
            showWinner.classList.add("show")
        winner.innerHTML =`${array.win}`
        score += 1
        localStorage.setItem(array.nombre, score)
        divScore.innerHTML = `${score}`
            break;
        case win456:
            showWinner.classList.add("show")
        winner.innerHTML =`${array.win}`
        score += 1
        localStorage.setItem(array.nombre, score)
        divScore.innerHTML = `${score}`
            break;
        case win789:
            showWinner.classList.add("show")
        winner.innerHTML =`${array.win}`
        score += 1
        localStorage.setItem(array.nombre, score)
        divScore.innerHTML = `${score}`
            break;
        case win147:
            showWinner.classList.add("show")
        winner.innerHTML =`${array.win}`
        score += 1
        localStorage.setItem(array.nombre, score)
        divScore.innerHTML = `${score}`
             break;
        case win258:
            showWinner.classList.add("show")
        winner.innerHTML =`${array.win}`
        score += 1
        localStorage.setItem(array.nombre, score)
        divScore.innerHTML = `${score}`
            break;
        case win369:
            showWinner.classList.add("show")
        winner.innerHTML =`${array.win}`
        score += 1
        localStorage.setItem(array.nombre, score)
        divScore.innerHTML = `${score}`
            break;

        case win159:
            showWinner.classList.add("show")
            winner.innerHTML =`${array.win}`
            score += 1
            localStorage.setItem(array.nombre, score)
            divScore.innerHTML = `${score}`
            break;

        case win753:
            showWinner.classList.add("show")
            winner.innerHTML =`${array.win}`
            score += 1
            localStorage.setItem(array.nombre, score)
            divScore.innerHTML = `${score}`
        break;
    
        default:
            break;
    }

}







