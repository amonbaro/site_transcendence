import { Bricks } from '../bricks.js';

export function map1(gameArea, bricksX, bricksY) {
    let bricks = [];
    let nbrBricks = 6;
    let spacing = (gameArea.gameWidth - ( bricksX * nbrBricks)) / (nbrBricks + 1)
    
    let nbrRow = 0;
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    return bricks;
}

export function map2(gameArea, bricksX, bricksY) {
    let bricks = [];
    let nbrBricks = 6;
    let spacing = (gameArea.gameWidth - ( bricksX * nbrBricks)) / (nbrBricks + 1)
    
    let nbrRow = 0;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    return bricks;
}

export function map3(gameArea, bricksX, bricksY) {
    let bricks = [];
    let nbrBricks = 6;
    let spacing = (gameArea.gameWidth - ( bricksX * nbrBricks)) / (nbrBricks + 1)
    
    let nbrRow = 0;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    return bricks;
}

export function map4(gameArea, bricksX, bricksY) {
    let bricks = [];
    let nbrBricks = 6;
    let spacing = (gameArea.gameWidth - ( bricksX * nbrBricks)) / (nbrBricks + 1)
    
    let nbrRow = 0;
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    return bricks;
}

export function map5(gameArea, bricksX, bricksY) {
    let bricks = [];
    let nbrBricks = 6;
    let spacing = (gameArea.gameWidth - ( bricksX * nbrBricks)) / (nbrBricks + 1)
    
    let nbrRow = 0;
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    nbrRow++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 0) + (spacing * 1), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 1) + (spacing * 2), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 2) + (spacing * 3), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 3) + (spacing * 4), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * 4) + (spacing * 5), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * 5) + (spacing * 6), gameArea.gameY + (bricksY * nbrRow) + (spacing * (nbrRow + 1)), bricksX, bricksY, 'white'));

    return bricks;
}

