const colorElem = document.getElementById('color');
const bodyElem = document.body;
const textcolorElem = document.getElementById('textcolor');

window.addEventListener('load', () => {
    bodyElem.style = `background-color: #f00; color: #fff;`
})

colorElem.addEventListener('input', () => {
    console.log(colorElem.value);
    bodyElem.style = `background-color: ${colorElem.value} ;`
})

textcolorElem.addEventListener('input', () => {
    console.log(textcolorElem.value);
    bodyElem.style = `color: ${textcolorElem.value} ;`
})