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


class ITDepartment extends Department{
    admins: string[]
    constructor(id: string, admins: string[]) {
        super(id, 'IT')
        this.admins = admins
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'IT')
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    getReports() {
        console.log(this.reports);
    }
}


// creating a department object - now we pass constructor arg to this department between () 
const it = new ITDepartment('d1', ['Nio']);

it.addEmployee('Huugo')
it.addEmployee('Manu')

// it.employees[2] = 'Anna' // this cannot be used cuz private propertu

it.describe();
it.name = 'New House';
it.printEmployeeInformation();

console.log(it)

const accounting = new AccountingDepartment('d2', []);
accounting.addReport('Something went wrong...');
accounting.getReports();

// const itCopy = { name: 'Dummy', describe: it.describe}

// undefined cuz we are adding a describe property to this object created with object liteal
// , not based on this class. And value of described property is a pointer at the described method in it obj
// when the method executes, this key work wont refer to this it object
// this method was part of originally, not to the it object
// describe is called on itCopy and it is an object has no name property
// so when we access this.name from it.describe, we get an error because this doesnt refer to an object with a name.
// itCopy.describe();
