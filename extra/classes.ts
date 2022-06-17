abstract class Department {
    static fistcalYear = 2020;
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
        // console.log(Department.fistcalYear)
    }

    static createEmployee(name: string) {
        return {name: name}
    }

    abstract describe (this: Department): void; 
    // {
    //     // console.log(`Department (${this.id}): ${this.name}`);
    // }

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

    describe() {
        console.log('It Department - ID: ' + this.id);
    }
}

class AccountingDepartment extends Department {
    // we store an accounting department instance
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport;
        }
        throw new Error ('No report found.')
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please pass in a valid value!')
        }
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'IT')
        this.lastReport = reports[0]
    }
    // check if we already have an instance of this class, and if not, return a new one
    static getInstance() {
        if(AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', [])
        return this.instance
    }

    describe() {
        console.log('Accounting Department - ID:' + this.id);
    }

    addEmployee(name: string) {
        if(name === 'Nio') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

const employee1 = Department.createEmployee('Mina');
console.log(employee1, Department.fistcalYear)

// creating a department object - now we pass constructor arg to this department between () 
const it = new ITDepartment('d1', ['Nio']);

it.addEmployee('Huugo')
it.addEmployee('Manu')

// it.employees[2] = 'Anna' // this cannot be used cuz private propertu

it.describe();
it.name = 'New House';
it.printEmployeeInformation();

console.log(it)

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance()
const accounting2 = AccountingDepartment.getInstance()

console.log(accounting, accounting2)

accounting.mostRecentReport = 'Year End Report'
accounting.addReport('Something went wrong...');

console.log(accounting.mostRecentReport)

accounting.addEmployee('Nio')
accounting.addEmployee('Manu')

// accounting.printEmployeeInformation();
// accounting.printReports();
accounting.describe();

// const itCopy = { name: 'Dummy', describe: it.describe}

// undefined cuz we are adding a describe property to this object created with object liteal
// , not based on this class. And value of described property is a pointer at the described method in it obj
// when the method executes, this key work wont refer to this it object
// this method was part of originally, not to the it object
// describe is called on itCopy and it is an object has no name property
// so when we access this.name from it.describe, we get an error because this doesnt refer to an object with a name.
// itCopy.describe();
