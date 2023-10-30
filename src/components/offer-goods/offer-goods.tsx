import { nanoid } from 'nanoid';

type OfferGoodsItemProps = {
  name: string;
}

function OfferGoodsItem({ name }: OfferGoodsItemProps): JSX.Element {
  return (
    <li className="offer__inside-item">{name}</li>
  );
}

type OfferGoodsProps = {
  goods: string[];
}

function OfferGoods({ goods }: OfferGoodsProps): JSX.Element {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {goods.map((name) => <OfferGoodsItem name={name} key={nanoid()} />)}
      </ul>
    </div>
  );
}

export default OfferGoods;
