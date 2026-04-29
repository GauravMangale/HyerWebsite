import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { SolutionComponent } from './components/solution/solution.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'homepage', component: HomeComponent },
    { path: 'Aboutuspage', component: AboutusComponent },
    { path: 'Solutionpage', component: SolutionComponent },
    { path: 'Contactuspage', component: ContactusComponent },

    { path: '**', redirectTo: '' }


];
