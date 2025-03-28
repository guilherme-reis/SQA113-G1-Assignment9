document.getElementById('puzzleForm').addEventListener('submit', function (e) {
    e.preventDefault()
  
    const number = parseInt(document.getElementById('numberInput').value)
    const text = document.getElementById('textInput').value
    const results = document.getElementById('results')
  
    let numberResult = ''
    if (number % 2 === 0) {
      numberResult = `The number ${number} is even. Its square root is ${Math.sqrt(number)}.`
    } else {
      numberResult = `The number ${number} is odd. Its cube is ${Math.pow(number, 3)}.`
    }
  
    const binary = Array.from(text).map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' ')
    const vowelCount = (text.match(/[aeiouAEIOU]/g) || []).length
    const textResult = `Binary: ${binary}<br>Vowel Count: ${vowelCount}`
  
    const secret = Math.floor(Math.random() * 100) + 1
    let attempts = ''
    let guessedCorrectly = false
    for (let i = 1; i <= 5; i++) {
      const guess = Math.floor(Math.random() * 100) + 1
      if (guess === secret) {
        attempts += `Attempt ${i}: ${guess} (Correct!)<br>`
        guessedCorrectly = true
        break
      } else if (guess > secret) {
        attempts += `Attempt ${i}: ${guess} (Too high!)<br>`
      } else {
        attempts += `Attempt ${i}: ${guess} (Too low!)<br>`
      }
    }
    const treasureResult = `The secret number is ${secret}.<br>${attempts}` + (guessedCorrectly ? `You found the treasure in ${attempts.match(/Attempt \d+/g).length} attempts!` : `You did not find the treasure.`)
  
    results.innerHTML = `<h2>Number Puzzle:</h2><p>${numberResult}</p><h2>Text Puzzle:</h2><p>${textResult}</p><h2>Treasure Hunt:</h2><p>${treasureResult}</p>`
  })
  