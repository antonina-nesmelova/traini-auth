import { applyMiddleware, createStore, compose } from 'redux';
import createRootReducer from './reducer';

import { routerMiddleware } from 'react-router-redux'
import { createMemoryHistory } from 'history';

// export const history = createBrowserHistory();

// Build the middleware for intercepting and dispatching navigation actions
// const myRouterMiddleware = routerMiddleware(history);
//
// const getMiddleware = () => {
//   if (process.env.NODE_ENV === 'production') {
//     return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware);
//   } else {
//     // Enable additional logging in non-production environments.
//     return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware, createLogger())
//   }
// };
//
// export const store = createStore(
//   reduser, composeWithDevTools(getMiddleware())
// )
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