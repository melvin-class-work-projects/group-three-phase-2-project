const PlayerList = ({players, title}) => {
    return ( 
        <div className="row">
            <h2>{title}</h2>
            {
                players.map((player)=>{
                    return(
                        <div key={player.id}className="card col-12 col-md-4 col-xl-3 col-xxl-2 text-start shadow m-3" style={{"width": "18rem"}}>
                            <img src={player.image} className="card-img-top" alt={player.name}></img>
                            <div className="card-body">
                                <h5 className="card-title">Name: {player.name}</h5>
                                <h6>Current Club:{player.club}</h6>
                                <p>Deal: {player.type}</p>
                                <small>Position: {player.position}</small>
                                <p>Weekly Salary: {player.salary}</p>
                                <p>Market Value: {player.value}M Euros</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default PlayerList;