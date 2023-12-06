import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { UniversalType } from '../../types/universal-type';
import { getCityNames, getCurrentCityName } from '../../store/app-data/app-data.selector';
import { changeCity } from '../../store/app-data/app-data';

type LocationItemProps = UniversalType

function LocationItem({ name, id }: LocationItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCityFilter = useAppSelector(getCurrentCityName);


  return (
    <li className="locations__item">
      <Link onClick={
        () => {
          dispatch(changeCity({cityName: name}));
        }
      } className={`locations__item-link tabs__item${currentCityFilter === name ? '--active' : ''}`} id={id} to="#"
      >
        <span>{name}</span>
      </Link>
    </li>
  );
}

function LocationsList(): JSX.Element {
  const cityNames = useAppSelector(getCityNames);
  const locationItemsElements = cityNames.map(({ name, id }) => (
    <LocationItem name={name} id={id} key={id} />
  ));

  return (
    <ul className="locations__list tabs__list">
      {locationItemsElements}
    </ul>
  );
}

export default LocationsList;
