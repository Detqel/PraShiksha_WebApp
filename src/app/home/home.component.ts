import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { InstructorsComponent } from "../Shared/instructors/instructors.component";
import { CourseCardComponent } from "../Shared/course-card/course-card.component";
import { FooterComponent } from "../Shared/footer/footer.component";
import { HeaderComponent } from "../Shared/header/header.component";
import { OneLineBannerComponent } from "../Shared/one-line-banner/one-line-banner.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InstructorsComponent, CourseCardComponent, FooterComponent, HeaderComponent, OneLineBannerComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  counters = [
    { value: 100, label: 'Courses', currentValue: 0 },
    { value: 12, label: 'Countries', currentValue: 0 },
    { value: 500, label: 'Students', currentValue: 0 },
    { value: 10, label: 'Instructors', currentValue: 0 }
  ];

  @ViewChild('testimonialBanner') banner!: ElementRef;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.startCounting();
          observer.disconnect();
        }
      });
    });

    observer.observe(this.banner.nativeElement);
  }

  startCounting() {
    this.counters.forEach(counter => {
      let step = Math.ceil(counter.value / 50);
      let interval = setInterval(() => {
        counter.currentValue += step;
        if (counter.currentValue >= counter.value) {
          counter.currentValue = counter.value;
          clearInterval(interval);
        }
      }, 30);
    });
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
