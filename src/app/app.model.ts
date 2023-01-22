interface Image {
  png: string;
  webp: string;
}

export interface CurrentUser {
  image: Image;
  username: string;
} 

export interface Reply {
  id: number;
  content: string;
  createdAt: string;
  replyingTo: string;
  score: number;
  user: CurrentUser;
}

export interface CommentMain {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: CurrentUser;
  replies: Reply[];
}