
let userName = prompt("Kullanici adini giriniz")
let info = `${userName}`

const myInterval = setInterval(saatgün, 1000);
function saatgün() {
const d = new Date();
let date =d.toLocaleTimeString();
let textdate = document.querySelector('#date')
textdate.innerHTML = `${date}`
}

let textinfo = document.querySelector('#info')
textinfo.innerHTML= `${info}`


