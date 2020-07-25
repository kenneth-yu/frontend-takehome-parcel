import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";

class SearchBox extends Component {
    render(){
        return(
            <div style={{display:"flex", flexDirection:"row", height: "50px", padding: "30px 15% 15px 15%"}}>
                <input style={{flex: "1"}} type="text" id="searchTextBox" placeholder="Search Ruby Gems..." value={this.props.searchText} onChange={this.props.changeHandler}/>
                <input type="button" id="searchButton" value="Search" onClick={this.props.searchHandler} />
            </div>
        )
    }
}
export default (SearchBox)