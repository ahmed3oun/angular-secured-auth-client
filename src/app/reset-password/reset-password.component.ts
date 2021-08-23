import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  form: any = {
    newPassword: null,
    confirmedPassword : null
  };

  isSuccessful = false;
  isChangePasswordFailed = false;
  errorMessage = '';
  token : string = '' ;

  constructor(private authService : AuthService , private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.token = params.token ;
    })
  }

  onSubmit():void {
    const { newPassword,confirmedPassword } = this.form;
    console.log(newPassword+" "+ confirmedPassword);


    this.authService.resetPassword(newPassword , confirmedPassword , this.token).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isChangePasswordFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isChangePasswordFailed = true;
      }
    );
  }

}
