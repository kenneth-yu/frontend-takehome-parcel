import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import SearchBox from '../components/SearchBox'
import SearchResults from './SearchResults'

class SearchContainer extends Component {
    componentDidUpdate(prevState){
        if (this.state.savedGems !== prevState.savedGems ){
            localStorage.setItem('savedGems', JSON.stringify(this.state.savedGems))
        }
    }
    
    state = { 
        searchText: "",
        searchResults: [],
        savedGems: localStorage.getItem('savedGems') ? JSON.parse(localStorage.getItem('savedGems')) : []
    }

    changeHandler = (event) => {
        this.setState({
            searchText: event.target.value
        })
    }

    searchHandler = () => {
        fetch(`http://localhost:3000/api/v1/search.json?query=${this.state.searchText}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                searchResults: data
            })
        })
    }

    saveHandler = (event, gemDetails) =>{ 
        //get savedGems
        //see if it is in gemDetails
        //if it is remove it, if it isnt add it
        let savedGems = [...this.state.savedGems]

        if(savedGems.includes(gemDetails)){
            savedGems = savedGems.filter((savedGem, index) => {
                if(savedGem !== gemDetails){
                    return savedGem
                }
            })
            if(window.confirm("Are you sure you want to remove this gem?")){
                this.setState({
                    savedGems: savedGems
                })
            }
        }
        else{
            savedGems.push(gemDetails)
            this.setState({
                savedGems: savedGems
            })
            window.alert("Gem Saved!")
        }
        
    }


    render(){
        return(
            <div className="SearchContainer">
                <SearchBox searchText={this.state.searchText} changeHandler={this.changeHandler} searchHandler={this.searchHandler}/>
                <SearchResults saveHandler={this.saveHandler} searchResults={this.state.searchResults} savedGems={this.state.savedGems}/>

            </div>
        )
    }
}

export default (SearchContainer)