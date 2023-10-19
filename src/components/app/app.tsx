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
  commentDataList: {
    comment: string;
    date: string;
    id: number;
    rating: number;
    user: {
      avatarUrl: string;
      id: number;
      isPro: boolean;
      name: string;
    };
  }[];
  user: {
    avatarUrl: string;
    email: string;
    id: number;
    isPro: boolean;
    name: string;
    token: string;
  };
}

function App({
  countOffersRent,
  cityNames,
  offerCardDataList,
  currentSort,
  sortNames,
  favoriteCardList,
  offerData,
  commentDataList,
  user }: AppProps): JSX.Element {
  return (
    <>
      <SixCitiesScreen
        countOffersRent={countOffersRent}
        cityNames={cityNames}
        offerCardDataList={offerCardDataList}
        currentSort={currentSort}
        sortNames={sortNames}
        user={user}
      />
      <FavortitesScreen
        favoriteCardList={favoriteCardList}
        user={user}
      />
      <OfferScreen
        offerData={offerData}
        offerCardDataList={offerCardDataList}
        commentDataList={commentDataList}
        user={user}
      />
    </>
  );
}

export default App;
