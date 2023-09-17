import ItemCards from "./ItemCards";

const RestaurantMenuList = (props) => {

  const{title,itemCards}=props?.data;

  return (
    <div>
        <div className=" mt-6 mr-2 mb-4 ml-4">
            <button className="w-full flex justify-between pr-4 border-0 cursor-pointer bg-transparent mb-6 text-lg">
                <h3 className="h-5 transition-all text-[#3e4152] font-bold">{title} ({itemCards.length})</h3>
                <span>🔽</span>
            </button>
            <div className="itemList_accordian_dropdown">
                {itemCards.map((x)=><ItemCards key={x?.card?.info?.id} data={x?.card?.info}/>)}
            </div>
        </div>
        <div className="h-24 border-b-[16px] border-[#f1f1f6]"></div>
    </div>
  )
}

export default RestaurantMenuList;