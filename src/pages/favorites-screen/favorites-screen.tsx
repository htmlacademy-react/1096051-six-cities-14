import { Helmet } from 'react-helmet-async';
import { Section } from '../../const';
import CityList from '../../components/city-list/city-list';
import { useAppSelector } from '../../hooks';
import { OfferDataType } from '../../types/offer-data-type';
import { FavoriteItemDataType } from '../../types/favorite-card-type';

function favoriteOffersListToMap(favoriteOffers: OfferDataType[]) {
  const favoriteOffersMap = new Map<string, OfferDataType[]>();

  favoriteOffers.forEach((offer: OfferDataType) => {
    const cityName = offer.city.name;

    if (favoriteOffersMap.has(cityName)) {
      const currentArray: OfferDataType[] | undefined = favoriteOffersMap.get(cityName);

      if (currentArray) {
        favoriteOffersMap.set(offer.city.name, [...currentArray, offer]);
      }
    } else {
      favoriteOffersMap.set(offer.city.name, [offer]);
    }
  });

  return favoriteOffersMap;
}

type FavoriteItemProps = FavoriteItemDataType & {
  handleListItemHover: (listItemName: string) => void;
}

function FavoriteItem({
  handleListItemHover,
  cityName,
  dataList
}: FavoriteItemProps): JSX.Element | string {

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

type FillFavoriteItemsByDataProps = {
  favoriteOffersMap: Map<string, OfferDataType[]>;
  handleListItemHover: (listItemName: string) => void;
}

function FillFavoriteItemsByData({ favoriteOffersMap, handleListItemHover }: FillFavoriteItemsByDataProps) {
  const favoriteItemsElements = [];
  for (const cityName of favoriteOffersMap.keys()) {
    const offersInCity = favoriteOffersMap.get(cityName);

    if (offersInCity) {
      favoriteItemsElements.push(
        <FavoriteItem
          cityName={cityName}
          dataList={offersInCity}
          handleListItemHover={handleListItemHover}
          key={cityName}
        />
      );
    }
  }

  return favoriteItemsElements;
}

type FavortitesScreenProps = {
  handleListItemHover: (listItemName: string) => void;
};

function FavortitesScreen({
  handleListItemHover
}: FavortitesScreenProps): JSX.Element {
  const favoriteOffersList = useAppSelector((state) => state.favoriteOffersList);
  const favoriteOffersMap: Map<string, OfferDataType[]> = favoriteOffersListToMap(favoriteOffersList);

  return (
    <main className="page__main page__main--favorites">
      <Helmet title="Favorites"></Helmet>
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {FillFavoriteItemsByData({ favoriteOffersMap, handleListItemHover })}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavortitesScreen;
