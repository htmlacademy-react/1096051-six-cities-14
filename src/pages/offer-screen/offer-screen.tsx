import { Navigate } from 'react-router-dom';
import Bookmark from '../../components/bookmark/bookmark';
import Features from '../../components/features/features';
import Gallery from '../../components/gallery/gallery';
import Host from '../../components/host/host';
import Map from '../../components/map/map';
import OfferGoods from '../../components/offer-goods/offer-goods';
import Review from '../../components/review/review';
import { PagePaths, Section } from '../../const';
import { OfferDataType } from '../../types/offer-data-type';
import { getWidthRatingProperty } from '../../utils/util';
import { Helmet } from 'react-helmet-async';
import CityList from '../../components/city-list/city-list';
import { useEffect } from 'react';
import { useAppSelector } from '../../hooks';

type OfferScreenProps = {
  offerCardDataList: OfferDataType[];
  handleListItemHover: (listItemName: string) => void;
  selectedPoint: OfferDataType | undefined;
}

function OfferScreen({
  offerCardDataList,
  handleListItemHover,
  selectedPoint
}: OfferScreenProps): JSX.Element {
  const currentLocation = window.location.href;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentLocation]);

  const offerData = useAppSelector((state) => state.currentOffer);

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
              <Review />
            </div>
          </div>
          <Map selectedPoint={selectedPoint} offerCardDataList={offerCardDataList} section={Section.OTHER} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <CityList onListItemHover={handleListItemHover} dataList={offerCardDataList} section={Section.OTHER}></CityList>
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
