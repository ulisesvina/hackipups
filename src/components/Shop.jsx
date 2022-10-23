var items = [{key: 0, owned: false, name: "pumpkin hat", price: 100, img: 'https://cdn.discordapp.com/attachments/1033175931688333354/1033583634558492753/unknown.png'}, {key: 1, owned: false, name: "skull hat", price:200, img: 'https://cdn.discordapp.com/attachments/1033175931688333354/1033583836816228412/unknown.png'},
{key: 2, owned: false, name: 'beret', price: 150, img: 'https://cdn.discordapp.com/attachments/1033175931688333354/1033583984132759612/unknown.png'},
{key: 3, owned: false, name: 'top hat', price: 300, img: 'https://cdn.discordapp.com/attachments/1033175931688333354/1033584222000136222/unknown.png'},
{key: 4, owned: false, name: 'bow', price: 100, img: 'https://cdn.discordapp.com/attachments/1033175931688333354/1033584378003079220/unknown.png'}];
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
              <tr key={item.key} style={{background: "blue", margin: "10px", borderRadius: "10px"}}>
              <th>
                {item.name}
                </th>
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