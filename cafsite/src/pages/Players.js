import { useEffect, useState } from 'react'
import '../assets/scss/pages/players.scss'
import PlayerCard from '../components/PlayerCard'
import ApiHandler from '../api/index'

const Players = () => {

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function getPlayers() {
      let apiHandler = new ApiHandler();
      const playersRes = await apiHandler.getPlayers();
      setPlayers(playersRes);
    }
    getPlayers();
  }, []);

  return (
    <div className="players_page">
      <div className="players_tittle">
        <h1>Team Members</h1>
      </div>
      <div className="players_page_list">
        {
          players.map( (player) => {
            return (
              <PlayerCard firstName={player.firstName}  lastName={player.lastName} number={player.number} position={player.position} city={player.city} />
            )    
          })
        }
      </div>
    </div>
  )
}

export default Players;

