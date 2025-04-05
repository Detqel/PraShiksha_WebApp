import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courseKey = 'selectedCourse';
  private courseSubject = new BehaviorSubject<any>(null);

  course$ = this.courseSubject.asObservable();

  constructor() {
    const storedCourse = localStorage.getItem(this.courseKey);
    if (storedCourse) {
      this.courseSubject.next(JSON.parse(storedCourse));
    }
  }

  setCourse(course: any) {
    this.courseSubject.next(course);
    localStorage.setItem(this.courseKey, JSON.stringify(course));
  }

  clearCourse() {
    this.courseSubject.next(null);
    localStorage.removeItem(this.courseKey);
  }

  getCurrentCourse() {
    return this.courseSubject.value;
  }
}
