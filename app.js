console.log("testing...");

/* values for HTML elements related to the player turn, all 
of the game squares with same class, and the grid as a whole */
const gameSquares = document.querySelectorAll('.game-square');
const playerTurn = document.querySelector('.player-turn');
const gameGrid = document.querySelector('.game-grid');

// values for each individual square, row, column, and diagonal
const sqOne = document.getElementById('s1');
const sqTwo = document.getElementById('s2');
const sqThree = document.getElementById('s3');
const sqFour = document.getElementById('s4');
const sqFive = document.getElementById('s5');
const sqSix = document.getElementById('s6');
const sqSeven = document.getElementById('s7');
const sqEight = document.getElementById('s8');
const sqNine = document.getElementById('s9');

const rowOneArray = [sqOne, sqTwo, sqThree];
const rowTwoArray = [sqFour, sqFive, sqSix];
const rowThreeArray = [sqSeven, sqEight, sqNine];

const colOneArray = [sqOne, sqFour, sqSeven];
const colTwoArray = [sqTwo, sqFive, sqEight];
const colThreeArray = [sqThree, sqSix, sqNine];

const diagOne = [sqOne, sqFive, sqNine];
const diagTwo = [sqThree, sqFive, sqSeven];

// turning NodeList into array to make use of the 'every' method
var allSquaresArray = []
gameSquares.forEach(x => allSquaresArray.push(x));
console.log(allSquaresArray);

// event listener for each square to deal with click event
gameSquares.forEach(function(x) {
    x.addEventListener('click', function() {
        if (playerTurn.innerHTML === 'X' && x.innerHTML === '') {
            // x.style.backgroundColor = 'pink';
            x.innerHTML = 'X';
            playerTurn.innerHTML = 'O';
        } if (playerTurn.innerHTML === 'O' && x.innerHTML === '') {
            // x.style.backgroundColor = 'red';
            x.innerHTML = 'O';
            playerTurn.innerHTML = 'X';
        }
    });
});

/* functions to check if rows, columns, or 
diagonal arrays are all X or O */
function isO(x) {
    return x.innerHTML === 'O';
}

function isX(x) {
    return x.innerHTML === 'X';
}

function isFull(x) {
    return x.innerHTML !== '';
}

/* could use a function to call if game is over
so the game can alert the user of a win or draw */
const modal = document.querySelector('.modal');
const message = document.querySelector('.game-message');

function gameOver() {
    modal.classList.toggle('show-modal');
}

// event listener to check if game is over after each turn
gameGrid.addEventListener('click', function() {
    if (rowOneArray.every(isO) ||
        rowTwoArray.every(isO) ||
        rowThreeArray.every(isO) ||
        colOneArray.every(isO) ||
        colTwoArray.every(isO) ||
        colThreeArray.every(isO) ||
        diagOne.every(isO) ||
        diagTwo.every(isO)
    ) {
        console.log('red wins');
        message.innerHTML = 'Player O is the Winner!';
        gameOver();
    } if (
        rowOneArray.every(isX) ||
        rowTwoArray.every(isX) ||
        rowThreeArray.every(isX) ||
        colOneArray.every(isX) ||
        colTwoArray.every(isX) ||
        colThreeArray.every(isX) ||
        diagOne.every(isX) ||
        diagTwo.every(isX)
    ) {
        console.log('pink wins');
        message.innerHTML = 'Player X is the Winner!';
        gameOver();
    } if (allSquaresArray.every(isFull)) {
        gameOver();
        message.innerHTML = "it's a draw!";
    }
});

// constant for button to restart game with event listener to trigger it
const restartButton = document.querySelector('.reset-button');

restartButton.addEventListener('click', function() {
    location.reload();
});
