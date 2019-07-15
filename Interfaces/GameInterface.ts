/* Game Interface */
import { Player } from '../Classes/Player';
export interface GameInterface {
    addPlayer(player: Player); //add new player to the game
    gamePlayers(); //print players date
    nextMove(row: number, col: number):boolean; //makes the next move
    validateCell(row: number, col: number): boolean; //validate cell before makes move
    lookForWinningPattern(); //look for winning pattern in 4 options (down functions)
    horizontal(): boolean;
    vertical(): boolean;
    diagonalLeftToRight(): boolean;
    diagonalRightToLeft(): boolean;
    printSummary(); //print game summary
}