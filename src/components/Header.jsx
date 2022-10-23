import { atom, useRecoilValue } from "recoil";
import { dogState } from "./Dog";

export const coinState = atom({
  key: "coinState",
  default: window.localStorage.getItem("coins") || 1000,
});

const Header = () => {
  const coins = useRecoilValue(coinState),
  dog = useRecoilValue(dogState);

  return (
    <div className="flex items-center justify-between flex-wrap mt-2 mb-10 text-center">
      <h1>
        <gradient>hackipups!</gradient>
      </h1>
      {dog ? (<h3>Coins: {coins}</h3>) : ""}
    </div>
  );
};

export default Header;
