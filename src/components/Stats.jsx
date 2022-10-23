import { useEffect } from "react";
import { atom, useRecoilValue } from 'recoil'

const statsState = atom({
  key: 'statsState', // unique ID (with respect to other atoms/selectors)
  default: {hunger: 100, boredom: 100, energy: 100, thirst: 100}, // default value (aka initial value)
});
const Stats = () => {
  const stats = useRecoilValue(statsState)
  // useEffect(() => {
  //   if(localStorage.getItem('stats') == null){
  //       localStorage.setItem('stats', JSON.stringify(stats));
  //   } else {
  //       stats = JSON.parse(localStorage.getItem('stats'));
  //   }
  // }, []);
    return(
        <div>
            <b>hunger: {stats.hunger}</b>
            <br/>
            <b>boredom: {stats.boredom}</b>
            <br/>
            <b>energy: {stats.energy}</b>
            <br/>
            <b>thirst: {stats.thirst}</b>
        </div>
    );
};

export default Stats;