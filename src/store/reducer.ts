import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeCurrentSort, changeOfferDataInList, changePagePath, loadComments, loadCurrentOffer, loadFavoriteOffers, loadOffers, requireAuthorization, setOffersDataLoadingStatus, updateUserdata } from './action';
import { AuthorizationStatus, CityNames, PagePaths, SortNames } from '../const';
import { UniversalType } from '../types/universal-type';
import { SortNamesType } from '../types/sort-names-type';
import { OfferDataType } from '../types/offer-data-type';
import { UserType } from '../types/user-type';
import { CommentDataType } from '../types/comment-data-type';

const DEFAULT_CITY_NAME = CityNames[0].name;
const DEFAULT_SORT = 'Popular';

type InitialState = {
  currentCityName: string;
  offersList: OfferDataType[];
  filteredOffersList: OfferDataType[];
  favoriteOffersList: OfferDataType[];
  commentList: CommentDataType[];
  cityNames: UniversalType[];
  currentSort: string;
  sortNames: SortNamesType;
  authorizationStatus: string;
  isOffersDataLoading: boolean;
  currentPagePath: string;
  currentOffer: null | OfferDataType;
  userData: null | UserType;
}

const initialState: InitialState = {
  offersList: [],
  filteredOffersList: [],
  favoriteOffersList: [],
  commentList: [],
  cityNames: CityNames,
  currentCityName: DEFAULT_CITY_NAME,
  currentSort: DEFAULT_SORT,
  sortNames: SortNames,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  currentPagePath: PagePaths.MAIN,
  currentOffer: null,
  userData: null
};


function getFilteredOffersByCity (offersList: OfferDataType[], cityName: string): OfferDataType[] {
  return offersList.filter((item) => item.city.name === cityName);
}

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCityName = action.payload;
      state.filteredOffersList = getFilteredOffersByCity(state.offersList, state.currentCityName);
    })
    .addCase(changeCurrentSort, (state, action) => {
      state.currentSort = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offersList = action.payload;
      state.filteredOffersList = getFilteredOffersByCity(state.offersList, state.currentCityName);
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffersList = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(changePagePath, (state, action) => {
      state.currentPagePath = action.payload;
    })
    .addCase(loadCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(updateUserdata, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.commentList = action.payload;
    })
    .addCase(changeOfferDataInList, (state, action) => {
      state.offersList = state.offersList.map((offer) => action.payload.id === offer.id ? action.payload : offer);
    });
});
