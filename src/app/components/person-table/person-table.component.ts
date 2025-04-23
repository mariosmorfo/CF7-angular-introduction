import { Component, Input } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  @Input() personInput: Person | undefined;
  name = "Nikos"

  person = {
    givenName:"Nikos",
    surName:"Paltoglou",
    age: 20,
    email:"nikos.Paltoglou@.gr"
  }
}
