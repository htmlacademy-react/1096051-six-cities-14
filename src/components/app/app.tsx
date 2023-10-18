import FavortitesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import SixCitiesScreen from '../../pages/six-cities-mian-page/six-cities-screen';

type AppProps = {
  countOffersRent: number;
  cityNames: {
    name: string;
    id: string;
  }[];
  offerData: {
    bedrooms: number;
    city: {
      location: {
        latitude: number;
        longitude: number;
        zoom: number;
      };
      name: string;
    };
    description: string;
    goods: string[];
    host: {
      avatarUrl: string;
      id: number;
      isPro: boolean;
      name: string;
    };
    images: string[];
    isFavorite: boolean;
    isPremium: boolean;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
    maxAdults: number;
    previewImage: string;
    price: number;
    rating: number;
    title: string;
    type: string;
    id: string;
  };
  offerCardDataList: {
    cityName: string;
    isFavorite: boolean;
    isPremium: boolean;
    previewImage: string;
    price: number;
    rating: number;
    title: string;
    type: string;
    id: string;
  }[];
  currentSort: {
    name: string;
    id: string;
  };
  sortNames: {
    name: string;
    id: string;
  }[];
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
}

function App({
  countOffersRent,
  cityNames,
  offerCardDataList,
  currentSort,
  sortNames,
  favoriteCardList,
  offerData }: AppProps): JSX.Element {
  return (
    <>
      <SixCitiesScreen
        countOffersRent={countOffersRent}
        cityNames={cityNames}
        offerCardDataList={offerCardDataList}
        currentSort={currentSort}
        sortNames={sortNames}
      />
      <FavortitesScreen favoriteCardList={favoriteCardList} />
      <OfferScreen offerData={offerData} offerCardDataList={offerCardDataList} />
    </>
  );
}

export default App;
