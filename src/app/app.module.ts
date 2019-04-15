import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { ForgotPassword } from './forgotpassword/forgotpassword.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'

const appRoutes: Routes = [
   { path: '', redirectTo: "/login", pathMatch: 'full' },
   { path: 'login', component: LoginComponent },
   { path: 'registration', component: RegistrationComponent },
   { path: 'forgotpassword', component: ForgotPassword },
   { path: 'dashboard', component: DashboardComponent }

];


@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
    ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    LoginComponent,
    RegistrationComponent ,
    ForgotPassword,
    DashboardComponent
    ],
  bootstrap: [    
    AppComponent 
    ]
})
export class AppModule { 

}
