import { Component } from '@angular/core';
import { FooterComponent } from '../Shared/footer/footer.component';
import { HeaderComponent } from '../Shared/header/header.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
