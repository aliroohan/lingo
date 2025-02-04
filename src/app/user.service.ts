import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  async getUser() {
    const apiurl = 'https://randomuser.me/api/';
    const response = await fetch(apiurl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    } else {
      const data = await response.json();
      return data.results[0];
    }
  }
}
