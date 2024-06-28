import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Account } from '../interfaces/account';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AccountDetailsService } from '../services/account-details.service';

@Component({
  selector: 'app-add-account',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.css'
})
export class AddAccountComponent {
  account:Account ={
    account_number:"",
    code:0,
    outstanding_balance:0,
    person_code:0
  };

  constructor(private router:Router, private route: ActivatedRoute, private accountDetailsService:AccountDetailsService){

  }

  personCode:Number = 0;

  showAlertWithErrorMessage = {
    "visible":false,
    "message":""
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.personCode= parseInt(params['id']);
      this.account.person_code = this.personCode
    });
  }

  addAccountDetails(account:Account):void{
    this.accountDetailsService.addAccountDetails(account).subscribe(response => {
    this.showAlertWithErrorMessage.visible = false;
    this.router.navigate(["person-details",this.personCode]);
  },
    error=> {
      this.showAlertWithErrorMessage.visible = true;
      this.showAlertWithErrorMessage.message = error.toString();
    });
  }

  cancel():void{
    this.router.navigate(["person-list"]);
  }
}
