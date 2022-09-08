
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';


export class DataService {
  public apiurl: string = environment.apiUrl
  public apiPath!: string
  constructor(
    protected http: HttpClient
  ) { }

  getList(limit?: number): Observable<any> {
    const params = limit ? new HttpParams().set('limit', limit) : new HttpParams()
    return this.http.get<any>(
      `${this.apiurl + this.apiPath}`,
      { params: params }
    )
      .pipe(catchError(this.error))
  }

  getDetail(id: string | number): Observable<any> {
    return this.http.get<any>(`${this.apiurl + this.apiPath}/${id}`)
      .pipe(catchError(this.error))
  }

  addDetail( data: any): Observable<any> {
    const body = data
    return this.http.post<any>(
      `${this.apiurl + this.apiPath}/new`,
      body
    )
    .pipe(catchError(this.error))
  }

  updateDetail(id: string | number, data: any): Observable<any> {
    const body = data
    return this.http.put<any>(
      `${this.apiurl + this.apiPath}/${id}`,
      body
    )
    .pipe(catchError(this.error))
  }

  deleteDetail(id: string | number, data: any): Observable<any> {
    const body = data
    return this.http.delete<any>(
      `${this.apiurl + this.apiPath}/${id}`,
      body
    )
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

    return throwError(() => {
      return errorMessage;
    });
  }
}
