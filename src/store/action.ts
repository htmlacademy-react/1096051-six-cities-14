import { createAction } from '@reduxjs/toolkit';
import { OfferDataType } from '../types/offer-data.type';

export const changeCity = createAction('locations/changeCity', (cityName: string) => ({
  payload: cityName
}));

export const renderRentList = createAction('locations/renderRentList');

export const changeCurrentSort = createAction('sort/changeCurrentSort', (currentSort: string) => ({
  payload: currentSort
}));

export const loadOffers = createAction('data/loadOffers', (offersData: OfferDataType[]) => ({
  payload: offersData
}));

export const requireAuthorization = createAction('user/requireAuthorization', (authorizationStatus: string) => ({
  payload: authorizationStatus
}));


export const setError = createAction<string | null>('general/setError');
