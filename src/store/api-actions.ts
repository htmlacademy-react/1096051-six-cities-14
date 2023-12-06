import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state-type';
import { AxiosInstance } from 'axios';
import { OfferDataType } from '../types/offer-data-type';
import { APIRoute, PagePaths } from '../const';
import { AuthData } from '../types/auth-data-type';
import { UserType } from '../types/user-type';
import { dropToken, saveToken } from '../services/token';
import { CommentDataType } from '../types/comment-data-type';
import { FavoriteStatus } from '../types/favorite-status';
import { redirectToRoute } from './action';

export const fetchOfferAction = createAsyncThunk<OfferDataType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferDataType[]>(APIRoute.Offers);
    return data;
  }
);

type fetchOfferByIdActionProps = {
  offerData: OfferDataType;
  offersNearby: OfferDataType[];
  pagePath: string;
}

export const fetchOfferByIdAction = createAsyncThunk<fetchOfferByIdActionProps, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferById',
  async (id, { dispatch, extra: api }) => {
    const route = `${APIRoute.Offers}/${id}`;
    const { data: offerData } = await api.get<OfferDataType>(route);
    const { data: offersNearby } = await api.get<OfferDataType[]>(`${route}/nearby`);
    const pagePath = `${PagePaths.OFFER}/${id}`;
    dispatch(redirectToRoute(pagePath));
    return {offerData, offersNearby, pagePath};
  }
);

export const fetchCommentAction = createAsyncThunk<CommentDataType[], string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComment',
  async (id, { extra: api }) => {
    const route = `${APIRoute.Comments}/${id}`;
    const { data } = await api.get<CommentDataType[]>(route);
    return data;
  }
);

export const fetchFavoriteOffer = createAsyncThunk<OfferDataType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteOffer',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferDataType[]>(APIRoute.Favorite);
    return data;
  }
);

export const changeOfferFavoriteStatus = createAsyncThunk<OfferDataType, FavoriteStatus, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/changeFavoriteOfferStatus',
  async ({ offerID, status }, { dispatch, extra: api }) => {
    const route = `${APIRoute.Favorite}/${offerID}/${status}`;
    const { data } = await api.post<OfferDataType>(route);
    dispatch(fetchFavoriteOffer());
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<UserType, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserType>(APIRoute.Login);
    return data;
  }
);

type LoginActionProps = {
  data: UserType;
  pagePath: string;
}

export const loginAction = createAsyncThunk<LoginActionProps, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, { extra: api }) => {
    const { data } = await api.post<UserType>(APIRoute.Login, { email, password });
    saveToken(data.token);
    const pagePath = PagePaths.MAIN;
    return {data, pagePath};
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);
