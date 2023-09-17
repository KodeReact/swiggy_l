import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";


const useRestaurantMenu = (resId) => {

    const[resInfo,setResInfo]=useState([]);

    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData=async()=>{
        const data=await fetch(MENU_API+resId);
        const json=await data.json();
        console.log(json.data);
        setResInfo(json.data);
    };    
    
  return [resInfo,setResInfo];
}

export default useRestaurantMenu;