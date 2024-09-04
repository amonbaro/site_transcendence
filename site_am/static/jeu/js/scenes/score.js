export class Score {
    constructor(ctx, font, gameArea, player1Name = 'Player 1', player2Name = 'Player 2', player3Name = 'Player 3', player4Name = 'Player 4') {
        this.ctx = ctx;
        this.font = font;
        this.gameArea = gameArea;
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        this.player3Name = player3Name;
        this.player4Name = player4Name;
        this.player1Score = 0;
        this.player2Score = 0;
        this.player3Score = 0;
        this.player4Score = 0;
    }

    incrementPlayer1Score() {
        //console.log("player 1 scored")
        this.player1Score += 1;
    }

    incrementPlayer2Score() {
        //console.log("player 2 scored")
        this.player2Score += 1;
    }

    reset() {
        this.player1Score = 0;
        this.player2Score = 0;
    }

    drawFlat(text, px, color, align, x, y, angle = 0) {
        this.ctx.save(); // Sauvegarder l'état actuel du contexte
    
        // Définir les propriétés du texte
        this.ctx.font = `${px}px ${this.font.family}`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = align;
    
        // Déplacer le contexte au point (x, y)
        this.ctx.translate(x, y);
    
        // Appliquer la rotation
        this.ctx.rotate(angle * Math.PI / 180);
    
        // Dessiner le texte à l'origine (0, 0) car le contexte est déjà déplacé
        this.ctx.fillText(text, 0, 0);
    
        this.ctx.restore(); // Restaurer l'état initial du contexte
    }
    

    drawTitle(gameTitle) {
        this.ctx.font = `30px ${this.font.family}`;
        this.ctx.fillStyle = 'white';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(gameTitle, this.ctx.canvas.width / 2, 50);
    }

    drawSubtitle(gameSubtitle, maxScore) {
        this.ctx.font = `20px ${this.font.family}`;
        this.ctx.fillStyle = 'white';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(gameSubtitle + maxScore, this.ctx.canvas.width / 2, 80);
    }

    drawEnd(winningPLayer) {
        this.ctx.font = `30px ${this.font.family}`;
        this.ctx.fillStyle = 'white';
        this.ctx.textAlign = 'center';
        if (winningPLayer == 0)
            this.ctx.fillText(`It's a draw !!`, this.ctx.canvas.width / 2, this.ctx.canvas.width / 2 - 50);
        if (winningPLayer == 1)
            this.ctx.fillText(`${this.player1Name} just won the game !`, this.ctx.canvas.width / 2, this.ctx.canvas.width / 2 - 50);
        if (winningPLayer == 2)
            this.ctx.fillText(`${this.player2Name} just won the game !`, this.ctx.canvas.width / 2, this.ctx.canvas.width / 2 - 50);
        if (winningPLayer == 3)
            this.ctx.fillText(`${this.player3Name} just won the game !`, this.ctx.canvas.width / 2, this.ctx.canvas.width / 2 - 50);
        if (winningPLayer == 4)
            this.ctx.fillText(`${this.player4Name} just won the game !`, this.ctx.canvas.width / 2, this.ctx.canvas.width / 2 - 50);
    }

    drawScore() {
        this.ctx.font = `30px ${this.font.family}`;
        this.ctx.fillStyle = 'white';
        this.ctx.textAlign = 'center';

        this.ctx.fillText(`${this.player1Name}: ${this.player1Score}`, this.ctx.canvas.width / 4, 120);
        this.ctx.fillText(`${this.player2Name}: ${this.player2Score}`, (3 * this.ctx.canvas.width / 4), 120);
    }

    drawTournamentScore(wins, round, activePlayers) {
        const startX = this.gameArea.gameX + this.gameArea.gameWidth / 2;
        let startY = this.gameArea.gameY + this.gameArea.gameHeight + 40;
    
        this.ctx.font = `20px ${this.font.family}`;
        this.ctx.fillStyle = 'white';
        this.ctx.textAlign = 'center';

        this.ctx.fillText(`Round ${round}`, startX, startY);
        startY += 30;
    
        for (const [player, winCount] of Object.entries(wins)) {
            if (activePlayers.includes(player)) {
                this.ctx.fillText(`${player}: ${winCount} wins`, startX, startY);
            } else {
                this.ctx.fillText(`${player}: ${winCount} wins`, startX, startY); 
                this.ctx.beginPath();
                this.ctx.moveTo(startX - 60, startY - 10);
                this.ctx.lineTo(startX + 60, startY - 10);
                this.ctx.strokeStyle = 'white';
                this.ctx.stroke();
            }
            startY += 30; // Espace entre les lignes
        }
    }

    drawTournamentEnd(winner) {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.font = `50px ${this.font.family}`;
        this.ctx.fillStyle = 'white';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`${winner} wins the tournament!`, this.ctx.canvas.width / 2, this.ctx.canvas.height / 2);
    }
}
