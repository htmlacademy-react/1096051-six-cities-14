import { CardData } from '../../types/CardData.type';
import CityCard from '../city-card/city-card';

type CityListProps = {
  dataList: CardData[];
  section: string;
}

function CityList({dataList, section}: CityListProps) {
  return (
    dataList.map((cardData) => <CityCard data={cardData} key={cardData.id} section={section} />)
  );
}

export default CityList;
