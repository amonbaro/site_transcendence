import { GameArea } from '../scenes/gameArea.js';
import { Paddle } from '../scenes/paddle.js';
import { Ball } from '../scenes/ball.js';
import { setupControls } from '../scenes/controls.js';
import { Score } from '../scenes/score.js';
import { waitForKeyPress } from '../scenes/assets.js';
import { map1 } from '../scenes/maps/LMS.js';
import { map2 } from '../scenes/maps/LMS.js';
import { map3 } from '../scenes/maps/LMS.js';
import { map4 } from '../scenes/maps/LMS.js';

export class LastManStanding {

    constructor(canvas, playerNames, key, ctx, font, maxScore, paddleSpeed, paddleSize, bounceMode, ballSpeed, ballAcceleration, numBalls, map) {
        this.gameArea = new GameArea(700, 700, canvas);
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

        this.player1Name = `${playerNames[0]}`;
        this.player2Name = `${playerNames[1]}`;
        this.player3Name = playerNames[2] ? `${playerNames[2]}` : '';
        this.player4Name = playerNames[3] ? `${playerNames[3]}` : '';

        this.player1Score = maxScore;
        this.player2Score = maxScore;
        this.player3Score = playerNames[2] ? maxScore : null;
        this.player4Score = playerNames[3] ? maxScore : null;

        this.isThereAPlayer3 = playerNames[2] ? true : false;
        this.isThereAPlayer4 = playerNames[3] ? true : false;


        this.initWalls(playerNames.length);

        this.score = new Score(ctx, font, this.gameArea, `${playerNames[0]}`, `${playerNames[1]}`, `${playerNames[2]}`, `${playerNames[3]}`);

        this.gameTitle = "Last Man Standing Mode"
        this.gameSubtitle = "Number of lives : ";
        this.maxScore = maxScore - 1;

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

    initWalls(numPlayers) {
        this.walls = {
            top: numPlayers >= 3 ? 'pass' : 'bounce',
            bottom: numPlayers >= 4 ? 'pass' : 'bounce',
            left: 'pass',
            right: 'pass'
        };
    }

    initPaddles(playerNames, paddleSize, paddleSpeed) {
        const positions = [
            { x: this.gameArea.gameX + 10, y: this.gameArea.gameY + (this.gameArea.gameHeight - paddleSize) / 2, angle: 'vertical' },
            { x: this.gameArea.gameX + this.gameArea.gameWidth - 20, y: this.gameArea.gameY + (this.gameArea.gameHeight - paddleSize) / 2, angle: 'vertical' },
            { x: this.gameArea.gameX + (this.gameArea.gameWidth - paddleSize) / 2, y: this.gameArea.gameY + 10, angle: 'horizontal' },
            { x: this.gameArea.gameX + (this.gameArea.gameWidth - paddleSize) / 2, y: this.gameArea.gameY + this.gameArea.gameHeight - 20, angle: 'horizontal' }
        ];

        for (let i = 0; i < playerNames.length; i++) {
            const pos = positions[i];
            this.paddles.push(new Paddle(pos.x, pos.y, paddleSize / 10, paddleSize, 'white', paddleSpeed, pos.angle));
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
        setupControls(this.key, 1, ...this.paddles);

        this.resetPaddles();

        this.isGameOver = false;

        const directions = [
            { x: 1, y: 0.5 },
            { x: 1, y: -0.5 },
            { x: -1, y: 0.5 },
            { x: -1, y: -0.5 },
            { x: 0.5, y: 1 },
            { x: 0.5, y: -1 },
            { x: -0.5, y: 1 },
            { x: -0.5, y: -1 }
        ];

        this.gameArea.clear(this.ctx);
        this.gameArea.draw(this.ctx);
        this.drawAllPaddles();
        this.bricks.forEach(brick => brick.draw(this.ctx));
        this.score.drawTitle(this.gameTitle);
        this.score.drawSubtitle(this.gameSubtitle, this.maxScore + 1);
        this.drawScores();

        setTimeout(() => {
            this.score.drawFlat("Press any key to start.", 30, 'white', 'center', this.ctx.canvas.width / 2, this.ctx.canvas.width / 2)
            waitForKeyPress(() => {
                this.balls.forEach(ball => ball.spawn(this.gameArea, directions));
                this.loop();
            });
        }, 1000);
    }

    drawScores() {
        this.score.drawFlat(this.player1Name + " : " + this.player1Score, 40, 'white', 'center', this.gameArea.gameX - 20, this.gameArea.gameY + (this.gameArea.gameHeight) / 2, -90);
        this.score.drawFlat(this.player2Name + " : " + this.player2Score, 40, 'white', 'center', this.gameArea.gameX + this.gameArea.gameWidth + 20, this.gameArea.gameY + (this.gameArea.gameHeight) / 2, 90);
        if (this.player3Name) {
            this.score.drawFlat(this.player3Name + " : " + this.player3Score, 40, 'white', 'center', this.gameArea.gameX + (this.gameArea.gameWidth) / 2, this.gameArea.gameY - 20, 0);
        }
        if (this.player4Name) {
            this.score.drawFlat(this.player4Name + " : " + this.player4Score, 40, 'white', 'center', this.gameArea.gameX + (this.gameArea.gameWidth) / 2, this.gameArea.gameY + this.gameArea.gameHeight + 40, 0);
        }
    }

    loop() {
        if (this.isGameOver) {
            return;  // Arrêter la boucle de jeu
        }
        this.gameArea.clear(this.ctx);

        this.balls.forEach(ball => {
            if (ball.x < this.gameArea.gameX) {
                this.player1Score--;
                const directions = [
                    { x: 1, y: 0.5 },
                    { x: 1, y: -0.5 },
                    { x: 0.5, y: 1 },
                    { x: 0.5, y: -1 },
                    { x: -0.5, y: 1 },
                    { x: -0.5, y: -1 }
                ];
                ball.spawn(this.gameArea, directions);
            } else if (ball.x + ball.size > this.gameArea.gameX + this.gameArea.gameWidth) {
                this.player2Score--;
                const directions = [
                    { x: -1, y: 0.5 },
                    { x: -1, y: -0.5 },
                    { x: 0.5, y: 1 },
                    { x: 0.5, y: -1 },
                    { x: -0.5, y: 1 },
                    { x: -0.5, y: -1 }
                ];
                ball.spawn(this.gameArea, directions);
            }
            else if (ball.y < this.gameArea.gameY) {
                this.player3Score--;
                const directions = [
                    { x: 1, y: 0.5 },
                    { x: 1, y: -0.5 },
                    { x: -1, y: 0.5 },
                    { x: -1, y: -0.5 },
                    { x: 0.5, y: 1 },
                    { x: -0.5, y: 1 }
                ];
                ball.spawn(this.gameArea, directions);
            }
            else if (ball.y + ball.size > this.gameArea.gameY + this.gameArea.gameHeight) {
                this.player4Score--;
                const directions = [
                    { x: 1, y: 0.5 },
                    { x: 1, y: -0.5 },
                    { x: -1, y: 0.5 },
                    { x: -1, y: -0.5 },
                    { x: 0.5, y: -1 },
                    { x: -0.5, y: -1 }
                ];
                ball.spawn(this.gameArea, directions);
            }
            ball.move(this.gameArea, this.paddles, this.bricks);
        });

        this.check_all_status();

        this.moveAllPaddles();
        this.gameArea.draw(this.ctx);
        this.drawAllPaddles();
        this.balls.forEach(ball => ball.draw(this.ctx));
        this.bricks.forEach(brick => brick.draw(this.ctx));
        this.game_over_screen();
        this.score.drawTitle(this.gameTitle);
        this.score.drawSubtitle(this.gameSubtitle, this.maxScore + 1);
        this.drawScores();
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

    check_all_status() {
        if (this.player1Score < 0)
            this.player1Score = 0;
        if (this.player2Score < 0)
            this.player2Score = 0;
        if (this.isThereAPlayer3 && this.player3Score < 0)
            this.player3Score = 0;
        if (this.isThereAPlayer4 && this.player4Score < 0)
            this.player4Score = 0;


        if (this.player1Score <= 0) {
            this.walls.left = 'bounce';
             const player1Paddle = this.paddles[0];
             player1Paddle.x = 9999;
             player1Paddle.y = 9999;
             player1Paddle.speed = 0;
         }
         if (this.player2Score <= 0) {
             this.walls.right = 'bounce';
             const player2Paddle = this.paddles[1];
             player2Paddle.x = 9999;
             player2Paddle.y = 9999;
             player2Paddle.speed = 0;
         }
         if (this.isThereAPlayer3 && this.player3Score <= 0) {
             this.walls.top = 'bounce';
             const player3Paddle = this.paddles[2];
             player3Paddle.x = 9999;
             player3Paddle.y = 9999;
             player3Paddle.speed = 0;
         }
         if (this.isThereAPlayer4 && this.player4Score <= 0) {
             this.walls.bottom = 'bounce';
             const player4Paddle = this.paddles[3];
             player4Paddle.x = 9999;
             player4Paddle.y = 9999;
             player4Paddle.speed = 0;
         }
    }

    game_over_screen() {      
        const scores = [this.player1Score, this.player2Score, this.player3Score, this.player4Score].filter(score => score !== null && score > 0);
        if (scores.length === 1) {
            this.isGameOver = true;
            const winnerIndex = [this.player1Score, this.player2Score, this.player3Score, this.player4Score].indexOf(scores[0]);
            this.score.drawEnd(winnerIndex + 1);
        }
        if (scores.length === 0) {
            this.isGameOver = true;
            this.score.drawEnd(0);
        }
    }
}
