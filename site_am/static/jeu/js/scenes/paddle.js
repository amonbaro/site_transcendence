/*export class Paddle {
    constructor(x, y, width, height, color, speed) {
        this.initialX = x;
        this.initialY = y;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = speed;
        this.up = false;
        this.down = false;
    }

    move(gameArea) {
        if (this.up && this.y > gameArea.gameY) {
            this.y -= this.speed;
        }
        if (this.down && this.y + this.height < gameArea.gameY + gameArea.gameHeight) {
            this.y += this.speed;
        }
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    resetPosition() {
        this.x = this.initialX;
        this.y = this.initialY;
    }
}*/

export class Paddle {
    constructor(x, y, width, height, color, speed, orientation) {
        this.initialX = x;
        this.initialY = y;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = speed;
        this.up = false;
        this.down = false;
        this.orientation = orientation; // 'vertical' ou 'horizontal'
    }

    move(gameArea) {
        if (this.orientation === 'vertical') {
            if (this.up && this.y > gameArea.gameY) {
                this.y -= this.speed;
            }
            if (this.down && this.y + this.height < gameArea.gameY + gameArea.gameHeight) {
                this.y += this.speed;
            }
        } else if (this.orientation === 'horizontal') {
            if (this.up && this.x > gameArea.gameX) {
                this.x -= this.speed;
            }
            if (this.down && this.x + this.height < gameArea.gameX + gameArea.gameWidth) {
                this.x += this.speed;
            }
        }
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        if (this.orientation === 'vertical') {
            ctx.fillRect(this.x, this.y, this.width, this.height);
        } else if (this.orientation === 'horizontal') {
            ctx.fillRect(this.x, this.y, this.height, this.width);
        }
    }

    resetPosition() {
        this.x = this.initialX;
        this.y = this.initialY;
    }
}

