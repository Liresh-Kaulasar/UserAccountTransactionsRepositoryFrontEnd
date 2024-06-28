
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../interfaces/person';
import { Router } from '@angular/router';
import { PersonDetailsService } from '../services/person-details.service';
import { AccountListComponent } from '../account-list/account-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule, AccountListComponent, FormsModule],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css'
})
export class PersonListComponent {
    personList : Person[] = [];

    searchText:string ="";
  
    constructor(private router:Router, private personDetailsService: PersonDetailsService){
    }

    openDetailsPage(person: Person):void{
      this.router.navigate(['person-details',person.code])
    }

    openCreatePersonPage():void{
      this.router.navigate(['create-person'])
    }

    filterSearchResults():void{
      if(this.searchText != null && this.searchText != ""){
      this.personDetailsService.filterSearchResults(this.searchText).subscribe(response => {
        console.log(response);
        this.personList = response as Person[];
      });
    }
    else{
      this.personDetailsService.getDetailsForPeople().subscribe(response => {
        console.log(response);
        this.personList = response as Person[];
      });
    }
    }

    ngOnInit(){
      this.personDetailsService.getDetailsForPeople().subscribe(response => {
        console.log(response);
        this.personList = response as Person[];
      });
    }
}
