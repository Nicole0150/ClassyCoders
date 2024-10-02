class Employee {

    #salary;
    #isHired;
    static #allEmployees =[]
    

    constructor(name, position, salary){
        this.name = name;
        this.position = position;
        this.#salary = salary;
        this.#isHired = true;
        Employee.#allEmployees.push(this);
    }
    static getEmployees(){
        return this.#allEmployees;
    }

    static getTotalPayroll(){
        let total = 0;
        for (let i=0; i<this.#allEmployees.length;i++){
            let employee = this.#allEmployees[i];
            total += employee.#salary;

        }
        return total;
    }

    getSalary(){
        return this.#salary
    }

    setSalary(amount){
        return this.#salary = amount
    }

    getStatus(){
        return this.#isHired;
    }

    setStatus(command){
        if(command === "hire"){
            this.#isHired = true;
        }else if(command === "fire"){
            this.#isHired = false;
        }
    }

}

module.exports = {
    Employee,
}
