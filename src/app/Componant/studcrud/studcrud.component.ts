import { Component, OnInit } from '@angular/core';
import { stud } from 'src/app/module/Stud';
import { isDeepStrictEqual } from 'util';

@Component({
  selector: 'app-studcrud',
  templateUrl: './studcrud.component.html',
  styleUrls: ['./studcrud.component.css']
})
export class StudcrudComponent implements OnInit {

  public Sid:number=0;
  public Sname:String="";
  public Course:String="";
  public Sage!:number;
  public Semail:string=" ";
  public isdisabled:boolean=false;
  

  public studarray:stud[]=[
   
  ]
  

  getData_Click(){
   this.studarray=[
      {Sid:1,Sname:"Narsing",Course:"MCA",Sage:22,Semail:"ss@gmail.com"},
      {Sid:2,Sname:"Pravin",Course:"BCA",Sage:20,Semail:"Pravin@gmail.com"},
      {Sid:3,Sname:"Regal",Course:"M-Com",Sage:19,Semail:"Regal@gmail.com"},
      {Sid:4,Sname:"Mohit",Course:"MCA",Sage:25,Semail:"Mohit123@gmail.com"},
    ]
  }
  addData_Click(){
  
  let stdobj:stud=new stud()
  for(let i=0;i<this.studarray.length;i++)        // Checking id it is duplicate or not 
  {
      if(this.studarray[i].Sid==this.Sid){
        this.clearfield();
        alert("Your enter id is duplicate")
        }
  }
  stdobj.Sid=this.Sid;
  stdobj.Sname=this.Sname;
  stdobj.Course=this.Course;
  stdobj.Sage=this.Sage;
  stdobj.Semail=this.Semail;
  if(this.Sid==0){                         //this is for check id 0 or duplicate
    alert("Sorry !!.. id is empty or duplicate ")
  }
  else{ 
    this.studarray.push(stdobj);
    this.clearfield();
  }
 
  }
  select_record(sid:number){
     let Sstud_data:any=this.studarray.find(item=>item.Sid==sid);
     this.Sid=Sstud_data.Sid;
     this.Sname=Sstud_data.Sname;
     this.Course=Sstud_data.Course;
     this.Sage=Sstud_data.Sage;
     this.Semail=Sstud_data.Semail;
     this.isdisabled=true;
  }
  updateData_Click(){
    let index=this.studarray.findIndex(item=>item.Sid==this.Sid)
    this.studarray[index].Sname=this.Sname;
    this.studarray[index].Course=this.Course;
    this.studarray[index].Sage=this.Sage;
    this.studarray[index].Semail=this.Semail;
    this.clearfield();
  }
  remove_record(id:number){
    let index=this.studarray.findIndex(item=>item.Sid==id)
    this.studarray.splice(index,1);
  }
  clearfield() {
    this.Sid=0;
    this. Sname="";
    this. Course="";
    this. Sage=0;
    this. Semail=" ";
    this. isdisabled=false;
  }
  constructor() { }

  ngOnInit(): void {
    this.getData_Click()
  }

  
}



