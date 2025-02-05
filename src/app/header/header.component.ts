import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router:Router) {}
  redirectToHome() {
    this.router.navigate(['/']);
  }
  openNav() {
    const sidePanel = document.getElementById("mySidepanel");
    if (sidePanel) {
      sidePanel.style.width = "250px";
    }
  }
  closeNav() {
    const sidePanel = document.getElementById("mySidepanel");
    if (sidePanel) {
      sidePanel.style.width = "0";
    }
  }
}
