import { Component } from '@angular/core';
import { NavbarComponent } from "../../layout/navbar/navbar.component";
import { FooterComponent } from '../../layout/footer/footer.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-contactus',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss'
})
export class ContactusComponent {
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
