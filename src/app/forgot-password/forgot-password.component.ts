import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  form: any = {
    email: null
  };

  isSuccessful = false;
  isSendPasswordFailed = false;
  errorMessage = '';


  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { email } = this.form;


    this.authService.forgotPassword(email).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSendPasswordFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSendPasswordFailed = true;
      }
    );
  }

}
