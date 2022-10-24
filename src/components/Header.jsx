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
    <header className="backdrop-blur-3xl top-0 sticky p-8 bg-black text-center">
      <div className="flex items-center justify-between flex-col">
        <div className="flex-shrink-0 lg:mr-6">
          <a href="/">
            <span className="text-2xl"><gradient>hackipups!</gradient></span>
            <p className="text-md mt-2">{dog ? `$${coins}` : ""}</p>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
