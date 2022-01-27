import '../assets/scss/components/header.scss'

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header--title">
      <div className="header--title__logo">
        <h1><i>CAF</i></h1>
      </div>
      <div className="header--title__options">
        <Link to='/'>
          <span>
            Welcome
          </span>
        </Link>
        <Link to='/players'>
          <span>
            Players
          </span>
        </Link>
        <Link to='/newplayer'>
          <span>
            NewPlayer
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Header;