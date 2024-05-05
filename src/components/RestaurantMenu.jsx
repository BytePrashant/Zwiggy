import { useParams } from "react-router-dom";
import Skeleton from "./Skeleton";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCategory from "./MenuCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Skeleton />;

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    feeDetails,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info || {};

  const itemCategory =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <>
      <div className="m-24 mx-auto flex flex-col w-6/12">
        <div className="border-5 border-slate-500 p-3 rounded-3xl shadow-xl shadow-slate-300">
          <div>
            <h1 className="font-bold text-2xl mb-2 py-2">{name}</h1>
            <h4 className="font-normal py-1">
              <span>{avgRating}</span>{" "}
              <span>{"(" + totalRatingsString + ")"}</span>
              {"  .  "}
              <span>{costForTwoMessage}</span>
            </h4>
            <h3 className="font-normal py-1">
              <span>{sla?.slaString}</span>
              {"  .  "}
              <span>
                ₹{feeDetails?.totalFee / 100} {feeDetails?.title}
              </span>
            </h3>
          </div>
        </div>
        <p className="text-lg font-normal mb-4 text-center my-8">M E N U</p>
        {/* accordian for categories */}
        {itemCategory.map((item) => (
          <MenuCategory key={item?.card?.card.title} data={item?.card?.card} />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
