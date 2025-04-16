import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
@Component({
  selector: 'app-root',
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Marios';

  person = {
    givenName: 'Marios',
    surName:"Morfonidis",
    age: 27,
    email:"marios.morfonidis98@aueb.gr"
  }
}
