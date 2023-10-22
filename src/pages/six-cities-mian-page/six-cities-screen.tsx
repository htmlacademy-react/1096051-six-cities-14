import CityCard from '../../components/city-card/city-card';
import Header from '../../components/header/header';
import LocationsList from '../../components/locations/locations';
import Map from '../../components/map/map';
import Sort from '../../components/sort/sort';
import { Section } from '../../const';
import { OfferCardDataType } from '../../types/OfferData.type';
import { UniversalType } from '../../types/UniversalType.type';
import { UserType } from '../../types/User.type';

type SixCitiesScreenProps = {
  countOffersRent: number;
  cityNames: UniversalType[];
  offerCardDataList: OfferCardDataType[];
  currentSort: UniversalType;
  sortNames: UniversalType[];
  user: UserType;
};


function SixCitiesScreen({
  countOffersRent,
  cityNames,
  offerCardDataList,
  currentSort,
  sortNames,
  user }: SixCitiesScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header user={user}/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList cityNames={cityNames} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{countOffersRent} places to stay in Amsterdam</b>
              <Sort currentSort={currentSort} sortNames={sortNames} />
              <div className="cities__places-list places__list tabs__content">
                {offerCardDataList.map((data) => <CityCard data={data} key={data.id} section={Section.DEFAULT} />)}
              </div>
            </section>
            <div className="cities__right-section">
              <Map section={Section.DEFAULT}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SixCitiesScreen;
