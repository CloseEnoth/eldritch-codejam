import { ancientsData } from "./data/ancients.js";

console.log(ancientsData);

const ancients = document.querySelector('.ancients__body')

ancients.addEventListener('click', (e) => {
  let img = e.target.closest('img')
  if (!img) return
  console.log(img)
  highlight(img)
})

function highlight(elem) {
  if (elem.dataset.active === 'true') {
    elem.dataset.active = 'false'
    elem.style.border = 'none'
    elem.style.borderRadius = '0px'
    return
  }

  elem.dataset.active = 'true'
  elem.classList.toggle('highlight')
  elem.style.border = '5px solid red'
  elem.style.borderRadius = '5px'
}

function pickGod(godArr, nameOfGod) {
  return godArr.filter(elem => elem.id === nameOfGod)[0]
}

const azathoth = pickGod(ancientsData, 'azathoth')

function numOfColorCard(god, colorCard) {
  let totalCardNumber = 0
  let stagesArr = []

  for (let elem in god) {
    if (elem.slice(-5) === 'Stage') {
      stagesArr.push(god[`${elem}`])
    }
  }

  totalCardNumber = stagesArr.reduce((sum, elem) => sum += elem[colorCard], 0)

  return totalCardNumber
}

const azathothCards = {
  green: numOfColorCard(azathoth, 'greenCards'),
  brown: numOfColorCard(azathoth, 'brownCards'),
  blue: numOfColorCard(azathoth, 'blueCards'),
}


console.log(azathoth)
console.log(azathothCards)

import { greenCards } from './data/mythicCards/green/index.js';
console.log(greenCards)
import { brownCards } from './data/mythicCards/brown/index.js';
console.log(brownCards)
import { blueCards } from './data/mythicCards/blue/index.js';
console.log(blueCards)

function random(arrCards, neededNumber, arr, counter) {
  
  while(counter < neededNumber) {
    let randomNum = randomNumFromZeroToNum(arrCards.length)
    
    if (arr.includes(randomNum)) {
      random(arrCards, neededNumber, arr, counter)
      return
    }
    arr.push(randomNum)
    counter++
  }
}

function randomNumFromZeroToNum(num) {
  return Math.floor(Math.random() * num)
}


// green
let greenCounter = 0
let greenArr = []
random( greenCards, azathothCards['green'], greenArr, greenCounter)
console.log(greenArr)
const srcGreenCardsArr = []
greenArr.forEach(el => {
  srcGreenCardsArr.push( greenCards[el].cardFace )
})
console.log(srcGreenCardsArr)


//brown
let brownCounter = 0
let brownArr = []
random ( brownCards, azathothCards['brown'], brownArr, brownCounter)
console.log(brownArr)
const srcBrownCardsArr = []
brownArr.forEach(el => {
  srcBrownCardsArr.push( brownCards[el].cardFace )
})
console.log(srcBrownCardsArr)

//blue
let blueCounter = 0
let blueArr = []
random ( blueCards, azathothCards['blue'], blueArr, blueCounter)
console.log(blueArr)
const srcBlueCardsArr = []
blueArr.forEach(el => {
  srcBlueCardsArr.push( blueCards[el].cardFace )
})
console.log(srcBlueCardsArr)


let list = document.querySelector('.difficulty__list')

list.addEventListener('click', (e) => {
  let li = e.target.closest('li'); // (1)

  if (!li) return; // (2)

  highlight(li);
})

