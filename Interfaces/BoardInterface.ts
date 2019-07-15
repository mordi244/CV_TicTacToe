/* Board Interface */
export interface BoardInterface {
   build2dArray(); //build 2d array that represents table
   print(); //print the table
   addLinesToBoard(num: number): string; //add lines dynamically between rows.
}