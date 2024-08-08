export default class MaintenanceRequest {
  // Initialize the properties of the class
  constructor(description, student, status = 'submitted', employee = null) {
    this.description = description;
    this.student = student;
    this.status = status;
    this.employee = employee;
  }

  // Method to update the status of a maintenance request
  updateStatus(status) {
    this.status = status;
  }
  // Method to assign an employee to the request
  assignEmployee(employee) {
    this.employee = employee;
  }

  // Getter function to get the details of the request
  get details() {
    return {
      description: this.description,
      student: this.student.details,
      status: this.status,
      employee: this.employee,
    };
  }
}
