import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_API } from "../utils/constant";
import Skeleton from "./Skeleton";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();
  
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RESTAURANT_MENU_API + resId);
    const jsonData = await data.json();
    setResInfo(jsonData?.data);
  };

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
