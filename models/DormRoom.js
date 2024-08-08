import Residence from './Residence.js';

// DormRoom class, inherits from Residence
export default class DormRoom extends Residence {
  constructor(name, address, size, isOccupied) {
    // Inherit the properties of the parent class
    super(name, address, isOccupied);
    this.size = size; // in square footage
  }

  // Method to calculate the rent
  calculateRent() {
    const ratePerSquareRoot = 2; // Random rate
    return this.size * ratePerSquareRoot;
  }

  // Getter function to return the details of a dorm
  get details() {
    return {
      ...super.details,
      size: this.size,
    };
  }
}
