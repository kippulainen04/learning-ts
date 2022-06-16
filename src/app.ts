class Department {
    // private readonly id: string;
    // private name: string;
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
    }

    describe (this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation () {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

// creating a department object - now we pass constructor arg to this department between () 
const accounting = new Department('d1', 'Accounting');

accounting.addEmployee('Huugo')
accounting.addEmployee('Manu')

// accounting.employees[2] = 'Anna' // this cannot be used cuz private propertu

accounting.describe();
accounting.name = 'New House';
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'Dummy', describe: accounting.describe}

// undefined cuz we are adding a describe property to this object created with object liteal
// , not based on this class. And value of described property is a pointer at the described method in accounting obj
// when the method executes, this key work wont refer to this accounting object
// this method was part of originally, not to the accounting object
// describe is called on accountingCopy and it is an object has no name property
// so when we access this.name from accounting.describe, we get an error because this doesnt refer to an object with a name.
// accountingCopy.describe();
