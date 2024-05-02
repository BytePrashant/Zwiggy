import { useEffect, useState } from "react";
import { SWIGGY_RESTAURANT_API } from "./constant";

const useRestaurantCards = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_RESTAURANT_API);
    const jsonData = await data.json();
    setRestaurantList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilteredResList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return {restaurantList, filteredResList};
};

export default useRestaurantCards;
