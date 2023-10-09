import { Component, OnInit } from '@angular/core';
import { dept } from 'src/app/module/Dept';

@Component({
  selector: 'app-crud-opd-op',
  templateUrl: './crud-opd-op.component.html',
  styleUrls: ['./crud-opd-op.component.css']
})
export class CrudOpdOpComponent implements OnInit {
  deptno:number=0;
  dname:string="";
  dcity:string="";
  isDisabled:boolean=false;
  
  public deptsArray:dept[]=[];
  

  constructor() { 
    this.getDepts_click()
  }

  ngOnInit(): void {
    console.log("ngOnInit Call");
  }
  getDepts_click(){
    this.deptsArray=[
      {deptno:10,dname:"Accountant",dcity:"Latur"},
      {deptno:20,dname:"Sales",dcity:"Chakur"},
      {deptno:30,dname:"Operations",dcity:"Pune"},
      {deptno:40,dname:"Marketing",dcity:"Mumbai"},
    ];
  }
  addDepts_click(){
    let deptobj:dept=new dept();
    deptobj.deptno=this.deptno;
    deptobj.dname=this.dname;
    deptobj.dcity=this.dcity;
    this.deptsArray.push(deptobj);
    this.clearFields();
  }
  removeDepts_click(dno:any){
         let index=this.deptsArray.findIndex(item=> item.deptno==dno)
         this.deptsArray.splice(index,1);
  }
  selectDepts_click(dno:number){
     let deptobj:any=this.deptsArray.find(item=>item.deptno==dno);
     this.deptno=deptobj.deptno;
     this.dname=deptobj.dname;
     this.dcity=deptobj.dcity;
     this.isDisabled=true;

  }
  update_click(){
    let index =this.deptsArray.findIndex(item=> item.deptno == this.deptno);
    this.deptsArray[index].dname=this.dname;
    this.deptsArray[index].dcity=this.dcity;
    this.clearFields();
  }
  clearFields() {
    this.deptno=0;
    this.dname="";
    this.dcity="";
  }
 
}
