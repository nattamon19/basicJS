const addButtonElem = document.getElementById('add_button'); // HTML Object / HTML Element
const inputText1Elem = document.getElementById('input_text1');
const inputText2Elem = document.getElementById('input_text2');
const resultElem = document.getElementById('result');
const deleteButtonElem = document.getElementById('delete_button');
const multiplyButtonElem = document.getElementById('multiply_button');
const divideButtonElem = document.getElementById('divide_button');


function cal_number(event) {
    const type = event.target.dataset.type;
    if (inputText1Elem.value != '' && inputText2Elem.value != '' ) {
        if(type === '+') {
            let result = Number(inputText1Elem.value) + Number(inputText2Elem.value)
            resultElem.innerText = result;
        }
        else if(type === '-') {
            let result = Number(inputText1Elem.value) - Number(inputText2Elem.value)
            resultElem.innerText = result;
        }
        else if(type === '*') {
            let result = Number(inputText1Elem.value) * Number(inputText2Elem.value)
            resultElem.innerText = result;
        }
        else if(type === '/') {
            let result = Number(inputText1Elem.value) / Number(inputText2Elem.value)
            resultElem.innerText = result;
        }
    }
    else {
        alert('Please enter both number');
    }
}

addButtonElem.addEventListener('click', cal_number)

deleteButtonElem.addEventListener('click', cal_number)

multiplyButtonElem.addEventListener('click', cal_number)

divideButtonElem.addEventListener('click', cal_number)