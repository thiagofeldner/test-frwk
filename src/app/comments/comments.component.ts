import { OnInit, Component } from '@angular/core';

import { CommentsService } from './comments.service';
import { Comment } from './coments';

@Component ({
    selector: 'app-comment',
    templateUrl: './comments.component.html',
    styleUrls: ['./commnets.component.css']
})
export class CommentsComponent implements OnInit{
    
    filteredComments: Comment[] = [];

    _comments: Comment[] = [];
    _filerBy: string;

    constructor(private commentService: CommentsService) {}

    ngOnInit(): void {
        this.retrieveAll();
    }

    retrieveAll(): void {
        this.commentService.retrieveAll().subscribe({
            next: comments => {
                this._comments = comments;
                this.filteredComments = this._comments;
            },
            error: err => console.log('Error', err)
        })
    }

    deleteById(commentId: number): void {
        this.commentService.deleteById(commentId).subscribe({
            next: () => {
                console.log('Deleted with success');
                this.retrieveAll();
            },
            error: err => console.log('Error',err)
        })
    }

    set filter(value: string){
        this._filerBy = value;

        this.filteredComments = this._comments.filter((comment: Comment) =>
             comment.name.toLocaleLowerCase()
             .indexOf(this._filerBy.toLocaleLowerCase()) >-1);
    }
}