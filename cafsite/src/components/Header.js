import { useState } from 'react';
import '../assets/scss/components/header.scss'
import CAF from '../assets/img/CAF.png'

import { Link, useLocation } from 'react-router-dom';


const Header = () => {
  const menuTabs = [
    {
      key: 'welcome',
      value: 'Welcome'
    },
    {
      key: 'players',
      value: 'Players'
    },
    {
      key: 'newplayer',
      value: 'New Player'
    }
  ];

  let { pathname } = useLocation();

  console.log(pathname.slice(1, pathname.length)); // erase first character '/'.

  const [currentTab, setCurrentTab] = useState(pathname.slice(1, pathname.length));

  const renderMenuTab = (tabName) => {
    return (
      <>
        {tabName.key === currentTab ? <hr /> : ''}
        {tabName.value}
        {tabName.key === currentTab ? <hr /> : ''}
      </>
    )
  };

  return (
    <div className="header--title">
      <div className="header--title__logo">
        <img src={CAF} alt="caf logo" />
      </div>
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
    </div>
  )
}

export default Header;