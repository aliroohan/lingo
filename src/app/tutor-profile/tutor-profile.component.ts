import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { ScheduleComponent } from "../schedule/schedule.component";
import { ReviewsComponent } from "../reviews/reviews.component";
import { ResumeComponent } from "../resume/resume.component";

@Component({
  selector: 'app-tutor-profile',
  imports: [CommonModule, AboutComponent, ScheduleComponent, ReviewsComponent, ResumeComponent],
  templateUrl: './tutor-profile.component.html',
  styleUrl: './tutor-profile.component.css'
})
export class TutorProfileComponent implements OnDestroy {
  about = true;
  reviews = false;
  schedule = false;
  resume = false;
  name = "";
  picture = "";

  constructor() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.name = user?.name?.first + ' ' + user?.name?.last;
    this.picture = user?.picture?.large;
  }

  ngOnDestroy(): void {
    localStorage.removeItem('user');
    localStorage.clear();
  }


  aboutClick() {
    this.about = true;
    this.reviews = false;
    this.schedule = false;
    this.resume = false;
  }

  reviewsClick() {
    this.about = false;
    this.reviews = true;
    this.schedule = false;
    this.resume = false;
  }

  scheduleClick() {
    this.about = false;
    this.reviews = false;
    this.schedule = true;
    this.resume = false;
  }

  resumeClick() {
    this.about = false;
    this.reviews = false;
    this.schedule = false;
    this.resume = true;
  }

}
