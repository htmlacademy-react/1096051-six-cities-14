import { StarsRate } from '../../const';
import { CommentDataType } from '../../types/CommentData.type';
import { getWidthRatingProperty } from '../../utils/util';

type StarProps = {
  number: number;
  title: string;
}

type ReviewProps = {
  commentDataList: {
    comment: string;
    date: string;
    id: number;
    rating: number;
    user: {
      avatarUrl: string;
      id: number;
      isPro: boolean;
      name: string;
    };
  }[];
}


function Star({ number, title }: StarProps): JSX.Element {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={number} id={`${number}-stars`} type="radio" />
      <label htmlFor={`${number}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

function ReviewStars(): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      {StarsRate.map(({ number, title, id }) => <Star number={number} title={title} key={id} />)}
    </div>
  );
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
      <form className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <ReviewStars />
        <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
        </div>
      </form>
    </section>
  );
}

export default Review;
