import { Injectable } from '@angular/core';

import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public auth: boolean = false;

  encryptPass: string = Md5.hashStr('s2creditguillermo');

  login(user: string, pass: string): boolean {
    if(user == 's2credit' && Md5.hashStr(pass) == this.encryptPass ) {
      return this.auth = true;
    } else {
      return this.auth = false;
    }
  }
}
