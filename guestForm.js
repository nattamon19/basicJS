//65130500035 Nattamon Thongkhamon

import { createGuestList } from './data/guestdata.js'
import { GuestManagement } from './lib/GuestManagement.js'
//const createGuestList = require('./data/guestdata.js')

const guestList = createGuestList() // guestList is a class variable
function guestForm() {
  //provide initial guests data list created from GuestManagement class
  let guests = guestList // guests is a class variable (store data same as guestList)

  // 1. register event for searching and adding
  function registerEventHandling() {
    const addButtonEle = document.getElementById('add-guest-btn')
    const searchinputEle = document.getElementById('search-input')
    searchinputEle.addEventListener('keyup', (event) => {
      searchGuest(event); // call function
    })
    addButtonEle.addEventListener('click', () => {
      console.log('click')
      addGuest.call(this)
    })
  }

  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {
    const areaEle = document.getElementById('display-area');
    const html = `<div>
        <span>firstname lastname</span>
        <span class="remove-icon" id="firstname-lastname" style="cursor:pointer;color:red">[X]</span>
      <div>
    `
    insertAdjacentHTML('beforeend', html)
  }

  /* 2. Function to display one guest in the display area
 function displayGuest(guestItem) {
  let dispArea = document.getElementById('display-area')
  let newDiv = document.createElement('div')
  let span1 = document.createElement("span")
  span1.textContent = `${guestItem.firstname} ${guestItem.lastname}`
  let span2 = document.createElement("span")
  span2.setAttribute("class", "remove-icon")
  span2.setAttribute("id", `${guestItem.firstname}-${guestItem.lastname}`)
  span2.style.cursor = "pointer"
  span2.style.color = "red"
  span2.textContent = '[X]'
  span2.addEventListener("click", removeGuest)
  newDiv.appendChild(span1)
  newDiv.appendChild(span2)
  dispArea.appendChild(newDiv)
}
*/

  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) { // guestResult is a array of guest
    // clear div (disply-area)
    const divEle = document.getElementById('display-area');
    divEle.innerHTML = ''
    // for loop guestResult
    for (let i = 0; i < guestResult.length; i++) {
      const element = guestResult[i];
      // call function display displayGuest(guestItem)
      displayGuest(element)
    }

  }

  // DONE 4. Function to search and display matching guests
  function searchGuest(event) {
    //console.log(event.target.value);
    const guest_found_arr = guests.searchGuests(event.target.value);
    displayGuests(guest_found_arr);
  }

  // 5. Function to add a new guest
  function addGuest() {
    let firstname = document.getElementById('firstname-input')
    let lastname = document.getElementById('lastname-input')
    guests.addNewGuest(firstname, lastname)
    let newGuest = guests.getAllGuests().find(guest => (guest.firstname === firstname && guest.lastname === lastname))
    displayGuest(newGuest)
    firstname.value = ''
    lastname.value = ''
  }

  // 6. Function to remove a guest
  function removeGuest(event) {
    let xMark = event.target
    let div = xMark.parentElement
    let fullname = xMark.previousSibling.textContent.split(" ")
    let toBeRemoved = guests.getAllGuests().find(guest => guest.firstname === fullname[0] && guest.lastname === fullname[1])
    div.remove()
    guests.removeGuest(toBeRemoved)
  }

  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest
  }
}
//module.exports = guestForm
export { guestForm }
const { registerEventHandling, displayGuests } = guestForm()
registerEventHandling()
displayGuests(guestList.getAllGuests())
