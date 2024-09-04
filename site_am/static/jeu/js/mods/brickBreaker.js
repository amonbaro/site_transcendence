import { GameArea } from '../scenes/gameArea.js';
import { Paddle } from '../scenes/paddle.js';
import { Ball } from '../scenes/ball.js';
import { setupControls } from '../scenes/controls.js';
import { Score } from '../scenes/score.js';
import { waitForKeyPress } from '../scenes/assets.js';
import { map1 } from '../scenes/maps/BB.js';
import { map2 } from '../scenes/maps/BB.js';
import { map3 } from '../scenes/maps/BB.js';
import { map4 } from '../scenes/maps/BB.js';
import { map5 } from '../scenes/maps/BB.js';

export class BrickBreaker {

    constructor(canvas, playerNames, key, ctx, font, maxScore, paddleSpeed, paddleSize, bounceMode, ballSpeed, ballAcceleration, numBalls, map) {
        this.gameArea = new GameArea(400, 700, canvas, -250);
        this.gameArea2 = new GameArea(400, 700, canvas, 250);
        this.playerNames = playerNames;
        this.key = key;
        this.ctx = ctx;
        this.isGameOver = false;
        this.paddles = [];
        this.balls = [];
        this.balls2 = [];
        this.bricks = [];
        this.bricks2 = [];
        this.bricksX = 50;
        this.bricksY = 20;

        
        let team1Names = `${playerNames[0]}`;
        let team2Names = `${playerNames[1]}`;
        if (playerNames.length == 4) {
            team1Names = `${playerNames[0]} & ${playerNames[1]}`;
            team2Names = `${playerNames[2]} & ${playerNames[3]}`;
        }

        this.score = new Score(ctx, font, this.gameArea, team1Names, team2Names);

        this.gameTitle = "Brick Breaker Mode"
        this.gameSubtitle = "First to ";

        if (map == 1) {
            this.bricks = map1(this.gameArea, this.bricksX, this.bricksY);
            this.bricks2 = map1(this.gameArea2, this.bricksX, this.bricksY);
        }
        else if (map == 2) {
            this.bricks = map2(this.gameArea, this.bricksX, this.bricksY);
            this.bricks2 = map2(this.gameArea2, this.bricksX, this.bricksY);
        }
        else if (map == 3) {
            this.bricks = map3(this.gameArea, this.bricksX, this.bricksY);
            this.bricks2 = map3(this.gameArea2, this.bricksX, this.bricksY);
        }
        else if (map == 4) {
            this.bricks = map4(this.gameArea, this.bricksX, this.bricksY);
            this.bricks2 = map4(this.gameArea2, this.bricksX, this.bricksY);
        }
        else if (map == 5) {
            this.bricks = map5(this.gameArea, this.bricksX, this.bricksY);
            this.bricks2 = map5(this.gameArea2, this.bricksX, this.bricksY);
        }

        this.maxScore = this.bricks.length - 1;
        this.walls = {
            top: 'bounce',
            bottom: 'pass',
            left: 'bounce',
            right: 'bounce'
        };

        this.initPaddles(playerNames, paddleSize, paddleSpeed);
        this.initBalls(numBalls, ballSpeed, bounceMode, ballAcceleration);
        this.main();
    }

    initPaddles(playerNames, paddleSize, paddleSpeed) {
        const positions = [
            { x: this.gameArea.gameX + (this.gameArea.gameWidth - paddleSize) / 2, y: this.gameArea.gameY + this.gameArea.gameHeight - 20 },
            { x: this.gameArea2.gameX + (this.gameArea2.gameWidth - paddleSize) / 2, y: this.gameArea2.gameY + this.gameArea2.gameHeight - 20 },
            { x: this.gameArea.gameX + (this.gameArea.gameWidth - paddleSize) / 2, y: this.gameArea.gameY + this.gameArea.gameHeight - 40 },
            { x: this.gameArea2.gameX + (this.gameArea2.gameWidth - paddleSize) / 2, y: this.gameArea2.gameY + this.gameArea2.gameHeight - 40 },
        ];

        for (let i = 0; i < playerNames.length; i++) {
            const pos = positions[i];
            this.paddles.push(new Paddle(pos.x, pos.y, paddleSize / 10, paddleSize, 'white', paddleSpeed, 'horizontal'));
        }
    }

