export class GameArea {
    constructor(width, height, canvas, offsetX = 0) { // Ajout de l'argument offsetX avec une valeur par défaut de 0
        this.width = width;
        this.height = height;
        this.offsetX = offsetX; // Stocker le décalage horizontal
        this.gameX = ((canvas.width - width) / 2) + offsetX; // Appliquer le décalage horizontal
        this.gameY = (canvas.height - height) / 2;
        this.gameWidth = width;
        this.gameHeight = height;
    }

    clear(ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }

    draw(ctx) {
        ctx.fillStyle = "#000000";
        ctx.fillRect(this.gameX, this.gameY, this.gameWidth, this.gameHeight);
    }
}


