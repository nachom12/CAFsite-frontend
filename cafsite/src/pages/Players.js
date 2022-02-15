import '../assets/scss/pages/players.scss'
import PlayerCard from '../components/PlayerCard'

const Players = () => {
  return (
    <div className="players_page">
      <div className="players_tittle">
        <h1>Team Members</h1>
      </div>
      <div className="players_page_list">
        <PlayerCard firstName="Jon" lastName="doe1" number="12" position="Goalkeeper" city="Montevideo" />
        <PlayerCard firstName="Jon" lastName="doe2" number="10" position="Striker" city="Salto" />
        <PlayerCard firstName="Jon" lastName="doe3" number="17" position="Midfielder" city="Florida" />
        <PlayerCard firstName="Jon" lastName="doe4" number="6" position="Back" city="Montevideo" />
        <PlayerCard firstName="Jon" lastName="doe5" number="5" position="Midfielder" city="Paysandu" />
        <PlayerCard firstName="Gean" lastName="doe5" number="70" position="Midfielder" city="SanCarlos" />
      </div>
    </div>
  )
}

export default Players;

