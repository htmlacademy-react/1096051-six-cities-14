import { createReducer } from '@reduxjs/toolkit';
import { createOfferDataList } from '../mock/offer';
import { changeCity, renderRentList } from './action';
import { CityNames } from '../const';

const DEFAULT_CITY_NAME = CityNames[0].name;

const initialState = {
  currentCityName: DEFAULT_CITY_NAME,
  rentList: createOfferDataList(),
  cityNames: CityNames,
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCityName = action.payload;
    })
    .addCase(renderRentList, (state) => {
      state.rentList = createOfferDataList();
    });
});
