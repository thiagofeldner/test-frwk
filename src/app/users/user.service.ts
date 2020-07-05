import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user';
import { Observable } from 'rxjs';

@Injectable ({
    providedIn: 'root'
})
export class UserService {

    public usersUrl: string = 'https://jsonplaceholder.typicode.com/users/';
    
    constructor(private httpClient: HttpClient) { }

    retrieveAll(): Observable<User[]>{
        return this.httpClient.get<User[]>(this.usersUrl);
    }

    retrieveById(id: number): Observable<User> {
        return this.httpClient.get<User>(`${this.usersUrl}/${id}`);
    }
    save(user: User): Observable<User> {
        if(user.id) {
           return this.httpClient.put<User>(`${this.usersUrl}/${user.id}`, user );
        }else {
            return this.httpClient.post<User>(`${this.usersUrl}`, user );
        }
    }
    deleteById(id: number): Observable<any>{
        return this.httpClient.delete<any>(`${this.usersUrl}/${id}`);
    }
}
