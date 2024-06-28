import { Injectable } from '@angular/core';
import { Account } from '../interfaces/account';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountDetailsService {

  private apiUrl:string = "http://localhost:44362";

  accountList: Account[] = [];
  
  constructor(private http: HttpClient) { }

  getAccountDetailsByPersonCode(code:Number):Observable<any>{
    return this.http.get(`${this.apiUrl}/api/GetAccountDetailsByPersonCode/${code}`)
    .pipe(
      catchError(error => {
        console.error('There was an error!', error);
        return throwError('Something bad happened; please try again later.');
      })
    );
  }

  getAccountDetailsByAccountCode(code:Number):Observable<any>{
    return this.http.get(`${this.apiUrl}/api/GetAccountDetailsByCode/${code}`)
    .pipe(
      catchError(error => {
        console.error('There was an error!', error);
        return throwError(`There was an error! ${error}`);
      })
    );
  }

  updateAccountDetails(account:Account):Observable<any>{
    return this.http.post(`${this.apiUrl}/api/UpdateAccountDetails`,account)
    .pipe(
      catchError(error => {
        console.error('There was an error!', error);
        return throwError(`There was an error! ${error.error}`);
      })
    );
  }

  addAccountDetails(account:Account):Observable<any>{
    return this.http.post(`${this.apiUrl}/api/CreateAccount`,account)
    .pipe(
      catchError(error => {
        console.error('There was an error!', error);
        return throwError(`There was an error! ${error.error}`);
      })
    );
  }
}
