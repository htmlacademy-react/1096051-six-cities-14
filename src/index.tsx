import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { COUNT_OFFERS_RENT, CityNamesList, SortNames } from './const';
import { createOfferDataList } from './mock/offer';
import { getRandomPositiveInteger } from './utils/util';
import { nanoid } from 'nanoid';

const OFFERS_COUNT: number = 6;
const currentSort = SortNames[getRandomPositiveInteger(0, SortNames.length - 1)];
const offersDataList = createOfferDataList(OFFERS_COUNT);

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
    cityName: city.name,
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
  const cityNamesList = favoriteCardList.map(({cityName}) => cityName);

  type sortedFavoriteCardListType = {
    id: string;
    cityName: string;
    dataList:{
      isFavorite: boolean;
      isPremium: boolean;
      previewImage: string;
      price: number;
      rating: number;
      title: string;
      type: string;
      id: string;
    }[];
  }[]

  const sortedFavoriteCardList: sortedFavoriteCardListType = cityNamesList.map((name) => {
    const dataList = favoriteCardList.filter(({cityName}) => cityName === name).map(({...data}) => data);

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
    <App
      countOffersRent={COUNT_OFFERS_RENT}
      offerData={offersDataList[0]}
      cityNames={CityNamesList}
      offerCardDataList={offerCardDataList}
      currentSort={currentSort}
      sortNames={SortNames}
      favoriteCardList={getSortedFavoriteCardList()}
    />
  </React.StrictMode>
);
