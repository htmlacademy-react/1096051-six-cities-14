import { nanoid } from 'nanoid';
import { UniversalType } from './types/universal-type';
import { SortNamesType } from './types/sort-names-type';
import { AuthorizationStatus } from './types/authorization-status-type';

const COUNT_COMMENTS: number = 5;
const MAX_RATING = 5;

const StarsRate = [
  {
    number: 5,
    title: 'perfect',
    id: nanoid()
  },
  {
    number: 4,
    title: 'good',
    id: nanoid()
  },
  {
    number: 3,
    title: 'not bad',
    id: nanoid()
  },
  {
    number: 2,
    title: 'badly',
    id: nanoid()
  },
  {
    number: 1,
    title: 'terribly',
    id: nanoid()
  },
];

const CityNames: UniversalType[] = [
  {
    name: 'Paris',
    id: nanoid()
  },
  {
    name: 'Cologne',
    id: nanoid()
  },
  {
    name: 'Brussels',
    id: nanoid()
  },
  {
    name: 'Amsterdam',
    id: nanoid()
  },
  {
    name: 'Hamburg',
    id: nanoid()
  },
  {
    name: 'Dusseldorf',
    id: nanoid()
  },
];

const SortNames: SortNamesType = {
  Popular: {
    name: 'Popular',
    id: nanoid()
  },
  LowToHigh: {
    name: 'Price: low to high',
    id: nanoid()
  },
  HighToLow: {
    name: 'Price: high to low',
    id: nanoid()
  },
  TopRate: {
    name: 'Top rated first',
    id: nanoid()
  }
};


const Section = {
  DEFAULT: 'DEFAULT',
  FAVORITE: 'FAVORITE',
  OTHER: 'OTHER',
  OFFER: 'OFFER'
};

const PagePaths = {
  MAIN: '/',
  FAVORITES: '/favorites',
  LOGIN: '/login',
  OFFER: '/offer',
};

const AuthorizationStatus: AuthorizationStatus = {
  Auth: 'Auth',
  NoAuth: 'NoAuth',
  Unknown: 'Unknown',
};

const APIRoute = {
  Offers: '/offers',
  Comments: '/comments',
  Favorite: '/favorite',
  Login: '/login',
  Logout: '/logout'
};

const UrlMarker = {
  Default: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  Current: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg'
};

export {
  UrlMarker,
  CityNames,
  SortNames,
  Section,
  StarsRate,
  COUNT_COMMENTS,
  MAX_RATING,
  PagePaths,
  AuthorizationStatus,
  APIRoute,
};
