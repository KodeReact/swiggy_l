import { useEffect, useState } from "react";
import Shimmer from './Shimmer';
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import RestaurantCoupon from "./RestaurantCoupon";
import RestaurantMenuList from "./RestaurantMenuList";
import RestaurantNestedMenuList from "./RestaurantNestedMenuList";


const RestaurantMenu = () => {

  const[resInfo,setResInfo]=useState([]);
  const {resId}=useParams();

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData=async()=>{
    const data=await fetch(MENU_API+resId);
    const json=await data.json();
    console.log(json.data);
    setResInfo(json.data);
  };

  if(resInfo.length===0){return <Shimmer/>};

  const{name,areaName,avgRating,costForTwoMessage,cuisines,expectationNotifiers,totalRatingsString,sla}=resInfo?.cards[0]?.card?.card?.info;
  const{offers}=resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle;
  const{cards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  const itemcards=cards?.filter((x)=>x?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  const categories=cards?.filter((x)=>x?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");

  // const itemcards=(cards?.filter((x)=>x?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || x?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"));



  return (
    <div className="restaurnat_menu_page">
      <div className="restaurant_data">
        <div className="restaurant_name_box">
          <h2>{name}</h2>
          <p>{cuisines.join(", ")}</p>
          <p>{areaName}, {sla?.lastMileTravelString}</p>
        </div>
        <div className="restaurant_rating_box">
          <h4>⭐{avgRating}</h4>
          <h5>{totalRatingsString}</h5>
        </div>
      </div>
      <div className="restaurant_delivery">
        { expectationNotifiers &&
          <div className="restaurant_delivery_distance">
            🚴‍♂️ {expectationNotifiers[0]?.text}
          </div>
        }
        <hr />
        <div className="restaurant_delivery_time">
          <div className="restaurant_delivery_time_box">🕖 {sla?.deliveryTime} MINS</div>
          <div className="restaurant_delivery_time_price">{costForTwoMessage}</div>
        </div>
      </div>
      <div className="restaurant_coupon_container">
        {offers.map((x)=><RestaurantCoupon key={x?.info?.offerIds[0]} data={x?.info}/>)}
      </div>
      <div className="restaurant_menu">
        { itemcards &&
            itemcards.map((x)=><RestaurantMenuList key={x?.card?.card?.title} data={x?.card?.card}/>)
        }
        { categories &&
            categories.map((x)=><RestaurantNestedMenuList key={x?.card?.card?.title} data={x?.card?.card}/>)
        }
      </div>  
    </div>
  )
}

export default RestaurantMenu;