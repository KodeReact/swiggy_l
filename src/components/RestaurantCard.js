import { RESTAURANT_IMG_URL } from "../utils/constants";

const RestaurantCard=(props)=>{

    const {resData}=props;
    const {name,cuisines,avgRating,areaName,cloudinaryImageId}=resData?.info;

    return(
        <div className="w-full hover:scale-95 transition-all">
            <div className="w-full h-48 rounded-2xl object-fill">
                <img className="w-full h-full rounded-2xl" src={RESTAURANT_IMG_URL+cloudinaryImageId} alt="" />
            </div>
            <div className="p-2 w-full">
                <h3 className="text-[#02060cbf] w-full h-6 overflow-hidden font-bold text-xl">{name}</h3>
                <h4 className="text-[#02060cbf] mb-2 h-5 font-bold">⭐ {avgRating}</h4>
                <p className="text-[#02060c99] mb-2 h-5 overflow-hidden font-normal">{cuisines.join(', ')}</p>
                <span className="text-[#02060c99] h-5 font-normal">{areaName}</span>
            </div>
        </div>
    )
}

export default RestaurantCard;