class Employee {

    #salary;
    #isHired;

    constructor(name, position, salary, isHired){
        this.name = name;
        this.position = position;
        this.#salary = salary;
        this.#isHired = isHired
    }

    getSalary(){
        return this.#salary
    }

    setSalary(amount){
        this.#salary += amount
    }

    getStatus(){
        if(this.#isHired === yes){
            return true
        }else{
            return false 
        }
    }

    setStatus(command){
        if(command === "hire"){
            return true
        }else if(command === "fire"){
            return false 
        }
    }

}

module.exports = {
    Employee,
}
