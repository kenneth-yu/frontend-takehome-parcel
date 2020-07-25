import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchContainer from './containers/SearchContainer'

class App extends Component {
    state = { 
    }

    render(){
        return(
            <div className="App" style={{textAlign: "center"}}>
                <h1 >Ruby Gem Searching App</h1>
                <SearchContainer/>
            </div>
        )
    }
}

export default (App)
