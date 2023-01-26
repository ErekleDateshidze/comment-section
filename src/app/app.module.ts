import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NewMainComentComponent } from './components/new-main-coment/new-main-coment.component';
import { MainCommentComponent } from './components/main-comment/main-comment.component';
import { ReplyComponent } from './components/reply/reply.component';
<<<<<<< HEAD
import { ReplyMainCommentComponent } from './main-comment/reply-main-comment/reply-main-comment.component';
import { MainCommentReplyComponent } from './main-comment/main-comment-reply/main-comment-reply.component';

@NgModule({
  declarations: [AppComponent, NewMainComentComponent, MainCommentComponent, ReplyComponent, ReplyMainCommentComponent, MainCommentReplyComponent],
=======
import { ReplyMainCommentComponent } from './components/main-comment/reply-main-comment/reply-main-comment.component';

@NgModule({
  declarations: [AppComponent, NewMainComentComponent, MainCommentComponent, ReplyComponent, ReplyMainCommentComponent],
>>>>>>> b9e33f5e6dec4fb60bd8f767ca519456f294a57d
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}
