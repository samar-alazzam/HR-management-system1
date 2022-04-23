'use strict';
let allEmployee=[];
function Employee (EmployeeID , FullName , Department , Level , ImageURL){
    this.employeeID = EmployeeID;
    this.fullName = FullName;
    this.department = Department;
    this.level = Level;
    this.imageURL = ImageURL;
    this.salary=0;
    allEmployee.push(this);
    

}

        
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
Employee.prototype.netSalary=function(){
    if(this.level === "Junior")
    {
        this.salary=getRndInteger(500,1000)
        this.salary=this.salary * (1-0.075);
   
    }
    else if(this.level === "Mid-Senior")
    {
        this.salary=getRndInteger(1000,1500)
        this.salary=this.salary * (1-0.075);

    }
    else if(this.level === "Senior" )
    {
        this.salary=getRndInteger(1500,2000)
        this.salary=this.salary * (1-0.057);

    }
   
}
Employee.prototype.render=function(){
     
      document.write(`the name of emplyee is ${this.fullName} and the salary   ${this.salary} `);       
        
    }



let employee1 = new Employee(1000,"Ghazi Samer","Administration","Senior","./assets/dep.png");
let employee2 = new Employee (1001,	"Lana Ali" ,"Finance","	Senior","./assets/dep.png");
let employee3 = new Employee(1002,	"Tamara Ayoub","Marketing","Senior","./assets/dep.png");
let employee4 = new Employee(1003,"Safi Walid","Administration","Mid-Senior","assets/dep.png");
let employee5 = new Employee(1004,"Omar Zaid	","Development","Senior","assets/dep.png");
let employee6 = new Employee(1005,"Rana Saleh","Development","Junior","assets/dep.png");
let employee7 = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior","assets/dep.png");

// employee1.netSalary();
// employee1.render();
// employee2.netSalary();
// employee2.render();
// employee3.netSalary();
// employee3.render();
// employee4.netSalary();
// employee4.render();
// employee5.netSalary();
// employee5.render();
// employee6.netSalary();
// employee6.render();
// employee7.netSalary();
// employee7.render();

for (let i = 0; i < allEmployee.length; i++) {
    allEmployee[i].netSalary();
    allEmployee[i].render();
    
}





    
    






