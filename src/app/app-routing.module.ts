import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudOpdOpComponent } from './Componant/crud-opd-op/crud-opd-op.component';
import { StudcrudComponent } from './Componant/studcrud/studcrud.component';
import { EmpComponent } from './Parent-Child-Ex/emp/emp.component';
import { ParentComponent } from './Parent-Child-Ex/parent/parent.component';

const routes: Routes = [
  {path:'',redirectTo:'/stud',pathMatch:"full"},
  {path:'stud',component:StudcrudComponent},
  {path:'crud-opd',component:CrudOpdOpComponent},
  {path:'dtfilter',component:ParentComponent},
  {path:'emp',component:EmpComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
