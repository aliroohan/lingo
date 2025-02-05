import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-find-lingo',
  imports: [CommonModule, FormsModule, CardComponent],
  standalone: true,
  templateUrl: './find-lingo.component.html',
  styleUrl: './find-lingo.component.css',
})
export class FindLingoComponent {
  isloading = true;
  countries = [
    "United States", "Canada", "Mexico", "Brazil", "United Kingdom", 
    "Germany", "France", "Italy", "Spain", "Netherlands", 
    "Australia", "India", "China", "Japan", "South Korea", 
    "Russia", "South Africa", "Egypt", "Turkey", "Argentina"
  ];
  search = '';
  main: any = [];
  users: any = [];
  constructor(private user: UserService, private router: Router) {
    this.getMore();
  }

  work() {
    console.log(this.search);
  }
  
  async getMore() {
    const users:any = [];
    for (let i = 0; i < 10; i++) {
      await this.user.getUser().then((data) => {
        const { name, picture } = data;
        users.push({ name, picture });
        
      });
    }
    this.main.push(...users);
    this.users = this.main;
    this.isloading = false;
  }

  viewMore() {
    this.isloading = true;
    this.getMore();

  }

  searchUser() {
    this.users = this.main.filter((user:any) => {
      return (user.name.first + user.name.last).toLowerCase().includes(this.search.toLowerCase());
    });
  }

  openProfile(user:any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/tutor']);
  }
}
