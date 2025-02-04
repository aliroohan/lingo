import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { find } from 'rxjs';
import { FindLingoComponent } from '../find-lingo/find-lingo.component';
import { FaqComponent } from '../faq/faq.component';

@Component({
  selector: 'app-lingo',
  imports: [HeaderComponent, FooterComponent, FindLingoComponent, FaqComponent],
  templateUrl: './lingo.component.html',
  styleUrl: './lingo.component.css'
})
export class LingoComponent {

}
