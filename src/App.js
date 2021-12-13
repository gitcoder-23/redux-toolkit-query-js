import { useEffect } from 'react';

import { Switch, Route, Link, useHistory } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import './App.css';
import Users from './components/Users';

import ViewUser from './components/ViewUser';
import Header from './includes/Header';
import Quotes from './components/Quotes';
import { Products } from './components/Products';
import ViewProduct from './components/ViewProduct';
import ViewProductByFilter from './components/ViewProductByFilter';
import AddProducts from './components/AddProducts';

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
          <Route exact path="/crud" component={Products} />
          <Route exact path="/addproduct" component={AddProducts} />
          <Route exact path="/products/:proId" component={ViewProduct} />
          <Route
            exact
            path="/products/byfilter/:proId"
            component={ViewProductByFilter}
          />
          <Route exact path="*">
            <span style={{ textAlign: 'center' }}>
              404 Page Not Found! Crud ops. is in underconstruction
            </span>
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
