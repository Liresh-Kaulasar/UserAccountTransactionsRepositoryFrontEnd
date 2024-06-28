import { Injectable } from '@angular/core';
import { Transaction } from '../interfaces/transaction';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionDetailsService {

  private apiUrl:string = "http://localhost:44362";

  transactionList: Transaction[] = [];
  
  constructor(private http: HttpClient) { }

  getTransactionDetailsByAccountCode(code:Number):Observable<any>{
    return this.http.get(`${this.apiUrl}/api/GetTransactionDetailsByAccountCode/${code}`)
    .pipe(
      catchError(error => {
        console.error('There was an error!', error);
        return throwError('Something bad happened; please try again later.');
      })
    );
  }

  getTransactionDetailsByTransactionCode(code:Number):Observable<any>{
    return this.http.get(`${this.apiUrl}/api/GetTransactionDetailsByTransactionCode/${code}`)
    .pipe(
      catchError(error => {
        console.error('There was an error!', error);
        return throwError(`There was an error! ${error}`);
      })
    );
  }

  updateTransationDetails(transaction:Transaction):Observable<any>{
    return this.http.post(`${this.apiUrl}/api/updateTransationDetails`,transaction)
    .pipe(
      catchError(error => {
        console.error('There was an error!', error);
        return throwError(`There was an error! ${error.error}`);
      })
    );
  }

  addTransactionDetails(transaction:Transaction):Observable<any>{
    return this.http.post(`${this.apiUrl}/api/CreateTransaction`,transaction)
    .pipe(
      catchError(error => {
        console.error('There was an error!', error);
        return throwError(`There was an error! ${error.error}`);
      })
    );
  }
}
