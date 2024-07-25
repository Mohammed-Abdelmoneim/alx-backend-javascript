export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
    this.isValid();
  }

  isValid() {
    if (typeof this._name !== 'string') {
      throw new Error('Name must be a string');
    }
    if (typeof this._length !== 'number' || Number.isNaN(this._length)) {
      throw new Error('Length must be a number');
    }
    if (!Array.isArray(this._students)) {
      throw new Error('Students must be an array');
    }
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
    this.isValid();
  }

  get length() {
    return this._length;
  }

  set length(newLen) {
    this._length = newLen;
    this.isValid();
  }

  get students() {
    return this._students;
  }

  set students(newSt) {
    this._students = newSt;
    this.isValid();
  }
}
