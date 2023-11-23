import { createAction } from '@reduxjs/toolkit';
import { OfferDataType } from '../types/OfferData.type';

export const changeCity = createAction('locations/changeCity', (cityName: string) => ({
  payload: cityName
}));

export const renderRentList = createAction('locations/renderRentList');

export const changeCurrentSort = createAction('sort/changeCurrentSort', (currentSort: string) => ({
  payload: currentSort
}));

export const loadCards = createAction<OfferDataType[]>('data/loadCards');

