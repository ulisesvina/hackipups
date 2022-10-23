import { useRecoilState } from "recoil";

import Dog, { dogState } from "./Dog";
import Shop from "./Shop";
import Tasks from "./Tasks";

const Home = () => {
  const [dog, setDog] = useRecoilState(dogState);

  console.log(JSON.parse(window.localStorage.getItem("dog")));

  const handleSubmit = (e) => {
    const data = {
      name: e.target[0].value,
      img: "https://cdn.discordapp.com/attachments/1033175931688333354/1033497362921959424/unknown.png",
    };

    window.localStorage.setItem("dog", JSON.stringify(data));
    setDog(data);
    e.preventDefault();
  };

  return (
    <div className="container">
      {dog ? (
        <>
          <div className="p-2 mb-5">
            <Dog />
          </div>
          <div className="p-2 mb-5">
            <Tasks />
          </div>
          <div className="p-2 mb-5">
            <Shop />
          </div>
        </>
      ) : (
        <div className="container flex-column justify-center">
          <h3>Let's get started :D</h3>
          <h5>Create a brand new doggo to pet ^^</h5>
          <form onSubmit={handleSubmit} className="mt-5">
            <label htmlFor="name">New pet's name :o</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              defaultValue="Rover"
              className="w-40 p-1 mt-4 mb-4 border text-gray-700 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
            <br />
            <button className="border py-1 px-2 hover:bg-white hover:text-black m-2 ml-0">Create</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Home;
