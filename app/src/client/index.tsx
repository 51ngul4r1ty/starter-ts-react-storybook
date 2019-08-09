import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { configureStore } from '../shared/store';
import App from '../shared/App';
import IntlProvider from '../shared/i18n/IntlProvider';
import createHistory from '../shared/store/history';
import { Test } from '../shared/components/features/Test';
import { Test3 } from '../shared/components/features/Test3';

const history = createHistory();

// Create/use the store
// history MUST be passed here if you want syncing between server on initial route
const store =
    window.store ||
    configureStore({
        initialState: window.__PRELOADED_STATE__,
    });

hydrate(
    <Provider store={store}>
        <Router history={history}>
            <IntlProvider>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/test" component={Test} />
                    <Route path="/test3" component={Test3} />
                </Switch>
                {/* <App /> */}
            </IntlProvider>
        </Router>
    </Provider>,
    document.getElementById('app')
);

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept();
    }

    if (!window.store) {
        window.store = store;
    }
}
