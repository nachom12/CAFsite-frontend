import './App.css';
import { Route, Routes } from 'react-router-dom';

import Welcome from './pages/Welcome';
import NewPlayer from './pages/NewPlayer';
import ErrorPage from './pages/error';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/newplayer" element={<NewPlayer />} />
        <Route path="/*" element={<ErrorPage errorCode="404"/>} />
      </Routes>
    </div>
  );
}

export default App;
