import { Component, Input, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CurrentUser,CommentMain } from '../app.model';
import { CommentsService } from '../commets.service';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  providers: [CommentsService]
})
export class CommentComponent implements OnInit{
  @Input() currentUser!: CurrentUser;

  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.commentsService.getComments().subscribe((comments) => {
      console.log('comments' , comments);
    });
    }
  }

