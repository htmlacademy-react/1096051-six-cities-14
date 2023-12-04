import { useAppSelector } from '../../hooks';
import { OfferDataType } from '../../types/offer-data-type';
import { SortNamesType } from '../../types/sort-names-type';
import CityCard from '../city-card/city-card';

type CityListProps = {
  dataList: OfferDataType[];
  section: string;
  onListItemHover: (listItemName: string) => void;
}

type SortDataListProps = {
  dataList: OfferDataType[];
  currentSort: string;
  sortNames: SortNamesType;
}

function sortByPrice(dataList: OfferDataType[], isHighToLow: boolean): OfferDataType[] {
  const newDataList = [...dataList].sort((a, b) => isHighToLow ? b.price - a.price : a.price - b.price);
  return newDataList;
}

function sortDataList({ dataList, currentSort, sortNames }: SortDataListProps): OfferDataType[] {
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

  const handleListItemHover = (event: React.MouseEvent<HTMLElement>, offerID: string) => {
    event.preventDefault();
    onListItemHover(offerID);
  };

  return (
    sortedDataList.map((cardData) => <CityCard onListItemHover={handleListItemHover} data={cardData} key={cardData.id} section={section} />)
  );
}

export default CityList;
