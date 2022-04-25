import '../assets/scss/components/playerCard.scss';

import { useEffect, useState } from 'react'
let classNames = require('classnames')

const PlayerCard = ({
  playerData: {
    image,
    number,
    placeOfBirth,
    firstName,
    lastName,
    position,
    playingSince
  }
}) => {
  if (image == null) {
    image = 'https://interfacultades-app.s3.us-east-2.amazonaws.com/teams/CAF.png';
  }

  let [isImageLoaded, setIsImageLoaded] = useState(false);
  
  let loadImg = () => {
    setTimeout(() => {
      setIsImageLoaded(true)
    }, 2000);
  }

  let loadingClass = classNames({
    'player_chart--photo--loading': true,
    'hide-loading': isImageLoaded
  });

  let playerImgClass = classNames({
    'hide-image': !isImageLoaded,
    'animation-image': isImageLoaded
  });

  return (
    <div className="player_chart">
      <div className="player_chart--photo">
        <img className={playerImgClass} src={image} alt="caf logo" onLoad={() => loadImg()} />
        <div className={loadingClass} >
          <span>{lastName}</span>
        </div>
      </div>
      <div className="player_chart_data__conteiner">
        <div className="player_chart_data__conteiner--secondary_data">
          <div className="number">
            <span>#<b>{number}</b></span>
          </div>
          <div className="city">
            <span> {placeOfBirth} </span>
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
          <span><b>{playingSince}</b></span>
        </div>
        <div className="player_chart_data__hidden--aka">
          <span>AKA</span>
          <span><b>aka</b></span>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;