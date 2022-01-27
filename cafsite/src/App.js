import './App.css';
import './assets/scss/App.scss'
import { Route, Routes } from 'react-router-dom';

import Welcome from './pages/Welcome';
import NewPlayer from './pages/NewPlayer';
import ErrorPage from './pages/error';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/newplayer" element={<NewPlayer />} />
          <Route path="/*" element={<ErrorPage errorCode="404" />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
