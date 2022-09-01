const addButton = document.querySelector(".plus")
const minusButton = document.querySelector(".minus")
let number = document.querySelector("#quantity-number")

addButton.addEventListener("click", () => {
    event.preventDefault()
    number.innerHTML = Number(number.innerHTML) + 01
})

minusButton.addEventListener("click", () => {
    event.preventDefault()
    if (number.innerHTML !== "0") {
        number.innerHTML = Number(number.innerHTML) - 01
    }
})