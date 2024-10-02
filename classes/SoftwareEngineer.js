const {Employee} = require("./Employee");


class SoftwareEngineer extends Employee {
    #programmingLanguages;
    constructor(name, position, salary, isHired, programmingLanguages = []){
        super(name, position, salary, isHired);
        this.#programmingLanguages = programmingLanguages;
    }
    getProgrammingLanguages(){
        return this.#programmingLanguages;
    }
    addProgrammingLanguages(language){
        this.#programmingLanguages.push(language);
        return this.#programmingLanguages;
    }

    
}

module.exports = {
    SoftwareEngineer,
}