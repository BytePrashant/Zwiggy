import { useState } from "react";
import CategoryMenu from "./CategoryMenu";

const ItemCategory = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="border-b-4" onClick={()=>{
        setIsOpen(!isOpen);
      }}>
        {/* accordian header */}
        <div className="flex justify-between p-4">
          <span className="font-semibold text-lg">
            {data?.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* accordian body */}
        {isOpen && <CategoryMenu item={data?.itemCards} />}
      </div>
    </>
  );
};

export default ItemCategory;
