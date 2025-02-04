import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-faq',
  imports: [CommonModule,],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
  faqs = [
    {
      question: 'What is Lingo Buddies?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Volutpat justo scelerisque tincidunt leo tellus quisque posuere pretium porttitor.',
    },
    {
      question: 'What is Lingo Buddies?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Volutpat justo scelerisque tincidunt leo tellus quisque posuere pretium porttitor.',
    },
    {
      question: 'What is Lingo Buddies?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Volutpat justo scelerisque tincidunt leo tellus quisque posuere pretium porttitor.',
    },
    {
      question: 'What is Lingo Buddies?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Volutpat justo scelerisque tincidunt leo tellus quisque posuere pretium porttitor.',
    },
    {
      question: 'What is Lingo Buddies?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Volutpat justo scelerisque tincidunt leo tellus quisque posuere pretium porttitor.',
    },
  ];

  rooldown(num: number) {
    const answer = document.getElementById(`a${num}`);
    const arrow = document.getElementById(`i${num}`);
    const answerp = document.getElementById(`p${num}`);

    if (answerp?.style.opacity == '0') {
      answerp?.classList.add('rolldown');
      arrow?.classList.add('rotate');
      
      console.log(answer?.style.opacity);
      answerp?.setAttribute('style', 'transform: translateY(0); opacity: 1; height: 100%;');
      arrow?.setAttribute('style', 'transform: rotate(180deg);');
      setTimeout(() => {
        answerp?.classList.remove('rolldown');
        arrow?.classList.remove('rotate');
      }, 300);
      
    } else {
      answerp?.classList.add('rollup');
      arrow?.classList.add('rotate-back');
      answerp?.setAttribute(
        'style',
        'transform: translateY(-100%); opacity: 0; height: 0;'
      );
      arrow?.setAttribute('style', 'transform: rotate(0deg);');
      console.log(answer?.style.height);
      setTimeout(() => {
        answerp?.classList.remove('rollup');
        arrow?.classList.remove('rotate-back');
      }, 300);
    }
  }


}
