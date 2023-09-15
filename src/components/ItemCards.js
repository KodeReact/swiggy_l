import { PRODUCT_IMG_URL } from "../utils/constants";

const ItemCards = (props) => {

  const{isVeg,name,price,defaultPrice,description,ribbon,imageId}=props?.data;
    
  return (
    <div>
        <div className="itemCard_box">
            <div className="itemCard_info_box">
                <div className="product_veg">{isVeg===1?'🟢':'🔴'} {ribbon.text && <span>⭐ { ribbon.text}</span>}</div>
                <div className="product_name">
                    <h3>{name}</h3>
                </div>
                <div className="product_price">
                    <span>₹{price?(price/100):(defaultPrice/100)}</span>
                </div>
                <div className="product_desc">
                    {description}
                </div>
            </div>
            <div className="itemCard_img_box">
                <div className="product_img">
                    <button>
                        <img src={PRODUCT_IMG_URL+imageId} alt="" />
                    </button>
                </div>
                <div className="product_add_btn">
                    <div>ADD</div>
                </div>
            </div>
        </div>
        <div className="itemCard_border"></div>
    </div>
  )
}

export default ItemCards