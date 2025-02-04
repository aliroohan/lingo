import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  experience = [
    {
      head: "English Tutor, ABC Company (2018-2023)",
      exp: "Lorem ipsum dolor sit amet consectetur. Pulvinar purus in sed sit proin viverra viverra nunc. Lorem ipsum dolor sit amet consectetur."
    },
    {
      head: "English Tutor, ABC Company (2018-2023)",
      exp: "Lorem ipsum dolor sit amet consectetur. Pulvinar purus in sed sit proin viverra viverra nunc. Lorem ipsum dolor sit amet consectetur."
    },
    {
      head: "English Tutor, ABC Company (2018-2023)",
      exp: "Lorem ipsum dolor sit amet consectetur. Pulvinar purus in sed sit proin viverra viverra nunc. Lorem ipsum dolor sit amet consectetur."
    },
    {
      head: "English Tutor, ABC Company (2018-2023)",
      exp: "Lorem ipsum dolor sit amet consectetur. Pulvinar purus in sed sit proin viverra viverra nunc. Lorem ipsum dolor sit amet consectetur."
    },
  ]
}
