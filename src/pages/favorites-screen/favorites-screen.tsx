import { Helmet } from 'react-helmet-async';
import { Section } from '../../const';
import CityList from '../../components/city-list/city-list';
import { useAppSelector } from '../../hooks';

type FavoriteItemProps = {
  handleListItemHover: (listItemName: string) => void;
}

function FavoriteItem({
  handleListItemHover,
}: FavoriteItemProps): JSX.Element | string {
  const favoriteOffersList = useAppSelector((state) => state.favoriteOffersList);
  const currentCityName = useAppSelector((state) => state.currentCityName);

  return (
    favoriteOffersList ?
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{currentCityName}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          <CityList onListItemHover={handleListItemHover} dataList={favoriteOffersList} section={Section.FAVORITE}></CityList>
        </div>
      </li>
      :
      ''
  );
}

type FavortitesScreenProps = {
  handleListItemHover: (listItemName: string) => void;
};

function FavortitesScreen({
  handleListItemHover
}: FavortitesScreenProps): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <Helmet title="Favorites"></Helmet>
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <FavoriteItem handleListItemHover={handleListItemHover} />
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavortitesScreen;
