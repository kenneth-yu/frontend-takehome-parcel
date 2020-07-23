import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchContainer from './containers/SearchContainer'

class App extends Component {
    state = { 
    }

    render(){
        return(
            <div className="App">
                <SearchContainer/>
            </div>
        )
    }
}

export default (App)
