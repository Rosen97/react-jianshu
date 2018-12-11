import React , { Component,Fragment } from 'react'
import { Provider } from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './common/header'
import Home from './pages/home/home'
import Detail from './pages/detail/detail'
import './index.scss'
import store from './store';

class App extends Component{
    render() {
        return (
            <Fragment>
                <Provider store={store}>
                    <Header/>
                    <BrowserRouter>
                        <div>
                            <Route path='/' exact component={Home}></Route>
                            <Route path='/detail' exact component={Detail}></Route>
                        </div>
                    </BrowserRouter>
                </Provider>
            </Fragment>
        )
    }
}

export default App
