import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent {
  form = this.fb.group({
    token: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]]
  });

  message?: string;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    const token = this.route.snapshot.queryParamMap.get('token');
    const email = this.route.snapshot.queryParamMap.get('email');
    if (token) this.form.patchValue({ token });
    if (email) this.form.patchValue({ email });
  }

  submit() {
    if (this.form.invalid) return;
    if (this.form.value.password !== this.form.value.confirmPassword) {
      this.message = 'Passwords do not match';
      return;
    }
    // call backend /api/auth/reset with { email, token, password }
    this.message = 'Reset request sent (implement backend endpoint).';
  }
}
