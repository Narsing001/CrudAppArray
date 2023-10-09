import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  @Input() empData:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
