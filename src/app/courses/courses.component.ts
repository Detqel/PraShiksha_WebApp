import { Component } from '@angular/core';
import { SingleCourseComponent } from "../Shared/single-course/single-course.component";
import { FooterComponent } from "../Shared/footer/footer.component";
import { ImageCardComponent } from "../Shared/image-card/image-card.component";
import { HeaderComponent } from "../Shared/header/header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [SingleCourseComponent, FooterComponent, ImageCardComponent, HeaderComponent, CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  singleComponent: boolean = false;
  categories: string[] = ["Web Designing", "Web Development", "Programming", "Digital Marketing", "Interview Guidance", "SEO", "CyberSecurity"];

  priceRange: number = 0;

  onSliderInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.priceRange = +inputElement.value;
  }

  course_detail = [
    {title: "C# Fundamentals", chapter: 10, duration: 5, desc: "Fundamentals Programming, Object Oriented Programming, Collections, .NET, Linq", level: "All", quizes: 5, author: "Kausthuban", url: "https://www.youtube.com/embed/V7BAEURmPvA?si=mls3BQ2YjKW57A3n", Modules: ["Sample Text", "Sample Text", "Sample Text"]},
    {title: "C# Fundamentals", chapter: 10, duration: 5, desc: "Fundamentals Programming, Object Oriented Programming, Collections, .NET, Linq", level: "All", quizes: 5, author: "Kausthuban", url: "https://www.youtube.com/embed/V7BAEURmPvA?si=mls3BQ2YjKW57A3n", Modules: ["Sample Text", "Sample Text", "Sample Text"]},
    {title: "C# Fundamentals", chapter: 10, duration: 5, desc: "Fundamentals Programming, Object Oriented Programming, Collections, .NET, Linq", level: "All", quizes: 5, author: "Kausthuban", url: "https://www.youtube.com/embed/V7BAEURmPvA?si=mls3BQ2YjKW57A3n", Modules: ["Sample Text", "Sample Text", "Sample Text"]},
    {title: "C# Fundamentals", chapter: 10, duration: 5, desc: "Fundamentals Programming, Object Oriented Programming, Collections, .NET, Linq", level: "All", quizes: 5, author: "Kausthuban", url: "https://www.youtube.com/embed/V7BAEURmPvA?si=mls3BQ2YjKW57A3n", Modules: ["Sample Text", "Sample Text", "Sample Text"]},
    {title: "C# Fundamentals", chapter: 10, duration: 5, desc: "Fundamentals Programming, Object Oriented Programming, Collections, .NET, Linq", level: "All", quizes: 5, author: "Kausthuban", url: "https://www.youtube.com/embed/V7BAEURmPvA?si=mls3BQ2YjKW57A3n", Modules: ["Sample Text", "Sample Text", "Sample Text"]},
    {title: "C# Fundamentals", chapter: 10, duration: 5, desc: "Fundamentals Programming, Object Oriented Programming, Collections, .NET, Linq", level: "All", quizes: 5, author: "Kausthuban", url: "https://www.youtube.com/embed/V7BAEURmPvA?si=mls3BQ2YjKW57A3n", Modules: ["Sample Text", "Sample Text", "Sample Text"]}
  ];
}
