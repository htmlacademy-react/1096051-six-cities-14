import CityCard from '../../components/city-card/city-card';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { Section } from '../../const';

type FavortitesScreenProps = {
  favoriteCardList: {
    id: string;
    cityName: string;
    dataList: {
      isFavorite: boolean;
      isPremium: boolean;
      previewImage: string;
      price: number;
      rating: number;
      title: string;
      type: string;
      id: string;
    }[];
  }[];
};

type FavoriteItemProps = {
  cityName: string;
  dataList: {
    isFavorite: boolean;
    isPremium: boolean;
    previewImage: string;
    price: number;
    rating: number;
    title: string;
    type: string;
    id: string;
  }[];
}

function FavoriteItem({cityName, dataList}: FavoriteItemProps): JSX.Element {
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

function FavortitesScreen({ favoriteCardList }: FavortitesScreenProps): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoriteCardList.map(({cityName, dataList, id}) => <FavoriteItem cityName={cityName} dataList={dataList} key={id} />)}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavortitesScreen;
