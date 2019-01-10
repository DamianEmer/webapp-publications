import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../home/models/user.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  PATH:string = 'https://jsonplaceholder.typicode.com';

  constructor( private http: HttpClient ) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.PATH}/users`);
  }

}
