/**
 * 접근 제어자
 * access moifier
 * => public private proteced
 */

class Employee {
    protected name: string;
    private age: number;
    public position: string;

    constructor (name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }



    work() {
        console.log("일함")
    }
}

class ExecutiveOfficer extends Employee{
    officeNumber:number;

    constructor (
        name:string,
        age:number,
        position:string,
        officeNumber : number   
    ) {
        super(name, age, position)
        this.officeNumber = officeNumber
    }
}

const employee = new Employee("이정환",27,"developer")

employee.name = "홍길동"
employee.age = 30
employee.position = "디자이너"