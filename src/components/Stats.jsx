import { useEffect } from "react";
var stats = {hunger: 100, boredom: 100, energy: 100, thirst: 100};
function getStats() {

}
getStats();
const Stats = () => {
  useEffect(() => {
    if(localStorage.getItem('stats') == null){
        localStorage.setItem('stats', JSON.stringify(stats));
    } else {
        stats = JSON.parse(localStorage.getItem('stats'));
        alert(stats.boredom);
    }
  }, []);
    return(
        <div>
            put stat bars here
            <b>hunger: {stats.hunger}</b>
            <b>boredom: {stats.boredom}</b>
            <b>energy: {stats.energy}</b>
            <b>thirst: {stats.thirst}</b>
        </div>
    );
};

export default Stats;