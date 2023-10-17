import { nanoid } from 'nanoid';

const COUNT_OFFERS_RENT: number = 6;

const CityNames: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

const CityNamesList = CityNames.map((name) => ({
  name,
  id: nanoid()
}));

export {COUNT_OFFERS_RENT, CityNamesList};
