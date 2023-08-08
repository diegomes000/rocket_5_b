let randomNumber = Math.round(Math.random() * 10)

console.log(randomNumber)

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const cookieBtn = document.querySelector("#cookie-img")

cookieBtn.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}


function handleTryClick(event) {

    event.preventDefault()
    toggleScreen()
    if (Number(1) == randomNumber) {
    document.querySelector(".screen2 p").innerText = `“Never underestimate the power of stupid people in large groups.”`
    }
    if (Number(2) == randomNumber) {
        document.querySelector(".screen2 p").innerText = `“If at first, you dont succeed, then skydiving definitely isnt for you.”`
    }
    if (Number(3) == randomNumber) {
        document.querySelector(".screen2 p").innerText = `"There is a fine line between planking and napping"`
    }
    if (Number(4) == randomNumber) {
        document.querySelector(".screen2 p").innerText = `“Try & try until you cannot succeed.”`
    }
    if (Number(5) == randomNumber) {
        document.querySelector(".screen2 p").innerText = `“Trying is the first step toward failure.”`
    }
    if (Number(6) == randomNumber) {
        document.querySelector(".screen2 p").innerText = `“He who laughs last didn't get the joke.”`
    }
    if (Number(7) == randomNumber) {
        document.querySelector(".screen2 p").innerText = `“The reward for good work is more work.”`
    }
    if (Number(8) == randomNumber) {
        document.querySelector(".screen2 p").innerText = `“I am free of all prejudice. I hate everyone equally.”`
    }
    if (Number(9) == randomNumber) {
        document.querySelector(".screen2 p").innerText = `“Hope is the first step on the road to disappointment.”`
    }
    if (Number(10) == randomNumber) {
        document.querySelector(".screen2 p").innerText = `“I ve developed a new philosophy. I only dread one day at a time.”`
    }

}

    
    
    


function handleResetClick() {
    toggleScreen()
    randomNumber = Math.round(Math.random() * 10)
    /* console.log(randomNumber) */
}

