import { Link } from 'react-router-dom';
import { PagePaths, Section } from '../../const';
import { CardData } from '../../types/CardData.type';
import { getWidthRatingProperty } from '../../utils/util';
import Bookmark from '../bookmark/bookmark';
import { useState } from 'react';

type CitiesCardProps = {
  section: string;
  data: CardData;
};

function CityCard({ data, section = Section.DEFAULT }: CitiesCardProps): JSX.Element {
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
    <article onMouseEnter={() => setIsActive(true)} onMouseOut={() => setIsActive(false)} className={`${containerClassName}__card place-card`}>
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}
      <div className={`${containerClassName}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${PagePaths.OFFER}/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark isFavorite={isFavorite} section={Section.DEFAULT}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getWidthRatingProperty(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${PagePaths.OFFER}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default CityCard;
