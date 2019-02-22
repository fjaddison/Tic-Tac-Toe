console.log("testing...");

const gameSquares = document.querySelectorAll('.game-square');
const playerTurn = document.querySelector('.player-turn');

const sqOne = document.getElementById('s1');
const sqTwo = document.getElementById('s2');
const sqThree = document.getElementById('s3');

const gameGrid = document.querySelector('.game-grid');

console.log(playerTurn.innerHTML);
console.log(sqOne);
console.log(sqOne.style.backgroundColor);

const rowOne = document.querySelectorAll('.row-one');
var rowOneArray = [sqOne, sqTwo, sqThree]
// rowOne.forEach(function(x) {
//     rowOneArray.push(x)
// })

console.log(rowOneArray)

gameSquares.forEach(function(x) {
    x.addEventListener('click', function() {
        if (playerTurn.innerHTML === 'X' && x.style.backgroundColor != 'red' && x.style.backgroundColor != 'pink') {
            x.style.backgroundColor = 'pink';
            x.innerHTML = 'X';
            playerTurn.innerHTML = 'O';
        } if (playerTurn.innerHTML === 'O' && x.style.backgroundColor != 'red' && x.style.backgroundColor != 'pink') {
            x.style.backgroundColor = 'red';
            x.innerHTML = 'O';
            playerTurn.innerHTML = 'X';
        }
    });
});

function isRed(x) {
    return x.style.backgroundColor == 'red'
}

gameGrid.addEventListener('click', function() {
    if (rowOneArray.every(isRed)) {
        console.log('they be red')
    }
})
