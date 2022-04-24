'use strict';
let allEmployee=[];
let formEL = document.getElementById("formID");
let main =document.getElementById("mainID") ; 
let id=999;

function Employee (  FullName , Department , Level , ImageURL){
    
    this.employeeID = unique();
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
     
    //   document.write(`the name of emplyee is ${this.fullName} and employee number is ${this.employeeID}  and the salary ${this.salary} `);  
 let image= document.createElement("img");
 image.src=this.imageURL;
 image.style.width="150px";
 main.appendChild(image);

    
let name = document.createElement("p");  
name.textContent= `Name :${ this.fullName}`;

 main.appendChild(name);
// create image

let id = document.createElement("p");  
id.textContent= this.employeeID;
 main.appendChild(id);
 
 // departmet
 let depar = document.createElement("P");
 depar.textContent = this.department;
 main.appendChild(depar);
   

 // level
 let level = document.createElement("p");
 level.textContent=this.level;
 main.appendChild(level);

 //salary
 let salary=document.createElement("p");
 salary.textContent=`the salary is ${this.salary}`;
 main.appendChild(salary);
 //unique number
 //let unnumber = document.createElement("P");
 //unnumber.textContent=this.uniqueNumber();
 //main.appendChild(unnumber);







}



let employee1 = new Employee("Ghazi Samer","Administration","Senior","./assets/Ghazi.jpg");
let employee2 = new Employee ("Lana Ali" ,"Finance","	Senior","./assets/Lana.jpg");
let employee3 = new Employee("Tamara Ayoub","Marketing","Senior","./assets/Tamara.jpg");
let employee4 = new Employee("Safi Walid","Administration","Mid-Senior","./assets/Safi.jpg");
let employee5 = new Employee("Omar Zaid	","Development","Senior","./assets/Omar.jpg");
let employee6 = new Employee("Rana Saleh","Development","Junior","./assets/Rana.jpg");
let employee7 = new Employee("Hadi Ahmad","Finance","Mid-Senior","./assets/Hadi.jpg");


formEL.addEventListener("submit" , handleSubmit);
function handleSubmit (event)
{
    
    event.preventDefault();
    let employeeID = event.target.employeeID.value;
    let fullName = event.target.fname.value;
    let department = event.target.department.value;  
    let level = event.target.level.value;  
    let imageURL = event.target.image.value; 
    let newEmployee = new Employee (employeeID,fullName , department ,level , imageURL);
    newEmployee.render();

 
} 





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
    
function unique ()
{
    id++;
    return id;
    

}












    
    






