import { useParams } from "react-router-dom";
import Skeleton from "./Skeleton";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId);

  if(resInfo === null) return <Skeleton />

  const {text} = resInfo?.cards[0]?.card?.card || {};
  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || [];

  return (
    <div className="m-24">
      <h1>{text}</h1>
      <p>Menu</p>
      <ul className="list-disc">
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
