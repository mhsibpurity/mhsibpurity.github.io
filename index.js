const calculate_score_btn = document.querySelector("#submit")
const to_hide_div = document.querySelector("#tohide")
const to_show_div = document.querySelector("#toshow")
const reset_btn = document.querySelector("#reset")
const clear_btn = document.querySelector("#clear")

to_hide_div.style.display = "block"
to_show_div.style.display = "none"

calculate_score_btn.addEventListener("click", () => { // sexy aah arrow function
    purity = 100 - document.querySelectorAll('input[type="checkbox"]:checked').length
    document.querySelector("#score").innerHTML = purity
    to_hide_div.style.display = "none"
    to_show_div.style.display = "block"

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("result");
    ctx.drawImage(img, 0, 0);
    ctx.font = "100px Helvetica";
    // Create gradient
    var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
    gradient.addColorStop("0"," magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    // Fill with gradient
    ctx.fillStyle = gradient;
    ctx.textAlign = "center"
    ctx.fillText("I am " +  purity + "% pure!", 640, 150);
    ctx.font = "40px Helvetica";
    ctx.fillText("Test your purity at https://mhsibpurity.github.io/", 640, 650);
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
