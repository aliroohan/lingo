import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleService } from '../schedule.service';


@Component({
  selector: 'app-schedule',
  imports: [
    CommonModule,
  ],
  standalone: true,
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {
  schedule: any[] = [];
  fiftymin = true;
  constructor(private scheduleService: ScheduleService) {
    this.schedule = this.scheduleService.getSchedule();
    console.log(this.schedule);
  }

  setfifty() {
    this.fiftymin = true;
  }

  setTwentyFive() {
    this.fiftymin = false;
  }


}
