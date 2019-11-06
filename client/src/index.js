import React, { Suspense } from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { configureStore } from './redux/store'
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker'
import './i18n';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faTachometerAlt, faUserAstronaut, faRocket, faCalendarAlt, faAlignLeft } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faTachometerAlt, faUserAstronaut, faRocket, faCalendarAlt, faAlignLeft )

const { history, store } = configureStore({})

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <BrowserRouter>
                <Suspense fallback={(<div>Loading</div>)}>
                    <App />
                </Suspense>
            </BrowserRouter>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
