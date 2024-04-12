import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="content box-border border-4 w-64 p-4  rounded-md shadow-md hover:scale-95">
      <div className="res-card">
        <img
          src={
            CDN_URL +
            resData.cloudinaryImageId
          }
          alt=""
        />
        <p className="font-bold">{resData.name}</p>
        <p>{resData.cuisines.join(", ")}</p>
        <p>{resData.avgRating} stars</p>
        <p>{resData.costForTwo}</p>
        {/* <p>{resData.deliveryTime} ratings</p> */}
      </div>
    </div>
  );
};

export default RestaurantCard;
