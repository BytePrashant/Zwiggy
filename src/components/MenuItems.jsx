import { CDN_URL } from "../utils/constant";

const MenuItems = ({ item }) => {
  return (
    <>
      {item.map((dish) => (
        <div
          key={dish.card?.info?.id}
          className="p-4 m-2 border-b-2 flex justify-center"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold text-lg">{dish.card?.info?.name}</span>
              {" - "}
              <span>
                ₹
                {dish.card?.info.price
                  ? dish.card?.info.price / 100
                  : dish.card?.info.defaultPrice / 100}
              </span>
              <p className="mt-4 font-light text-sm truncate">
                {dish.card?.info?.description}
              </p>
            </div>
          </div>
          <div className="relative w-3/12 p-4">
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              <button className="font-semibold py-1 px-4 bg-black text-white rounded-lg">
                Add
              </button>
            </div>
            <img
              src={CDN_URL + dish.card?.info?.imageId}
              className="w-full h-32 rounded-xl"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuItems;
