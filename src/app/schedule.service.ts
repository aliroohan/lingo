import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  schedule = [
    { day: "Sat",
      date: 2,
      times: []
    }, 
    { day: "Sun",
      date: 3,
      times: []
    },
    { day: "Mon",
      date: 4,
      times: ["11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM"]
    },
    { day: "Tue",
      date: 5,
      times: ["6:00 AM", "6:30 AM", "7:00 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "4:00 PM"],
    },
    { day: "Wed",
      date: 6,
      times: ["6:00 AM", "8:00 AM", "12:00 PM", "4:00 PM", "4:30 PM", "5:00 PM"],
    },
    { day: "Thu",
      date: 7,
      times: ["5:30 AM", "7:30 AM", "8:00 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM"],
    },
    { day: "Fri",
      date: 8,
      times: ["6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM"]
    },
  ];

  
  
  
  constructor() { }

  getSchedule() {
    return this.schedule;
  }

}
