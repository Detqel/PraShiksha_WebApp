import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courseKey = 'selectedCourse';
  private courseSubject = new BehaviorSubject<any>(null);
  private isBrowser: boolean;

  course$ = this.courseSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      const storedCourse = localStorage.getItem(this.courseKey);
      if (storedCourse) {
        this.courseSubject.next(JSON.parse(storedCourse));
      }
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
