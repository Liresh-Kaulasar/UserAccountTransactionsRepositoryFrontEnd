import { Component } from '@angular/core';
import { Person } from '../interfaces/person';
import { Router } from '@angular/router';
import { PersonDetailsService } from '../services/person-details.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-person.component.html',
  styleUrl: './add-person.component.css'
})
export class AddPersonComponent {
  person : Person = {
    code:0,
    name:"",
    surname:"",
    id_number:""
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private personalDetialsService: PersonDetailsService) { 
    
  }

  cancel():void{
    this.router.navigate(["person-list"]);
  }

  addPersonDetails(person:Person):void{
    console.log(person);
    this.personalDetialsService.addPersonDetails(person).subscribe(response => {console.log(response) 
    this.router.navigate(["person-list"])});
  }
}
