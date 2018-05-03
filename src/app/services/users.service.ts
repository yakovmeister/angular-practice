import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Filter {
  per_page: number;
}

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(filters?: Filter) {
    return this.http.get('https://reqres.in/api/users?per_page=10')
  }

}
