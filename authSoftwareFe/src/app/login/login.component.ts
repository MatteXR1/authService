import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  login() {
    let bodyData = {
      email: this.email,
      password: this.password,
    };

    this.http
      .post('http://localhost:8081/api/employee/login', bodyData)
      .subscribe((resultData: any) => {
        console.log(this.email);
        console.log(this.password);

        if (resultData.message == 'Email not exits') {
          alert('Email not exits');
        } else if (resultData.message == 'Login Success') {
          console.log(resultData);
          this.router.navigateByUrl('/home');
        } else {
          alert('Incorrect Email and Password not match');
        }
      });
  }
}
