import { nanoid } from 'nanoid';
import { COUNT_COMMENTS, MAX_RATING } from '../const';
import { getRandomPositiveInteger } from '../utils/util';
import { CommentDataType } from '../types/comment-data.type';


function createCommentData() {
  const commentData: CommentDataType = {
    comment: nanoid(),
    date: 'Wed Oct 18 2023 18:54:09 GMT+1000 (Владивосток, стандартное время)',
    id: nanoid(),
    rating: getRandomPositiveInteger(0, MAX_RATING),
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: false,
      name: 'Max'
    }
  };

  return commentData;
}

function getCommentDataList() {
  return Array.from({length: COUNT_COMMENTS}, createCommentData);
}

export {getCommentDataList};
