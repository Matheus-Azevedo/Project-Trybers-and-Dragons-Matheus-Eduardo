import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  private playerOne: Fighter;
  private playerTwo: Fighter;

  constructor(p1: Fighter, p2: Fighter) {
    super(p1);
    this.playerOne = p1;
    this.playerTwo = p2;
  }

  fight(): number {
    while (this.playerOne.lifePoints > 0 && this.playerTwo.lifePoints > 0) {
      this.playerOne.attack(this.playerTwo);
      this.playerTwo.attack(this.playerOne);
    }

    return this.playerOne.lifePoints > 0 ? 1 : -1;
  }
}

export default PVP;