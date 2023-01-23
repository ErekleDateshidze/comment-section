import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-main-coment',
  templateUrl: './new-main-coment.component.html',
  styleUrls: ['./new-main-coment.component.scss'],
})
export class NewMainComentComponent {
  @Output() onNewComment = new EventEmitter<any>();
  @Input() currentUser: any; 
  commentContent = '';

  addComment() {
    const newComment = {
      content: this.commentContent,
      createdAt: new Date(),
      score: 0,
      replies: [],
      user: this.currentUser,
    };

    this.onNewComment.emit(newComment);
    this.commentContent = '';
  }
}
