export class Bricks {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.isVisible = true;
    }

    draw(ctx) {
        if (this.isVisible) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    checkCollision(ball) {
        if (!this.isVisible) return false;

        if (
            ball.x + ball.size > this.x &&
            ball.x < this.x + this.width &&
            ball.y + ball.size > this.y &&
            ball.y < this.y + this.height
        ) {
            this.isVisible = false; // Make the brick disappear after collision
            return true;
        }
        return false;
    }
}
