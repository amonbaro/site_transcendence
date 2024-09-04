/*export class Ball {
    constructor(x, y, size, color, speed, bounceMode, ballAcceleration, spacing) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.baseSpeed = speed;
        this.speed = speed;
        this.speedX = speed;
        this.speedY = speed;
        this.accelerationFactor = ballAcceleration;
        this.isMoving = false;
        this.useAngleBounce = bounceMode;
        this.spacing = spacing
    }

    move(gameArea, paddles) {
        if (this.isMoving) {
            this.x += this.speedX;
            this.y += this.speedY;

            // Rebondir sur le mur supérieur et inférieur
            if (this.y <= gameArea.gameY || this.y + this.size >= gameArea.gameY + gameArea.gameHeight) {
                this.speedY = -this.speedY;
            }

            // Rebondir sur les paddles
            paddles.forEach(paddle => {
                if (
                    this.speedX < 0 && // Balle se déplace vers la gauche
                    this.x <= paddle.x + paddle.width && 
                    this.x + this.size >= paddle.x && 
                    this.y + this.size >= paddle.y && 
                    this.y <= paddle.y + paddle.height
                ) {
                    this.accelerate();
                    if (this.useAngleBounce) {
                        this.angleBounce(paddle);
                    } else {
                        this.speedX = this.speed;
                    }
                } else if (
                    this.speedX > 0 && // Balle se déplace vers la droite
                    this.x + this.size >= paddle.x && 
                    this.x <= paddle.x + paddle.width && 
                    this.y + this.size >= paddle.y && 
                    this.y <= paddle.y + paddle.height
                ) {
                    this.accelerate();
                    if (this.useAngleBounce) {
                        this.angleBounce(paddle);
                    } else {
                        this.speedX = -this.speed;
                    }
                }
            });
        }
    }

    angleBounce(paddle) {
        let relativeIntersectY = (paddle.y + (paddle.height / 2)) - (this.y + (this.size / 2));
        let normalizedRelativeIntersectionY = relativeIntersectY / (paddle.height / 2);
        let bounceAngle = normalizedRelativeIntersectionY * Math.PI / 4; // Max 45 degrees

        if (this.speedX < 0) { // Balle se déplace vers la gauche
            this.speedX = this.speed * Math.cos(bounceAngle);
        } else { // Balle se déplace vers la droite
            this.speedX = -this.speed * Math.cos(bounceAngle);
        }
        this.speedY = this.speed * -Math.sin(bounceAngle);
    }

    spawn(gameArea, directions) {
        // Positionner la balle au centre
        this.x = gameArea.gameX + gameArea.gameWidth / 2;
        this.y = gameArea.gameY + gameArea.gameHeight / 2 + this.spacing;
        this.speed = this.baseSpeed;

        // Choisir une direction aléatoire parmi les directions fournies
        const randomDirection = directions[Math.floor(Math.random() * directions.length)];
        this.speedX = randomDirection.x * this.speed;
        this.speedY = randomDirection.y * this.speed;

        // Arrêter le mouvement initialement
        this.isMoving = false;

        // Démarrer le mouvement après 2 secondes
        setTimeout(() => {
            this.isMoving = true;
        }, 2000);
    }

    accelerate() {
        this.speed += this.accelerationFactor;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}*/

