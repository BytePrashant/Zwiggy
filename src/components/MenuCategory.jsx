import MenuItems from "./MenuItems";

const MenuCategory = ({ data, showCategory, setCategory }) => {
  return (
    <>
      <div className="border-b-4 cursor-pointer">
        {/* accordian header */}
        <div
          className="flex justify-between p-4"
          onClick={() => {
            setCategory();
          }}
        >
          <span className="font-semibold text-lg">
            {data?.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* accordian body */}
        {showCategory && <MenuItems item={data?.itemCards} />}
      </div>
    </>
  );
};

export default MenuCategory;
