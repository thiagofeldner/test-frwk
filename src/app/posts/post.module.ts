import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostInfoComponent } from './posts-info.component';
import { PostsComponent } from './posts.component';


@NgModule ({
    declarations:[
        PostInfoComponent,
        PostsComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'postagens', component: PostsComponent },
            { path: 'postagem/info/:id', component: PostInfoComponent},
        ])
    ]
})
export class PostModule{}

