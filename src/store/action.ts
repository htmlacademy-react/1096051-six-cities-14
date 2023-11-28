import { createAction } from '@reduxjs/toolkit';
import { OfferDataType } from '../types/offer-data-type';
import { UserType } from '../types/user-type';
import { CommentDataType } from '../types/comment-data-type';

export const changeCity = createAction('locations/changeCity', (cityName: string) => ({
  payload: cityName
}));

export const changeCurrentSort = createAction('sort/changeCurrentSort', (currentSort: string) => ({
  payload: currentSort
}));

export const loadOffers = createAction('data/loadOffers', (offersData: OfferDataType[]) => ({
  payload: offersData
}));

export const changeOfferDataInList = createAction('data/changeofferDataInList', (offerData: OfferDataType) => ({
  payload: offerData
}));

export const loadFavoriteOffers = createAction('data/loadFavoriteOffers', (favoriteOffersData: OfferDataType[]) => ({
  payload: favoriteOffersData
}));

export const loadCurrentOffer = createAction('data/loadCurrentOffer', (offerData: OfferDataType) => ({
  payload: offerData
}));

export const requireAuthorization = createAction('user/requireAuthorization', (authorizationStatus: string) => ({
  payload: authorizationStatus
}));

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const redirectToRoute = createAction<string>('main/redirectToRoute');

export const changePagePath = createAction('browser/changePagePath', (pagePath: string) => ({
  payload: pagePath
}));

export const updateUserdata = createAction('user/updateUserData', (data: UserType) => ({
  payload: data
}));

export const loadComments = createAction('data/loadComments', (commentsData: CommentDataType[]) => ({
  payload: commentsData
}));
