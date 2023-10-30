import { nanoid } from 'nanoid';
import { CityNamesList } from '../const';
import { getRandomBoolean, getRandomPositiveInteger } from '../utils/util';

const Bedrooms = {
  MIN: 1,
  MAX: 4
} as const;

const Location = {
  Latitude: {
    MIN: 0,
    MAX: 100
  },
  Longitude: {
    MIN: 0,
    MAX: 100
  },
  Zoom: {
    MIN: 1,
    MAX: 10
  }
} as const;

const Price = {
  MIN: 10,
  MAX: 1000
} as const;

const Rating = {
  MIN: 0,
  MAX: 5
} as const;

const OfferType: string[] = [
  'apartment',
  'room',
  'house',
  'hotel'
];

function createOfferData() {
  return {
    bedrooms: getRandomPositiveInteger(Bedrooms.MIN, Bedrooms.MAX),
    city: {
      location: {
        latitude: getRandomPositiveInteger(Location.Latitude.MIN, Location.Latitude.MAX),
        longitude: getRandomPositiveInteger(Location.Longitude.MIN, Location.Longitude.MAX),
        zoom: getRandomPositiveInteger(Location.Zoom.MIN, Location.Zoom.MAX)
      },
      name: CityNamesList[getRandomPositiveInteger(0, CityNamesList.length - 1)].name
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: getRandomBoolean(),
      name: 'Angelina'
    },
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg'
    ],
    isFavorite: getRandomBoolean(),
    isPremium: getRandomBoolean(),
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/apartment-0${getRandomPositiveInteger(1, 3)}.jpg`,
    price: getRandomPositiveInteger(Price.MIN, Price.MAX),
    rating: getRandomPositiveInteger(Rating.MIN, Rating.MAX),
    title: nanoid(),
    type: OfferType[getRandomPositiveInteger(0, OfferType.length - 1)],
    id: nanoid()
  };
}

function createOfferDataList(count: number) {
  return Array.from({length: count}, createOfferData);
}

export { createOfferDataList };
