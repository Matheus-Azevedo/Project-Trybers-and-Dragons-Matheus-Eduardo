import Race from './Race';

class Halfling extends Race {
  private lifePoints: number;
  private static createdRaces = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.lifePoints = 60;
    Halfling.createdRaces += 1;
  }

  get maxLifePoints(): number {
    return this.lifePoints;
  }

  static createdRacesInstances(): number {
    return this.createdRaces;
  }
}

export default Halfling;