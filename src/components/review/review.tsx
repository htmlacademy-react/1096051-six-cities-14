import { CommentDataType } from '../../types/comment-data-type';
import { getWidthRatingProperty } from '../../utils/util';
import ReviewForm from '../review-form/review-form';

type ReviewProps = {
  commentDataList: {
    comment: string;
    date: string;
    id: string;
    rating: number;
    user: {
      avatarUrl: string;
      id: number;
      isPro: boolean;
      name: string;
    };
  }[];
}

type CommentProps = {
  commentData: CommentDataType;
};

function Comment({ commentData }: CommentProps): JSX.Element {
  const {
    comment,
    date,
    rating,
    user
  } = commentData;

  const {
    avatarUrl,
    name,
  } = user;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: getWidthRatingProperty(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        {/*to do Добавить дату */}
        <time className="reviews__time" dateTime="2019-04-24">{date}</time>
      </div>
    </li>
  );
}

function Review({ commentDataList }: ReviewProps): JSX.Element {

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{commentDataList.length}</span></h2>
      <ul className="reviews__list">
        {commentDataList.map((data) => <Comment commentData={data} key={data.id} />)}
      </ul>
      <ReviewForm />
    </section>
  );
}

export default Review;
