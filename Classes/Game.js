"use strict";
exports.__esModule = true;
var Board_1 = require("./Board");
var GameStatus_1 = require("../Enums/GameStatus");
var Game = /** @class */ (function () {
    /* Constructor - rows and cols*/
    function Game(rows, cols) {
        this.summary = "";
        this.rows = rows;
        this.cols = cols;
        this.status = GameStatus_1.GameStatus.InProgress; // change status to in progress
        this.board = new Board_1.Board(rows, cols); // creating new Board
        this.numOfMoves = 0;
    }
    //get player as paramater and add it to the game.
    Game.prototype.addPlayer = function (player) {
        if (this.player1 == undefined) {
            this.player1 = player;
            this.currentPlayer = this.player1;
        }
        else if (this.player2 == undefined) {
            if (this.player1 != undefined) {
                if (player.sign != this.player1.sign) {
                    this.player2 = player;
                }
                //in case that the two player have the same character('x' or 'o') , it change it to the opposite character.
                else {
                    this.player2 = player;
                    if (this.player1.sign == 'X')
                        this.player2.sign = '0';
                    else
                        this.player2.sign = 'X';
                }
            }
        }
    };
    //players information
    Game.prototype.gamePlayers = function () {
        this.summary += "player 1 : " + this.player1.name + " , " + this.player1.sign + "\n";
        this.summary += "player 2 : " + this.player2.name + " , " + this.player2.sign + "\n";
    };
    //nextmove - gets rows and cols as parameters and return true in case of success , false otherwise(or in case of game over).
    Game.prototype.nextMove = function (row, col) {
        //validate inputs
        if (!this.validateCell(row, col))
            return false;
        if (this.numOfMoves % 2 == 0) { //player 1 turn 
            this.currentPlayer = this.player1;
        }
        else { //player 2 turn
            this.currentPlayer = this.player2;
        }
        //in case of empty cell
        if (this.board.arr[row][col] == ' ') {
            this.board.arr[row][col] = this.currentPlayer.sign;
            //add data to history string
            this.summary += this.currentPlayer.name + " make move with the character: '" + this.currentPlayer.sign + "' at cell [" + row + "][" + col + "]" + "\n";
            this.currentPlayer.history += "[" + row + "][" + col + "]" + "\n";
        }
        this.board.print();
        this.numOfMoves++;
        this.lookForWinningPattern(); //look for winner
        return true;
    };
    //validate data , return false in case of problems,true otherwise.
    Game.prototype.validateCell = function (row, col) {
        if (row > this.rows || row < 0 || col > this.cols || col < 0 || this.board.arr[row][col] != ' ' || this.status == GameStatus_1.GameStatus.Completed)
            return false;
        return true;
    };
    //look for winning pattern in all possible options
    Game.prototype.lookForWinningPattern = function () {
        if (this.horizontal() || this.vertical() || this.diagonalLeftToRight() || this.diagonalRightToLeft()) {
            this.status = GameStatus_1.GameStatus.Completed;
        }
    };
    // check for winning horizontally pattern
    Game.prototype.horizontal = function () {
        var winner = 0;
        for (var i = 0; i < this.rows; i++) {
            winner = 1;
            for (var j = 0; j < this.cols; j++) {
                if (this.board.arr[i][j] != this.currentPlayer.sign)
                    winner = 0;
            }
            if (winner)
                return true;
        }
        return false;
    };
    // check for winning vertically pattern
    Game.prototype.vertical = function () {
        var winner = 0;
        for (var j = 0; j < this.rows; j++) {
            winner = 1;
            for (var i = 0; i < this.cols; i++) {
                if (this.board.arr[i][j] != this.currentPlayer.sign)
                    winner = 0;
            }
            if (winner)
                return true;
        }
        return false;
    };
    // check for winning diagonally left to right pattern
    Game.prototype.diagonalLeftToRight = function () {
        var winner = 1;
        for (var i = 0; i < this.rows; i++) {
            if (this.board.arr[i][i] != this.currentPlayer.sign)
                winner = 0;
        }
        if (winner)
            return true;
        return false;
    };
    // check for winning diagonally right to left pattern
    Game.prototype.diagonalRightToLeft = function () {
        var winner = 1;
        for (var i = 0; i < this.rows; i++) {
            if (this.board.arr[this.rows - i - 1][i] != this.currentPlayer.sign)
                winner = 0;
        }
        if (winner)
            return true;
        return false;
    };
    //printing summary
    Game.prototype.printSummary = function () {
        console.log("Game Summary:");
        console.log(this.currentPlayer.name + " won!");
        console.log(this.summary);
    };
    return Game;
}());
exports.Game = Game;
