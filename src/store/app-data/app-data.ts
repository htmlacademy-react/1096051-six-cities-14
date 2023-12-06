import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppData } from '../../types/state-type';
import { CityNames, NameSpace, SortNames } from '../../const';
import { changeOfferFavoriteStatus, fetchCommentAction, fetchFavoriteOffer, fetchOfferAction, fetchOfferByIdAction } from '../api-actions';
import { OfferDataType } from '../../types/offer-data-type';

const DEFAULT_CITY_NAME = CityNames[0].name;
const DEFAULT_SORT = 'Popular';

const initialState: AppData = {
  offersList: [],
  filteredOffersList: [],
  favoriteOffersList: [],
  commentList: [],
  offersNearby: [],
  isOffersDataLoading: false,
  currentOffer: null,
  currentCityName: DEFAULT_CITY_NAME,
  currentSort: DEFAULT_SORT,
  cityNames: CityNames,
  sortNames: SortNames,
  hasError: false
};

function getFilteredOffersByCity(offersList: OfferDataType[], cityName: string): OfferDataType[] {
  return offersList.filter((item) => item.city.name === cityName);
}

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<{ cityName: string }>) => {
      const { cityName } = action.payload;
      state.currentCityName = cityName;
      state.filteredOffersList = getFilteredOffersByCity(state.offersList, state.currentCityName);
    },
    changeCurrentSort: (state, action: PayloadAction<{ currentSort: string }>) => {
      const { currentSort } = action.payload;
      state.currentSort = currentSort;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offersList = action.payload;
        state.filteredOffersList = getFilteredOffersByCity(state.offersList, state.currentCityName);
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchOfferByIdAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOfferByIdAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload.offerData;
        state.offersNearby = action.payload.offersNearby;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchCommentAction.fulfilled, (state, action) => {
        state.commentList = action.payload;
      })
      .addCase(fetchFavoriteOffer.fulfilled, (state, action) => {
        state.favoriteOffersList = action.payload;
      })
      .addCase(changeOfferFavoriteStatus.fulfilled, (state, action) => {
        state.offersList = state.offersList.map((offer) => action.payload.id === offer.id ? action.payload : offer);
        state.filteredOffersList = getFilteredOffersByCity(state.offersList, state.currentCityName);
        state.offersNearby = state.offersNearby.map((offer) => action.payload.id === offer.id ? action.payload : offer);
      });
  }
});

export const {changeCity, changeCurrentSort} = appData.actions;

