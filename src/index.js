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

// 3 - click
document.body,addEventListener('click', evt => {
evt.target.classList.toggle('mirror')
})

// 4-dblclick 
document.body.addEventListener('dblclick', evt => {
    evt.target.outerHTML = '';
})
// 5-keydown
window.addEventListener('keydown', evt => {
   if (evt.key == 6) {
    document.body.innerHTML = '<h1>You are on the AquaAire AutoBus</h1>';
   }
})
// 6-mousemove
document.body.addEventListener('mousemove', evt => {
    const { clientX, clientY } = evt
  //  console.log(`mouse is at ${clientX} and now its at ${clientY}`);
})
// 7-mouseenter
// 8-mouseleave
const destinations = document.querySelectorAll('.destination');
for (let destination of destinations) {
destination.addEventListener("mouseenter", () => {
   destination.style.fontWeight = 'bold';
})
destination.addEventListener('mouseleave', () => {
    setTimeout(() => {
        destination.style.fontWeight = 'initial';
    },400)
})
}
}