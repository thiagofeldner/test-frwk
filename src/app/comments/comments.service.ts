import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Comment } from './coments';
import { Observable } from 'rxjs';

@Injectable ({
    providedIn: 'root'
})
export class CommentsService {

    public commentsUrl: string = 'https://jsonplaceholder.typicode.com/comments';

    constructor(private httpClient: HttpClient) {}

    retrieveAll(): Observable<Comment[]>{
        return this.httpClient.get<Comment[]>(this.commentsUrl);
    }

    retrieveById(id: number): Observable<Comment> {
        return this.httpClient.get<Comment>(`${this.commentsUrl}/${id}`);
    }
    save(comment: Comment): Observable<Comment> {
        if(comment.id) {
            return this.httpClient.put<Comment>(`${this.commentsUrl}/${comment.id}`, comment );
         }else {
             return this.httpClient.post<Comment>(`${this.commentsUrl}`, comment );
         }
    }
    deleteById(id: number): Observable<any>{
        return this.httpClient.delete<any>(`${this.commentsUrl}/${id}`);
    }
}