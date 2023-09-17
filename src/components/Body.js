import RestaurantCard from './RestaurantCard';
import { useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useRestaurantList from '../utils/useRestaurantList';

const Body=()=>{

    const[searchText,setSearchText]=useState("");
    const[listOfRestaurant,searchFilteredRes,setSearchFilterRes]=useRestaurantList();

    if(listOfRestaurant.length===0){return <div className='shimmer_restaurant_container'><Shimmer/></div>};

    const onlineRestaurant=searchFilteredRes?.cards?.filter((x)=>x?.card?.card?.id==="restaurant_grid_listing") && listOfRestaurant?.cards?.filter((x)=>x?.card?.card?.id==="restaurant_grid_listing");
    const {restaurants}=onlineRestaurant[0]?.card?.card?.gridElements?.infoWithStyle;

    return(
        <div className="body">
            <div className="search_container">
                <div className='search'>
                    <input value={searchText} onChange={
                        (e)=>{setSearchText(e.target.value)}
                    } type="text" />
                    <button onClick={()=>{
                        const searchRestaurant=restaurants.filter((x)=>x.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setSearchFilterRes(searchRestaurant);
                    }}>Search</button>
                </div>
                <div className='filter'>
                    <button onClick={
                        ()=>{resList=restaurants.filter((x)=>x.info.avgRating>4);
                            setSearchFilterRes(resList);
                        console.log(resList)}
                    }>Top Rated Restaurant</button>
                </div>
            </div>
            <div className="restaurant_container">
                {onlineRestaurant &&
                   restaurants?.map((x)=><Link to={'/restaurant/'+x?.info?.id} key={x?.info?.id}><RestaurantCard resData={x}/></Link>) 
                }
            </div>
        </div>
    )
}

export default Body;