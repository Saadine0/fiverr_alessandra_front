import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Checkout from './sub_mb_components/Checkout';
import Present from './sub_mb_components/Present';
import Historique from './sub_mb_components/Historique';


class minibar extends Component {
    render() {
        return (
            <div>
         <Router>
            <nav>
              <ul>
                    <li>
                    <Link to="/checkout">checkout</Link>
                    </li>
                    <li>
                    <Link to="/present">present</Link>
                    </li>
                    <li>
                    <Link to="/historique">historique</Link>
                    </li>
                </ul>
            </nav>
                <Switch>
                   <Route path="/checkout" exact component={Checkout} />
                   <Route path="/present" component={Present} />
                   <Route path="/historique" component={Historique} />
                </Switch>
            </Router>
    </div>
        );
    }
}

export default minibar;