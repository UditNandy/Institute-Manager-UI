import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ADMIN_LOGIN,
  GET_ADMIN_DETAILS,
  GET_USER_AUTHORIZATIONS,
} from 'src/utils/constants';
import { Utils } from 'src/utils/utils';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  adminLogin = (payload: any) => {
    return this.httpClient.post<any>(ADMIN_LOGIN, payload, Utils.noAuthHeader);
  };

  getAccountDetails = () => {
    return this.httpClient.get<any>(GET_ADMIN_DETAILS);
  };

  getUserAuthorizations = () => {
    return this.httpClient.get<any>(GET_USER_AUTHORIZATIONS);
  };
}
