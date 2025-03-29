import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  resgiserObj: any = {
    userId: 0,
    email: '',
    password: '',
    createdDate: new Date(),
    fullName: '',
    mobileNo: '',
  };

  LoginObj: any = {
    email: '',
    password: ''
  }

  http = inject(HttpClient);
  router = inject(Router);

  onRegister(){
    debugger;
    this.http.post('https://localhost:7276/api/User/CreateUser', this.resgiserObj).subscribe((res:any) => {
      debugger;
      alert('User Created Successfully');
    },error =>{
      debugger;
      if(error.status == 400){
        alert(error.error);
      }else{
        alert('Something went wrong. Please try again later.');
      }
    });
  }

  onLogin(){
    debugger;
    this.http.post('https://localhost:7276/api/User/Login', this.LoginObj).subscribe((res:any) => {
      debugger;
      alert('Login Successfully');
      localStorage.setItem('token', JSON.stringify(res));
      this.router.navigateByUrl('user-list');
    },error =>{
      debugger;
      if(error.status == 400){
        alert(error.error);
      }else{
        alert('Something went wrong. Please try again later.');
      }
    });
  }
}