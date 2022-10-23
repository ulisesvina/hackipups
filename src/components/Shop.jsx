var items = [{name: "pumpkin hat", price: 100, img: 'https://cdn.discordapp.com/attachments/1033175931688333354/1033583634558492753/unknown.png'}, {name: "skull hat", price:200, img: 'https://cdn.discordapp.com/attachments/1033175931688333354/1033583836816228412/unknown.png'},
{name: 'beret', price: 150, img: 'https://cdn.discordapp.com/attachments/1033175931688333354/1033583984132759612/unknown.png'},
{name: 'top hat', price: 300, img: 'https://cdn.discordapp.com/attachments/1033175931688333354/1033584222000136222/unknown.png'},
{name: 'bow', price: 100, img: 'https://cdn.discordapp.com/attachments/1033175931688333354/1033584378003079220/unknown.png'}];
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

        <table style={{display: "flex", flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          {shop.map(item =>{ 
            return(
              <tr key={item.name} style={{background: "blue"}}>
              <th>
                {item.name}
                </th>
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