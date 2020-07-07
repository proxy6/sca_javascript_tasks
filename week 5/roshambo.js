 
const logic = {
    rock: { win: 'scissor', lose: 'paper'},
    paper: {win:'rock', lose:'scissor'},
    scissor: {win:'paper', lose:'rock'},
}
 
class Player {
    constructor(name){
        this.name = name;
    }
    selectMove(move){
        this.move = move;
    }

    challengeOther(PlayerTwo){
        return logic[this.move].win === PlayerTwo.choice;
       
    }
}
 
const player1 = new Player('Proxy');
const player2 = new Player('Ezekiel');

 //player moves
player1.selectMove('rock');
player2.selectMove('scissor');
 
//challenge player
player1.challengeOther(player2); //true (wins)