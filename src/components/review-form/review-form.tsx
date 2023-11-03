import { useState } from 'react';
import { Star } from '../../types/Star.type';
import { StarsRate } from '../../const';

type StarProps = Star

function ReviewStar({ number, title, handleRatingChange }: StarProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating" value={number}
        id={`${number}-stars`}
        type="radio"
        onChange={() => handleRatingChange(number)}
      />
      <label htmlFor={`${number}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

function ReviewForm() {
  const [review, setReview] = useState({
    rating: 0,
    comment: '',
  });

  function handleRatingChange(number: number): void {
    setReview({ ...review, rating: number });
  }

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {StarsRate.map(({ number, title, id }) => <ReviewStar number={number} title={title} key={id} handleRatingChange={handleRatingChange} />)}
      </div>
      <textarea
        onChange={({ target }) => setReview({ ...review, comment: target.value })}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review.comment}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
