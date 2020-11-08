import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor( private fb: FormBuilder, private authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      user: this.fb.control(
        '',
        {
          validators: [
            Validators.required,
          ]
        }
      ),
      password: this.fb.control(
        '',
        {
          validators: [
            Validators.required,
          ]
        }
      ),
    });
  }

  onSubmit(): void {
    const user = this.loginForm.get('user').value;
    const password = this.loginForm.get('password').value;

    const data = {
      user,
      password
    };

    this.authService.login(data);
    }
}
