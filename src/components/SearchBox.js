import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";

class SearchBox extends Component {
    render(){
        return(
            <div>
                <input type="text" id="searchTextBox" placeholder="Search Ruby Gems..." value={this.props.searchText} onChange={this.props.changeHandler}/>
                <input type="button" id="searchButton" value="Search" onClick={this.props.searchHandler} />
            </div>
        )
    }
}
export default (SearchBox)