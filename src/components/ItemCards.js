import { PRODUCT_IMG_URL } from "../utils/constants";

const ItemCards = (props) => {

  const{isVeg,name,price,defaultPrice,description,ribbon,imageId}=props?.data;
    
  return (
    <div>
        <div className="pb-3 flex justify-between">
            <div className="max-w-[calc(100%-144px)]">
                <div className="">{isVeg===1?'🟢':'🔴'} {ribbon.text && <span className="leading-5 text-[#ee9c00] text-sm font-medium">⭐ { ribbon.text}</span>}</div>
                <div className="mt-1">
                    <h3 className="mr-1 text-[#3e4152] text-[550] font-semibold break-words">{name}</h3>
                </div>
                <div className="mt-1">
                    <span className="text-[#3e4152] text-sm mr-2 font-medium">₹{price?(price/100):(defaultPrice/100)}</span>
                </div>
                <div className="mt-3 text-[#282c3f73] leading-5 w-[70%] text-xs tracking-[-.3px]">
                    {description}
                </div>
            </div>
            <div className="relative ml-4 min-w-[118px] h-28">
                <div className="">
                    <button className="w-[118px] h-28 object-cover border-0 rounded-md">
                        <img className="w-[118px] h-28 object-cover rounded-md" src={PRODUCT_IMG_URL+imageId} alt="" />
                    </button>
                </div>
                <div className="absolute left-2/4 -bottom-2 translate-x-[-50%] z-10">
                    <div className="absolute -bottom-2 w-24 min-h-[36px] left-[50%] translate-x-[-50%] shadow-md rounded h-[30px] border border-[#d4d5d9] text-[#60b246] text-sm leading-7 text-center bg-white cursor-pointer font-semibold">ADD</div>
                </div>
            </div>
        </div>
        <div className="my-5 h-[.5px] border-[.5px] border-[#d3d3d3]"></div>
    </div>
  )
}

export default ItemCards