import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UserInfoComponent } from './user-info.component';
import { UserListComponent } from './user-list.component';
import { CommonModule } from '@angular/common';


@NgModule ({
    declarations:[
        UserListComponent,
        UserInfoComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild([
           { path: 'usuarios', component: UserListComponent },
           { path: 'usuario/info/:id', component: UserInfoComponent }
        ])
    ]
})
export class UserModule {}