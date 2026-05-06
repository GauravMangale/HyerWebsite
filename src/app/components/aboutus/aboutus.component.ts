import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-aboutus',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {

  ngOnInit() {
    console.log('Component Loaded');
  }

  scrollToSection() {
    document.getElementById("behindSection")?.scrollIntoView({
      behavior: "smooth"
    });
  }

    ngAfterViewInit() {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 120
      });
    }
}
