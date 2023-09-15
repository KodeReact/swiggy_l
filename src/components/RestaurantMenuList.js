import ItemCards from "./ItemCards";

const RestaurantMenuList = (props) => {

  const{title,itemCards}=props?.data;

  return (
    <div>
        <div className="itemList">
            <button className="itemList_accordian_btn">
                <h3>{title} ({itemCards.length})</h3>
                <span>🔽</span>
            </button>
            <div className="itemList_accordian_dropdown">
                {itemCards.map((x)=><ItemCards key={x?.card?.info?.id} data={x?.card?.info}/>)}
            </div>
        </div>
        <div className="itemList_border"></div>
        
    </div>
  )
}

export default RestaurantMenuList;