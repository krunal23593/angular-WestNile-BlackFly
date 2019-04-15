import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector : 'forgotpassword',
  templateUrl : './forgotpassword.component.html',
  styleUrls : [ './forgotpassword.component.css' ]
})

export class ForgotPassword implements OnInit{
  
  forgotPassword: FormGroup;
  isSuccess : Boolean = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private fb : FormBuilder){

  }
  
  get email() { return this.forgotPassword.get('email');}

  ngOnInit(){
     this.forgotPassword =this.fb.group({
        email :  ["", [Validators.required, Validators.pattern(this.emailPattern)]],
    });
  }

  ngClick(value){
    if(!this.isSuccess)
    {
       this.isSuccess = true;
    }
  }
}
