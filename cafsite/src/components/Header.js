import { useState } from 'react';
import '../assets/scss/components/header.scss'
import CAF from '../assets/img/CAF.png'

import { Link } from 'react-router-dom';

const Header = () => {
  const [currentTab, setCurrentTab] = useState('welcome');

  const horizontalLine = (tabName) => {
    if (tabName === currentTab) {
      return (
        <hr></hr>
      )
    }
  }

  return (
    <div className="header--title">
      <div className="header--title__logo">
        <img src={CAF} alt="caf logo" />
      </div>
      <div className="header--title__options">
        <Link to='/'>
          <button onClick={() => setCurrentTab('welcome')} > Welcome {horizontalLine('welcome')} </button>
        </Link>
        <Link to='/players'>
          <button onClick={() => setCurrentTab('players')} >Players {horizontalLine('players')}</button>
        </Link>
        <Link to='/newplayer'>
          <button onClick={() => setCurrentTab('newPlayer')} >New Player {horizontalLine('newPlayer')}</button>
        </Link>
      </div>
    </div>
  )
}

export default Header;