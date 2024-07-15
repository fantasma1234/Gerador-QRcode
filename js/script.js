const qrcode = document.querySelector("#iqrcode")
const input = document.querySelector("#itexto")
function gerarQrcode() {
    qrcode.innerHTML = ''
    let qrValue = input.value
    if(!qrValue) {
        alert("Digite algo para gerar um qr code")
        return
    }
    qrcode.classList.remove("hide")
    let imagem = document.createElement("img")
    qrcode.appendChild(imagem)
    imagem.src = (`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`)
}