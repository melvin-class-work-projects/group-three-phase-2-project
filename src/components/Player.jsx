import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Player = () => {
    const {id} = useParams();
    const [player, setPlayer] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
            setLoading(true);
            fetch(`http://localhost:3000/players/${id}`)
            .then(response => response.json())
            .then (player => setPlayer(player))
            setLoading(false); 
            console.log(player.image)
    }, [id, player.image]);

    const Loading = () => {
        return(
            <>
                Loading.....
            </>
        )
    }

    const ShowPlayer = () => {
        return (
          <>
            <div className="col-md-6 img-fluid img-thumbnail">
              <img
                src={player.image}
                alt={player.name}
                height="200px"

              />
            </div>
            <div className="col-md-6">
              <h4 className="text-uppercase text-black-50">{player.type}</h4>
              <h1 className="display-5">{player.name}</h1>
              <p className="lead fw-bolder">
                <ul>
                <li>Club: {player.club}</li>
                <li>League: {player.league}</li> 
                <li>Salary: {player.salary}</li>
                </ul>
                <ul>
                <h5>Player Stats</h5>
                <li>Height: {player.height}</li>
                <li>Strong foot: {player.foot}</li>
                <li> Pace: {player.pace}</li>
                <li> Shooting: {player.shooting}</li>
                <li> Passing: {player.passing}</li>
                <li> Dribbling: {player.dribbling}</li>
                <li> Defending: {player.defending}</li>
                <li> Physical: {player.physical}</li>
                </ul>
              </p>
              <h3 className="display-6 my-4 fw-bold">
                ${player.value}
              </h3>
              <p className="lead">{player.description}</p>
  
              <button className="btn btn-dark">
                Bid
              </button>
            </div>
          </>
        );
    }

    return (
        <div>
            <div className='container py-5'>
                <div className='row py-4'>
                    {loading ? <Loading/> : <ShowPlayer />}
                </div>
            </div>

        </div>
    )
}

export default Player;