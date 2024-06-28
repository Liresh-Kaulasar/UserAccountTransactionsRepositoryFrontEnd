import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PersonDetailsService } from '../services/person-details.service';
import { AccountListComponent } from '../account-list/account-list.component';
import { FormsModule } from '@angular/forms';
import { Person } from '../interfaces/person';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-person-details',
  standalone: true,
  imports: [AccountListComponent,FormsModule, CommonModule],
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.css'
})
export class PersonDetailsComponent implements OnInit{

  itemId:Number= 0;

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

  constructor(private route: ActivatedRoute, private router: Router, private location: Location, private personalDetialsService: PersonDetailsService) { 

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.itemId = parseInt(params['id']);
      console.log("This is the id => "+this.itemId);
      this.personalDetialsService.getPersonDetailsByCode(this.itemId).subscribe(response => {
        this.person = response as Person;
      });
    });
  }

  cancel(){
      this.router.navigate(["person-list"]);
  }

  updatePersonDetails(person:Person){
    console.log(person);
    this.personalDetialsService.updatePersonDetails(person).subscribe(response => {
      this.showAlertWithErrorMessage.visible = false;
    this.router.navigate(["person-list"])},
    error=>{
      this.showAlertWithErrorMessage.visible = true;
      this.showAlertWithErrorMessage.message = error.toString();
    }
  );
  }
}
