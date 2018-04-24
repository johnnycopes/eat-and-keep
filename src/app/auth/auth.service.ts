import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ILoginCredentials } from '../shared/login-credentials.interface';
import { IRegisterCredentials } from '../shared/register-credentials.interface';
@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(loginCredentials: ILoginCredentials) {
    return this.httpClient.post('api/login', loginCredentials);
  }

  logout() {
    return this.httpClient.get('/api/logout');
  }

  register(registerCredentials: IRegisterCredentials) {
    return this.httpClient.post('/api/register', registerCredentials);
  }

}
