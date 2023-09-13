import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

const Body=()=>{

    const[listOfRestaurant,setListOfRestaurant]=useState([]);
    const[searchFilteredRes,setSearchFilterRes]=useState([]);
    const[searchText,setSearchText]=useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        setListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setSearchFilterRes(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json);
    };

    if(listOfRestaurant.length===0){return <div className='shimmer_restaurant_container'><Shimmer/></div>};

    return(
        <div className="body">
            <div className="search_container">
                <div className='search'>
                    <input value={searchText} onChange={
                        (e)=>{setSearchText(e.target.value)}
                    } type="text" />
                    <button onClick={()=>{
                        const searchRestaurant=listOfRestaurant.filter((x)=>x.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setSearchFilterRes(searchRestaurant);
                    }}>Search</button>
                </div>
                <div className='filter'>
                    <button onClick={
                        ()=>{resList=listOfRestaurant.filter((x)=>x.info.avgRating>4);
                            setSearchFilterRes(resList);
                        console.log(resList)}
                    }>Top Rated Restaurant</button>
                </div>
            </div>
            <div className="restaurant_container">
                {
                   searchFilteredRes.map((x)=><RestaurantCard key={x?.info?.id} resData={x}/>) 
                }
            </div>
        </div>
    )
}

export default Body;