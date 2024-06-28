import { Component } from '@angular/core';
import { Transaction } from '../interfaces/transaction';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TransactionDetailsService } from '../services/transaction-details.service';

@Component({
  selector: 'app-transaction-details',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './transaction-details.component.html',
  styleUrl: './transaction-details.component.css'
})
export class TransactionDetailsComponent {

  transactionCode:Number = 0;
  accountCode:Number = 0;

  transaction: Transaction={
    account_code:0,
    amount:0,
    capture_date:new Date,
    transaction_date:new Date,
    code:0,
    description:""
  }

  showAlertWithErrorMessage = {
    "visible":false,
    "message":""
  }

  constructor(private router: Router, private route:ActivatedRoute, private transactionDetailsService:TransactionDetailsService){}





  cancel(){

  }

  updateTransactionDetails(transaction:Transaction){

  }

  addTransactionDetails(transaction:Transaction){
    this.transactionDetailsService.addTransactionDetails(transaction).subscribe(resolve=>{
      this.router.navigate(["account-details",])
    });
  }

  ngOnInit(): void {
     this.route.params.subscribe(params => {
      this.transactionCode = parseInt(params['id']);
      this.accountCode = parseInt(params['id2']);
      if(this.accountCode != 0){
        this.getTransactionDetailsByCode(this.transactionCode);
      }
    });
  }

  getTransactionDetailsByCode(code:Number):void{
    this.transactionDetailsService.getTransactionDetailsByTransactionCode(this.transactionCode).subscribe(response=>{
      this.transaction = response as  Transaction;
    });
  }
}

