import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import ResultComponent from '../components/ResultComponent'

class SearchResults extends Component {
    
    render(){
        
        let parsedResults = this.props.searchResults.filter(resultDetails => !this.props.savedGems[resultDetails.name])
        .map((resultDetails, index) => <ResultComponent key={index} resultDetails={resultDetails} saveHandler={this.props.saveHandler}/>)

        let parsedSavedGems = Object.values(this.props.savedGems).map((savedGems, index) => <ResultComponent key={index} savedDetails={savedGems} saveHandler={this.props.saveHandler}/>)

        return(
            <div className="results" style={{display: "inline-block"}}>
                <div className="search-results" style={{float:"left", width: "50%"}}>
                    {parsedResults.length > 0 ? <h1>Search Results</h1> : null}
                    {parsedResults}
                </div>
                <div className="saved-results" style={{float: parsedResults > 0 ? "right" : "left", width: "50%"}}>
                    {parsedSavedGems.length > 0 ? <h1>Saved Gems</h1> : null}
                    {parsedSavedGems}
                </div>

            </div>
        )
    }
}

export default (SearchResults)