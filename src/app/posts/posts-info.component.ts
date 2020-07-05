import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostService } from './post.service';
import { Post } from './post';


@Component({
    templateUrl: './posts-info.component.html'
})
export class PostInfoComponent implements OnInit {
    
    post: Post;

    constructor( private activatedRoute: ActivatedRoute,
        private postService: PostService) { }

    ngOnInit(): void {
        this.postService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
            next: post => this.post = post,
            error: err => console.log('Error',err)
        });
    }
    save(): void {
        this.postService.save(this.post).subscribe({
            next: user => console.log('Save with success', user),
            error: err => console.log ('Error',err)
        })
    }
}