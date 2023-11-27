import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { UniversalType } from '../../types/universal-type';
import { changeCity } from '../../store/action';

type LocationItemProps = UniversalType

function LocationItem({ name, id }: LocationItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <li className="locations__item">
      <Link onClick={
        () => {
          dispatch(changeCity(name));
          // dispatch(renderRentList()); to do
        }
      } className="locations__item-link tabs__item" id={id} to="#"
      >
        <span>{name}</span>
      </Link>
    </li>
  );
}

function LocationsList(): JSX.Element {
  const cityNames = useAppSelector((state) => state.cityNames);
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
