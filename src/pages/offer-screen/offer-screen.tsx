import { Navigate, useParams } from 'react-router-dom';
import Bookmark from '../../components/bookmark/bookmark';
import CityCard from '../../components/city-card/city-card';
import Features from '../../components/features/features';
import Gallery from '../../components/gallery/gallery';
import Host from '../../components/host/host';
import Map from '../../components/map/map';
import OfferGoods from '../../components/offer-goods/offer-goods';
import Review from '../../components/review/review';
import { PagePaths, Section } from '../../const';
import { CommentDataType } from '../../types/CommentData.type';
import { OfferDataType } from '../../types/OfferData.type';
import { getWidthRatingProperty } from '../../utils/util';
import { Helmet } from 'react-helmet-async';

type OfferScreenProps = {
  offerCardDataList: OfferDataType[];
  commentDataList: CommentDataType[];
}

function OfferScreen({ offerCardDataList, commentDataList }: OfferScreenProps): JSX.Element {
  const paramID = useParams().id;
  const offerData = offerCardDataList.find(({ id }) => id === paramID);

  if (offerData) {
    const {
      host,
      description,
      goods,
      price,
      maxAdults,
      type,
      bedrooms,
      rating,
      isFavorite,
      title,
      isPremium,
      images
    } = offerData;

    return (
      <main className="page__main page__main--offer">
        <Helmet title="Offers"></Helmet>
        <section className="offer">
          <Gallery images={images} />
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium ?
                <div className="offer__mark">
                  <span>Premium</span>
                </div> : ''}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <Bookmark isFavorite={isFavorite} section={Section.OFFER} />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: getWidthRatingProperty(rating) }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <Features features={{ maxAdults, bedrooms, type }} />
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <OfferGoods goods={goods} />
              <Host host={host} description={description} />
              <Review commentDataList={commentDataList} />
            </div>
          </div>
          <Map section={Section.OTHER} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {offerCardDataList.map((data) => <CityCard data={data} key={data.id} section={Section.OTHER} />)}
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <Navigate to={PagePaths.MAIN}></Navigate>
  );

}

export default OfferScreen;
