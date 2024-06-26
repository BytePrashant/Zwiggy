import { CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="content box-border border-4 w-64 p-4  rounded-md shadow-md hover:scale-95">
      <div className="res-card">
        <Link to={"/restaurants/" + resData.id}>
          <div>
            <img
              src={CDN_URL + resData.cloudinaryImageId}
              className="h-44 w-full"
            />
          </div>
          <div>
            <p className="font-bold">{resData.name}</p>
            <p>{resData.cuisines.join(", ")}</p>
            <p>{resData.avgRating} stars</p>
            <p>{resData.costForTwo}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RestaurantCard;
