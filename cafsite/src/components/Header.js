import { useState } from 'react';
import '../assets/scss/components/header.scss'
import icon from '../assets/img/user_icon.png'
import CAF from '../assets/img/CAF.png'

import { Link, useLocation } from 'react-router-dom';


const Header = ({ menuTabs }) => {

  let { pathname } = useLocation();

  const [currentTab, setCurrentTab] = useState(pathname.slice(1, pathname.length)); // set the current tab with the url.

  const renderMenuTab = (tabName) => {
    return (
      <>
        <div className= {tabName.key === currentTab ? 'header--title__options__active' : 'header--title__options__not-active'}>
          {tabName.value}
        </div>
      </>
    )
  };

  return (
    <div className="header--title">
      <Link to='/'>
        <div className="header--title__logo">
          <img src={CAF} alt="caf logo" onClick={() => setCurrentTab('welcome')} />
        </div>
      </Link>
      <div className="header--title__options">
        {menuTabs.map((menuTab) => {
          return (
            <div id={menuTab.key}>
              <Link to={'/' + menuTab.key}>
                <button onClick={() => setCurrentTab(menuTab.key)} >
                  {renderMenuTab(menuTab)}
                </button>
              </Link>
            </div>
          )
        })}
      </div>
      <div className="header--title__admin">
        <img src={icon} alt="admin icon"/>
        <button>Log in</button>
      </div>
    </div>
  )
}

export default Header;