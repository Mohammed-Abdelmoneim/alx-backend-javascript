import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get sqft() {
    return super.sqft;
  }

  set sqft(n) {
    super.sqft = n;
  }

  get floors() {
    return this._floors;
  }

  set floors(flo) {
    this._floors = flo;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
