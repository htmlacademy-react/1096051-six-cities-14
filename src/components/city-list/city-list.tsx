import { useAppSelector } from '../../hooks';
import { CardData } from '../../types/card-data.type';
import { SortNamesType } from '../../types/sort-names.type';
import CityCard from '../city-card/city-card';

type CityListProps = {
  dataList: CardData[];
  section: string;
  onListItemHover: (listItemName: string) => void;
}

type SortDataListProps = {
  dataList: CardData[];
  currentSort: string;
  sortNames: SortNamesType;
}

function sortByPrice(dataList: CardData[], isHighToLow: boolean): CardData[] {
  const newDataList = [...dataList].sort((a, b) => isHighToLow ? b.price - a.price : a.price - b.price);
  return newDataList;
}

function sortDataList({ dataList, currentSort, sortNames }: SortDataListProps): CardData[] {
  switch (currentSort) {
    case sortNames.Popular.name:
      return dataList;
    case sortNames.HighToLow.name:
      return sortByPrice(dataList, true);
    case sortNames.LowToHigh.name:
      return sortByPrice(dataList, false);
    case sortNames.TopRate.name:
      return [...dataList].sort((a, b) => b.rating - a.rating);
  }

  return dataList;
}

function CityList({
  dataList,
  section,
  onListItemHover
}: CityListProps) {
  const currentSort = useAppSelector((state) => state.currentSort);
  const sortNames = useAppSelector((state) => state.sortNames);

  const sortedDataList = sortDataList({ dataList, currentSort, sortNames });

  const handleListItemHover = (event: React.MouseEvent<HTMLElement>, listItemName: string) => {
    event.preventDefault();
    onListItemHover(listItemName);
  };

  return (
    sortedDataList.map((cardData) => <CityCard onListItemHover={handleListItemHover} data={cardData} key={cardData.id} section={section} />)
  );
}

export default CityList;
