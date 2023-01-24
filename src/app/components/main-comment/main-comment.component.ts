import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrentUser , CommentMain ,Reply } from 'src/app/app.model';

@Component({
  selector: 'app-main-comment',
  templateUrl: './main-comment.component.html',
  styleUrls: ['./main-comment.component.scss'],
})
export class MainCommentComponent {
  @Input() comment: any;
  @Input() currentUser: any;

  editing = false;
  isEditing = false;
  showConfirmDialog = false;
  
  @Output() onCommentDelete = new EventEmitter<any>();
  @Output() onCommentReply = new EventEmitter<any>();


  deleteComment() {
    this.showConfirmDialog = false;
    this.onCommentDelete.emit(this.comment);
  }

  hideConfirmDialog(){
    this.showConfirmDialog = false;
  } 

  editComment() {
    this.editing = !this.editing;
  }

  replyToComment() {
    this.onCommentReply.emit(this.comment);
  }

}
