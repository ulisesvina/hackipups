import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";

export const statsState = atom({
  key: "statsState", // unique ID (with respect to other atoms/selectors)
  default: JSON.parse(window.localStorage.getItem("stats")) || {
    hunger: 100,
    boredom: 100,
    happiness: 100,
    thirst: 100,
  }, // default value (aka initial value)
});

const Stats = () => {
  const [stats, setStats] = useRecoilState(statsState);

  useEffect(() => {
    let newValues = {
      hunger: stats.hunger + 0.5 > 100 ? 100 : stats.hunger + 0.5,
      boredom: stats.boredom + 0.5 > 100 ? 100 : stats.boredom + 0.5,
      happiness: stats.happiness - 0.5 < 0 ? 0 : stats.happiness - 0.5,
      thirst: stats.thirst + 0.5 > 100 ? 100 : stats.thirst + 0.5,
    };

    setTimeout(() => {
      setStats(newValues);
      window.localStorage.setItem("stats", JSON.stringify(newValues));
    }, 5000);
  }, [stats]);

  return (
    <div className="m-5 border p-3 w-min inline-block">
      <p className="mb-2 text-md text-amber-400">Stats</p>
      <table>
        <tbody>
          <tr>
            <td className="text-right">
              <span className="text-sm">Hunger</span>
            </td>
            <td className="text-left">
              <progress
                className="progress"
                value={stats.hunger}
                max="100"
              ></progress>
            </td>
          </tr>
          <tr>
            <td className="text-right">
              <span className="text-sm">Boredom</span>
            </td>
            <td className="text-left">
              <progress
                className="progress"
                value={stats.boredom}
                max="100"
              ></progress>
            </td>
          </tr>
          <tr>
            <td className="text-right">
              <span className="text-sm">Happiness</span>
            </td>
            <td className="text-left">
              <progress
                className="progress"
                value={stats.happiness}
                max="100"
              ></progress>
            </td>
          </tr>
          <tr>
            <td className="text-right">
              <span className="text-sm">Thirst</span>
            </td>
            <td className="text-left">
              <progress
                className="progress"
                value={stats.thirst}
                max="100"
              ></progress>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Stats;
