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
 
  editing = false;
  isEditing = false;
  editComment() {
    this.editing = !this.editing;
  }

  @Output() onCommentDelete = new EventEmitter<any>();
  @Output() onReply = new EventEmitter<any>();

  deleteComment() {
    console.log('edada');
    this.onCommentDelete.emit(this.comment);
  }

 
}