import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentMain } from './app.model';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommentsService {
    constructor(private httpClient: HttpClient) {}
  getComments(): Observable< CommentMain[]> {
    return this.httpClient.get< CommentMain[]>(
      'http://localhost:3000/comments'

    );
    }
}    