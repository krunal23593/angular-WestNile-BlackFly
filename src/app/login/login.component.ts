import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, FormBuilder ,Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector : 'login',
  templateUrl : './login.component.html',
  styleUrls : [ './login.component.css' ]
})

export class LoginComponent implements OnInit{

loginForm: FormGroup;
emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

constructor(private fb : FormBuilder, private router : Router){   
}

createForm() { 
}

ngOnInit(){
    this.loginForm =this.fb.group({
        userName : [ '', Validators.required ],
        password : [ '', Validators.required ]
    });
}

get userName() { return this.loginForm.get('userName');}
get password() { return this.loginForm.get('password');}

ngLogin(value){
  console.log('username : ' + value.userName, 'password :' + value.password);
   localStorage.setItem('currentUser', JSON.stringify({ userName: value.userName, password: value.password }));
    this.router.navigate(['/dashboard']);
  
}
}

