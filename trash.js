
/* currentCard.addEventListener('click', () => showCurrentCard(src)) */
/* function pickCard(stages) {
  // переписать на цикл
  let counter = stages[0].reduce((sum, current) => sum + current.length, 0)
  if (counter === 0) {
    counter = stages[1].reduce((sum, current) => sum + current.length, 0)
    if (counter === 0) {
      counter = stages[2].reduce((sum, current) => sum + current.length, 0)
      if (counter === 0) return done
    }
  }

  if ()
  console.log(`counter = ${counter}`)
  let activeStageArr = stages[0].reduce((sum, elem) => sum.concat(elem), [])
  console.log(`active arr = ${activeStageArr}`)
  let pickedCard = activeStageArr.splice(0, 1)
  showCurrentCard(pickedCard)
  
  console.log(pickedCard)
  console.log(activeStageArr)
} */

/* pickCard(stages) */

/* function pickCard(stages) {
  let counter = 0

  while (counter < 3) {
    let workingArr = stages[counter] // [ [green], [brown], [blue] ]
    let workingLength = workingArr.reduce((sum, elem) => sum.concat(elem), []).length // length g+br+bl

    let innerCounter = 0 
    while (innerCounter < workingLength) {
      
      innerCounter++
    }




    counter++
  }
} */