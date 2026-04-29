import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-aboutus',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {


  scrollToSection() {
  document.getElementById("behindSection")?.scrollIntoView({
    behavior: "smooth"
  });
}
}
