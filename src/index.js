import './less/index.less'

// 1-loud
window.onload = function (evt) {
    console.log(`event ${evt.type} Fried! READY TO GO!!`)
const heading = document.querySelector('h1');
heading.textContent = "AquaAire AutoBus";
// 2-copy
window.addEventListener('copy', () => {
navigator.clipboard.readText()
.then(text => {
    heading.textContent += text
})
})
}