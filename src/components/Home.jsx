import Dog from "./Dog";
import Stats from "./Stats";
import Shop from "./Shop";
const Home = () => {
    return (
        <div className="container">
            <Stats />
            <Dog/>
            <Shop/>
        </div>
    )
}

export default Home;