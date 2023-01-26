import { Component, EventEmitter, Input, Output , } from '@angular/core';
import { CurrentUser , CommentMain ,Reply } from 'src/app/app.model';

@Component({
  selector: 'app-main-comment',
  templateUrl: './main-comment.component.html',
  styleUrls: ['./main-comment.component.scss'],
})
export class MainCommentComponent {
  @Input() comment: any;
  @Input() currentUser: any;
<<<<<<< HEAD
 
  editing = false;
  isEditing = false;
  editComment() {
    this.editing = !this.editing;
  }

  @Output() onCommentDelete = new EventEmitter<any>();
  @Output() onReply = new EventEmitter<any>();
=======

  editing = false;
  isEditing = false;
  showConfirmDialog = false;
  
  @Output() onCommentDelete = new EventEmitter<any>();
  @Output() onCommentReply = new EventEmitter<any>();

>>>>>>> b9e33f5e6dec4fb60bd8f767ca519456f294a57d

  deleteComment() {
    this.showConfirmDialog = false;
    this.onCommentDelete.emit(this.comment);
  }

<<<<<<< HEAD
 
}
=======
  hideConfirmDialog(){
    this.showConfirmDialog = false;
  } 

  editComment() {
    this.editing = !this.editing;
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
>>>>>>> b9e33f5e6dec4fb60bd8f767ca519456f294a57d
