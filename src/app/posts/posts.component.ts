import { OnInit, Component } from '@angular/core';

import { PostService } from './post.service';
import { Post } from './post';

@Component ({
    selector: 'app-post',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
    
    filteredPosts: Post[] = [];

    _posts: Post[] = [];
    _filerBy: string;

    constructor(private postService: PostService) {}

    ngOnInit(): void {
        this.retrieveAll();
    }

    retrieveAll(): void {
        this.postService.retrieveAll().subscribe({
            next: posts => {
                this._posts = posts;
                this.filteredPosts = this._posts;
            }, 
            error: err => console.log('Error', err)
        })
    }

    deleteById(postId: number): void {
        this.postService.deleteById(postId).subscribe({
            next: () => {
                console.log('Deleted with success');
                this.retrieveAll();
            },
            error: err => console.log('Error',err)
        })
    }

    set filter(value: string){
        this._filerBy = value;

        this.filteredPosts = this._posts.filter((post: Post) =>
             post.title.toLocaleLowerCase()
             .indexOf(this._filerBy.toLocaleLowerCase()) >-1);
    }
}