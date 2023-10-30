import { getUpperCaseFirstLetter } from '../../utils/util';

type FeaturesProps = {
  features: {
    bedrooms: number;
    maxAdults: number;
    type: string;
  };
}

function Features({ features }: FeaturesProps): JSX.Element {
  const {
    maxAdults,
    bedrooms,
    type
  } = features;

  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {getUpperCaseFirstLetter(type)}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedrooms} Bedrooms
      </li>
      <li className="offer__feature offer__feature--adults">
        Max {maxAdults} adults
      </li>
    </ul>
  );
}

export default Features;
