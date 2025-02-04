import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  reviews = [
    {
      name: "John",
      comment: "Lorem ipsum dolor sit amet consectetur. Pulvinar purus in sed sit proin viverra viverra nunc."
    },
    {
      name: "John",
      comment: "Lorem ipsum dolor sit amet consectetur. Pulvinar purus in sed sit proin viverra viverra nunc."
    },
    {
      name: "John",
      comment: "Lorem ipsum dolor sit amet consectetur. Pulvinar purus in sed sit proin viverra viverra nunc."
    },
    {
      name: "John",
      comment: "Lorem ipsum dolor sit amet consectetur. Pulvinar purus in sed sit proin viverra viverra nunc."
    },
    {
      name: "John",
      comment: "Lorem ipsum dolor sit amet consectetur. Pulvinar purus in sed sit proin viverra viverra nunc."
    },
    {
      name: "John",
      comment: "Lorem ipsum dolor sit amet consectetur. Pulvinar purus in sed sit proin viverra viverra nunc."
    },

  ]
}
