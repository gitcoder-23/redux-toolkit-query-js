import { Switch, Route } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import './App.css';
import Users from './components/Users';

import ViewUser from './components/ViewUser';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container>
        <h1>Redux Toolkit Query js</h1>
        <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/users/:userId" component={ViewUser} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
