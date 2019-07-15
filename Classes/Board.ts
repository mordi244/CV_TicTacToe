/* Board Class */
import { BoardInterface } from '../Interfaces/BoardInterface';
export class Board implements BoardInterface {

    rows: number;
    cols: number;
    arr: string[][];

    /* Constructor */
    constructor(rows: number, cols: number) {
        this.rows = rows;
        this.cols = cols;
        this.build2dArray(); //build table
    }

    // building 2d array that represents the board.
    build2dArray() {
        this.arr = [];
        for (let i = 0; i < this.rows; i++) {
            this.arr[i] = [];
            for (let j = 0; j < this.cols; j++) {
                this.arr[i][j] = ' ';
            }
        }
    }
    //print the table.
    print() {
        let str = "";
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (j == this.cols - 1)
                    str += ' ' + this.arr[i][j] + ' ';
                else
                    str += ' ' + this.arr[i][j] + ' | ';
            }
            if (i != this.rows - 1)
                str += this.addLinesToBoard(this.cols);
        }
        console.log(str);
    }
    //add lines to board according to the table columns. (i tried to build something dynamically )
    // giving 5 lines (-) for each column.
    addLinesToBoard(num: number): string {
        let str: string = "";
        str += '\n';
        for (let i = 0; i < num; i++) {
            str += '----';
        }
        str += '\n';
        return str;
    }
}
