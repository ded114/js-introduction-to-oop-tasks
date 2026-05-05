export default class Time {
  // BEGIN
  static fromString(string) {
    const timeFromString = string.split(':')
    const hours = Number(timeFromString[0])
    const minutes = Number(timeFromString[1])
    return new Time(hours, minutes)
  }
  // END

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}
