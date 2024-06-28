import { Injectable } from '@angular/core';
import { Person } from '../interfaces/person';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonDetailsService {

  private apiUrl:string = "http://localhost:44362";

  protected personsList: Person[] = [
    { code: 1, name: 'REJOCE', surname: 'MAJOLA', id_number: '63XX2907910XX' },
    { code: 2, name: '', surname: 'MOKOMELE', id_number: '70XX2403660XX' },
    { code: 3, name: 'NTOMBIKHONA', surname: 'MLAMBO', id_number: '42XX1002420XX' },
    { code: 4, name: 'KLAAS', surname: 'OCKHUIS', id_number: '39XX1400850XX' },
    { code: 5, name: 'FERDI', surname: 'LUUS', id_number: '59XX0110380XX' },
    { code: 6, name: 'SHAUN', surname: 'LOVELOT', id_number: '67XX1807700XX' },
    { code: 7, name: '', surname: 'MOSOOANE', id_number: '74XX2301550XX' },
    { code: 8, name: '', surname: 'MOTENO', id_number: '59XX1901940XX' },
    { code: 9, name: 'ZWANE', surname: '', id_number: '66XX0354900XX' },
    { code: 10, name: 'JOSEPH', surname: 'MOSWEU', id_number: '72XX1806150XX' },
    { code: 11, name: '', surname: 'ZULU', id_number: '78XX0650010XX' },
    { code: 12, name: '', surname: 'SKINI', id_number: '72XX2205500XX' },
    { code: 13, name: '', surname: 'MASOPA', id_number: '60XX0707320XX' },
    { code: 14, name: '', surname: 'COETZEE', id_number: '56XX2351400XX' },
    { code: 15, name: 'BEN', surname: '', id_number: '65XX1003960XX' },
    { code: 16, name: 'SOPHIE', surname: 'SIHLANGU', id_number: '68XX1612540XX' },
    { code: 17, name: 'BUYISELWA', surname: 'KEPATA', id_number: '71XX2451300XX' },
    { code: 18, name: '', surname: 'ZANELE', id_number: '72XX2702550XX' },
    { code: 19, name: '', surname: 'BARNABAS', id_number: '62XX2207640XX' },
    { code: 20, name: '', surname: 'ABRAHAMS', id_number: '75XX2302470XX' },
    { code: 21, name: '', surname: 'GOVENDER', id_number: '73XX1104570XX' },
    { code: 22, name: '', surname: 'ABDUL', id_number: '65XX0106100XX' },
    { code: 23, name: '', surname: 'MBIXANE', id_number: '47XX2706770XX' },
    { code: 24, name: 'MAVIS', surname: 'MBOMBO', id_number: '59XX1002010XX' },
    { code: 25, name: '', surname: 'RAMALEPE', id_number: '44XX0801450XX' },
    { code: 26, name: '', surname: 'MRSHALOI', id_number: '70XX3105540XX' },
    { code: 27, name: '', surname: 'DE MEYER', id_number: '69XX2604250XX' },
    { code: 28, name: 'MICHAELINE', surname: 'SITUMA', id_number: '73XX0311610XX' },
    { code: 29, name: '', surname: 'NDWANE', id_number: '66XX2705830XX' },
    { code: 30, name: '', surname: 'WEAVER', id_number: '76XX2904740XX' },
    { code: 31, name: 'REBECCA', surname: 'JOOSTE', id_number: '70XX2251240XX' }
  ];

  constructor(private http: HttpClient) { }

  getDetailsForPeople(): Observable<any>{
    return this.http.get(`${this.apiUrl}/api/GetAllPersonalDetails`)
      .pipe(
        catchError(error => {
          console.error('There was an error!', error);
          return throwError('Something bad happened; please try again later.');
        })
      );
  };

  getPersonDetailsByCode(code:Number):Observable<any>{
    return this.http.get(`${this.apiUrl}/api/GetPersonDetailsByCode/${code}`)
    .pipe(
      catchError(error => {
        console.error('There was an error!', error);
        return throwError('Something bad happened; please try again later.');
      })
    );
  }

  filterSearchResults(searchString: string):Observable<any>{
    return this.http.get(`${this.apiUrl}/api/SearchPersonalDetails/${searchString}`)
      .pipe(
        catchError(error => {
          console.error('There was an error!', error);
          return throwError('Something bad happened; please try again later.');
        })
      );
  }

  updatePersonDetails(person: Person): Observable<any>{
    return this.http.post(`${this.apiUrl}/api/UpdatePersonalDetails`,person);
  }

  addPersonDetails(person:Person): Observable<any>{
    return this.http.post(`${this.apiUrl}/api/CreatePerson`,person);
  }
}
