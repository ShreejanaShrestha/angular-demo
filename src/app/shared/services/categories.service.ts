import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private baseURL = 'https://dummyapi.io/data/api';
  APP_ID = '5f4bd90da39b29444be4e09b';

  constructor(private http: HttpClient) { }

  getUser(): Observable<any>{
    console.log('Request is sent!');
    return this.http.get(`${this.baseURL}/user`);
  }

  getFullUser(id): Observable<any>{
    return this.http.get(`${this.baseURL}/user/${id}`);
  }

  getPost():Observable<any>{
    return this.http.get(`${this.baseURL}/post`);
  }
}
