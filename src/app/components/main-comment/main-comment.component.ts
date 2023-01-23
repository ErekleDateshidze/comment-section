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
  originalCommentContent: any;

  ngOnInit() {
  this.originalCommentContent = this.comment.content;
  }

  isEditing = false;

  @Output() onCommentDelete = new EventEmitter<any>();

  deleteComment() {
    console.log('edada');
    this.onCommentDelete.emit(this.comment);
  }
}
