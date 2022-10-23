import Dog from "./Dog";
import Stats from "./Stats";
import Shop from "./Shop";
import Tasks from "./Tasks"
const Home = () => {
    return (
        <div className="container">
            <Stats />
            <Dog/>
            <Tasks />
            <Shop/>
        </div>
    )
}

export default Home;