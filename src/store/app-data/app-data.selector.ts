import { NameSpace } from '../../const';
import { CommentDataType } from '../../types/comment-data-type';
import { OfferDataType } from '../../types/offer-data-type';
import { SortNamesType } from '../../types/sort-names-type';
import { State } from '../../types/state-type';
import { UniversalType } from '../../types/universal-type';

export const getFilteredOffersList = (state: State): OfferDataType[] => state[NameSpace.Data].filteredOffersList;
export const getOffersList = (state: State): OfferDataType[] => state[NameSpace.Data].offersList;
export const getFavoriteOffersList = (state: State): OfferDataType[] => state[NameSpace.Data].favoriteOffersList;
export const getOffersNearby = (state: State): OfferDataType[] => state[NameSpace.Data].offersNearby;
export const getCommentList = (state: State): CommentDataType[] => state[NameSpace.Data].commentList;
export const getCurrentOffer = (state: State): null | OfferDataType => state[NameSpace.Data].currentOffer;
export const getCurrentCityName = (state: State): string => state[NameSpace.Data].currentCityName;
export const getCurrentSort = (state: State): string => state[NameSpace.Data].currentSort;
export const getCityNames = (state: State): UniversalType[] => state[NameSpace.Data].cityNames;
export const getSortNames = (state: State): SortNamesType => state[NameSpace.Data].sortNames;
export const getIsOffersDataLoading = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].hasError;

