import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Payee } from './payee';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PayeesService {

  private apiServer = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  create(payee): Observable<Payee> {
    return this.httpClient.post<Payee>(this.apiServer + '/payees/', JSON.stringify(payee), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getById(id): Observable<Payee> {
    return this.httpClient.get<Payee>(this.apiServer + '/payees/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<Payee[]> {
    return this.httpClient.get<Payee[]>(this.apiServer + '/payees/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id, payee): Observable<Payee> {
    return this.httpClient.put<Payee>(this.apiServer + '/payees/' + id, JSON.stringify(payee), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id){
    return this.httpClient.delete<Payee>(this.apiServer + '/payees/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}