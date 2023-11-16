import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction('changeCity', (cityName: string) => ({
  payload: cityName
}));
export const changeCurrentSort = createAction('changeCurrentSort', (currentSort: string) => ({
  payload: currentSort
}));
export const renderRentList = createAction('renderRentList');

