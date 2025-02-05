import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-schedule',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css',
})
export class ScheduleComponent {
  times = [
    ["6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"],
    ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"],
    ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM"],
    ["7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM"],
    ["8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM"],
  ];
  startDate = new Date('December 2, 2023');
  endDate = new Date('December 8, 2023');
  months = [
    {
      mon: 'Jan',
      days: 31,
    },
    {
      mon: 'Feb',
      days: 28,
    },
    {
      mon: 'Mar',
      days: 31,
    },
    {
      mon: 'Apr',
      days: 30,
    },
    {
      mon: 'May',
      days: 31,
    },
    {
      mon: 'Jun',
      days: 30,
    },
    {
      mon: 'Jul',
      days: 31,
    },
    {
      mon: 'Aug',
      days: 31,
    },
    {
      mon: 'Sep',
      days: 30,
    },
    {
      mon: 'Oct',
      days: 31,
    },
    {
      mon: 'Nov',
      days: 30,
    },
    {
      mon: 'Dec',
      days: 31,
    },
  ];

  schedule: any[] = [];
  fiftymin = true;
  date =
    this.startDate.toDateString().split(' ')[1] +
    ' ' +
    this.startDate.toDateString().split(' ')[2] +
    '-' +
    this.endDate.toDateString().split(' ')[2] +
    ', ' +
    this.startDate.toDateString().split(' ')[3];
  constructor(private scheduleService: ScheduleService) {
    this.schedule = this.scheduleService.getSchedule();
    console.log(this.schedule);
  }

  onNextWeek() {
    this.startDate = new Date(
      this.startDate.setDate(this.startDate.getDate() + 7)
    );
    this.endDate = new Date(this.endDate.setDate(this.endDate.getDate() + 7));
    if (this.startDate.getFullYear() != this.endDate.getFullYear()) {
      this.date =
        this.startDate.toDateString().split(' ')[1] +
        ' ' +
        this.startDate.toDateString().split(' ')[2] +
        ', ' +
        this.startDate.toDateString().split(' ')[3] +
        '-' +
        this.endDate.toDateString().split(' ')[1] +
        ' ' +
        this.endDate.toDateString().split(' ')[2] +
        ', ' +
        this.endDate.toDateString().split(' ')[3];
    } else if (this.startDate.getMonth() != this.endDate.getMonth()) {
      this.date =
        this.startDate.toDateString().split(' ')[1] +
        ' ' +
        this.startDate.toDateString().split(' ')[2] +
        '-' +
        this.endDate.toDateString().split(' ')[1] +
        ' ' +
        this.endDate.toDateString().split(' ')[2] +
        ', ' +
        this.startDate.toDateString().split(' ')[3];
    } else {
      this.date =
        this.startDate.toDateString().split(' ')[1] +
        ' ' +
        this.startDate.toDateString().split(' ')[2] +
        '-' +
        this.endDate.toDateString().split(' ')[2] +
        ', ' +
        this.startDate.toDateString().split(' ')[3];
    }
    this.changeTimes();
  }

  onPrevWeek() {
    
    this.startDate = new Date(
      this.startDate.setDate(this.startDate.getDate() - 7)
    );
    this.endDate = new Date(this.endDate.setDate(this.endDate.getDate() - 7));
    if (this.startDate.getFullYear() != this.endDate.getFullYear()) {
      this.date =
        this.startDate.toDateString().split(' ')[1] +
        ' ' +
        this.startDate.toDateString().split(' ')[2] +
        ', ' +
        this.startDate.toDateString().split(' ')[3] +
        '-' +
        this.endDate.toDateString().split(' ')[1] +
        ' ' +
        this.endDate.toDateString().split(' ')[2] +
        ', ' +
        this.endDate.toDateString().split(' ')[3];
    } else if (this.startDate.getMonth() != this.endDate.getMonth()) {
      this.date =
        this.startDate.toDateString().split(' ')[1] +
        ' ' +
        this.startDate.toDateString().split(' ')[2] +
        '-' +
        this.endDate.toDateString().split(' ')[1] +
        ' ' +
        this.endDate.toDateString().split(' ')[2] +
        ', ' +
        this.startDate.toDateString().split(' ')[3];
    } else {
      this.date =
        this.startDate.toDateString().split(' ')[1] +
        ' ' +
        this.startDate.toDateString().split(' ')[2] +
        '-' +
        this.endDate.toDateString().split(' ')[2] +
        ', ' +
        this.startDate.toDateString().split(' ')[3];
    }
    this.changeTimes();
  }

  changeTimes() {
    let d = this.startDate.getDate();
    for (let i = 0; i < this.schedule.length; i++) {
      console.log(d);
      let monthDays = this.months[this.startDate.getMonth()].days;
      if (this.startDate.getFullYear() % 4 == 0 && this.startDate.getMonth() == 1) {
        monthDays = 29;
      }
      if (d + i > monthDays) {
        this.schedule[i].date =
          d + i - monthDays;
      } else {
        this.schedule[i].date = d + i;
      }
    }
    for (let i = 2; i < this.schedule.length; i++) {
      this.schedule[i].times = this.times[Math.floor(Math.random() * 5)];
    }
  }
  setfifty() {
    this.fiftymin = true;
  }

  setTwentyFive() {
    this.fiftymin = false;
  }
}
