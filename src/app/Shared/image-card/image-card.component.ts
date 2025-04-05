import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../../Services/course.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.css'
})
export class ImageCardComponent {
  constructor(private router: Router, private courseService: CourseService) {}
  @Input() course_detail: { title: string, chapter: number, duration: number, desc: string, level: string, quizes: number, author: string, url: string, Modules: string[] }[] = [];

  navigateToCourseDetails(course: { title: string, chapter: number, duration: number, desc: string, author: string }){
    const encodedID = this.generateEncodedId(course.title);
    this.courseService.setCourse(course);
    this.router.navigate(['/course', encodedID]);
  }

  private generateEncodedId(title: string): string {
    let hash = 0;
    for (let i = 0; i < title.length; i++) {
      hash = title.charCodeAt(i) + ((hash << 5) - hash);
    }

    const randomPart = Math.floor(Math.random() * 10000);
    const encoded = `course-${Math.abs(hash).toString(36)}-${randomPart}`;

    return encoded;
  }
}
