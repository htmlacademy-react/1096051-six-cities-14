import { Section } from '../../const';


const MAX_RATING = 5;

type CitiesCardProps = {
  section: string;
  data: {
    isFavorite: boolean;
    isPremium: boolean;
    previewImage: string;
    price: number;
    rating: number;
    title: string;
    type: string;
    id: string;
  };
};

function CityCard({ data, section = Section.DEFAULT }: CitiesCardProps): JSX.Element {
  const {
    isPremium,
    isFavorite,
    price,
    rating,
    title,
    type,
    previewImage
  } = data;
  const ratingWidth: string = `${(Math.round(rating) / (MAX_RATING / 100)).toFixed(0)}%`;
  let containerClassName: string;
  switch (section) {
    case Section.FAVORITE:
      containerClassName = 'favorites';
      break;
    case Section.OTHER:
      containerClassName = 'near-places';
      break;
    default:
      containerClassName = 'cities';
  }

  return (
    <article className={`${containerClassName}__card place-card`}>
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}
      <div className={`${containerClassName}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingWidth }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default CityCard;
