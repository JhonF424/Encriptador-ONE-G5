let text_to = document.getElementById("text_to");
let encrypt_button = document.getElementById("encrypt");
let decrypt_button = document.getElementById("decrypt");
let no_content = document.getElementById("no_content");
let textencrypt = document.getElementById("textencrypt");
let copybutton = document.getElementById("copybutton");
let dibujo = document.getElementById("dibujo");

function encriptar() {
    textencrypt.innerHTML = ""
    let contenido = text_to.value;
    contenido = contenido.toLowerCase();

    contenido = contenido.replace(/[áàäâ]/g, "a");
    contenido = contenido.replace(/[éèëê]/g, "e");
    contenido = contenido.replace(/[íìïî]/g, "i");
    contenido = contenido.replace(/[óòöô]/g, "o");
    contenido = contenido.replace(/[úùüû]/g, "u");

    contenido = contenido.replace(/[^\w\s]/gi, '');

    text_to.value = contenido;

    let array_text = text_to.value.split("");

    for (let i = 0; i < array_text.length; i++) {
        switch (array_text[i]) {
            case "a":
                array_text[i] = "ai"
                break;
            case "e":
                array_text[i] = "enter"
                break;
            case "i":
                array_text[i] = "imes"
                break;
            case "o":
                array_text[i] = "ober"
                break;
            case "u":
                array_text[i] = "ufat"
                break;
            default:
                continue;
        }
    }

    let cadena = array_text.join("");
    textencrypt.innerText = cadena
    comprobar(cadena)
}

function desencriptar() {
    textencrypt.innerHTML = ""
    let contenido_decrypt = text_to.value;
    let array_decrypt = contenido_decrypt.split(" ");

    for (let j = 0; j < array_decrypt.length; j++) {
        array_decrypt[j] = array_decrypt[j].replace(/ai/g, "a")
        array_decrypt[j] = array_decrypt[j].replace(/enter/g, "e")
        array_decrypt[j] = array_decrypt[j].replace(/imes/g, "i")
        array_decrypt[j] = array_decrypt[j].replace(/ober/g, "o")
        array_decrypt[j] = array_decrypt[j].replace(/ufat/g, "u")
    }

    let cadena_decrypt = array_decrypt.join(" ");
    textencrypt.innerHTML = cadena_decrypt;
    comprobar(cadena_decrypt)
}

function comprobar(cadena) {
    if (cadena) {
        no_content.style.display = "none"
        copybutton.style.visibility = "visible";
    }
}

function copiarTexto() {
    let texto = textencrypt.textContent
    navigator.clipboard.writeText(texto)
}

text_to.addEventListener('input', () => {
    if (text_to.value === '') {
        textencrypt.innerHTML = '';
        no_content.style.display = "flex"
        copybutton.style.visibility = "hidden";
    }
});

encrypt_button.onclick = encriptar;
decrypt_button.onclick = desencriptar;
copybutton.onclick = copiarTexto;

window.addEventListener("resize", function () {
    if (window.innerWidth <= 768) {
        vector3.remove();
    } else {
        if (!document.contains(dibujo)) {
            no_content.appendChild(dibujo);
        }
    }
});