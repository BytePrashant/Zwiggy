import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Skeleton from "./Skeleton";
import useRestaurantCards from "../utils/useRestaurantCards";

const Homepage = () => {
  // State variables
  const [searchText, setSearchText] = useState("");
  const [isSorted, setIsSorted] = useState(false);

  // Custom Hooks
  const {restaurantList, filteredResList, setFilteredResList} = useRestaurantCards();

  // Shimmer UI
  if (restaurantList.length === 0) {
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

  // search logic
  const handleSearch = () => {
    const filteredSearch = restaurantList.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredResList(filteredSearch);
  };

  // Top rated filter logic
  const handleTopRated = () => {
    if(isSorted) {
      const topRated = [...restaurantList].sort(
        (a, b) => b.info.avgRating - a.info.avgRating
      );
      setFilteredResList(topRated);
    } else {
      setFilteredResList(restaurantList);
    }
    setIsSorted(!isSorted);
  };

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
                handleSearch();
              }
            }}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="border-2 my-2 inline-block px-2 py-1">
          <button className="filter-btn" onClick={handleTopRated}>
            Top rated restaurant
          </button>
        </div>
        <div className="flex flex-wrap justify-start gap-4">
          {filteredResList.map((items) => (
            <RestaurantCard key={items.info.id} resData={items.info} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
