import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reply-main-comment',
  templateUrl: './reply-main-comment.component.html',
  styleUrls: ['./reply-main-comment.component.scss']
})
export class ReplyMainCommentComponent {
   @Input() reply: any;
}
