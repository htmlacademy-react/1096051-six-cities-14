import {store} from '../store/index.ts';
import { CommentDataType } from './comment-data-type.ts';
import { OfferDataType } from './offer-data-type.ts';
import { SortNamesType } from './sort-names-type.ts';
import { UniversalType } from './universal-type.ts';
import { UserType } from './user-type.ts';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: string;
  userData: UserType | null;
};

export type AppData = {
  offersList: OfferDataType[];
  filteredOffersList: OfferDataType[];
  favoriteOffersList: OfferDataType[];
  offersNearby: OfferDataType[];
  commentList: CommentDataType[];
  isOffersDataLoading: boolean;
  currentOffer: null | OfferDataType;
  currentCityName: string;
  currentSort: string;
  cityNames: UniversalType[];
  sortNames: SortNamesType;
  hasError: boolean;
}

export type AppService = {
  currentPagePath: string;
}
