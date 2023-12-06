const textElem = document.getElementById('text');
const addbuttonElem = document.getElementById('addbutton');
const ulElem = document.getElementById('ul-list');
let todoArray = [];

window.addEventListener('load', () => {
    /*const cookieString = document.cookie;
    const cookieArray = cookieString.split("; ")
    for (let i=0; i < cookieArray.length; i++) {
        if(cookieArray[i].includes("todoArray=")) {
            console.log(cookieArray[i].split("=")[1]);
            
        }
    }*/
    todoArray = Cookies.get('todoArray').split(","); // type array
    console.log(todoArray);
    // for loop insert li

    for (let i=0; i < todoArray.length; i++) {
        ulElem.insertAdjacentHTML('beforeend', `<li>${todoArray[i]}</li>`);
    }
})

addbuttonElem.addEventListener('click', () => {
    let input_value = textElem.value; // meeting
    //ulElem.innerHTML = `<li>${input_value}</li>`; // innerText / innerHTML = replace old content 
    // beforeend = insert on bottom, afterbegin = insert on top 
    ulElem.insertAdjacentHTML('beforeend', `<li>${input_value}</li>`);
    todoArray.push(input_value);
    textElem.value = '';
    textElem.focus();

    //store data to cookie
    /*document.cookie = "username=Aungkoon Kongpet;";
    document.cookie = `todoArray=${todoArray};`;*/
    Cookies.set('username', 'Aungkoon', { expires: 30 });
    Cookies.set('todoArray', todoArray, { expires: 30 });
})