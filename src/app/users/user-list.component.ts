import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { User } from './user';

@Component({
    selector: 'app-user',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user.component.css'] 
})
export class UserListComponent implements OnInit {

    filteredUsers : User[] = [];

    _users: User[] = [];
    _filterBy: string;
    
    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.retrieveAll();
    }

    retrieveAll():void {
        this.userService.retrieveAll().subscribe({
            next: users => {
                this._users = users;
                this.filteredUsers = this._users;
            },
            error: err => console.log('Eror',err)
         });
    }

    deleteById(userId: number): void {
        this.userService.deleteById(userId).subscribe({
            next: () => {
                console.log('Deleted with success');
                this.retrieveAll();
            }, 
            error: err => console.log('Error',err)
        })
    }

    set filter(value: string){
        this._filterBy = value;

        this.filteredUsers = this._users.filter((user: User) => 
             user.name.toLocaleLowerCase()
             .indexOf(this._filterBy.toLocaleLowerCase()) >-1);
    }
    get filter(){
        return this._filterBy;
    }
}
