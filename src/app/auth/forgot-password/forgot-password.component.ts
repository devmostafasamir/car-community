import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { finalize } from 'rxjs';
import { ForgotPasswordRequest } from '../models/auth.models';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.scss']
})
export class ForgotPasswordComponent {
  form: FormGroup;
  loading = false;
  submitted = false;
  message?: string;
  error?: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submit() {
    if (this.form.invalid) return;
    
    this.loading = true;
    this.submitted = true;
    this.error = undefined;
    
    this.authService.forgotPassword({ 
      email: this.form.value.email! 
    } as ForgotPasswordRequest)
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: () => {
          this.message = 'If the email exists, a reset link will be sent.';
          this.form.reset();
        },
        error: (err) => {
          console.error('Forgot password failed:', err);
          this.error = 'Failed to process request. Please try again later.';
        }
      });
  }
}
