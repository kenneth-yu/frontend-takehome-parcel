import React, {Component} from 'react';
import SearchContainer from './containers/SearchContainer'
import { Alert, Container } from 'react-bootstrap';

class App extends Component {
    state = { 
        addAlert: false,
        removeAlert: false
    }

    addAlert = (value) => {
        this.setState({
            addAlert: value
        })
    }

    removeAlert = (value) =>{
        this.setState({
            removeAlert: value
        })
    }

    addAlertBanner = () => {
        return <Alert className="text-center" variant="success">Gem saved successfully!</Alert>
    }

    removeAlertBanner = () => {
        return <Alert className="text-center" variant="danger">Gem removed successfully!</Alert>
    }


    render(){
        return(
            <div className="App">
                {this.state.addAlert ? this.addAlertBanner() : null}
                {this.state.removeAlert ? this.removeAlertBanner() : null}
                <Container>
                    <h1 className="mt-5 text-center">Ruby Gem Search Application</h1>
                    <SearchContainer addAlert={this.addAlert} removeAlert={this.removeAlert}/>
                </Container>
            </div>
        )
    }
}

export default (App)
