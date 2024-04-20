import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { SWIGGY_RESTAURANT_API } from "../utils/constant";
import Skeleton from "./Skeleton";

const Homepage = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${SWIGGY_RESTAURANT_API}`);
    const jsonData = await data.json();
    setRestaurantsList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilteredRes(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  if (restaurantsList.length === 0) {
    let skeleton = [];
    for (var i = 0; i < 20; i++) {
      skeleton.push(<Skeleton key={i} />);
    }
    return (
      <div className="py-20 mx-14">
        <div className="flex flex-wrap justify-start gap-4">{skeleton}</div>
      </div>
    );
  }

  return (
    <div>
      <div className="py-20 mx-14">
        <div className="border-2 my-2 inline-block px-2 py-1 mr-2">
          <input
            className="search-box"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const filtered = restaurantsList.filter((res) => {
                  return res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                });
                setFilteredRes(filtered);
              }
            }}
          />
          <button
            onClick={() => {
              const filtered = restaurantsList.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRes(filtered);
            }}
          >
            Search
          </button>
        </div>
        <div className="border-2 my-2 inline-block px-2 py-1">
          <button
            className="filter-btn"
            onClick={() => {
              const filtered = restaurantsList.filter(
                (item) => item.info.avgRating >= 4
              );
              setRestaurantsList(filtered);
            }}
          >
            Top rated restaurant
          </button>
        </div>
        <div className="flex flex-wrap justify-start gap-4">
          {filteredRes.map((items) => (
            <RestaurantCard key={items.info.id} resData={items.info} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
