import { useEffect } from 'react';

import { Switch, Route, Link, useHistory } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import './App.css';
import Users from './components/Users';

import ViewUser from './components/ViewUser';
import Header from './includes/Header';
import Quotes from './components/Quotes';

function App() {
  const history = useHistory();
  // useEffect(() => {
  //   history.push('/');
  // }, []);
  return (
    <div className="App">
      <CssBaseline />
      <Container>
        <h1>
          <Link to="/">Redux Toolkit Query js</Link>
        </h1>
        <Header />

        <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/users/:userId" component={ViewUser} />

          <Route exact path="/polling" component={Quotes} />
          <Route exact path="*">
            <span style={{ textAlign: 'center' }}>404 Page Not Found!</span>
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
