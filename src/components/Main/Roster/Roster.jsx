import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FullRoster from './FullRoster';
import Player from './Player';
import { Div, H1 } from '../Home';

const Roster = () => (
    <Div>
        <H1>This is a roster page!</H1>
        <Switch>
            <Route exact path='/roster' component={FullRoster} />
            <Route path='/roster/:number' component={Player} />
        </Switch>
    </Div>
);

export default Roster;