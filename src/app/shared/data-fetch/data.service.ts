import { User, UserList } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiurl: string = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  getList(limit?: number): Observable<UserList> {
    const params = limit ? new HttpParams().set('limit', limit) : new HttpParams()
    return this.http.get<UserList>(
      `${this.apiurl + environment.apiPaths.Users}`,
      { params: params }
    )
      .pipe(catchError(this.error))
  }

  getDetail(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiurl + environment.apiPaths.Users}/${id}`)
      .pipe(catchError(this.error))
  }


  // Handle Errors
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
