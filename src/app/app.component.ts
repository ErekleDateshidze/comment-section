import { Component } from '@angular/core';
import json from '../assets/data/data.json';
import { CurrentUser , CommentMain ,Reply } from 'src/app/app.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  comment: any;
  currentUser: any;
  data: any | undefined;
  constructor() {
    this.checkData();
  }

  checkData() {
    const data = localStorage.getItem('data');

    if (data) {
      this.data = JSON.parse(data);
    } else {
      this.data = json;
    }
  }

  onNewCommentHandler(newComment: any) {
    // //finding max id
    // const maxId = ./////
    // newComment.id = ++maxId;
    console.log(this.data.comments);

    this.data.comments.push(newComment);
    localStorage.setItem('data', JSON.stringify(this.data));
  }

  onCommentDeletedHandler(comment: any) {
    const index = this.data.comments.indexOf(comment);
    this.data.comments.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(this.data));
  }
}
