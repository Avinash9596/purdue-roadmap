import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {

  username:any="";
  constructor(private router:Router) { }

  ngOnInit() {
  }

  signin(){
    // localStorage.setItem('User',"");
    localStorage.setItem("User",this.username!=null && this.username != ''?this.username.trim():"INVALID");
    console.log(localStorage.getItem("User"));
    return true;
  }

}
