import PlayerList from "./PlayerList";
import useFetch from "./useFetch";

const Players = () => {
    const {data} = useFetch('http://localhost:3000/players')
    return ( 
        <div className="container">
            <PlayerList players={data} title="Available Players for Transfer"/>
        </div>
     );
}
 
export default Players;