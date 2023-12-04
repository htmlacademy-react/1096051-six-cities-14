import { Helmet } from 'react-helmet-async';
import LocationsList from '../../components/locations/locations';
import Map from '../../components/map/map';
import Sort from '../../components/sort/sort';
import { Section } from '../../const';
import { OfferDataType } from '../../types/offer-data-type';
import CityList from '../../components/city-list/city-list';
import { useAppSelector } from '../../hooks';

type SixCitiesScreenProps = {
  onListItemHover: (listItemName: string) => void;
  selectedPoint: OfferDataType | undefined;
};


function SixCitiesScreen({
  onListItemHover,
  selectedPoint }: SixCitiesScreenProps): JSX.Element {
  const filteredOffersList = useAppSelector((state) => state.filteredOffersList);
  const currentCityName = useAppSelector((state) => state.currentCityName);

  return (
    <main className="page__main page__main--index">
      <Helmet title="6 Cities"></Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <LocationsList />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{filteredOffersList.length} places to stay in {currentCityName}</b>
            <Sort />
            <div className="cities__places-list places__list tabs__content">
              <CityList onListItemHover={onListItemHover} dataList={filteredOffersList} section={Section.DEFAULT}></CityList>
            </div>
          </section>
          <div className="cities__right-section">
            <Map selectedPoint={selectedPoint} offerCardDataList={filteredOffersList} section={Section.DEFAULT} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default SixCitiesScreen;
