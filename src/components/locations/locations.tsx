type LocationItemProps = {
  name: string;
  id: string;
}

type LocationsListProps = {
  cityNames: {
    name: string;
    id: string;
  }[];
};

function LocationItem({name, id}: LocationItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" id={id} href="#">
        <span>{name}</span>
      </a>
    </li>
  );
}

function LocationsList({cityNames}: LocationsListProps): JSX.Element {
  const locationItemsElements = cityNames.map(({name, id}) => (
    <LocationItem name={name} id={id} key={id} />
  ));

  return (
    <ul className="locations__list tabs__list">
      {locationItemsElements}
    </ul>
  );
}

export default LocationsList;
