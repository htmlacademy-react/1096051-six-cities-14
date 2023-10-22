import { MAX_RATING } from '../const';

function getRandomPositiveInteger(min: number, max: number): number {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function getRandomBoolean(): boolean {
  return Boolean(getRandomPositiveInteger(0, 1));
}

function getWidthRatingProperty(rating: number): string {
  return `${(Math.round(rating) / (MAX_RATING / 100)).toFixed(0)}%`;
}

function getUpperCaseFirstLetter(text: string): string {
  const splitted = text.split('');
  const first = splitted[0].toUpperCase();
  const otherLetters = [...splitted];
  otherLetters.splice(0, 1);

  return [first, ...otherLetters].join('');
}

export { getRandomPositiveInteger, getRandomBoolean, getWidthRatingProperty, getUpperCaseFirstLetter };
