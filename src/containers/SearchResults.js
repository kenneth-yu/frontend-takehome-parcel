import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import ResultComponent from '../components/ResultComponent'

class SearchResults extends Component {
    render(){
        let parsedResults = this.props.searchResults.map((resultDetails, index) => <ResultComponent key={index} resultDetails={resultDetails} saveHandler={this.props.saveHandler}/>)
        let parsedSavedGems = this.props.savedGems.map((savedGems, index) => <ResultComponent key={index} savedDetails={savedGems} saveHandler={this.props.saveHandler}/>)

        return(
            <div className="SearchResults">
                {parsedResults.length > 0 ? <h1>Search Results</h1> : null}
                {parsedResults}
                {parsedSavedGems.length > 0 ? <h1>Saved Gems</h1> : null}
                {parsedSavedGems}

            </div>
        )
    }
}

export default (SearchResults)

//name author version downloads