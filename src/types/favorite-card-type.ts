import { CardData } from './card-data-type';

export type FavoriteItemDataType = {
  cityName: string;
  dataList: CardData[];
}

export type FavoriteCardListType = (FavoriteItemDataType & {
  id: string;
})[];
