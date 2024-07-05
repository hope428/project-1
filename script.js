const btns = document.getElementsByClassName('entryBtn')

const replaceContent = () => {
    const main = document.getElementById("main")
    const pizzaImg = document.createElement('img')
    const message = document.createElement('h1')
    message.innerText = "Here is your meal!"
    pizzaImg.src = './pizza.jpg'
    pizzaImg.style.width = '750px'
    pizzaImg.style.height = '750px'
    main.innerHTML = ""
    main.appendChild(message)
    main.appendChild(pizzaImg)

}

btns[0].addEventListener('click', replaceContent)
btns[1].addEventListener('click', replaceContent)