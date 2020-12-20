import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  /**
   * Handling http get requests. 
   * @param url endpoint url
   */
  get(url:string) : Observable<any> {
    return this.http.get(url);
  }

  /**
   * Handling http post requests
   * @param url endpoint url
   * @param payload request body
   * @param httpOptions optional paramter for http Options. See https://angular.io/guide/http#requesting-data-from-a-server
   */
  post(url:string, payload:any, httpOptions={}): Observable<any>{
    return this.http.post(url, payload, httpOptions);
  }

  
}
