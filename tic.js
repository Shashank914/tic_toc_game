const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const restartButton = document.getElementById('restart');

let currentPlayer = 'X';
let gameState = Array(9).fill(null);
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function handleCellClick(event) {
    const index = event.target.getAttribute('data-index');

    if (!gameState[index]) {
        gameState[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        if (checkWin()) {
            alert(`${currentPlayer} wins!`);
            resetGame();
        } else if (gameState.every(cell => cell)) {
            alert("It's a draw!");
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    return winningConditions.some(condition => 
        condition.every(index => gameState[index] === currentPlayer)
    );
}

function resetGame() {
    gameState.fill(null);
    cells.forEach(cell => (cell.textContent = ''));
    currentPlayer = 'X';
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click', resetGame);