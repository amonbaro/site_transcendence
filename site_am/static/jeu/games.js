import { loadFont } from './js/scenes/assets.js';
import { Versus } from './js/mods/versus.js';
import { Tournament } from './js/mods/tournament.js';
import { LastManStanding } from './js/mods/lastManStanding.js';
import { BrickBreaker } from './js/mods/brickBreaker.js';

//import { initThreeScene } from './threeScene.js';

let ctx, font;

function main(gameMode, playerNames, key, maxScore, paddleSpeed, paddleSize, bounceMode, ballSpeed, ballAcceleration, numBalls, map) {
    // Sélectionner le canvas et le contexte
    const canvas = document.getElementById("webgl1");
    ctx = canvas.getContext("2d");

    // Charger les ressources nécessaires
    loadFont().then((loadedFont) => {
        font = loadedFont;

        maxScore = Math.max(1, Math.min(maxScore, 100));
        paddleSpeed = Math.max(1, Math.min(paddleSpeed, 30));
        paddleSize = Math.max(20, Math.min(paddleSize, 150));
        ballSpeed = Math.max(1, Math.min(ballSpeed, 10));
        ballAcceleration = Math.max(0, Math.min(ballAcceleration, 5));
        numBalls = Math.max(1, Math.min(numBalls, 10));
        map = Math.max(1, Math.min(map, 5));
        if (playerNames.length < 2)
            throw new Error('Not enought players: ' + playerNames.length + '. 2 players minimum.');
        else if (playerNames.length > 10)
            throw new Error('Too many players: ' + playerNames.length + '. 10 players maximum.');
        if (key.length != playerNames.length)
            throw new Error('Number of keys (' + key.length + ') is not equal to number of players (' + playerNames.length + ').')

        // Initialiser les paddles
        if (gameMode === 'versus') {
            if (playerNames.length == 3 || playerNames.length > 4)
                throw new Error('Not a good players count: ' + playerNames.length + '. Versus mod take 2 or 4 players.');
            new Versus(canvas, playerNames, key, ctx, font, maxScore, paddleSpeed, paddleSize, bounceMode, ballSpeed, ballAcceleration, numBalls, map);
        } else if (gameMode === 'tournament') {
            if (playerNames.length > 10)
                throw new Error('Not a good players count: ' + playerNames.length + '. Tournament mod take 2 to 10 players.');
            new Tournament(canvas, playerNames, key, ctx, font, maxScore, paddleSpeed, paddleSize, bounceMode, ballSpeed, ballAcceleration, numBalls, map);
        } else if (gameMode === 'lastManStanding') {
            if (playerNames.length > 4)
                throw new Error('Not a good players count: ' + playerNames.length + '. Last Man Standing mod take 2, 3 or 4 players.');
            new LastManStanding(canvas, playerNames, key, ctx, font, maxScore, paddleSpeed, paddleSize, bounceMode, ballSpeed, ballAcceleration, numBalls, map);
        } else if (gameMode === 'brickBreaker') {
            if (playerNames.length == 3 || playerNames.length > 4)
                throw new Error('Not a good players count: ' + playerNames.length + '. Bricks mod take 1 or 2 players.');
            new BrickBreaker(canvas, playerNames, key, ctx, font, maxScore, paddleSpeed, paddleSize, bounceMode, ballSpeed, ballAcceleration, numBalls, map);
        }
        else
            throw new Error('Unknown game mode: ' + gameMode + '. Available modes are: versus, tournament, lastManStanding, brickBreaker.');

    }).catch((error) => {
        console.error('Error loading assets:', error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const ballPosition = { x: -50, y: 0 }; // Définissez ici les coordonnées de la balle
    main('versus', ['Adri', 'Dani'], [['w','s'],['ArrowUp','ArrowDown']], 10, 5, 100, true, 5, 1, 1, 1);
});



/*
   ---   Bienvenue dans le TUTO DES OPTIONS   ---

Chaque argument de l'appel de la fonction Main juste ci dessus est un paramètre a par entière.
L'appel de fonctio aura donc cette suite d'argument :

    main( Mode, [Players], [[Key1, Key2]], MaxScore, PaddleSpeed, PaddleSize, BounceMode, BallSpeed, BallAcceleration, NumBalls, Map );

Voici ce qu'il font, et leur minimum et maximum.
Une valeur trop basse ou trop grande sera ajusté au minimum et maximum.

Mode : nom du mode de jeu, parmis 'versus', 'tournament', 'lastManStanding' et 'brickBreaker'
Players : liste des pseudo des participants. Selon le mode, il peut y avoir entre 2 et 4 joueur, ou jusqu'a 10 our le mode 'tournament'.
Keys : liste des paire de touche de clavier correspondant à chaque participants. Il doit y avoir autant de paire que de participants.
MaxScore : Le score maximum à atteindre pour gagner. Le mode 'brickBreaker' ne prend pas enn compte ce parametre, car son score est égal au nombre de bricks. Minimum 1, maximum 100.
PaddleSpeed : La vitesse de déplacement des paddles. Minimum 1, maximum 30.
PaddleSize : La taille des paddles. Minimum 20, maximum 150.
BounceMode : La manière don rebondit la balle sur les paddle. 'True' fait en sorte que son angle s'adapte à sa poosition sur le paddle. 'False' la fait rebondir selon son angle d'arrivé.
BallSpeed : La vitesse initial de la balle. Minimum 1, maximum 10.
BallAcceleration : Le taux à laquel la balle accélère à chaque rebond. Minimum 0 ( pas d'accélération ), maximum 5.
NumBalls : Le nombre de balles à apparaitre. Minimum 1, maximum 10.
Map : le choix de la map sur laquel jouer. La map 1 est vide ( sauf pour le mode 'brickBreaker'). Minimum 1, maximum 5.

Si cela n'est pas précisé, tout les mods peuvent accepter toute les options. N'hésitez pas à en combiner pour tester !
Voici un exemple basique de preset :

    main('versus', ['Adri', 'Dani'], [['w','s'],['ArrowUp','ArrowDown']], 10, 5, 100, true, 5, 1, 1, 1);

 */


