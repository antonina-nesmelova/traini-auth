import { applyMiddleware, createStore, compose } from 'redux';
import createRootReducer from './reducer';

import { routerMiddleware } from 'react-router-redux'
import { createMemoryHistory } from 'history';

const initialState = {router: createMemoryHistory()};

export const configureStore = (preloadedState) => {
    const history = initialState.router;
    const store = createStore(
      createRootReducer(history), // root reducer with router state
      preloadedState,
      compose(
          applyMiddleware(
              routerMiddleware(history), // for dispatching history actions
              // ... other middlewares ...
          ),
      ),
    )

    return { history, store }
}