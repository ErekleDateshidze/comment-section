import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NewMainComentComponent } from './components/new-main-coment/new-main-coment.component';
import { MainCommentComponent } from './components/main-comment/main-comment.component';
import { ReplyComponent } from './components/reply/reply.component';
import { ReplyMainCommentComponent } from './components/main-comment/reply-main-comment/reply-main-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    NewMainComentComponent,
    MainCommentComponent,
    ReplyComponent,
    ReplyMainCommentComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}
