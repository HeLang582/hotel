import React from 'react';
import { Router, Route, IndexRedirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Welcome from './components/welcome';
import Menu from './components/menu';
import ContentBackground from './components/contentBackground';
import MenuInformation from './components/menuInformation';
import Home from './components/home';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage}>
        <IndexRedirect to="/welcome" />
        <Route path="/welcome" component={Welcome} />
      </Route>
      <Route path="/home" component={Home} />
      <Route path="/" component={ContentBackground}>
        <Route path="/menu" component={Menu} />
        <Route path="/menu/menuinfor" component={MenuInformation} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
