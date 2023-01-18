import Race from './Race';

class Dwarf extends Race {
  private lifePoints: number;
  private static createdRaces = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.lifePoints = 80;
    Dwarf.createdRaces += 1;
  }

  get maxLifePoints(): number {
    return this.lifePoints;
  }

  static createdRacesInstances(): number {
    return this.createdRaces;
  }
}

export default Dwarf;