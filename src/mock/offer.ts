import { nanoid } from 'nanoid';
import { CityNames } from '../const';
import { getRandomBoolean, getRandomPositiveInteger } from '../utils/util';

const Bedrooms = {
  MIN: 1,
  MAX: 4
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

const Location = [
  {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198
  },
  {
    latitude: 52.3609553943508,
    longitude: 4.85309666406198
  },
  {
    latitude: 52.3909553943508,
    longitude: 4.929309666406198
  },
  {
    latitude: 52.3809553943508,
    longitude: 4.939309666406198
  },
];
// to do (Сделал второй модуль до этого)
function createOfferData(index: number) {
  return {
    bedrooms: getRandomPositiveInteger(Bedrooms.MIN, Bedrooms.MAX),
    city: {
      location: {
        ...Location[index],
        zoom: 10
      },
      name: CityNames[getRandomPositiveInteger(0, CityNames.length - 1)].name
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

function createOfferDataList() {
  return Array.from({length: Location.length}, (_, index) => createOfferData(index));
}

export { createOfferDataList };
