let currentInput = "0"
let previousInput = ""
let operator = null
let resultDisplayed = false

function updateDisplay() {
  document.getElementById('result').textContent = currentInput
}

function clearDisplay() {
  currentInput = "0"
  previousInput = ""
  operator = null
  resultDisplayed = false
  updateDisplay()
}

function appendNumber(number) {
  if (resultDisplayed) {
    currentInput = number.toString()
    resultDisplayed = false
  } else {
    currentInput = currentInput === "0" ? number.toString() : currentInput + number
  }
  updateDisplay()
}

function appendDot() {
  if (!currentInput.includes('.')) {
    currentInput += '.'
    updateDisplay()
  }
}

function appendOperator(op) {
  if (!operator && previousInput === "") {
    previousInput = currentInput
    operator = op
    currentInput = "0"
  } else if (operator && !resultDisplayed) {
    calculate()
    operator = op
  }
  resultDisplayed = false
}

function calculate() {
  if (operator && previousInput !== "") {
    let result
    const prev = parseFloat(previousInput)
    const current = parseFloat(currentInput)
    
    switch (operator) {
      case '+':
        result = prev + current
        break
      case '−':
        result = prev - current
        break
      case '×':
        result = prev * current
        break
      case '÷':
        result = prev / current
        break
      default:
        return
    }
    
    currentInput = result.toString()
    operator = null
    previousInput = ""
    resultDisplayed = true
    updateDisplay()
  }
}

function toggleSign() {
  currentInput = (parseFloat(currentInput) * -1).toString()
  updateDisplay()
}

function percentage() {
  currentInput = (parseFloat(currentInput) / 100).toString()
  updateDisplay()
}
