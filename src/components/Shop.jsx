var items = [{name: "tophat", price: 100}, {name: "beret", price:500}];
import { atom, useRecoilValue } from 'recoil'
const shopState = atom({
  key: 'shopState', // unique ID (with respect to other atoms/selectors)
  default: items, // default value (aka initial value)
});
const Shop = () => {
  const shop = useRecoilValue(shopState)
    return(
    <div>shop
        <br/>

        <ul style={{display: "flex", flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>{shop.map(item => {
            return(<li key={item.name} style={{background: "blue"}}>
                {item.name}
                <br/>
                <b style={{color: "gold"}}>{item.price}</b>
            </li>);
        })}</ul>
    </div>
    );
}

export default Shop;