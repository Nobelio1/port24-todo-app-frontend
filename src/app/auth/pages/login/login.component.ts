import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AuthService} from "../../../services/auth.service";
import {Login} from "../../../models/login.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {

  private form = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  public myForm = this.form.group({
    email:    ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
  });

  login() {
    if (this.myForm.invalid) return;
    const {email, password} = this.myForm.value;
    const user: Login = {email: email!, password: password!};

    this.authService.login(user).subscribe({
      next: () => this.router.navigateByUrl('/core'),
      error: (message) => console.log('Error', message)
    })
  }

}
