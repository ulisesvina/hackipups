import {atom, useRecoilValue} from 'recoil'
export const coinState = atom({
  key: 'coinState',
  default: '1000'
})
const Header = () => {
  const coins = useRecoilValue(coinState)
  return (
    <div className="flex items-center justify-between flex-wrap pl-6 pr-6 mt-2 mb-10">
      <h1>
        <gradient>hackipups!</gradient>
        

      </h1>
      <h3>Coins: {coins}</h3>
    </div>
  );
};

export default Header;
