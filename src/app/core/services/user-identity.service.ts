import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserIdentityService {
  constructor() {}

  public saveUserEmail(userEmail: string) {
    this.setUserData('email', userEmail)
  }

  private setUserData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  private getUserData(key: string): string {
    const itemValue = localStorage.getItem(key)
    return itemValue;
  }
}
