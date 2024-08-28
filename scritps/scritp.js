
const inputTextArea = document.getElementById('inputTextArea');
const textoSalida = document.getElementById('textoSalida');
const btnEncrypt = document.getElementById('btnEncrypt');
const btnDecrypt = document.querySelector('.btn-decrypt');
const btnCopy = document.getElementById('btnCopiar');


function encrypt(text) {
    let encryptedText = text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return encryptedText;
}


function decrypt(text) {
    let decryptedText = text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return decryptedText;
}


btnEncrypt.addEventListener('click', () => {
    const inputText = document.getElementById("inputTextArea");
    const encryptedText = encrypt(inputText.value);
    textoSalida.value = encryptedText;
    mostrarTextoEnOutput();
});


btnDecrypt.addEventListener('click', () => {
    const inputText = inputTextArea.value;
    const decryptedText = decrypt(inputText);
    textoSalida.value = decryptedText;
    mostrarTextoEnOutput();
});


function mostrarTextoEnOutput() {
    document.querySelector('.contenedor-salida-vacio').style.display = 'none';
    document.querySelector('.contenedor-salida-lleno').style.display = 'block';
}


btnCopy.addEventListener('click', () => {
  textoSalida.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});



