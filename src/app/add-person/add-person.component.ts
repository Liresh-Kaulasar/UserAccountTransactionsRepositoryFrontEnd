import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../interfaces/person';
import { Router } from '@angular/router';
import { PersonDetailsService } from '../services/person-details.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [FormsModule, CommonModule],
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

  showAlertWithErrorMessage = {
    "visible":false,
    "message":""
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private personalDetialsService: PersonDetailsService) { 
    
  }

  cancel():void{
    this.router.navigate(["person-list"]);
  }

  addPersonDetails(person:Person):void{
    this.personalDetialsService.addPersonDetails(person).subscribe(response => {
      this.showAlertWithErrorMessage.visible = false;
    this.router.navigate(["person-list"])},
    error=>{
      this.showAlertWithErrorMessage.visible = true;
      this.showAlertWithErrorMessage.message = error.toString();
    });
  }

}
