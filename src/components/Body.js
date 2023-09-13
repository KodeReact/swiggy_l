import RestaurantCard from './RestaurantCard';
import { resObj } from '../utils/constants';
import { useState } from 'react';

const Body=()=>{

    const[listOfRestaurant,setListOfRestaurant]=useState(resObj);

    return(
        <div className="body">
            <div className="search_container">
                <div className='search'>
                    <input type="text" />
                    <button>Search</button>
                </div>
                <div className='filter'>
                    <button onClick={
                        ()=>{resList=resObj.filter((x)=>x.info.avgRating>4);
                            setListOfRestaurant(resList);
                        console.log(resList)}
                    }>Top Rated Restaurant</button>
                </div>
            </div>
            <div className="restaurant_container">
                {
                   listOfRestaurant.map((x)=><RestaurantCard key={x?.info?.id} resData={x}/>) 
                }
            </div>
        </div>
    )
}

export default Body;