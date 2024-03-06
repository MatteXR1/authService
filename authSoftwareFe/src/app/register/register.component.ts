import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  employeename: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  save() {
    let bodyData = {
      employeename: this.employeename,
      email: this.email,
      password: this.password,
    };

    this.http
      .post('http://localhost:8081/api/employee/register', bodyData, {
        responseType: 'text',
      })
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('Dipendente Registrato con Successo');
        this.router.navigateByUrl('/home');
      });

    this.employeename = '';
    this.email = '';
    this.password = '';
  }
}