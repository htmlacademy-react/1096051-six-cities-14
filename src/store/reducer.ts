import { createReducer } from '@reduxjs/toolkit';
import { createOfferDataList } from '../mock/offer';
import { changeCity, changeCurrentSort, loadOffers, renderRentList, requireAuthorization } from './action';
import { AuthorizationStatus, CityNames, SortNames } from '../const';
import { UniversalType } from '../types/universal.type';
import { SortNamesType } from '../types/sort-names.type';

const DEFAULT_CITY_NAME = CityNames[0].name;
const DEFAULT_SORT = 'Popular';

type InitialState = {
  currentCityName: string;
  rentList: [];
  cityNames: UniversalType[];
  currentSort: string;
  sortNames: SortNamesType;
  authorizationStatus: string;
}

const initialState: InitialState = {
  currentCityName: DEFAULT_CITY_NAME,
  rentList: [],
  cityNames: CityNames,
  currentSort: DEFAULT_SORT,
  sortNames: SortNames,
  authorizationStatus: AuthorizationStatus.Unknown
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
    })
    .addCase(loadOffers, (state, action) => {
      state.rentList = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
