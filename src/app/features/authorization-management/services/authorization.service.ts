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

  createAuthorizationProfile = (payload: any): Observable<any> => {
    return this.httpClient.post(AUTHORIZATION_PROFILE, payload);
  };

  deleteAuthorizationProfile = (profileName: string): Observable<any> => {
    let deleteAuthorizationProfilePayload: any = { profileName: profileName };
    return this.httpClient.delete(AUTHORIZATION_PROFILE, {
      body: deleteAuthorizationProfilePayload,
    });
  };

  updateAuthorizationProfile = (payload: any): Observable<any> => {
    return this.httpClient.put(AUTHORIZATION_PROFILE, payload);
  };
}