export class Ball {
    constructor(x, y, size, color, speed, bounceMode, ballAcceleration, spacing, wallBehavior) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.baseSpeed = speed;
        this.speed = speed;
        this.speedX = speed;
        this.speedY = speed;
        this.accelerationFactor = ballAcceleration;
        this.isMoving = false;
        this.useAngleBounce = bounceMode;
        this.spacing = spacing;
        this.wallBehavior = wallBehavior; // { top: 'bounce', bottom: 'bounce', left: 'pass', right: 'pass' }
    }

    move(gameArea, paddles, bricks) {
        let returnValue = false;
        if (this.isMoving) {
            this.x += this.speedX;
            this.y += this.speedY;

            // Rebondir sur les murs ou traverser sans rebondir
            if (this.wallBehavior.top === 'bounce' && this.y <= gameArea.gameY) {
                this.y = gameArea.gameY; // Repositionner la balle pour éviter qu'elle ne passe derrière le mur
                this.speedY = -this.speedY;
            }
            if (this.wallBehavior.bottom === 'bounce' && this.y + this.size >= gameArea.gameY + gameArea.gameHeight) {
                this.y = gameArea.gameY + gameArea.gameHeight - this.size; // Repositionner la balle pour éviter qu'elle ne passe derrière le mur
                this.speedY = -this.speedY;
            }
            if (this.wallBehavior.left === 'bounce' && this.x <= gameArea.gameX) {
                this.x = gameArea.gameX; // Repositionner la balle pour éviter qu'elle ne passe derrière le mur
                this.speedX = -this.speedX;
            }
            if (this.wallBehavior.right === 'bounce' && this.x + this.size >= gameArea.gameX + gameArea.gameWidth) {
                this.x = gameArea.gameX + gameArea.gameWidth - this.size; // Repositionner la balle pour éviter qu'elle ne passe derrière le mur
                this.speedX = -this.speedX;
            }

            // Rebondir sur les paddles
            paddles.forEach(paddle => {
                if (paddle.orientation == 'vertical') {
                    if (
                        this.speedX < 0 && // Balle se déplace vers la gauche
                        this.x <= paddle.x + paddle.width && 
                        this.x + this.size >= paddle.x && 
                        this.y + this.size >= paddle.y && 
                        this.y <= paddle.y + paddle.height
                    ) {
                        this.accelerate();
                        if (this.useAngleBounce) {
                            this.angleBounceY(paddle);
                        } else {
                            this.speedX = this.speed;
                        }
                    } else if (
                        this.speedX > 0 && // Balle se déplace vers la droite
                        this.x + this.size >= paddle.x && 
                        this.x <= paddle.x + paddle.width && 
                        this.y + this.size >= paddle.y && 
                        this.y <= paddle.y + paddle.height
                    ) {
                        this.accelerate();
                        if (this.useAngleBounce) {
                            this.angleBounceY(paddle);
                        } else {
                            this.speedX = -this.speed;
                        }
                    }
                }
                else if (paddle.orientation == 'horizontal') {
                    if (
                        this.speedY < 0 && // Balle se déplace vers le haut
                        this.y <= paddle.y + paddle.width && 
                        this.y + this.size >= paddle.y && 
                        this.x + this.size >= paddle.x && 
                        this.x <= paddle.x + paddle.height
                    ) {
                        this.accelerate();
                        if (this.useAngleBounce) {
                            this.angleBounceX(paddle);
                        } else {
                            this.speedX = this.speed;
                        }
                    } else if (
                        this.speedY > 0 && // Balle se déplace vers le bas
                        this.y + this.size >= paddle.y && 
                        this.y <= paddle.y + paddle.width && 
                        this.x + this.size >= paddle.x && 
                        this.x <= paddle.x + paddle.height
                    ) {
                        this.accelerate();
                        if (this.useAngleBounce) {
                            this.angleBounceX(paddle);
                        } else {
                            this.speedY = -this.speed;
                        }
                    }
                }
                
            });

            // Rebondir sur les briques
            bricks.forEach(brick => {
                if (brick.checkCollision(this)) {
                    if (this.x < brick.x || this.x + this.size > brick.x + brick.width) {
                        this.speedX = -this.speedX;
                    }
                    if (this.y < brick.y || this.y + this.size > brick.y + brick.height) {
                        this.speedY = -this.speedY;
                    }
                    returnValue = true;
                }
            });
        }
        return (returnValue);
    }

    angleBounceY(paddle) {
        let relativeIntersectY = (paddle.y + (paddle.height / 2)) - (this.y + (this.size / 2));
        let normalizedRelativeIntersectionY = relativeIntersectY / (paddle.height / 2);
        let bounceAngle = normalizedRelativeIntersectionY * Math.PI / 4; // Max 45 degrees

        if (this.speedX < 0) { // Balle se déplace vers la gauche
            this.speedX = this.speed * Math.cos(bounceAngle);
        } else { // Balle se déplace vers la droite
            this.speedX = -this.speed * Math.cos(bounceAngle);
        }
        this.speedY = this.speed * -Math.sin(bounceAngle);
    }

    angleBounceX(paddle) {
        let relativeIntersectX = (paddle.x + (paddle.height / 2)) - (this.x + (this.size / 2));
        let normalizedRelativeIntersectionX = relativeIntersectX / (paddle.height / 2);
        let bounceAngle = normalizedRelativeIntersectionX * Math.PI / 4; // Max 45 degrees

        if (this.speedY < 0) { // Balle se déplace vers le haut
            this.speedY = this.speed * Math.cos(bounceAngle);
        } else { // Balle se déplace vers le bas
            this.speedY = -this.speed * Math.cos(bounceAngle);
        }
        this.speedX = this.speed * -Math.sin(bounceAngle);
    }

    spawn(gameArea, directions) {
        // Positionner la balle au centre
        this.x = gameArea.gameX + gameArea.gameWidth / 2;
        this.y = gameArea.gameY + gameArea.gameHeight / 2 + this.spacing;
        this.speed = this.baseSpeed;

        // Choisir une direction aléatoire parmi les directions fournies
        const randomDirection = directions[Math.floor(Math.random() * directions.length)];
        this.speedX = randomDirection.x * this.speed;
        this.speedY = randomDirection.y * this.speed;

        // Arrêter le mouvement initialement
        this.isMoving = false;

        // Démarrer le mouvement après 2 secondes
        setTimeout(() => {
            this.isMoving = true;
        }, 2000);
    }

    accelerate() {
        this.speed += this.accelerationFactor;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}



