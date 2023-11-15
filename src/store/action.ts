import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction('changeCity', (cityName: string) => ({
  payload: cityName
}));
export const renderRentList = createAction('renderRentList');

