import { Component, OnInit } from '@angular/core';
import {  FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formErrors = {
    'fullName': '',
    'email': '',
    'skillName': '',
    'experienceInYears': '',
    'proficiency': ''
  };
  validationMessages = {
    'fullName': {
      'required': 'Full Name is required.',
      'minlength': 'Full Name must be greater than 2 characters.',
      'maxlength': 'Full Name must be less than 2 characters.',
    },
    'email': {
      'required': 'Email is required.'
    },
    'skillName': {
      'required': 'Skill Name is required.',
    },
    'experienceInYears': {
      'required': 'Experience is required.',
    },
    'proficiency': {
      'required': 'Proficiency is required.',
    },
  };
  
  employeeform!:FormGroup
  constructor(private fb:FormBuilder) {

   }

   ngOnInit() {

    this.employeeform = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: ['', Validators.required],
      skills: this.fb.group({
        skillName: ['', Validators.required],
        experienceInYears: ['', Validators.required],
        proficiency: ['', Validators.required]
      }),
    });
  
    // When any of the form control value in employee form changes
    // our validation function logValidationErrors() is called
    this.employeeform.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.employeeform);
    });
  
  }

  logValidationErrors(group: FormGroup = this.employeeform): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      } else {
        this.formErrors[key]="";
        if (abstractControl && !abstractControl.valid
            && (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.validationMessages[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey] + ' ';
            }
          }
        }
      }
    });
  }

  logKeyValuePairs(group:FormGroup):void{
    Object.keys(group.controls).forEach((key:string)=>{
     const abstractControl=group.get(key);
    if(abstractControl instanceof FormGroup){
      abstractControl.disable();
    this.logKeyValuePairs(abstractControl)
    }
    else{
   
    console.log('Value = '+ abstractControl?.value);
    }
  });
}
onLoadDataClick() : void {
  this.logKeyValuePairs(this.employeeform)
  }
    
  // onLoadDataClick():void{
  //   this.employeeform.patchValue({
  //     fullname:"manohar",
  //     email:"h@gmail.com",
  //     skills:{
  //       skillName:"C#",
  //       expereinceinyear:5,
  //       Proficiency:"expert"
  
  //     }
  //   })
  //  }

  onSubmit():void{
    console.log(this.employeeform);
     }
}
