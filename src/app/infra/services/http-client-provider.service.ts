import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpClientProviderService {
  private baseURL = 'https://barber-backend-qmrl.onrender.com';
  constructor(private httpClient: HttpClient) {}

  get<T>(path: string, options?: object): Observable<T> {
    return this.httpClient.get<T>(`${this.baseURL}${path}`, options);
  }

  post<T>(path: string, body: object, options?: object) {
    return this.httpClient.post<T>(`${this.baseURL}${path}`, body, options);
  }

  put<T>(path: string, body: object, options?: object) {
    return this.httpClient.put<T>(`${this.baseURL}${path}`, body, options);
  }

  remove<T>(path: string, options?: object) {
    return this.httpClient.delete<T>(`${this.baseURL}${path}`, options);
  }
}
