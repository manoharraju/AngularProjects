import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {
  
  employeeForm!:FormGroup;
  constructor() { }

  ngOnInit() {
    this.employeeForm=new FormGroup({
      fullname:new FormControl(),
      email:new FormControl(),
      //nested form froup
      skills:new FormGroup({
        skillName:new FormControl(),
        expereinceinyear:new FormControl(),
        Proficiency:new FormControl()

      })
    });
  }
 onSubmit():void{
console.log(this.employeeForm);
 }
 onLoadDataClick():void{
  this.employeeForm.patchValue({
    fullname:"manohar",
    email:"h@gmail.com",
    skills:{
      skillName:"C#",
      expereinceinyear:5,
      Proficiency:"expert"

    }
  })
 }
}
