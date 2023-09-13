import { RESTAURANT_IMG_URL } from "../utils/constants";

const RestaurantCard=(props)=>{

    const {resData}=props;
    const {name,cuisines,avgRating,areaName,cloudinaryImageId}=resData?.info;

    return(
        <div className="reataurant_card">
            <div className="restaurant_img">
                <img src={RESTAURANT_IMG_URL+cloudinaryImageId} alt="" />
            </div>
            <div className="restaurant_info">
                <h3>{name}</h3>
                <h4>⭐ {avgRating}</h4>
                <p>{cuisines.join(', ')}</p>
                <span>{areaName}</span>
            </div>
        </div>
    )
}

export default RestaurantCard;