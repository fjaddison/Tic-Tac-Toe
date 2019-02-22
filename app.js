console.log("testing...");

/* 
values for HTML elements related to the player turn, all 
of the game squares with same class, and the grid as a whole
*/
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

// event listener for each square to deal with click event
gameSquares.forEach(function(x) {
    x.addEventListener('click', function() {
        if (playerTurn.innerHTML === 'X' && x.style.backgroundColor == '') {
            x.style.backgroundColor = 'pink';
            x.innerHTML = 'X';
            playerTurn.innerHTML = 'O';
        } if (playerTurn.innerHTML === 'O' && x.style.backgroundColor == '') {
            x.style.backgroundColor = 'red';
            x.innerHTML = 'O';
            playerTurn.innerHTML = 'X';
        }
    });
});

/* 
functions to check if rows, columns, or 
diagonal arrays are all X or O
*/
function isRed(x) {
    return x.style.backgroundColor == 'red';
}

function isPink(x) {
    return x.style.backgroundColor == 'pink';
}

// event listener to check if game is over after each turn
gameGrid.addEventListener('click', function() {
    if (rowOneArray.every(isRed)) {
        console.log('they be red')
    }
})