function stage(god, greenC, brownC, blueC) {
  let firstStageArr = []
  let secondStageArr = []
  let thirdStageArr = []
  let stagesArray = []

  let copyGreen = greenC.slice()/* .sort( () => Math.random() - 0.5 ) */
  let copyBrown = brownC.slice()/* .sort( () => Math.random() - 0.5 ) */
  let copyBlue = blueC.slice()/* .sort( () => Math.random() - 0.5 ) */

  firstStageArr.push(copyGreen.splice(0, god.firstStage.greenCards).sort(() => Math.random() - 0.5))
  firstStageArr.push(copyBrown.splice(0, god.firstStage.brownCards).sort(() => Math.random() - 0.5))
  firstStageArr.push(copyBlue.splice(0, god.firstStage.blueCards).sort(() => Math.random() - 0.5))
  firstStageArr = firstStageArr.reduce((sum, elem) => sum.concat(elem), [])

  secondStageArr.push(copyGreen.splice(0, god.secondStage.greenCards).sort(() => Math.random() - 0.5))
  secondStageArr.push(copyBrown.splice(0, god.secondStage.brownCards).sort(() => Math.random() - 0.5))
  secondStageArr.push(copyBlue.splice(0, god.secondStage.blueCards).sort(() => Math.random() - 0.5))
  secondStageArr = secondStageArr.reduce((sum, elem) => sum.concat(elem), [])

  thirdStageArr.push(copyGreen.splice(0, god.thirdStage.greenCards).sort(() => Math.random() - 0.5))
  thirdStageArr.push(copyBrown.splice(0, god.thirdStage.brownCards).sort(() => Math.random() - 0.5))
  thirdStageArr.push(copyBlue.splice(0, god.thirdStage.blueCards).sort(() => Math.random() - 0.5))
  thirdStageArr = thirdStageArr.reduce((sum, elem) => sum.concat(elem), [])

  stagesArray.push(firstStageArr, secondStageArr, thirdStageArr)
  return stagesArray
}

let stages = stage(azathoth, srcGreenCardsArr, srcBrownCardsArr, srcBlueCardsArr)
console.log(stages)

const firstStageContainer = document.querySelectorAll('.firstStage ul li')
const secondStageContainer = document.querySelectorAll('.secondStage ul li')
const thirdStageContainer = document.querySelectorAll('.thirdStage ul li')

function initStageStatus(stages) {
  firstStageContainer[0].textContent = stages[0].filter(elem => elem.includes('green')).length
  firstStageContainer[1].textContent = stages[0].filter(elem => elem.includes('brown')).length
  firstStageContainer[2].textContent = stages[0].filter(elem => elem.includes('blue')).length

  secondStageContainer[0].textContent = stages[1].filter(elem => elem.includes('green')).length
  secondStageContainer[1].textContent = stages[1].filter(elem => elem.includes('brown')).length
  secondStageContainer[2].textContent = stages[1].filter(elem => elem.includes('blue')).length

  thirdStageContainer[0].textContent = stages[2].filter(elem => elem.includes('green')).length
  thirdStageContainer[1].textContent = stages[2].filter(elem => elem.includes('brown')).length
  thirdStageContainer[2].textContent = stages[2].filter(elem => elem.includes('blue')).length
}

initStageStatus(stages) 

const currentCard = document.querySelector('.card__current img')

function showCurrentCard(src) {
  currentCard.src = src
}

function pickCard(stages) {
  let firstStage = stages[0]
  let secondStage = stages[1] 
  let thirdStage = stages[2] 

  let firstStageArr = firstStage.reduce((sum, elem) => sum.concat(elem), [])

  if (firstStage.length !== 0) {
    let currentCardNum = randomNumFromZeroToNum(firstStage.length)
    let currentCard = firstStageArr.splice(currentCardNum, 1)
    stages[0] = firstStageArr
    showCurrentCard(currentCard)
    initStageStatus(stages)
  }

  if (firstStage.length === 0) {
    let secondStageArr = secondStage.reduce((sum, elem) => sum.concat(elem), [])
    let secondStageLength = secondStageArr.length

    if (secondStage.length !== 0) {
      let currentCardNum = randomNumFromZeroToNum(secondStage.length)
      let currentCard = secondStageArr.splice(currentCardNum, 1)
      stages[1] = secondStageArr
      showCurrentCard(currentCard)
      initStageStatus(stages)
    }
  }

  if (secondStage.length === 0) {  
    let thirdStageArr = thirdStage.reduce((sum, elem) => sum.concat(elem), [])
    if (thirdStage.length !== 0) {
      let currentCardNum = randomNumFromZeroToNum(thirdStage.length)
      let currentCard = thirdStageArr.splice(currentCardNum, 1)
      stages[2] = thirdStageArr
      showCurrentCard(currentCard)
      initStageStatus(stages)
    }
  }
  
  if (thirdStage.length === 0) {
    alert('карты закончились, обновите страницу))')
  }
}

currentCard.addEventListener('click', () => pickCard(stages))