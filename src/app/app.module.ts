import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateemployeeComponent } from './employee/createemployee.component';
import { ListEmployeesComponent } from './employee/list-employees.component';
import { LoginComponent } from './employee/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateemployeeComponent,
    ListEmployeesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
