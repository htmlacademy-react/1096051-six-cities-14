function getRandomPositiveInteger(min: number, max: number) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function getRandomBoolean() {
  return Boolean(getRandomPositiveInteger(0, 1));
}

export { getRandomPositiveInteger, getRandomBoolean };
