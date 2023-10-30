import { UserComment } from './User.type';

export type CommentDataType = {
  comment: string;
  date: string;
  id: string;
  rating: number;
  user: UserComment;
}
