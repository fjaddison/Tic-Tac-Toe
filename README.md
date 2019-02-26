## Tic Tac Toe Game

This is a quick tic tac toe app developed for fun and to practice HTML, CSS, and JavaScript. Check out the live version [here](https://fjaddison.github.io/Tic-Tac-Toe/).

## Issues

If the last move is a game-winning move (however unlikely that is), nothing happens. The problem is the function that determines a draw is called with this move, preventing the modal from popping up. The function needs to be altered so that it can prepare for this scenario.