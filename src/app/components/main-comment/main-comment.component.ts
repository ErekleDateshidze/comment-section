import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main-comment',
  templateUrl: './main-comment.component.html',
  styleUrls: ['./main-comment.component.scss'],
})
export class MainCommentComponent {
  @Input() comment: any;
  @Input() currentUser: any;
  @Output() onCommentDelete = new EventEmitter<any>();
  @Output() onReply = new EventEmitter<any>();
  @Output() onCommentReply = new EventEmitter<any>();
  editing = false;
  isEditing = false;
  showConfirmDialog = false;

  editComment() {
    this.editing = !this.editing;
  }

  deleteComment() {
    this.showConfirmDialog = false;
    this.onCommentDelete.emit(this.comment);
  }

  hideConfirmDialog() {
    this.showConfirmDialog = false;
  }

  replyToComment() {
    this.onCommentReply.emit(this.comment);
  }

  upvote() {
    this.comment.score++;
  }

  downvote() {
    this.comment.score--;
  }
}
