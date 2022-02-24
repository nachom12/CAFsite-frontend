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
      console.log(playersRes);
      setPlayers(playersRes);
    }
    getPlayers();
  }, []);


  let goalkeepers = players.filter(player => player.position === "Goalkeeper")
  let defenders = players.filter(player => player.position === "Defender")
  let midfielders = players.filter(player => player.position === "Midfielder")
  let forwards = players.filter(player => player.position === "Forward")
  // let playersList = [goalkeepers,defenders,midfielders,forwards];

  return (
    <div className="players_page">
      <div className="players_tittle">
        <h1>Team Members</h1>
      </div>
      <div className="players_page_list">
        <div className="players_by_position">
          <h2>Goalkeepers</h2>
          <div className="players_by_position--players">
            {
              goalkeepers.map((player) => {
                return (
                  <PlayerCard firstName={player.firstName} lastName={player.lastName} number={player.number} position={player.position} city={player.placeOfBirth} image={player.image} />
                )
              })
            }
          </div>
        </div>
        <div className="players_by_position">
          <div className="players_by_position--title">
            <h2>Defenders</h2>
          </div>
          <div className="players_by_position--players">
            {
              defenders.map((player) => {
                return (
                  <PlayerCard firstName={player.firstName} lastName={player.lastName} number={player.number} position={player.position} city={player.placeOfBirth} image={player.image} />
                )
              })
            }
          </div>
        </div>
        <div className="players_by_position">
          <div className="players_by_position--title">
            <h2>Midfielders</h2>
          </div>
          <div className="players_by_position--players">
          {
            midfielders.map((player) => {
              return (
                <div className="players_by_position">
                  <PlayerCard firstName={player.firstName} lastName={player.lastName} number={player.number} position={player.position} city={player.placeOfBirth} image={player.image} />
                </div>
              )
            })
          }
          </div>
        </div>
        <div className="players_by_position">
          <div className="players_by_position--title">
            <h2>Forwards</h2>
          </div>
          <div className="players_by_position--players">
            {
              forwards.map((player) => {
                return (
                  <div className="players_by_position">
                    <PlayerCard firstName={player.firstName} lastName={player.lastName} number={player.number} position={player.position} city={player.placeOfBirth} image={player.image} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Players;

