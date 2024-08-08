// Student class
export default class Student {
  constructor(name, studentId, gender, residence = null) {
    this.name = name;
    this.studentId = studentId;
    this.gender = gender;
    this.residence = residence;
  }

  // Method to assign a residence to a student
  assignResidence(residence) {
    this.residence = residence;
    residence.toggleOccupied = true;
  }

  // Getter function to get the details of a student
  get details() {
    return {
      name: this.name,
      studentId: this.studentId,
      gender: this.gender,
      residence: this.residence ? this.residence.details : null,
    };
  }
}
