

const displayAllNumber = function(){
    
    let bingoTable = document.getElementById("bingocontainer")
    bingoTable.innerHTML = ""

    for (let i = 1; i <= 76; i++){
        let newNum = document.createElement("div")
        
        newNum.innerText = i  
        newNum.classList.add("num")
        bingoTable.appendChild(newNum)
    }
}
let randomNum = function() {
    const random = Math.floor(Math.random()* 76)
    const randDiv = document.getElementById("randNum")
    randDiv.innerHTML = "Numbers: " + random
    const cells = document.querySelectorAll("div .num")
    cells[random-1].classList.add("heighlight")
}
window.onload = function(){
displayAllNumber()
const click1 = document.getElementById("button")
click1.addEventListener("click" , function(){
    randomNum()
})
}
