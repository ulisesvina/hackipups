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
    <>
      <p className="mb-2 text-2xl">{dog.name}</p>
      <div className="flex flex-col md:flex-row content-center justify-center ">
        <div className="mb-2">
          <div className="bg-div inline-block">
            <img src={dog.img} className="dog" />
          </div>
          <Stats />
        </div>
      </div>
      <Buttons />
    </>
  );
};
export default Dog;
