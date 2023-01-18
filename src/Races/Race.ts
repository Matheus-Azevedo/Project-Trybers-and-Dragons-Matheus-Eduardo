abstract class Race {
  private _name: string;
  private static dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    Race.dexterity = dexterity;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this.dexterity;
  }

  abstract get maxLifePoints(): number;
  
  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}

export default Race;