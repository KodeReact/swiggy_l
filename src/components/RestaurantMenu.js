import Shimmer from './Shimmer';
import { useParams } from "react-router-dom";
import RestaurantCoupon from "./RestaurantCoupon";
import RestaurantMenuList from "./RestaurantMenuList";
import RestaurantNestedMenuList from "./RestaurantNestedMenuList";
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useState } from 'react';

const RestaurantMenu = () => {

  const[vegNonvegBtn,setVegNonvegBtn]=useState(false);
  const {resId}=useParams();
  const[resInfo,setResInfo]=useRestaurantMenu(resId);

  if(resInfo.length===0){return <Shimmer/>};

  const{name,areaName,avgRating,costForTwoMessage,cuisines,expectationNotifiers,totalRatingsString,sla}=resInfo?.cards[0]?.card?.card?.info;
  const{offers}=resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle;
  const{cards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  const itemcards=cards?.filter((x)=>x?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  const categories=cards?.filter((x)=>x?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");

  // const itemcards=(cards?.filter((x)=>x?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || x?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"));

  // const handleClickVeg=()=>{
  //   return(
  //   setVegNonvegBtn()=!vegNonvegBtn,
  //   console.log(vegNonvegBtn));
  // }



  const handleClickVeg=(itemcards)=>{
    const filterVeg=itemcards?.map((x)=>x?.card?.card?.itemCards?.filter((i)=>i?.card?.info?.itemAttribute?.vegClassifier==="VEG"));
    // console.log(filterVeg);
    setResInfo(filterVeg);
    setVegNonvegBtn(!vegNonvegBtn);
  }

  return (
    <div className="w-full py-5 px-[15%]">
      <div className="w-full mb-4 flex justify-between items-center">
        <div className="">
          <h2 className='text-[#282c3f] mb-2 capitalize text-xl font-bold'>{name}</h2>
          <p className='text-[#7e808c] h-4 text-sm whitespace-nowrap mb-1 overflow-hidden overflow-ellipsis'>{cuisines.join(", ")}</p>
          <p className='text-[#7e808c] h-4 text-sm whitespace-nowrap mb-1 overflow-hidden overflow-ellipsis'>{areaName}, {sla?.lastMileTravelString}</p>
        </div>
        <div className="border border-[#e9e9eb] rounded-md text-center p-2 max-w-[100px] shadow">
          <h4 className='text-[#3d9b6d] pb-2 border-b border-b-[#e9e9eb] mb-2 font-bold'>⭐{avgRating}</h4>
          <h5 className='text-[#8b8d97] font-bold text-xs'>{totalRatingsString}</h5>
        </div>
      </div>
      <div className="mb-4">
        { expectationNotifiers &&
          <div className="text-[#7e808c] flex items-start mb-4 text-sm font-medium">
            🚴‍♂️ {expectationNotifiers[0]?.text}
          </div>
        }
        <hr className='border-0 border-b border-dashed border-b-[#d3d3d3] mb-4' />
        <div className="mb-4 text-[#3e4152] flex items-center text-base font-bold">
          <div className="mr-6">🕖 {sla?.deliveryTime} MINS</div>
          <div className="">{costForTwoMessage}</div>
        </div>
      </div>
      <div className="flex items-center overflow-x-scroll pb-4 mb-2 no-scrollbar">
        {offers.map((x)=><RestaurantCoupon key={x?.info?.offerIds[0]} data={x?.info}/>)}
      </div>
      <div className=''>
        <div className='mt-6 mx-4 h-3 flex items-center translate-z'>
          <div className='text-[#3d4152] font-bold text-base'>Veg Only</div>
          <button className='ml-3 h-4 border-0 cursor-pointer bg-[#d4d5d9] w-9 relative rounded inline-block translate-z transition-c will' onClick={()=>handleClickVeg(itemcards)}>
            <span className='absolute top-0 left-0 w-4 bg-[#fff] border-2 border-[#d4d5d9] h-4 rounded transition-all'></span>
          </button>
        </div>
        <hr className='border-b-[.5px] h-[.5px] my-6 mx-auto border-[#d3d3d3]'/> 
      </div>
      <div className="">
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