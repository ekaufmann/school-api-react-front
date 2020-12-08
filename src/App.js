import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Container, useTheme } from '@material-ui/core';

import './App.css';
import { ROUTES, ROUTES_ADM } from './config/Routes/Routes';

function App() {

  const routes = [...ROUTES, ...ROUTES_ADM];

  return (

    <Container align="center">
      <Switch>
        {
          routes.map((route, index) => {
            return (
              <Route exact path={route.path} component={route.component} key={index} />
            );
          })
        }
      </Switch>
    </Container>
  );
}

export default App;