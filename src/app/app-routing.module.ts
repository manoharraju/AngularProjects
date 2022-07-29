import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateemployeeComponent } from './employee/createemployee.component';
import { ListEmployeesComponent } from './employee/list-employees.component';
import { LoginComponent } from './employee/login.component';
const routes: Routes = [
  {path: 'list',component:ListEmployeesComponent},
  {path: 'create',component:CreateemployeeComponent},
  {path: 'login',component:LoginComponent},
  {path: '',redirectTo:'/list',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
