import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(private router: Router) {}
  @Input() user!: any;
  openProfile(user:any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/tutor']);
  }
}
