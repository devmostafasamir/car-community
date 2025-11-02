import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserProfile } from '../models/auth.models';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  profile: UserProfile | null = null;
  formReady = false;

  form = this.fb.group({
    fullName: [''],
    email: [{value: '', disabled: true}],
    phoneNumber: ['']
  });

  constructor(private auth: AuthService, private fb: FormBuilder) {}

  ngOnInit() {
    this.auth.getProfile().subscribe({
      next: (p) => {
        this.profile = p;
        this.form.patchValue({
          fullName: p.fullName,
          email: p.email,
          phoneNumber: (p as any).phoneNumber || ''
        });
        this.formReady = true;
      }
    });
  }

  save() {
    // Implement update profile backend call (e.g., /api/auth/profile/update)
    // placeholder for now
    alert('Save profile: implement API endpoint to persist changes.');
  }
}
