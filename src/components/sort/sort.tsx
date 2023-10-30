import { UniversalType } from '../../types/UniversalType.type';

type SortProps = {
  currentSort: UniversalType;
  sortNames: UniversalType[];
}

type SortItemProps = {
  name: string;
  isActive: boolean;
}

function SortItem({ name, isActive }: SortItemProps): JSX.Element {
  return (
    <li className={`places__option ${isActive ? 'places__option--active' : ''}`} tabIndex={0}>{name}</li>
  );
}

function Sort({ currentSort, sortNames }: SortProps): JSX.Element {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentSort.name}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--closed"> {/*Класс открытия places__options--opened */}
        {sortNames.map(({ name, id }) => <SortItem name={name} isActive={name === currentSort.name} key={id} />)}
      </ul>
    </form>
  );
}

export default Sort;
