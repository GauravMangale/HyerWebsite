import { FooterComponent } from "../../layout/footer/footer.component";
import { NavbarComponent } from "../../layout/navbar/navbar.component";
import { Component, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  selectedImg: string = '../../../assets/img/Screenshot (54).png';

  ngOnInit() {
    console.log('Component Loaded');
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
