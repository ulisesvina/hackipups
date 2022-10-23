import { coinState } from './Header';
import { dogState } from './Dog';
var items = [{key: 0, owned: false, name: "pumpkin hat", price: 100, img: 'https://cdn.discordapp.com/attachments/1033175931688333354/1033583634558492753/unknown.png'}, {key: 1, owned: false, name: "skull hat", price:200, img: 'https://cdn.discordapp.com/attachments/1033175931688333354/1033583836816228412/unknown.png'},
{key: 2, owned: false, name: 'beret', price: 150, img: 'https://cdn.discordapp.com/attachments/1033175931688333354/1033583984132759612/unknown.png'},
{key: 3, owned: false, name: 'top hat', price: 300, img: 'https://cdn.discordapp.com/attachments/1033175931688333354/1033584222000136222/unknown.png'},
{key: 4, owned: false, name: 'bow', price: 100, img: 'https://cdn.discordapp.com/attachments/1033175931688333354/1033584378003079220/unknown.png'}];
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
const shopState = atom({
  key: 'shopState', // unique ID (with respect to other atoms/selectors)
  default: items, // default value (aka initial value)
});
const Shop = () => {
  const shop = useRecoilValue(shopState);
  const coins = useRecoilValue(coinState);
  const dog = useRecoilValue(dogState);
  const setCoins = useSetRecoilState(coinState);
  const setShop = useSetRecoilState(shopState);
  const setDog = useSetRecoilState(dogState);
  function buy(price, index) {
    console.log(coins);
    console.log(price);
    if(coins >= price) {
      setCoins(coins - price);
      //need to set the owned value for the item to true
    }
  }
  
  const equip = (pngname) => {
    setDog({...dog, img: pngname})
  }
    return(
    <div>shop
        <br/>

        <table style={{display: "flex", flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          {shop.map(item =>{ 
            return(
              <tr key={item.key} style={{background: "#B5684C", margin: "10px", borderRadius: "10px"}}>
              <th>
                {item.name}
                </th>
                { item.owned ? (
                  <button className="border py-1 px-2 rounded hover:bg-white hover:text-black m-2" onClick={() => buy(item.img)}>equip</button>
                ) : <button className="border py-1 px-2 rounded hover:bg-white hover:text-black m-2" onClick={() => buy(item.price, coins)}>buy</button>}
                <br/>
              <th style={{color: "gold"}}>{item.price}</th>
              <th>
                <img src={item.img} />
              </th>
              </tr>);
        })}
        </table>
    </div>
    );
}

export default Shop;
