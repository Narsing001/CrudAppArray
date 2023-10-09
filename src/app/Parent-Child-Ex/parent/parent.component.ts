import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 public selectedjob!:string;
   public emparray:any=[
     {empno:100,ename:"Narsing",job:"Manager",deptno:"d-123" },
     {empno:101,ename:"Rocky",job:"Clerk",deptno:"d-123" },
     {empno:102,ename:"Pushpa",job:"Salesman",deptno:"d-123" },
     {empno:103,ename:"Pravin",job:"Manager",deptno:"d-123" },
     {empno:104,ename:"Prashant",job:"Clerk",deptno:"d-123" },
     {empno:105,ename:"Tushar",job:"Manager",deptno:"d-123" },
     {empno:106,ename:"Prabhat",job:"Salesman",deptno:"d-123" },
   ];
   temparray:any=[]; 

  constructor() {
    this.temparray=this.emparray;
   }
   getEmploye(){
     if(this.selectedjob=="All Employees")
     {
       this.temparray=this.emparray;
       return
     }
     this.temparray=this.emparray.filter((item:any) => item.job == this.selectedjob);
   }

  ngOnInit(): void {
  }

}
