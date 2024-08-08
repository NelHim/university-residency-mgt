import DormRoom from './classes/DormRoom.js';
import Apartment from './classes/Apartment.js';
import Student from './classes/Student.js';
import MaintenanceRequest from './classes/MaintenanceRequest.js';

const dorm = new DormRoom("Gerald's Residence", 'Kigali, AZAM', 120);
const apartment = new Apartment(102, 'KG 135 st', 3);
const student = new Student('Paul Ishimwe', '1234456', 'Male');

student.assignResidence(dorm);
const request = new MaintenanceRequest('Leaky faucet', student);

console.log(`Student details: ${student.details}`);
console.log(`Student request: ${request.details}`);

console.log(`Rent for dorm: $${dorm.calculateRent()}`);
console.log(`Rent for apartment: $${apartment.calculateRent()}`);
