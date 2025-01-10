const gameBoard = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score');
const boardSize = 20;
let snake = [{x: 10, y: 10}];
let direction = {x: 0, y: 0};
let apple = {x: 0, y: 5};
let bonusApple = null;
let score = 0;
let applesEaten = 0;
let bonusAppleTimer;
let sizeChangeInterval;

function createBoard() {
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            const div = document.createElement('div');
            div.style.width = `${400 / boardSize}px`;
            div.style.height = `${400 / boardSize}px`;
            gameBoard.appendChild(div);
        }
    }
}

function drawSnake() {
    gameBoard.querySelectorAll('.snake').forEach(cell => cell.classList.remove('snake'));
    snake.forEach(segment => {
        const index = segment.y * boardSize + segment.x;
        gameBoard.children[index].classList.add('snake');
    });
}

function drawApple() {
    const appleIndex = apple.y * boardSize + apple.x;
    gameBoard.children[appleIndex].classList.add('apple');
}

function drawBonusApple() {
    if (bonusApple) {
        const bonusAppleIndex = bonusApple.y * boardSize + bonusApple.x;
        const bonusAppleCell = gameBoard.children[bonusAppleIndex];
        bonusAppleCell.classList.add('bonus-apple');
        
        let sizeState = 0; // 0 = small, 1 = medium, 2 = large
        const sizeClasses = ['bonus-apple-small', 'bonus-apple-medium', 'bonus-apple-large'];

        // Change size sequentially
        sizeChangeInterval = setInterval(() => {
            bonusAppleCell.classList.remove(...sizeClasses);
            sizeState = (sizeState + 1) % sizeClasses.length;
            bonusAppleCell.classList.add(sizeClasses[sizeState]);
        }, 1000);
    }
}

function clearBonusApple() {
    if (bonusApple) {
        const bonusAppleIndex = bonusApple.y * boardSize + bonusApple.x;
        gameBoard.children[bonusAppleIndex].classList.remove('bonus-apple', 'bonus-apple-small', 'bonus-apple-medium', 'bonus-apple-large');
    }
    clearInterval(sizeChangeInterval); // Ensure size change stops
}

function clearApple() {
    gameBoard.querySelectorAll('.apple').forEach(cell => cell.classList.remove('apple'));
    clearBonusApple();
}

function isCollision(position) {
    for (let segment of snake) {
        if (segment.x === position.x && segment.y === position.y) {
            return true;
        }
    }
    return false;
}

function getRandomPosition() {
    let position;
    do {
        position = {x: Math.floor(Math.random() * boardSize), y: Math.floor(Math.random() * boardSize)};
    } while (isCollision(position));
    return position;
}

function moveSnake() {
    const newHead = {x: snake[0].x + direction.x, y: snake[0].y + direction.y};

    // Check for wall collision
    if (newHead.x < 0 || newHead.x >= boardSize || newHead.y < 0 || newHead.y >= boardSize || isCollision(newHead)) {
        alert("Game Over! Your score: " + score);
        resetGame();
        return;
    }

    snake.unshift(newHead);
    if (newHead.x === apple.x && newHead.y === apple.y) {
        score++;
        applesEaten++;
        scoreDisplay.textContent = `Score: ${score}`;
        clearApple();
        apple = getRandomPosition();
        if (applesEaten % 5 === 0) {
            bonusApple = getRandomPosition();
            startBonusAppleTimer();
        } else {
            bonusApple = null;
        }
    } else if (bonusApple && newHead.x === bonusApple.x && newHead.y === bonusApple.y) {
        score += 5;
        scoreDisplay.textContent = `Score: ${score}`;
        clearApple();
        clearTimeout(bonusAppleTimer);
        bonusApple = null;
    } else {
        snake.pop();
    }
}

function startBonusAppleTimer() {
    clearTimeout(bonusAppleTimer);
    clearInterval(sizeChangeInterval);

    bonusAppleTimer = setTimeout(() => {
        clearBonusApple();
    })
}
document.addEventListener('DOMContentLoaded', function() {
    // Your game initialization code here
});