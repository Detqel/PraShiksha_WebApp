import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PricingComponent } from './pricing/pricing.component';
import { CourseCardComponent } from './Shared/course-card/course-card.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HeaderComponent } from './Shared/header/header.component';
import { ImageCardComponent } from './Shared/image-card/image-card.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { OneLineBannerComponent } from './Shared/one-line-banner/one-line-banner.component';



@NgModule({
  declarations: [],
  imports: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OneLineBannerComponent,
    ImageCardComponent,
    CourseCardComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PricingComponent,
    CoursesComponent,
    CartComponent,
    CheckoutComponent,
    LoginComponent,
    SignInComponent,
    CommonModule,
    BrowserModule, RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
