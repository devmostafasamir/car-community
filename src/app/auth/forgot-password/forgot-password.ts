import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  submitted = false;
  message?: string;

  constructor(private fb: FormBuilder) {}

  submit() {
    if (this.form.invalid) return;
    this.submitted = true;
    // call backend /api/auth/forgot -> send email
    this.message = 'If the email exists, a reset link will be sent.';
  }
}
