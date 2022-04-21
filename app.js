'use strict';
function Employee (EmployeeID , FullName , Department , Level , ImageURL , Salary){
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL = ImageURL;
    this.Salary = Salary ;

}
Employee.prototype.render = function(){
    if(this.level=="Junior")
    {this.salary = Math.floor((Math.random() * 2000) + 1500);
        
         

    }else if(this.Level=="Mid-Senior")
    {
        this.Salary = Math.floor((Math.random() * 1500) + 1000);

    }else
     {
        this.Salary = Math.floor((Math.random() * 1000) + 500);

     }


    document.write(`the name of emplyee is ${this.FullName} and the salary is ${this.salary} ######   `);
    
    
    

}
let gazi = new Employee(1000,"Ghazi Samer","Administration","Senior","./assets/dep.png");
let lana = new Employee (1001,	"Lana Ali" ,"Finance","	Senior","./assets/dep.png",3000);
let tamara = new Employee(1002,	"Tamara Ayoub","Marketing","Senior","./assets/dep.png",1000);
let safi = new Employee(1003,"Safi Walid","	Administration","Mid-Senior","assets/dep.png",4000);
let omar = new Employee(1004,"Omar Zaid	","Development","Senior","assets/dep.png",4000);
let rana = new Employee(1005,"Rana Saleh","	Development	Junior","assets/dep.png",4000);
let hadi = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior","assets/dep.png",4000);








gazi.render();
lana.render();
tamara.render();
safi.render();
omar.render();
rana.render();
hanadi.render();