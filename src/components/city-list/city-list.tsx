import { CardData } from '../../types/CardData.type';
import CityCard from '../city-card/city-card';

type CityListProps = {
  dataList: CardData[];
  section: string;
  onListItemHover: (listItemName: string) => void;
}

function CityList({
  dataList,
  section,
  onListItemHover
}: CityListProps) {

  const handleListItemHover = (event: React.MouseEvent<HTMLElement>, listItemName: string) => {
    event.preventDefault();
    onListItemHover(listItemName);
  };

  return (
    dataList.map((cardData) => <CityCard onListItemHover={handleListItemHover} data={cardData} key={cardData.id} section={section} />)
  );
}

export default CityList;
