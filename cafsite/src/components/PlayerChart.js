import '../assets/scss/components/playerChart.scss';
import CAF from '../assets/img/CAF.png';

const PlayerChart = (props) => {
  return (
    <div className="player_chart">
    <div className="player_chart--photo">
      <img src={CAF} alt="caf logo" />
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
  </div>
  );
}

export default PlayerChart;