import { Component, OnInit } from '@angular/core'

@Component({
  selector : 'dashboard',
  templateUrl : './dashboard.component.html',
  styleUrls : [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit{

private currentUser : any[];

constructor(){

}
ngOnInit(){
  // access the user through local storage or also you can access token here
  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
}


} 