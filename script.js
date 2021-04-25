var canvas = document.getElementById("snake");
var context = canvas.getContext ("2d");
var box = 32; 
var snake = [];

snake[0] = {
    x: 8 * box,
    y: 8 * box
}

var direction = "right";

// variável para criar a comida
let food =  {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

//função de criar o box (caixa) onde fica a cobrinha 
function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

// função de criar cobrinha
function criarCobrinha() {
    for(i= 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);

    }
}
// função de criar a comida da cobrinha
function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box)
}

// Quando o evento acontece, detecta e chama a função (para criar um evento para o movimento da cobra para direita, pra cima, pra esquerda, para baixo)
document.addEventListener('keydown', update);

function update (event){
    if(event.keyCode == 37 && direction != 'right') direction = 'left';
    if(event.keyCode == 38 && direction != 'down') direction = 'up';
    if(event.keyCode == 39 && direction != 'left') direction = 'right';
    if(event.keyCode == 40 && direction != 'up') direction = 'down';
}
 
// função para iniciar o jogo da cobrinha
function iniciarJogo(){
     if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
     if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
     if(snake[0].y > 15 * box && direction == "down") sake[0].y = 0;
     if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;

     // quando a cabeça encosta no rabinho o jogo termina

     for(i = 1; i < snake.length; i++){
         if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
             clearInterval(jogo);
             alert('Game Over \u{1F62D}');
             
         }
     }

    // aqui chama as funções
    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x; // variável no eixo x
    let snakeY = snake[0].y; // variável no eixo y

    if(direction == "right") snakeX += box; //
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){

        snake.pop(); // O pop tira o ultimo elemento da lista

    }else{

       food.x = Math.floor(Math.random() * 15 + 1) * box;
       food.y = Math.floor(Math.random() * 15 + 1) * box;

    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead); // o método unshift adiciona o primeiro quadrinho da cobra
}

var jogo = setInterval(iniciarJogo, 100);
