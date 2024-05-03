const CategoryMenu = ( {item} ) => {
  console.log(item);
  return (
    <>
      <div>
        {item.map((dish) => (
          <div className="p-4 border-b-2">
            <span>{dish.card?.info?.name}</span>{" - "}
            <span>₹{dish.card?.info.price ? dish.card?.info.price/100 : dish.card?.info.defaultPrice/100 }</span>
            <p className="mt-2 font-light text-sm">{dish.card?.info?.description}</p>
          </div>
        ))}
        
      </div>
      
    </>
  );
};

export default CategoryMenu;
