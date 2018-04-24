import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';
import { IUser } from '../../shared/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    this.authService.login(form.value)
      .subscribe(
        (response: IUser) => console.log(response),
        (error) => console.log(error)
      );
  }
}
