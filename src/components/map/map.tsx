import { Section } from '../../const';

type MapProps = {
  section: string;
}

function Map({section}: MapProps): JSX.Element {
  const className = section === Section.OTHER ? 'offer' : 'cities';

  return (
    <section className={`${className}__map map`}></section>
  );
}

export default Map;
