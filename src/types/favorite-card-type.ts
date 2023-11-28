import { OfferDataType } from './offer-data-type';

export type FavoriteItemDataType = {
  cityName: string;
  dataList: OfferDataType[];
}

export type FavoriteCardListType = (FavoriteItemDataType & {
  id: string;
})[];
