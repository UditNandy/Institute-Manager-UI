import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AUTHORIZATION_PROFILE,
  FETCH_AVAILABLE_AUTHORIZATIONS,
} from 'src/utils/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(private httpClient: HttpClient) {}

  getAuthorizationProfiles = (): Observable<any> => {
    return this.httpClient.get(AUTHORIZATION_PROFILE);
  };

  getCreateAuthorizationProfileFormDetails = (): Observable<any> => {
    return this.httpClient.get('./assets/data/authorization-form.json');
  };

  getSystemAvaialableAuthorizations = (): Observable<any> => {
    return this.httpClient.get(FETCH_AVAILABLE_AUTHORIZATIONS);
  };

  createAuthorizationProfile = (payload: any) => {
    return this.httpClient.post(AUTHORIZATION_PROFILE, payload);
  };
}
