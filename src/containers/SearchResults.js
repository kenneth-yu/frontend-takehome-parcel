import React, {Component} from 'react';
import ResultComponent from '../components/ResultComponent'
import {Row, Col} from 'react-bootstrap';

class SearchResults extends Component {
    
    render(){
        let parsedResults = this.props.searchResults.filter(resultDetails => !this.props.savedGems[resultDetails.name])
        .map((resultDetails, index) => <ResultComponent key={index} resultDetails={resultDetails} saveHandler={this.props.saveHandler}/>)
        let parsedSavedGems = Object.values(this.props.savedGems).map((savedGems, index) => <ResultComponent key={index} savedDetails={savedGems} saveHandler={this.props.saveHandler}/>)
        return(
            <Row className="results text-center">
                <Col className="search-results">
                    {parsedResults.length > 0 ? <h1>Search Results</h1> : null}
                    {parsedResults}
                </Col>
                <Col className="saved-results" >
                    {parsedSavedGems.length > 0 ? <h1>Saved Gems</h1> : null}
                    {parsedSavedGems}
                </Col>

            </Row>
        )
    }
}

export default (SearchResults)