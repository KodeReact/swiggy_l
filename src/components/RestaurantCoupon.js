import {COUPON_IMG_URL} from '../utils/constants';

const RestaurantCoupon = (props) => {

  const {header,couponCode,description,offerLogo} =props?.data;
    
  return (
    <div className="restaurant_coupon_card">
        <div className="restaurant_coupon_offer">
            <img src={COUPON_IMG_URL+offerLogo} alt="" />
            <p>{header}</p>
        </div>
        <div className="restaurant_coupon_code">
            {couponCode} | {description}
        </div>
    </div>
  )
}

export default RestaurantCoupon;