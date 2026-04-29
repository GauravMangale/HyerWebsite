import { Component } from '@angular/core';
import { NavbarComponent } from "../../layout/navbar/navbar.component";
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-contactus',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss'
})
export class ContactusComponent {

}
