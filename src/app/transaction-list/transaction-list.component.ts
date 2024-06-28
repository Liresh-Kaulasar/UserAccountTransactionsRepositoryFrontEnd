import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transaction } from '../interfaces/transaction';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css'
})
export class TransactionListComponent {
  transactionList: Transaction[] =[];
}
