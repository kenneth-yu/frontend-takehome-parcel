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
        return <Alert className="text-center" variant="success" style={{ position: 'absolute', width: '100%', left: '0', top: '0' }}>Gem saved successfully!</Alert>
    }

    removeAlertBanner = () => {
        return <Alert className="text-center" variant="danger" style={{ position: 'absolute', width: '100%', left: '0', top: '0' }}>Gem removed successfully!</Alert>
    }


    render(){
        return(
            <div className="App">
                {this.state.addAlert ? this.addAlertBanner() : null}
                {this.state.removeAlert ? this.removeAlertBanner() : null}
                <Container>
                    <h1 className="text-center" style={{marginTop: '65px'}}>Ruby Gem Search Application</h1>
                    <SearchContainer addAlert={this.addAlert} removeAlert={this.removeAlert}/>
                </Container>
            </div>
        )
    }
}

export default (App)
