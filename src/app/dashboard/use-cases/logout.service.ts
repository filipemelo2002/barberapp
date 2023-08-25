import { Injectable } from '@angular/core';
import { HttpClientProviderService } from '@infra/services/http-client-provider.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private httpClient: HttpClientProviderService) { }

  execute(): Observable<void> {
    return this.httpClient.post<void>('/login/logout', {}, {withCredentials: true});
  }
}
