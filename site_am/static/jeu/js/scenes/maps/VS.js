import { Bricks } from '../bricks.js';

export function map1(gameArea, bricksX, bricksY) {
    let bricks = [];
    let nbrBricksY = 6;
    let nbrBricksX = 8;
    let spacingX = (gameArea.gameWidth - ( bricksX * nbrBricksX)) / (nbrBricksX + 1);
    let spacingY = (gameArea.gameHeight - ( bricksY * nbrBricksY)) / (nbrBricksY + 1);
    
    let nbrColumn = 0;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    nbrColumn++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    nbrColumn++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    nbrColumn++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    nbrColumn++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    nbrColumn++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    nbrColumn++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    nbrColumn++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    return bricks;
}

export function map2(gameArea, bricksX, bricksY) {
    let bricks = [];
    let nbrBricksY = 6;
    let nbrBricksX = 8;
    let spacingX = (gameArea.gameWidth - ( bricksX * nbrBricksX)) / (nbrBricksX + 1);
    let spacingY = (gameArea.gameHeight - ( bricksY * nbrBricksY)) / (nbrBricksY + 1);
    
    let nbrColumn = 0;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    nbrColumn++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    nbrColumn++;
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    nbrColumn++;
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    nbrColumn++;
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    nbrColumn++;
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    nbrColumn++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    nbrColumn++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    return bricks;
}

export function map3(gameArea, bricksX, bricksY) {
    let bricks = [];
    let nbrBricksY = 6;
    let nbrBricksX = 8;
    let spacingX = (gameArea.gameWidth - ( bricksX * nbrBricksX)) / (nbrBricksX + 1);
    let spacingY = (gameArea.gameHeight - ( bricksY * nbrBricksY)) / (nbrBricksY + 1);
    
    let nbrColumn = 0;
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    nbrColumn++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    nbrColumn++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    nbrColumn++;
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    nbrColumn++;
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    nbrColumn++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    nbrColumn++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    nbrColumn++;
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    return bricks;
}

export function map4(gameArea, bricksX, bricksY) {
    let bricks = [];
    let nbrBricksY = 6;
    let nbrBricksX = 8;
    let spacingX = (gameArea.gameWidth - ( bricksX * nbrBricksX)) / (nbrBricksX + 1);
    let spacingY = (gameArea.gameHeight - ( bricksY * nbrBricksY)) / (nbrBricksY + 1);
    
    let nbrColumn = 0;
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    nbrColumn++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    nbrColumn++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    nbrColumn++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    nbrColumn++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    nbrColumn++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    nbrColumn++;
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    nbrColumn++;
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 0) + (spacingY * 1), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 1) + (spacingY * 2), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 2) + (spacingY * 3), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 3) + (spacingY * 4), bricksX, bricksY, 'white'));
    bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 4) + (spacingY * 5), bricksX, bricksY, 'white'));
    //bricks.push(new Bricks(gameArea.gameX + (bricksX * nbrColumn) + (spacingX * (nbrColumn + 1)), gameArea.gameY + (bricksY * 5) + (spacingY * 6), bricksX, bricksY, 'white'));

    return bricks;
}