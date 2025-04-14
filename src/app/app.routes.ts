import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PricingComponent } from './pricing/pricing.component';
import { SingleCourseComponent } from './Shared/single-course/single-course.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthService } from './Services/auth.service';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: SignInComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'course/:id', component: SingleCourseComponent},
  {path: 'maintenance', component: MaintenanceComponent},
  {path: '**', component: NotFoundComponent}
];
