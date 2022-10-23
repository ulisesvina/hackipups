import { atom, useRecoilValue } from "recoil";
import Stats from "./Stats";
import Buttons from "./Buttons";

export const dogState = atom({
  key: "dogState", // unique ID (with respect to other atoms/selectors)
  default: JSON.parse(window.localStorage.getItem("dog")) || null, // default value (aka initial value)
});

const Dog = () => {
  const dog = useRecoilValue(dogState);
  return (
    <div className="flex-column justify-center">
      <p className="text-xl mb-1">This is {dog.name}</p>
      <table className="w-full flex justify-center mb-2">
        <tbody>
          <td>
            <div className="bg-div">
              <img src={dog.img} className="dog" />
            </div>
          </td>
          <td>
            <Stats />
          </td>
        </tbody>
      </table>
      <Buttons />
    </div>
  );
};
export default Dog;
