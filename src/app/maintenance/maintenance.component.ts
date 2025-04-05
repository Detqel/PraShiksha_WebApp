import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.css'
})
export class MaintenanceComponent implements OnInit, OnDestroy {
  hours: number = 59;
  minutes: number = 59;
  seconds: number = 60;
  interval: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.seconds--;
    }, 1000);
  }

  navigateBackHome(){
    this.router.navigate(['']);
  }
}
