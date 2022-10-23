import { useRecoilValue, useSetRecoilState } from "recoil";
import { statsState } from "./Stats";
import { coinState } from "./Header";

const Buttons = () => {
  const stats = useRecoilValue(statsState);
  const coins = useRecoilValue(coinState);
  const setStats = useSetRecoilState(statsState);
  const setCoins = useSetRecoilState(coinState);

  const feed = () => {
    const hunger = stats.hunger;
    setCoins(coins - 20);
    window.localStorage.setItem("coins", coins - 20);
    setStats({ ...stats, hunger: hunger - 20 < 0 ? 0 : hunger - 20 });
    window.localStorage.setItem("stats", JSON.stringify({ ...stats, hunger: hunger - 20 < 0 ? 0 : hunger - 20 }));
  };
  const water = () => {
    const thirst = stats.thirst;
    setCoins(coins - 15);
    window.localStorage.setItem("coins", coins - 15);
    setStats({ ...stats, thirst: thirst - 25 < 0 ? 0 : thirst - 25 });
    window.localStorage.setItem("stats", JSON.stringify({ ...stats, thirst: thirst - 25 < 0 ? 0 : thirst - 25 }));
  };
  const play = () => {
    const boredom = stats.boredom;
    setCoins(coins - 50);
    window.localStorage.setItem("coins", coins - 50);
    setStats({ ...stats, boredom: boredom - 30 < 0 ? 0 : boredom - 30 });
    window.localStorage.setItem("stats", JSON.stringify({ ...stats, boredom: boredom - 30 < 0 ? 0 : boredom - 30 }));
  };

  return (
    <div className="flex justify-center">
      <button
        className="border py-1 px-2 hover:bg-white hover:text-black m-2"
        onClick={feed}
      >
        Food ($20)
      </button>
      <button
        className="border py-1 px-2 hover:bg-white hover:text-black m-2"
        onClick={water}
      >
        Water ($15)
      </button>
      <button
        className="border py-1 px-2 hover:bg-white hover:text-black m-2"
        onClick={play}
      >
        Play ($50)
      </button>
    </div>
  );
};
export default Buttons;
