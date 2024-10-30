var body_ = document.getElementById("body")

function gera(but) {
    but.style.display = "none"

    for (let index = 0; index < 1900; index++) {
        var bloco = document.createElement("div")
        bloco.classList.toggle("pixel")
     
        if (index/10 == 1 ) {
            bloco.style.backgroundColor = "blue"
        }

        body_.appendChild(bloco)
    }

}