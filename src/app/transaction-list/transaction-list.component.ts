import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transaction } from '../interfaces/transaction';
import {Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { TransactionDetailsService } from '../services/transaction-details.service';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css'
})
export class TransactionListComponent {

  transactionList: Transaction[] =[];

  accountCode:Number=0;

  @Input() account_code!:Number;

  constructor(private router: Router, private route:ActivatedRoute, private transactionDetailsService : TransactionDetailsService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.accountCode = parseInt(params['id']);
      console.log("This is the id => "+this.accountCode);
      this.getTransactionDetailsByAccountCode();
    });
  }

  getTransactionDetailsByAccountCode():void {
    this.transactionDetailsService.getTransactionDetailsByAccountCode(this.accountCode).subscribe(response =>{
      console.log(response);
      this.transactionList = response as Transaction[];
    });
  }

  openTransactionDetails(transactionCode:Number):void{
    this.router.navigate(['transaction-details',transactionCode,this.account_code]);
  }
  
  openAddTransactionPage():void{
    this.router.navigate(['transaction-details',this.account_code,0])
  }
 
}

