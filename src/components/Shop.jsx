import { useState } from "react";
import { coinState } from "./Header";
import { dogState } from "./Dog";
import { useRecoilState } from "recoil";

const Shop = () => {
  const items = [
    {
      key: 0,
      name: "pumpkin hat",
      price: 100,
      img: "https://cdn.discordapp.com/attachments/1033175931688333354/1033583634558492753/unknown.png",
    },
    {
      key: 1,
      name: "skull hat",
      price: 200,
      img: "https://cdn.discordapp.com/attachments/1033175931688333354/1033583836816228412/unknown.png",
    },
    {
      key: 2,
      name: "beret",
      price: 150,
      img: "https://cdn.discordapp.com/attachments/1033175931688333354/1033583984132759612/unknown.png",
    },
    {
      key: 3,
      name: "top hat",
      price: 300,
      img: "https://cdn.discordapp.com/attachments/1033175931688333354/1033584222000136222/unknown.png",
    },
    {
      key: 4,
      name: "bow",
      price: 100,
      img: "https://cdn.discordapp.com/attachments/1033175931688333354/1033584378003079220/unknown.png",
    },
  ];

  const [coins, setCoins] = useRecoilState(coinState);
  const [dog, setDog] = useRecoilState(dogState);
  const [owned, setOwned] = useState(JSON.parse(window.localStorage.getItem("owned")) || []);

  function buy(item) {
    if (coins >= item.price) {
      setCoins(coins - item.price);
      window.localStorage.setItem("coins", coins - item.price);
      setOwned([...owned, item.key]);
      window.localStorage.setItem("owned", JSON.stringify([...owned, item.key]));
    }
  }

  const equip = (item) => {
    setDog({ ...dog, img: item.img });
    window.localStorage.setItem("dog", JSON.stringify({ ...dog, img: item.img }));
  };

  return (
    <div>
      <h2>
        <gradient>Shop</gradient>
      </h2>
      <br />

      <table
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {items.map((item) => {
          return (
            <tr key={item.key} className="p-2 bg-amber-600 m-3">
              <th>{item.name.toUpperCase()}</th>
              {owned.includes(item.key) ? (
                <button
                  className="border py-1 px-2 hover:bg-white hover:text-black m-2 ml-0"
                  onClick={() => equip(item)}
                >
                  Equip
                </button>
              ) : (
                <button
                  className="border py-1 px-2 hover:bg-white hover:text-black m-2 ml-0"
                  onClick={() => buy(item)}
                >
                  Buy
                </button>
              )}
              <br />
              <th className="text-gray-300">${item.price}</th>
              <th>
                <img src={item.img} />
              </th>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Shop;
