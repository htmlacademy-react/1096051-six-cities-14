import { Link } from 'react-router-dom';
import { PagePaths, Section } from '../../const';
import { getWidthRatingProperty } from '../../utils/util';
import Bookmark from '../bookmark/bookmark';
import { useState } from 'react';
import { CardData } from '../../types/card-data.type';

type CitiesCardProps = {
  section: string;
  data: CardData;
  onListItemHover: (evt: React.MouseEvent<HTMLElement>, listItemName: string) => void;
};

function CityCard({ data, section = Section.DEFAULT, onListItemHover }: CitiesCardProps): JSX.Element {
  const {
    isPremium,
    isFavorite,
    price,
    rating,
    title,
    id,
    type,
    previewImage
  } = data;

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

  const [, setIsActive] = useState(false);

  return (
    <article onMouseEnter={(event) => {
      onListItemHover(event, title);
      setIsActive(true);
    }} onMouseOut={() => setIsActive(false)} className={`${containerClassName}__card place-card`}
    >
      <Link to={`${PagePaths.OFFER}/${id}`}>
        {isPremium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div> : ''}
        <div className={`${containerClassName}__image-wrapper place-card__image-wrapper`}>

          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />

        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <Bookmark isFavorite={isFavorite} section={Section.DEFAULT} />
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: getWidthRatingProperty(rating) }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">{title}</h2>
          <p className="place-card__type">{type}</p>
        </div>
      </Link>
    </article>
  );
}

export default CityCard;
