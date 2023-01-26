import { useNavigate, useParams } from 'react-router-dom';

const PlayerList = ({players, title}) => {
    let navigate = useNavigate();
    let { id } = useParams();
    return ( 
        <div>
            <div className="card text-bg-dark border-0">
                <img src="../images/bg.jpg" className="card-img" alt="background" height="1100px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center bg-dark p-2 text-white bg-opacity-75">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">Welcome to DIMBA.org</h5>
                        <p className="card-text lead fs-4">YOUR TRUSTED TRANSFER MARKET APP.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <h2 className="text-center p-5">{title}</h2>
                {
                    players.map((player)=> {
                        const handleDelete = ()=>{
                            fetch(`http://localhost:3000/players/${player.id}`, {
                                method: 'DELETE'
                            })
                        }
                        return(
                            <div key={player.id}className="card col-12 col-md-4 col-xl-3 col-xxl-2 text-start shadow m-3" style={{"width": "18rem"}}>
                                <img src={player.image.id} className="card-img-top" alt={player.name} style={{"background-size":"cover","background-repeat":"no-repeat","height":"325px"}}></img>
                                <div className="card-body">
                                    <h5 className="card-title">Name: {player.name}</h5>
                                    <h6>Country:{player.nationality}</h6>
                                    <h6>Current Club:{player.club}</h6>
                                    <ul>
                                        <li>Deal: {player.type}</li>
                                        <li>Position: {player.position}</li>
                                        <li>Weekly Salary: {player.salary}</li>
                                        <li>Market Value: {player.value} Euros</li>
                                    </ul>
                                    
                                    <div className="d-flex justify-content-between">
                                        <button onClick={() => {
                                            navigate(`/players/${player.id}`);
                                        }} className="btn btn-info">Details</button>
                                        <button onClick={handleDelete} className="btn btn-danger">X</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default PlayerList;