export type HostType = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type City = {
  location: Location;
  name: string;
}

export type OfferDataType = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: HostType;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
  id: string;
};
