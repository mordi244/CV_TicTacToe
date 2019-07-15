/* Player Class */
export class Player {
    name: string;
    sign: string;
    history:string

    /* Constructor */
    constructor(name: string, sign: string) {
        this.name = name;
        this.sign = sign;
        this.history = ""; //private history for each player
    }
}