let titleHeader = document.getElementById('title')
let displayTimer = document.getElementById('result')

function changeText() {
    let i = 'Browser Object Model'
    if (titleHeader.textContent == i) {
        setTimeout(() => {
            titleHeader.textContent = 'B O M'
        }, 3000)
    } else {
        titleHeader.textContent = i
    }
}
function startTimer() {
    let start = 0
    let end = 10
    let interval = setInterval(() => {
        displayTimer.textContent = start;
        start++;
        if (start > end) {
            clearInterval(interval);
        }
    }, 1000);
}

function reditectLink() {
    window.location.href = 'https://www.google.com';
}

function backHistory() {
    window.history.back()
}

function nextHistory() {
    window.history.forward()
}