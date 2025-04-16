import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  name = "Nikos"

  person = {
    givenName:"Nikos",
    surName:"Paltoglou",
    age: 20,
    email:"nikos.Paltoglou@.gr"
  }
}
