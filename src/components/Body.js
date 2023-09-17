import RestaurantCard from './RestaurantCard';
import { useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useRestaurantList from '../utils/useRestaurantList';

const Body=()=>{

    const[searchText,setSearchText]=useState("");
    const[listOfRestaurant,searchFilteredRes,setSearchFilterRes]=useRestaurantList();

    if(listOfRestaurant.length===0){return <div className='py-3 px-32 w-full flex justify-between items-center flex-wrap'><Shimmer/></div>};

    const onlineRestaurant=searchFilteredRes?.cards?.filter((x)=>x?.card?.card?.id==="restaurant_grid_listing") && listOfRestaurant?.cards?.filter((x)=>x?.card?.card?.id==="restaurant_grid_listing");
    const {restaurants}=onlineRestaurant[0]?.card?.card?.gridElements?.infoWithStyle;

    return(
        <div className="w-full py-3 px-32">
            <div className="w-full mb-8 flex justify-between items-center">
                <div className=''>
                    <input className='p-2 border border-[#02060c99] border-r-0 rounded-l-lg' value={searchText} onChange={
                        (e)=>{setSearchText(e.target.value)}
                    } type="text" />
                    <button className='p-2 border-l-0 border border-[#02060c99] rounded-r-lg cursor-pointer bg-[#eeebeb]' onClick={()=>{
                        const searchRestaurant=restaurants.filter((x)=>x.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setSearchFilterRes(searchRestaurant);
                    }}>Search</button>
                </div>
                <div className=''>
                    <button className='p-2 border border-[#02060c99] bg-[#eeebeb] rounded-lg cursor-pointer' onClick={
                        ()=>{resList=restaurants.filter((x)=>x.info.avgRating>4);
                            setSearchFilterRes(resList);
                        console.log(resList)}
                    }>Top Rated Restaurant</button>
                </div>
            </div>
            <div className="w-full flex justify-between items-center flex-wrap">
                {onlineRestaurant &&
                   restaurants?.map((x)=><Link className='w-[22%] mb-4 rounded-2xl' to={'/restaurant/'+x?.info?.id} key={x?.info?.id}><RestaurantCard resData={x}/></Link>) 
                }
            </div>
        </div>
    )
}

export default Body;