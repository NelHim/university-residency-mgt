// Base class for all the residences
export default class Residence {
  constructor(name, address, isOccupied = false) {
    this.name = name;
    this.address = address;
    this.isOccupied = isOccupied;
  }

  // Getter function to retrieve the details
  get details() {
    return {
      name: this.name,
      address: this.address,
      isOccupied: this.isOccupied,
    };
  }

  // Setter function to set if the residence is occupied or not
  set toggleOccupied(status) {
    if (typeof status !== 'boolean')
      throw new Error('Status should be either true or false');
    this.isOccupied = status;
  }
}
