import PlayerList from "./PlayerList";
import useFetch from "./useFetch";

const Home = () => {
    const {data} = useFetch('http://localhost:3000/players')
    return ( 
        <div className="container">
            <PlayerList players={data} title="All Active Players in the Market"/>
        </div>
     );
}
 
export default Home;