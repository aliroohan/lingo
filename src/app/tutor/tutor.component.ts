import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { TutorProfileComponent } from "../tutor-profile/tutor-profile.component";
import { FaqComponent } from "../faq/faq.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-tutor',
  imports: [HeaderComponent, TutorProfileComponent, FaqComponent, FooterComponent],
  templateUrl: './tutor.component.html',
  styleUrl: './tutor.component.css'
})
export class TutorComponent {
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
