import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ADMIN_LOGIN } from 'src/utils/constants';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  adminLogin = (payload: any) => {
    return this.httpClient.post<any>(ADMIN_LOGIN, payload);
  };
}
