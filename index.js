const calculate_score_btn = document.querySelector("#submit")
const to_hide_div = document.querySelector("#tohide")
const to_show_div = document.querySelector("#toshow")
const reset_btn = document.querySelector("#reset")
const clear_btn = document.querySelector("#clear")

to_hide_div.style.display = "block"
to_show_div.style.display = "none"

calculate_score_btn.addEventListener("click", () => { // sexy aah arrow function
    let purity = 100 - document.querySelectorAll('input[type="checkbox"]:checked').length
    document.querySelector("#score").innerHTML = purity
    to_hide_div.style.display = "none"
    to_show_div.style.display = "block"
})

reset_btn.addEventListener("click", () => {
    to_hide_div.style.display = "block"
    to_show_div.style.display = "none"
    document.querySelectorAll('input[type="checkbox"]').forEach( (element) => {
        element.checked = false
    })
})

clear_btn.addEventListener("click", () => {
    document.querySelectorAll('input[type="checkbox"]').forEach( (element) => {
        element.checked = false
    })
})
