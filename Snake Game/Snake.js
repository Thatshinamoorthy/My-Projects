const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 400;

const snake = [{ x: 200, y: 200 }];
let direction = 'RIGHT';
let food = getRandomFoodPosition();
let gameOver = false;

document.addEventListener('keydown', changeDirection);

function gameLoop() {
    if (gameOver) return;
    setTimeout(() => {
        clearCanvas();
        drawFood();
        moveSnake();
        drawSnake();
        if (checkCollision()) {
            gameOver = true;
            alert('Game Over!');
        } else {
            gameLoop();
        }
    }, 100);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
    snake.forEach(part => {
        ctx.fillStyle = 'green';
        ctx.fillRect(part.x, part.y, 20, 20);
        ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(part.x, part.y, 20, 20);
    });
}

function moveSnake() {
    const head = { x: snake[0].x, y: snake[0].y };
    if (direction === 'UP') head.y -= 20;
    if (direction === 'DOWN') head.y += 20;
    if (direction === 'LEFT') head.x -= 20;
    if (direction === 'RIGHT') head.x += 20;
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        food = getRandomFoodPosition();
    } else {
        snake.pop();
    }
}

function changeDirection(event) {
    const key = event.keyCode;
    if (key === 37 && direction !== 'RIGHT') direction = 'LEFT';
    if (key === 38 && direction !== 'DOWN') direction = 'UP';
    if (key === 39 && direction !== 'LEFT') direction = 'RIGHT';
    if (key === 40 && direction !== 'UP') direction = 'DOWN';
}

function getRandomFoodPosition() {
    const randomX = Math.floor(Math.random() * canvas.width / 20) * 20;
    const randomY = Math.floor(Math.random() * canvas.height / 20) * 20;
    return { x: randomX, y: randomY };
}

function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, 20, 20);
    ctx.strokeStyle = 'darkred';
    ctx.strokeRect(food.x, food.y, 20, 20);
}

function checkCollision() {
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true;
    }
    return (
        snake[0].x < 0 || snake[0].x >= canvas.width ||
        snake[0].y < 0 || snake[0].y >= canvas.height
    );
}

gameLoop();
