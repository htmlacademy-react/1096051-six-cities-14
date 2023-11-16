import { createReducer } from '@reduxjs/toolkit';
import { createOfferDataList } from '../mock/offer';
import { changeCity, changeCurrentSort, renderRentList } from './action';
import { CityNames, SortNames } from '../const';

const DEFAULT_CITY_NAME = CityNames[0].name;
const DEFAULT_SORT = 'Popular';

const initialState = {
  currentCityName: DEFAULT_CITY_NAME,
  rentList: createOfferDataList(),
  cityNames: CityNames,
  currentSort: DEFAULT_SORT,
  sortNames: SortNames,
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCityName = action.payload;
    })
    .addCase(renderRentList, (state) => {
      state.rentList = createOfferDataList();
    })
    .addCase(changeCurrentSort, (state, action) => {
      state.currentSort = action.payload;
    });
});
