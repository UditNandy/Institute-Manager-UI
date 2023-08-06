import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AUTHORIZATION_PROFILE } from 'src/utils/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(private httpClient: HttpClient) {}

  getAuthorizationProfiles = () => {
    return this.httpClient.get(AUTHORIZATION_PROFILE);
  };
}
