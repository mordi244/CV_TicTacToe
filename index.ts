/* Index File - runs the program */
import { Player } from './Classes/Player';
import { Game } from './Classes/Game';
import { GameStatus } from './Enums/GameStatus';

const game = new Game(3, 3); //works with any NXN size.

game.addPlayer(new Player('Chandler Bing', 'O')); 
game.addPlayer(new Player('Ross Geller', 'X'));
game.board.print();
game.gamePlayers();

console.log("status : " + GameStatus[game.status]);
console.log(game.nextMove(0, 0));
console.log(game.nextMove(0, 0));
console.log(game.nextMove(1, 0));
console.log(game.nextMove(1, 1));
console.log(game.nextMove(1, 2));
console.log(game.nextMove(2, 2));
console.log(game.nextMove(2, 1));
console.log("status : " + GameStatus[game.status]);

game.printSummary();



