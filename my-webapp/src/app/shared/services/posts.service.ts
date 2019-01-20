import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/app/home/models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  path: string = 'https://jsonplaceholder.typicode.com';

  constructor( private http: HttpClient ) { }

  getPosts (): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.path}/posts`);
  }

}
