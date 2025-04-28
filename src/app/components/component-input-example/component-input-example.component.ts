import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';


@Component({
  selector: 'app-component-input-example',
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
  person0: Person = {
    givenName: 'Marios',
    surName: 'Morfo',
    age: 27,
    address: "Dios 31",
    email : "mariosmorfo@.gr"
  }

  person1: Person = {
    givenName: 'John',
    surName: 'Doe',
    age: 30,
    email: "joe@aueb.gr",
    address: 'Athens Greece'
  }

}
