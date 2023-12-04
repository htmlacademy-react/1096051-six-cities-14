import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state-type';
import { AxiosInstance } from 'axios';
import { OfferDataType } from '../types/offer-data-type';
import { APIRoute, AuthorizationStatus, PagePaths } from '../const';
import { changeOfferDataInList, loadComments, loadCurrentOffer, loadFavoriteOffers, loadOffers, redirectToRoute, requireAuthorization, setOffersDataLoadingStatus, updateUserdata } from './action';
import { AuthData } from '../types/auth-data-type';
import { UserType } from '../types/user-type';
import { dropToken, saveToken } from '../services/token';
import { CommentDataType } from '../types/comment-data-type';
import { FavoriteStatus } from '../types/favorite-status';

export const fetchOfferAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<OfferDataType[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  }
);

export const fetchOfferByIdAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferById',
  async (id, {dispatch, extra: api}) => {
    const route = `${APIRoute.Offers}/${id}`;
    dispatch(setOffersDataLoadingStatus(true));
    const {data: offerData} = await api.get<OfferDataType>(route);
    const {data: offersNearby} = await api.get<OfferDataType[]>(`${route}/nearby`);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadCurrentOffer(offerData, offersNearby));
    dispatch(redirectToRoute(`${PagePaths.OFFER}/${id}`));
  }
);

export const fetchCommentAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComment',
  async (id, {dispatch, extra: api}) => {
    const route = `${APIRoute.Comments}/${id}`;
    const {data} = await api.get<CommentDataType[]>(route);
    dispatch(loadComments(data));
  }
);

export const fetchFavoriteOffer = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteOffer',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferDataType[]>(APIRoute.Favorite);
    dispatch(loadFavoriteOffers(data));
  }
);

export const changeOfferFavoriteStatus = createAsyncThunk <void, FavoriteStatus, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/changeFavoriteOfferStatus',
  async ({offerID, status}, {dispatch, extra: api}) => {
    const route = `${APIRoute.Favorite}/${offerID}/${status}`;
    const {data} = await api.post<OfferDataType>(route);
    dispatch(fetchFavoriteOffer());
    dispatch(changeOfferDataInList(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserType>(APIRoute.Login);
      dispatch(updateUserdata(data));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk <void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserType>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(updateUserdata(data));
    dispatch(redirectToRoute(PagePaths.MAIN));
  }
);

export const logoutAction = createAsyncThunk <void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
);
