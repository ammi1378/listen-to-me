import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserIdentityService } from '../core/services/user-identity.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private userIdentityService: UserIdentityService, private router: Router) {}

  ngOnInit(): void {}

  submitEmail() {
    if (this.emailFormControl.valid) {
      const email = this.emailFormControl.value;
      this.userIdentityService.saveUserEmail(email);
      this.router.navigate(['/tickets'])
    } else {
      // TODO: Warn user
    }
  }
}
