import { useEffect } from React;
var stats = {hunger: 0, boredom: 0, energy: 100, thirst: 0};
function getStats() {
    useEffect(() => {
        if(localStorage.getItem('stats') == null){
            localStorage.setItem('stats', JSON.stringify(stats));
        } else {
            stats = JSON.parse(localStorage.getItem('stats'));
            alert(stats.boredom);
        }
      }, []);
}
getStats();
const Stats = () => {

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