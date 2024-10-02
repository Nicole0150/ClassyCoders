const { Employee } = require("./Employee");

class Manager extends Employee{
    #employeesManaged
    constructor(name, position, salary, isHired, department){
        super(name, position, salary, isHired)
        this.department = department;
        this.#employeesManaged =[];
    }
    getEmployeesManaged(){
        return this.#employeesManaged;
    }
    setEmployeesManaged(employee) {
        this.#employeesManaged.push(employee);
        return this.#employeesManaged;
    }


    
}

module.exports = {
    Manager,
}