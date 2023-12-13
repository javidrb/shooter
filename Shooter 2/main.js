const OPPONENT_HEIGHT = 5,
    OPPONENT_PICTURE = "assets/tenor.gif",
    OPPONENT_PICTURE_DEAD = "assets/muertob.gif",
    OPPONENT_SPEED = 5,
    OPPONENT_WIDTH = 5,
    GAME_OVER_PICTURE = "assets/game_over.png",
    KEY_LEFT = "LEFT",
    KEY_RIGHT = "RIGHT",
    KEY_SHOOT = "SHOOT",
    MIN_TOUCHMOVE = 20,
    PLAYER_HEIGHT = 5,
    PLAYER_PICTURE = "assets/homer-simpson-the-simpsons.gif",
    PLAYER_PICTURE_DEAD = "assets/muertos.png ",
    PLAYER_SPEED = 20,
    PLAYER_WIDTH = 5,
    SHOT_HEIGHT = 1.5,
    SHOT_SPEED = 20,
    SHOT_PICTURE_PLAYER = "assets/donut-yummy.gif",
    SHOT_PICTURE_OPPONENT = "assets/pack591.png",
    SHOT_WIDTH = 1.5,
    PLAYER_INITIAL_LIVES = 3; // Nuevo atributo para el número inicial de vidas del jugador
    ;
      

function getRandomNumber(range) {
    return Math.floor(Math.random() * range);
}

function collision(div1, div2) {
    const a = div1.getBoundingClientRect(),
        b = div2.getBoundingClientRect();
    return !(a.bottom < b.top || a.top > b.bottom || a.right < b.left || a.left > b.right);
}

var game;

document.addEventListener("DOMContentLoaded", () => {
    game = new Game();

    // Inicializar el número de vidas del jugador
    Player.prototype.lives = PLAYER_INITIAL_LIVES;

    game.start();
});
