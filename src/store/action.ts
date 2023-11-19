import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction('locations/changeCity', (cityName: string) => ({
  payload: cityName
}));
export const renderRentList = createAction('locations/renderRentList');
export const changeCurrentSort = createAction('sort/changeCurrentSort', (currentSort: string) => ({
  payload: currentSort
}));

