import { Helmet } from 'react-helmet-async';
import { Section } from '../../const';
import { FavoriteCardListType, FavoriteItemDataType } from '../../types/FavoriteCard.type';
import CityList from '../../components/city-list/city-list';

type FavoriteItemProps = FavoriteItemDataType &{
  handleListItemHover: (listItemName: string) => void;
}

function FavoriteItem({
  cityName,
  dataList,
  handleListItemHover,
}: FavoriteItemProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <CityList onListItemHover={handleListItemHover} dataList={dataList} section={Section.FAVORITE}></CityList>
      </div>
    </li>
  );
}

type FavortitesScreenProps = {
  favoriteCardList: FavoriteCardListType;
  handleListItemHover: (listItemName: string) => void;
};

function FavortitesScreen({
  favoriteCardList,
  handleListItemHover
}: FavortitesScreenProps): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <Helmet title="Favorites"></Helmet>
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {favoriteCardList.map(({ cityName, dataList, id }) => <FavoriteItem handleListItemHover={handleListItemHover} cityName={cityName} dataList={dataList} key={id} />)}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavortitesScreen;
