import { Helmet } from 'react-helmet-async';
import CityCard from '../../components/city-card/city-card';
import { Section } from '../../const';
import { FavoriteCardListType, FavoriteItemDataType } from '../../types/FavoriteCard.type';

function FavoriteItem({ cityName, dataList }: FavoriteItemDataType): JSX.Element {
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
        {dataList.map((cardData) => <CityCard data={cardData} key={cardData.id} section={Section.FAVORITE} />)}
      </div>
    </li>
  );
}

type FavortitesScreenProps = {
  favoriteCardList: FavoriteCardListType;
};

function FavortitesScreen({ favoriteCardList }: FavortitesScreenProps): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <Helmet title="Favorites"></Helmet>
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {favoriteCardList.map(({ cityName, dataList, id }) => <FavoriteItem cityName={cityName} dataList={dataList} key={id} />)}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavortitesScreen;
