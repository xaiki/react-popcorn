import React from 'react';
import Router, {Link, Route, DefaultRoute, NotFoundRoute} from 'react-router';
import {history} from 'react-router/lib/HashHistory';
import {App, Movies, Shows} from './App';
import {Stars} from './Stars';
import {MovieDetail} from './Detail';

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

window.i18n = {
    __: function (a) { return a}
}

class NotFound extends React.Component {
    render () {
        return (<p>Not Found</p>)
    }
}

React.render((
    <Router history={history}>
        <Route path="/" component={App}>
            <Route name="movies" path="/movies" component={Movies}>
                <Route name="movieDetails" path="details/:id" component={MovieDetail} />
            </Route>
            <Route name="shows" path="/shows" component={Shows}>
                {/* <Route name="showDetails" path="details/:id" component={ShowDetail} /> */}
            </Route>
        </Route>
    </Router>
), document.body)
