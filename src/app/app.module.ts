import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudOpdOpComponent } from './Componant/crud-opd-op/crud-opd-op.component';
import {FormsModule} from '@angular/forms';
import { ParentComponent } from './Parent-Child-Ex/parent/parent.component';
import { EmpComponent } from './Parent-Child-Ex/emp/emp.component';
import { StudcrudComponent } from './Componant/studcrud/studcrud.component';



@NgModule({
  declarations: [
    AppComponent,
    CrudOpdOpComponent,
    ParentComponent,
    EmpComponent,
    StudcrudComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
