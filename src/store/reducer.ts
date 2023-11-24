import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeCurrentSort, loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus } from './action';
import { AuthorizationStatus, CityNames, SortNames } from '../const';
import { UniversalType } from '../types/universal.type';
import { SortNamesType } from '../types/sort-names.type';
import { OfferDataType } from '../types/offer-data.type';

const DEFAULT_CITY_NAME = CityNames[0].name;
const DEFAULT_SORT = 'Popular';

type InitialState = {
  currentCityName: string;
  rentList: OfferDataType[];
  cityNames: UniversalType[];
  currentSort: string;
  sortNames: SortNamesType;
  authorizationStatus: string;
  error: string | null;
  isOffersDataLoading: boolean;
}

const initialState: InitialState = {
  currentCityName: DEFAULT_CITY_NAME,
  rentList: [],
  cityNames: CityNames,
  currentSort: DEFAULT_SORT,
  sortNames: SortNames,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCityName = action.payload;
    })
    .addCase(changeCurrentSort, (state, action) => {
      state.currentSort = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.rentList = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});
