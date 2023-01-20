import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  private _player: Fighter;
  private _monsters: Fighter[] | SimpleFighter[];

  constructor(p1: Fighter, m: Fighter[] | SimpleFighter[]) {
    super(p1);
    this._player = p1;
    this._monsters = [...m];
  }

  fight(): number {
    this._monsters.forEach((monster) => {
      while (this._player.lifePoints > 0 && monster.lifePoints > 0) {
        this._player.attack(monster);
        monster.attack(this._player);
      }
    });
    return this._player.lifePoints > 0 ? 1 : -1;
  }
}

export default PVE;