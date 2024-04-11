const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  return (
    <div className="container flex flex-col m-4">
      <div className="content box-border border-4 w-64 p-4  rounded-md shadow-md">
        <div className="res-card">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              resData.cloudinaryImageId
            }
            alt=""
          />
          <p>{resData.name}</p>
          <p>{resData.cuisines.join(", ")}</p>
          <p>{resData.avgRating}</p>
          <p>{resData.costForTwo}</p>
          <p>{resData.deliveryTime}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
