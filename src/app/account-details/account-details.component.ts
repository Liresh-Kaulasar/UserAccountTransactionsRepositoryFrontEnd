import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AccountDetailsService } from '../services/account-details.service';
import { FormsModule } from '@angular/forms';
import { Account } from '../interfaces/account';
import { Router } from '@angular/router';
import { TransactionListComponent } from '../transaction-list/transaction-list.component';
import { response } from 'express';


@Component({
  selector: 'app-account-details',
  standalone: true,
  imports: [FormsModule,TransactionListComponent, CommonModule],
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.css'
})
export class AccountDetailsComponent {

  code:Number = 0;
  personCode:Number = 0;

  account: Account = {
    code:0,
    account_number:"",
    outstanding_balance:0,
    person_code:0
  };

  showAlertWithErrorMessage = {
    "visible":false,
    "message":""
  }

  constructor(private router:Router, private route: ActivatedRoute, private accountDetailsService: AccountDetailsService){
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.code = parseInt(params['id']);
      this.personCode = parseInt(params['id2']);
      this.getAccountDetailsByCode(this.code);
    });
  }

  

  getAccountDetailsByCode(code:Number):void{
    this.accountDetailsService.getAccountDetailsByAccountCode(this.code).subscribe(response=>{
      this.account = response as Account;
    });
  }

  updateAccountDetails(account:Account):void{
    this.accountDetailsService.updateAccountDetails(account).subscribe(response => {
      this.showAlertWithErrorMessage.visible = false;
      this.router.navigate(["person-details",this.personCode]);
    },
      error=> {
        this.showAlertWithErrorMessage.visible = true;
        this.showAlertWithErrorMessage.message = error.toString();
      });
    }

  cancel():void{
    this.router.navigate(["person-details",this.personCode]);
  }
}

