import { nanoid } from 'nanoid';
import { UniversalType } from './types/UniversalType.type';

const COUNT_OFFERS_RENT: number = 6;
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

const CityNames: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

type SortNamesType = UniversalType[]

const SortNames: SortNamesType = [
  {
    name: 'Popular',
    id: nanoid()
  },
  {
    name: 'Price: low to high',
    id: nanoid()
  },
  {
    name: 'Price: high to low',
    id: nanoid()
  },
  {
    name: 'Top rated first',
    id: nanoid()
  }
];

const CityNamesList = CityNames.map((name) => ({
  name,
  id: nanoid()
}));

const Section = {
  DEFAULT: 'DEFAULT',
  FAVORITE: 'FAVORITE',
  OTHER: 'OTHER',
  OFFER: 'OFFER'
} as const;

const PagePaths = {
  MAIN: '/',
  FAVORITES: '/favorites',
  LOGIN: '/login',
  OFFER: '/offer',
};

const AuthorizationStatus = {
  Auth: 'Auth',
  NoAuth: 'NoAuth',
  Unknown: 'Unknown',
} as const;

export { COUNT_OFFERS_RENT, CityNamesList, SortNames, Section, StarsRate, COUNT_COMMENTS, MAX_RATING, PagePaths, AuthorizationStatus };
