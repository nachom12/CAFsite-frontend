import '../assets/scss/components/playerCard.scss';
import player from '../assets/img/player4.jpg';

const PlayerCard = (props) => {
  return (
    <div className="player_chart">
      <div className="player_chart--photo">
        <img src={player} alt="caf logo" />
      </div>
      <div className="player_chart_data__conteiner">
        <div className="player_chart_data__conteiner--secondary_data">
          <div className="number">
            <span>#<b>{props.number}</b></span>
          </div>
          <div className="city">
            <span> {props.city} </span>
          </div>
        </div>
        <div className="player_chart_data__conteiner--data">
          <span> {props.firstName} <b>{props.lastName}</b> </span>
          <div className="position">
            <span> {props.position} </span>
          </div>
        </div>
      </div>
      <div className="player_chart_data__hidden">
        <div className="player_chart_data__hidden--playing_since">
          <span>Playing since</span>
          <span><b>2018</b></span>
        </div>
        <div className="player_chart_data__hidden--entrance">
          <span>Gen</span>
          <span><b>2017</b></span>
        </div>
        <div className="player_chart_data__hidden--carreer">
          <span>Ing.</span>
          <span><b>Comp</b></span>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;