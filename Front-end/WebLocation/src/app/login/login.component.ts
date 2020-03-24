import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';
import {faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faLock } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faEnvelope = faEnvelope;
  faLock = faLock;

  constructor(private _loginService: LoginService, private router: Router) { }
  loginModel = new User ('', '' );
  loading = false;
  alertMsg = false;


  ngOnInit() {
  }


  onLogin(){
    this.loading = true;
    this._loginService.login(this.loginModel).subscribe((data: any)  =>{
      if (data === null){
        this.loading = false;
        this.alertMsg = true;
      }

      else{
        console.log(data);  
        this.router.navigateByUrl('/locationlist');
        localStorage.setItem('token', data);
      }});
    }

}
