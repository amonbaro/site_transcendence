import { GameArea } from '../scenes/gameArea.js';
import { Paddle } from '../scenes/paddle.js';
import { Ball } from '../scenes/ball.js';
import { setupControls } from '../scenes/controls.js';
import { Score } from '../scenes/score.js';
import { waitForKeyPress } from '../scenes/assets.js';
import { map1 } from '../scenes/maps/VS.js';
import { map2 } from '../scenes/maps/VS.js';
import { map3 } from '../scenes/maps/VS.js';
import { map4 } from '../scenes/maps/VS.js';

export class Versus {

    constructor(canvas, playerNames, key, ctx, font, maxScore, paddleSpeed, paddleSize, bounceMode, ballSpeed, ballAcceleration, numBalls, map) {
        this.gameArea = new GameArea(800, 600, canvas);
        this.playerNames = playerNames;
        this.key = key;
        this.ctx = ctx;
        this.isGameOver = false;
        this.paddles = [];
        this.balls = [];
        this.bricks = [];
        this.bricks = [];
        this.bricksX = 60;
        this.bricksY = 60;

        
        let team1Names = `${playerNames[0]}`;
        let team2Names = `${playerNames[1]}`;
        if (playerNames.length == 4) {
            team1Names = `${playerNames[0]} & ${playerNames[1]}`;
            team2Names = `${playerNames[2]} & ${playerNames[3]}`;
        }

        this.score = new Score(ctx, font, this.gameArea, team1Names, team2Names);

        this.gameTitle = "Versus Mode"
        this.gameSubtitle = "FirstKey to ";
        this.maxScore = maxScore - 1;
        this.walls = {
            top: 'bounce',
            bottom: 'bounce',
            left: 'pass',
            right: 'pass'
        };

        if (map == 1)
            this.bricks = [];
        else if (map == 2)
            this.bricks = map1(this.gameArea, this.bricksX, this.bricksY);
        else if (map == 3)
            this.bricks = map2(this.gameArea, this.bricksX, this.bricksY);
        else if (map == 4)
            this.bricks = map3(this.gameArea, this.bricksX, this.bricksY);
        else if (map == 5)
            this.bricks = map4(this.gameArea, this.bricksX, this.bricksY);

        this.initPaddles(playerNames, paddleSize, paddleSpeed);
        this.initBalls(numBalls, ballSpeed, bounceMode, ballAcceleration);
        this.main();
    }

    initPaddles(playerNames, paddleSize, paddleSpeed) {
        const positions = [
            { x: this.gameArea.gameX + 10, y: this.gameArea.gameY + (this.gameArea.gameHeight - paddleSize) / 2 },
            { x: this.gameArea.gameX + this.gameArea.gameWidth - 20, y: this.gameArea.gameY + (this.gameArea.gameHeight - paddleSize) / 2 },
            { x: this.gameArea.gameX + 30, y: this.gameArea.gameY + (this.gameArea.gameHeight - paddleSize) / 2 },
            { x: this.gameArea.gameX + this.gameArea.gameWidth - 40, y: this.gameArea.gameY + (this.gameArea.gameHeight - paddleSize) / 2 }
        ];

        for (let i = 0; i < playerNames.length; i++) {
            const pos = positions[i];
            this.paddles.push(new Paddle(pos.x, pos.y, paddleSize / 10, paddleSize, 'white', paddleSpeed, 'vertical'));
        }
    }

    initBalls(numBalls, ballSpeed, bounceMode, ballAcceleration) {
        const centerX = this.gameArea.gameX + this.gameArea.gameWidth / 2;
        const centerY = this.gameArea.gameY + this.gameArea.gameHeight / 2;
        const spacing = 15; // Espace entre les balles

        for (let i = 0; i < numBalls; i++) {
            const yOffset = Math.pow(-1, i) * Math.ceil(i / 2) * spacing;
            this.balls.push(new Ball(centerX, centerY + yOffset, 10, 'white', ballSpeed, bounceMode, ballAcceleration, yOffset, this.walls));
        }
    }

    main() {
        if (this.playerNames.length == 4) 
            setupControls(this.key, 2, ...this.paddles);
        else
            setupControls(this.key, 1, ...this.paddles);

        this.resetPaddles();

        this.isGameOver = false;

        const directions = [
            { x: 1, y: 0.5 },
            { x: 1, y: -0.5 },
            { x: -1, y: 0.5 },
            { x: -1, y: -0.5 }
        ];

        this.gameArea.clear(this.ctx);
        this.gameArea.draw(this.ctx);
        this.drawAllPaddles();
        this.bricks.forEach(brick => brick.draw(this.ctx));
        this.score.drawTitle(this.gameTitle);
        this.score.drawSubtitle(this.gameSubtitle, this.maxScore + 1);
        this.score.drawScore();

        setTimeout(() => {
            this.score.drawFlat("Press any key to start.", 30, 'white', 'center', this.ctx.canvas.width / 2, this.ctx.canvas.width / 2)
            waitForKeyPress(() => {
                this.balls.forEach(ball => ball.spawn(this.gameArea, directions));
                this.loop();
            });
        }, 1000);
    }

    loop() {
        if (this.isGameOver) {
            return;  // Arrêter la boucle de jeu
        }
        this.gameArea.clear(this.ctx);

        this.balls.forEach(ball => {
            if (ball.x < this.gameArea.gameX) {
                this.score.incrementPlayer2Score();
                const directions = [
                    { x: 1, y: 0.5 },
                    { x: 1, y: -0.5 }
                ];
                ball.spawn(this.gameArea, directions);
            } else if (ball.x + ball.size > this.gameArea.gameX + this.gameArea.gameWidth) {
                this.score.incrementPlayer1Score();
                const directions = [
                    { x: -1, y: 0.5 },
                    { x: -1, y: -0.5 }
                ];
                ball.spawn(this.gameArea, directions);
            }

            ball.move(this.gameArea, this.paddles, this.bricks);
        });

        this.moveAllPaddles();
        this.gameArea.draw(this.ctx);
        this.drawAllPaddles();
        this.balls.forEach(ball => ball.draw(this.ctx));
        this.bricks.forEach(brick => brick.draw(this.ctx));
        this.game_over_screen();
        this.score.drawTitle(this.gameTitle);
        this.score.drawSubtitle(this.gameSubtitle, this.maxScore + 1);
        this.score.drawScore();
        requestAnimationFrame(this.loop.bind(this));
    }

    resetPaddles() {
        this.paddles.forEach(paddle => paddle.resetPosition());
    }

    moveAllPaddles() {
        this.paddles.forEach(paddle => paddle.move(this.gameArea));
    }

    drawAllPaddles() {
        this.paddles.forEach(paddle => paddle.draw(this.ctx));
    }

    game_over_screen() {
        if (this.score.player1Score > this.maxScore) {
            this.isGameOver = true;
            this.score.drawEnd(1);
        } else if (this.score.player2Score > this.maxScore) {
            this.isGameOver = true;
            this.score.drawEnd(2);
        }
    }
}
