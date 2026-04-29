import { Component } from '@angular/core';
import { FooterComponent } from "../../layout/footer/footer.component";
import { NavbarComponent } from "../../layout/navbar/navbar.component";

@Component({
  selector: 'app-home',
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
