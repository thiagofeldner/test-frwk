import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CommentsInfoComponent } from './comments-info.component';
import { CommentsComponent } from './comments.component';


@NgModule ({
    declarations: [
        CommentsInfoComponent,
        CommentsComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'comentarios', component: CommentsComponent },
            { path: 'comentario/info/:id', component: CommentsInfoComponent},
        ])
    ]
})
export class CommentsModule {}