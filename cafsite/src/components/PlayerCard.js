import '../assets/scss/components/playerCard.scss';
import CAF from '../assets/img/CAF.png';

const PlayerCard = ({
  image,
  number,
  city,
  firstName,
  lastName,
  position,
}) => {
  if (image == null){
    image = 'https://interfacultades-app.s3.us-east-2.amazonaws.com/teams/CAF.png';
  } 

  return (
    <div className="player_chart">
      <div className="player_chart--photo">
        <img src={image} alt="caf logo" />
      </div>
      <div className="player_chart_data__conteiner">
        <div className="player_chart_data__conteiner--secondary_data">
          <div className="number">
            <span>#<b>{number}</b></span>
          </div>
          <div className="city">
            <span> {city} </span>
          </div>
        </div>
        <div className="player_chart_data__conteiner--data">
          <span> {firstName} <b>{lastName}</b> </span>
          <div className="position">
            <span> {position} </span>
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