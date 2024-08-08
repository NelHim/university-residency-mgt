import Residence from './Residence.js';

// Apartment class, inherits from Residence
export default class Apartment extends Residence {
  constructor(name, address, bedrooms, isOccupied = false) {
    // Inherit the property of the base class
    super(name, address, isOccupied);
    this.bedrooms = bedrooms;
  }

  // Calculate the rent
  calculateRent() {
    const baseRate = 500; // Random base rate
    const bedroomRate = 200; // Random rate per bedroom
    return baseRate + this.bedrooms * bedroomRate;
  }

  // Getter function to get the details of an apartment
  get details() {
    return {
      ...super.details,
      bedrooms: this.bedrooms,
    };
  }
}
