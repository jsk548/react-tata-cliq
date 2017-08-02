import React from 'react';
import { Router, Route } from 'react-router';
import { AppWrapper , Product , MyTata } from './containers';
import {
  fetchData
} from './containers/PDP/actions';

const Routes = (props) => {
  const { store } = props;

  const getData = (nextState, replace, cb) => {
    console.log('nextState', nextState);
    const { params: { source } } = nextState;
    store.dispatch(fetchData(source));
    cb();
  };

  return (
    <Router {...props}>
      <Route component={AppWrapper}>
        <Route path="/" component={MyTata} />
        <Route path="/:source" onEnter={getData} component={Product} />
      </Route>
    </Router>
  )
};

export default Routes;

