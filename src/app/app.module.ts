import { CoreModule } from './core/core.module';
import { PostModule } from './posts/post.module';
import { CommentsModule } from './comments/comments.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Error404Component } from './error-404/error-404.component';
import { UserModule } from './users/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
    CommentsModule,
    PostModule,
    CoreModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
      { path: '**', component: Error404Component } 
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
