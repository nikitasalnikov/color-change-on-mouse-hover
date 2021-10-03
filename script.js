const board = document.querySelector('#board');


let squareNumber = 500;
for (let i = 0; i < squareNumber; i++) {
    const square = document.createElement('div');

    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })
    board.appendChild(square);
}

function setColor(element) {
    let colors = ['red', 'yellow', 'green', 'blue', 'grey']
    let color = colors[Math.floor(Math.random() * colors.length)]
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}`

    // const color = 'red';
    // element.style.background = color;
    // element.style.boxShadow = `0 0 2px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}