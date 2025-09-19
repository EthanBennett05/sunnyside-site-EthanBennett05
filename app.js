//step 1 - get the things
const hamburgerButton = document.getElementById('hamburgerButton')
const mobileMenu = document.getElementById('mobileMenu')


//step 2 - add event listeners
hamburgerButton.addEventListener('click', (event)=> {
    event.preventDefault()

    console.log("you clicked it!")

    mobileMenu.classList.toggle("hidden")


})