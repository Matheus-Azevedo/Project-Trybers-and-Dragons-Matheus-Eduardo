import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('Jack Denials');
const player2 = new Character('Alice in Rains');
const player3 = new Character('John McTavish');

player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

const arrayOfMonsters = [monster1, monster2];
const pve = new PVE(player1, arrayOfMonsters);

function runBattles(arrayOfBattles: Battle[]) {
  arrayOfBattles.forEach((battle) => {
    battle.fight();
  });
}

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };