import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiService: ApiService
  ) { }

  login(username: string, password: string): Observable<User> {
    const payload = {};
    payload['username'] = username;
    payload['password'] = password;
    return this.apiService.post('/login', payload);
  }
}
