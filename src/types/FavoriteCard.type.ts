export type FavoriteItemDataType = {
  cityName: string;
  dataList: {
    isFavorite: boolean;
    isPremium: boolean;
    previewImage: string;
    price: number;
    rating: number;
    title: string;
    type: string;
    id: string;
  }[];
}

export type FavoriteCardListType = (FavoriteItemDataType & {
  id: string;
})[];
