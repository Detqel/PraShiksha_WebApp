import { Component } from '@angular/core';
import { FooterComponent } from "../Shared/footer/footer.component";
import { HeaderComponent } from "../Shared/header/header.component";

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {

}
