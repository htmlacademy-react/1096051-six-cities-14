import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { AuthorizationStatus } from './const';
import { createOfferDataList } from './mock/offer';
import { nanoid } from 'nanoid';
import { getCommentDataList } from './mock/comment';
import { getUserData } from './mock/user';
import { FavoriteCardListType } from './types/FavoriteCard.type';
import { CITY } from './mock/city';
import { Provider } from 'react-redux';
import { store } from './store';

const offersDataList = createOfferDataList();
const offerCardDataList = offersDataList.map((offerData) => {
  const {
    city,
    isFavorite,
    isPremium,
    previewImage,
    price,
    rating,
    title,
    type,
    id
  } = offerData;
  const cardOfferData = {
    city,
    isFavorite,
    isPremium,
    previewImage,
    price,
    rating,
    title,
    type,
    id
  };

  return cardOfferData;
});

function getSortedFavoriteCardList() {
  const favoriteCardList = offerCardDataList
    .filter(({ isFavorite }) => isFavorite);
  const cityNamesList = favoriteCardList.map(({ city }) => city.name);

  const sortedFavoriteCardList: FavoriteCardListType = cityNamesList.map((name) => {
    const dataList = favoriteCardList.filter(({ city }) => city.name === name).map(({ ...data }) => data);

    return {
      id: nanoid(),
      cityName: name,
      dataList
    };
  });

  return sortedFavoriteCardList;
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        city={CITY}
        favoriteCardList={getSortedFavoriteCardList()}
        commentDataList={getCommentDataList()}
        user={getUserData()}
        authStatus={AuthorizationStatus.Auth}
      />
    </Provider>
  </React.StrictMode>
);
