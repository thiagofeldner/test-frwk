import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CommentsService } from './comments.service';
import { Comment } from './coments';

@Component({
    templateUrl: './comments-info.component.html'
})
export class CommentsInfoComponent implements OnInit {
    
    comment: Comment;

    constructor( private activatedRoute: ActivatedRoute,
                 private commentsService: CommentsService ) { }

    ngOnInit(): void {
        this.commentsService.retrieveById(
            +this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
                next: comment => this.comment = comment,
                error: err => console.log('Error',err)                
        });
    }
    save(): void {
        this.commentsService.save(this.comment).subscribe({
            next: user => console.log('Save with success', user),
            error: err => console.log ('Error',err)
        })
    }
}