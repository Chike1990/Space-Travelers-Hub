import { Switch, Route } from 'react-router-dom';
import Missions from './views/Missions';
import Profile from './views/Profile';
import Rockets from './views/Rockets';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Rockets} exact />
        <Route path="/missions" component={Missions} exact />
        <Route path="/profile" component={Profile} exact />
      </Switch>
    </div>
  );
}

export default App;
