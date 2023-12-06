import { useAppDispatch, useAppSelector } from '../../hooks';
import { useState, useEffect } from 'react';
import { getCurrentSort, getSortNames } from '../../store/app-data/app-data.selector';
import { changeCurrentSort } from '../../store/app-data/app-data';

type SortItemProps = {
  name: string;
  isActive: boolean;
}

function SortItem({ name, isActive }: SortItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <li onClick={() => dispatch(changeCurrentSort({currentSort: name}))} className={`places__option ${isActive ? 'places__option--active' : ''}`} tabIndex={0}>{name}</li>
  );
}

function Sort(): JSX.Element {
  const currentSort = useAppSelector(getCurrentSort);
  const sortNames = useAppSelector(getSortNames);
  const [listIsOpened, setListIsOpened] = useState(false);

  const onKeydownEsc = (evt: KeyboardEventInit) => {
    if (evt.key === 'Escape') {
      setListIsOpened(false);
    }
  };

  const onClickWindow = (evt: Event) => {
    const element = evt.target as HTMLElement;
    if (!element.closest('.places__sorting-type')) {
      setListIsOpened(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeydownEsc);
    window.addEventListener('click', onClickWindow);

    return () => {
      window.removeEventListener('keydown', onKeydownEsc);
      window.removeEventListener('click', onClickWindow);
    };
  }, []);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setListIsOpened(!listIsOpened)}>
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom places__options${listIsOpened ? '--opened' : '--closed'}`}> {/*Класс открытия places__options--opened */}
        {Object.values(sortNames).map(({ name, id }) => <SortItem name={name} isActive={name === currentSort} key={id} />)}
      </ul>
    </form>
  );
}

export default Sort;
