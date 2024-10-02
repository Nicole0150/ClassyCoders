const manager = require("./Employee");

class Manager extends Employee{
    #employeesManaged
    constructor(department){
        this.department = department;
        this.#employeesManaged =[];
    }
    getEmployeesManaged(){
        return this.#employeesManaged;
    }
    addEmployeeManaged(employee) {
        this.#employeesManaged.push(employee);
        return this.#employeesManaged;
    }


    
}

module.exports = {
    Manager,
}