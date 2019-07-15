"use strict";
exports.__esModule = true;
var Board = /** @class */ (function () {
    /* Constructor */
    function Board(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.build2dArray(); //build table
    }
    // building 2d array that represents the board.
    Board.prototype.build2dArray = function () {
        this.arr = [];
        for (var i = 0; i < this.rows; i++) {
            this.arr[i] = [];
            for (var j = 0; j < this.cols; j++) {
                this.arr[i][j] = ' ';
            }
        }
    };
    //print the table.
    Board.prototype.print = function () {
        var str = "";
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.cols; j++) {
                if (j == this.cols - 1)
                    str += ' ' + this.arr[i][j] + ' ';
                else
                    str += ' ' + this.arr[i][j] + ' | ';
            }
            if (i != this.rows - 1)
                str += this.addLinesToBoard(this.cols);
        }
        console.log(str);
    };
    //add lines to board according to the table columns. (i tried to build something dynamically )
    // giving 5 lines (-) for each column.
    Board.prototype.addLinesToBoard = function (num) {
        var str = "";
        str += '\n';
        for (var i = 0; i < num; i++) {
            str += '----';
        }
        str += '\n';
        return str;
    };
    return Board;
}());
exports.Board = Board;
