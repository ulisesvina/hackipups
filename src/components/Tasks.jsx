import { coinState } from "./Header";
import {useRecoilValue, useSetRecoilState} from 'recoil'

const Tasks = () => {
  const coins = useRecoilValue(coinState)
  const setCoins = useSetRecoilState(coinState)
  return (
    <div>
      <h2>Self-care Tasks</h2>
      <div className="flex flex-col mt-3">
        <table>
          <thead>
            <tr >
              <th><span className="text-amber-400">Task</span></th>
              <th><span className="text-amber-400">Time of completion</span></th>
              <th><span className="text-amber-400">Time left</span></th>
              <th><span className="text-amber-400">XP</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brush Teeth</td>
              <td>1 min</td>
              <td>8:00:00</td>
              <td>15</td>
              <td><button className="border py-1 px-2 rounded hover:bg-white hover:text-black m-2" onClick={()=>setCoins(coins+15)}>Completed</button></td>
            </tr>
            <tr>
              <td>Take a Shower</td>
              <td>5 min</td>
              <td>48:00:00</td>
              <td>100</td>
              <td><button className="border py-1 px-2 rounded hover:bg-white hover:text-black m-2" onClick={()=>setCoins(coins+100)}>Completed</button></td>
            </tr>
            <tr>
              <td>Go for a Walk</td>
              <td>10 min</td>
              <td>72:00:00</td>
              <td>50</td>
              <td><button className="border py-1 px-2 rounded hover:bg-white hover:text-black m-2" onClick={()=>setCoins(coins+50)}>Completed</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Tasks;
