import RestaurantMenuList from "./RestaurantMenuList";

const RestaurantNestedMenuList = (props) => {

  const{title,categories}=props?.data;

  return (
    <div>
        <h3>{title}</h3>
        {categories.map((x)=><RestaurantMenuList key={x?.title} data={x}/>)}
    </div>
  )
}

export default RestaurantNestedMenuList