    initBalls(numBalls, ballSpeed, bounceMode, ballAcceleration) {
        const centerX = this.gameArea.gameX + this.gameArea.gameWidth / 2;
        const centerY = this.gameArea.gameY + this.gameArea.gameHeight / 2;
        const centerX2 = this.gameArea2.gameX + this.gameArea2.gameWidth / 2;
        const centerY2 = this.gameArea2.gameY + this.gameArea2.gameHeight / 2;
        const spacing = 15; // Espace entre les balles

        for (let i = 0; i < numBalls; i++) {
            const yOffset = Math.pow(-1, i) * Math.ceil(i / 2) * spacing;
            this.balls.push(new Ball(centerX, centerY + yOffset, 10, 'white', ballSpeed, bounceMode, ballAcceleration, yOffset, this.walls));
            this.balls2.push(new Ball(centerX2, centerY2 + yOffset, 10, 'white', ballSpeed, bounceMode, ballAcceleration, yOffset, this.walls));
        }
    }

    main() {
        setupControls(this.key, 2, ...this.paddles);

        this.resetPaddles();

        this.isGameOver = false;

        const directions = [
            { x: 0.5, y: 1 },
            { x: -0.5, y: 1 },
        ];

        this.gameArea.clear(this.ctx);
        this.gameArea2.clear(this.ctx);
        this.gameArea.draw(this.ctx);
        this.gameArea2.draw(this.ctx);
        this.drawAllPaddles();
        this.bricks.forEach(brick => brick.draw(this.ctx));
        this.bricks2.forEach(brick => brick.draw(this.ctx));
        this.score.drawTitle(this.gameTitle);
        this.score.drawSubtitle(this.gameSubtitle, this.maxScore + 1);
        this.score.drawScore();

        setTimeout(() => {
            this.score.drawFlat("Press any key to start.", 30, 'white', 'center', this.ctx.canvas.width / 2, this.ctx.canvas.width / 2)
            waitForKeyPress(() => {
                this.balls.forEach(ball => ball.spawn(this.gameArea, directions));
                this.balls2.forEach(ball => ball.spawn(this.gameArea2, directions));
                this.loop();
            });
        }, 1000);
    }

    loop() {
        if (this.isGameOver) {
            return;  // Arrêter la boucle de jeu
        }
        this.gameArea.clear(this.ctx);
        this.gameArea2.clear(this.ctx);

        this.balls.forEach(ball => {
            if (ball.y + ball.size > this.gameArea.gameY + this.gameArea.gameHeight) {
                this.score.incrementPlayer2Score();
                this.score.incrementPlayer2Score();
                this.score.incrementPlayer2Score();
                const directions = [
                    { x: 0.5, y: 1 },
                    { x: -0.5, y: 1 },
                ];
                ball.spawn(this.gameArea, directions);
            }
            if (ball.move(this.gameArea, this.paddles, this.bricks))
                this.score.incrementPlayer1Score();
               
        });

        this.balls2.forEach(ball => {
            if (ball.y + ball.size > this.gameArea2.gameY + this.gameArea2.gameHeight) {
                this.score.incrementPlayer1Score();
                this.score.incrementPlayer1Score();
                this.score.incrementPlayer1Score();
                const directions = [
                    { x: 0.5, y: 1 },
                    { x: -0.5, y: 1 },
                ];
                ball.spawn(this.gameArea2, directions);
            }
            if (ball.move(this.gameArea2, this.paddles, this.bricks2))
                this.score.incrementPlayer2Score(); 
        });

        this.moveAllPaddles();
        this.gameArea.draw(this.ctx);
        this.gameArea2.draw(this.ctx);
        this.drawAllPaddles();
        this.balls.forEach(ball => ball.draw(this.ctx));
        this.balls2.forEach(ball => ball.draw(this.ctx));
        this.bricks.forEach(brick => brick.draw(this.ctx));
        this.bricks2.forEach(brick => brick.draw(this.ctx));
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
        this.paddles.forEach((paddle, index) => {
            if (index % 2 === 0) {
                paddle.move(this.gameArea);
            } else {
                paddle.move(this.gameArea2);
            }
        });
        
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
