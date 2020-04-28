import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Account } from './account';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private apiServer = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  create(account): Observable<Account> {
    return this.httpClient.post<Account>(this.apiServer + '/accounts/', JSON.stringify(account), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getById(id): Observable<Account> {
    return this.httpClient.get<Account>(this.apiServer + '/accounts/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(this.apiServer + '/accounts/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id, account): Observable<Account> {
    return this.httpClient.put<Account>(this.apiServer + '/accounts/' + id, JSON.stringify(account), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id){
    return this.httpClient.delete<Account>(this.apiServer + '/accounts/' + id, this.httpOptions)
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