import { Component } from '@angular/core';
import { NavbarComponent } from "../../layout/navbar/navbar.component";
import { FooterComponent } from "../../layout/footer/footer.component";

@Component({
  selector: 'app-solution',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './solution.component.html',
  styleUrl: './solution.component.scss'
})
export class SolutionComponent {
ngOnInit() {
  console.log('Component Loaded');
}
}
