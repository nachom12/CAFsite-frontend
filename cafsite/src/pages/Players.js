import '../assets/scss/pages/players.scss'
import PlayerChart from '../components/PlayerChart'

const Players = () => {
  return (
    <div className="players_page">
      <div className="players_tittle">
        <h1>First Team Members.</h1>
      </div>
      <div className="players_page_list">
        <PlayerChart firstName="Jon" lastName="doe1" number="12" position="Goalkeeper" city="Montevideo" />
        <PlayerChart firstName="Jon" lastName="doe2" number="10" position="Striker" city="Salto" />
        <PlayerChart firstName="Jon" lastName="doe3" number="17" position="Midfielder" city="Florida" />
        <PlayerChart firstName="Jon" lastName="doe4" number="6" position="Back" city="Montevideo" />
        <PlayerChart firstName="Jon" lastName="doe5" number="5" position="Midfielder" city="Paysandu" />
        <PlayerChart firstName="Gean" lastName="doe5" number="70" position="Midfielder" city="Treinta y Tres" />
      </div>
    </div>
  )
}

export default Players;

