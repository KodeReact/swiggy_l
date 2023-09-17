import { useEffect, useState } from 'react';
import {RESTAURANT_LIST_API} from './constants';

const useRestaurantList = () => {

    const[listOfRestaurant,setListOfRestaurant]=useState([]);
    const[searchFilteredRes,setSearchFilterRes]=useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const data= await fetch(RESTAURANT_LIST_API);
        const json= await data.json();
        setListOfRestaurant(json?.data);
        setSearchFilterRes(json?.data);
        console.log(json);
    };

  return([listOfRestaurant,searchFilteredRes,setSearchFilterRes]);
}

export default useRestaurantList