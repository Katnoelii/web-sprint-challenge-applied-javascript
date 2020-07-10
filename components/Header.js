// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
let headerContainer = document.querySelector('.header-container')

function Header() {

    const head = document.createElement('div')
    const date = document.createElement('span')
    const title = document.createElement('h1')
    const temp = document.createElement('span')

    head.className = "header"
    date.className = "date"
    temp.className = "temp"

    head.appendChild(date)
    head.appendChild(title)
    head.appendChild(temp)

    date.textContent = "July 10, 2020"
    title.textContent = "Lambda Times"
    temp.textContent = "98°"
    
    return head
}

headerContainer.appendChild(Header());
