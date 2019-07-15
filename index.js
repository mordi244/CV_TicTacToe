"use strict";
exports.__esModule = true;
/* Index File - runs the program */
var Player_1 = require("./Classes/Player");
var Game_1 = require("./Classes/Game");
var GameStatus_1 = require("./Enums/GameStatus");
var game = new Game_1.Game(3, 3); //works with any NXN size.
game.addPlayer(new Player_1.Player('Chandler Bing', 'X'));
game.addPlayer(new Player_1.Player('Ross Geller', 'O'));
game.gamePlayers();
console.log("status : " + GameStatus_1.GameStatus[game.status]);
console.log(game.nextMove(0, 0));
console.log(game.nextMove(0, 0));
console.log(game.nextMove(1, 1));
console.log(game.nextMove(0, 2));
console.log(game.nextMove(2, 2));
console.log(game.nextMove(0, 1));
console.log(game.nextMove(2, 1));
console.log("status : " + GameStatus_1.GameStatus[game.status]);
game.printSummary();
