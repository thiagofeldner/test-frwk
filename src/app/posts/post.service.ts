import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Post } from './post';
import { Observable } from 'rxjs';


@Injectable ({
    providedIn: 'root'
})
export class PostService {

    public postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';
    
    constructor(private httpClient: HttpClient){}

    retrieveAll(): Observable<Post[]>{
        return this.httpClient.get<Post[]>(this.postsUrl);
    }

    retrieveById(id: number): Observable<Post> {
        return this.httpClient.get<Post>(`${this.postsUrl}/${id}`);
    }
    save(post: Post): Observable<Post> {
        if(post.id) {
            return this.httpClient.put<Post>(`${this.postsUrl}/${post.id}`, post );
         }else {
             return this.httpClient.post<Post>(`${this.postsUrl}`, post );
         }
    }
    deleteById(id: number): Observable<any>{
        return this.httpClient.delete<any>(`${this.postsUrl}/${id}`);
    }
}
