import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';
@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, RouterLink, ListGroupMenuComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // name = 'Marios';

  // // Step 1:One way binding of data
  // person = {
  //   givenName: 'Marios',
  //   surName:"Morfonidis",
  //   age: 27,
  //   email:"marios.morfonidis98@aueb.gr"
  // }

  // Step 3: Component input
  // person0: Person = {
  //   givenName: "Markos",
  //   surName: "Fragoudakis",
  //   age: 55,
  //   email: "mark.fragk@gmail.com",
  //   address: "Patision Greece"
  // }

  // person1: Person = {
  //   givenName: "John",
  //   surName: "Dilan",
  //   age: 32,
  //   email: "john.dilan@gmail.com",
  //   address: "Dios 31"
  // }

  // users: Person[] = [{
  //   "givenName": "Anderea",
  //   "surName": "Roberto",
  //   "email": "aroberto0@joomla.org",
  //   "age": 1,
  //   "address": "1 Heffernan Plaza"
  // }, {
  //   "givenName": "Martie",
  //   "surName": "Olensby",
  //   "email": "molensby1@walmart.com",
  //   "age": 2,
  //   "address": "7 Transport Crossing"
  // }, {
  //   "givenName": "Maryjo",
  //   "surName": "Malam",
  //   "email": "mmalam2@techcrunch.com",
  //   "age": 3,
  //   "address": "93625 Farragut Point"
  // }, {
  //   "givenName": "Josselyn",
  //   "surName": "Paula",
  //   "email": "jpaula3@t-online.de",
  //   "age": 4,
  //   "address": "98561 Jay Junction"
  // }, {
  //   "givenName": "Marthe",
  //   "surName": "Atcherley",
  //   "email": "matcherley4@weebly.com",
  //   "age": 5,
  //   "address": "1643 Bay Avenue"
  // }, {
  //   "givenName": "Sondra",
  //   "surName": "Wiszniewski",
  //   "email": "swiszniewski5@goo.ne.jp",
  //   "age": 6,
  //   "address": "9379 Daystar Center"
  // }, {
  //   "givenName": "Arel",
  //   "surName": "Lacky",
  //   "email": "alacky6@arizona.edu",
  //   "age": 7,
  //   "address": "7 Milwaukee Street"
  // }, {
  //   "givenName": "Christal",
  //   "surName": "Waight",
  //   "email": "cwaight7@shareasale.com",
  //   "age": 8,
  //   "address": "33 Oakridge Junction"
  // }, {
  //   "givenName": "Armin",
  //   "surName": "Punyer",
  //   "email": "apunyer8@ox.ac.uk",
  //   "age": 9,
  //   "address": "7963 Pankratz Parkway"
  // }, {
  //   "givenName": "Bren",
  //   "surName": "Behnecke",
  //   "email": "bbehnecke9@pinterest.com",
  //   "age": 10,
  //   "address": "624 Havey Road"
  // }, {
  //   "givenName": "Marje",
  //   "surName": "Kneeland",
  //   "email": "mkneelanda@pbs.org",
  //   "age": 11,
  //   "address": "54 Victoria Parkway"
  // }, {
  //   "givenName": "Hermia",
  //   "surName": "Wimp",
  //   "email": "hwimpb@patch.com",
  //   "age": 12,
  //   "address": "611 Mosinee Road"
  // }, {
  //   "givenName": "Courtnay",
  //   "surName": "Verlinden",
  //   "email": "cverlindenc@europa.eu",
  //   "age": 13,
  //   "address": "01604 Vera Junction"
  // }, {
  //   "givenName": "Robinia",
  //   "surName": "Heineking",
  //   "email": "rheinekingd@bizjournals.com",
  //   "age": 14,
  //   "address": "07 Meadow Valley Road"
  // }, {
  //   "givenName": "Klara",
  //   "surName": "Wilgar",
  //   "email": "kwilgare@abc.net.au",
  //   "age": 15,
  //   "address": "04 Charing Cross Hill"
  // }, {
  //   "givenName": "Aldin",
  //   "surName": "Sabbins",
  //   "email": "asabbinsf@accuweather.com",
  //   "age": 16,
  //   "address": "55 Debs Road"
  // }, {
  //   "givenName": "Aurie",
  //   "surName": "Chilley",
  //   "email": "achilleyg@edublogs.org",
  //   "age": 17,
  //   "address": "60 Namekagon Plaza"
  // }, {
  //   "givenName": "Kirstyn",
  //   "surName": "Huckett",
  //   "email": "khucketth@deliciousdays.com",
  //   "age": 18,
  //   "address": "16109 Kingsford Avenue"
  // }, {
  //   "givenName": "Ansley",
  //   "surName": "Daborne",
  //   "email": "adabornei@theatlantic.com",
  //   "age": 19,
  //   "address": "42 Mifflin Crossing"
  // }, {
  //   "givenName": "Caroljean",
  //   "surName": "Pranger",
  //   "email": "cprangerj@loc.gov",
  //   "age": 20,
  //   "address": "904 Cambridge Park"
  // }]
}
