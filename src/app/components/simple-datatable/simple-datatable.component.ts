import { Component, EventEmitter, Input, Output, effect, inject } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/eperson';
import {sortBy} from 'lodash-es';
import { PersonService } from 'src/app/shared/services/person.service';
@Component({
  selector: 'app-simple-datatable',
  imports: [],
  templateUrl: './simple-datatable.component.html',
  styleUrl: './simple-datatable.component.css'
})
export class SimpleDatatableComponent {
  @Input() data: EPerson[] | undefined;
  @Output() personClicked = new EventEmitter<EPerson>()

    ePersonsData: EPerson[] | undefined = [];
    personService = inject(PersonService)

    constructor() {
      effect(() => {
        if(this.personService.modifiedDataTable()){
          console.log("SIGNAL", this.data)
          this.ePersonsData = this.data
        }
        this.personService.modifiedDataTable.set(false)
      })
    }

    sortOrder = {
      givenName: 'none',
      surName: 'none',
      age: 'none',
      email: 'none',
      education: 'none'
    }

      ngOnChanges(){
        this.ePersonsData = this.data
      }

  onPersonClicked(person:EPerson){
    console.log('Person>>', person);
    this.personClicked.emit(person);
  }

  sortData(sortKey: keyof EPerson): void{
    // console.log(sortKey)
    this.ePersonsData = this.data;

    if(this.sortOrder[sortKey] === 'asc'){
      this.sortOrder[sortKey] = 'desc'
      this.ePersonsData = sortBy(this.data, sortKey).reverse();
    }else{
      this.sortOrder[sortKey] = 'asc';
      this.ePersonsData = sortBy(this.data, sortKey)
    }
    console.log(this.sortOrder)

    for (let key in this.sortOrder){
      if(key!==sortKey){
        this.sortOrder[key as keyof EPerson] = 'none'
      }
    }
  }

  sortSign(sortKey: keyof EPerson){
    if(this.sortOrder[sortKey]==='asc') return '\u2191'
  else if (this.sortOrder[sortKey]==='desc') return '\u2193'
    else return '';
}
}
