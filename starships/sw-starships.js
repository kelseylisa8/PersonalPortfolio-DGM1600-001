import { starships } from "../data/starships.js";

const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')
const shipView = document.querySelector('.displaySection')

function populateNav(starships) {
    starships.forEach(starship => {
        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'
        let listItem = document.createElement('li')
        listItem.textContent = starship.name
        anchorWrap.addEventListener('click', () => {
            populateShipView(starship)
        })

        anchorWrap.appendChild(listItem)
        navList.appendChild(listItem)
    })
}

populateNav(starships)

function populateShipView(shipData) {
    let shipImage = document.createElement('img')
    shipImage.src = `https://starwars-visualguide.com/assests/img/starships/15.jpg`
    shipView.appendChild(shipImage)
}