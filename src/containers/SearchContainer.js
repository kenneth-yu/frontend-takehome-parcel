import React, {Component} from 'react';
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
        savedGems: localStorage.getItem('savedGems') ? JSON.parse(localStorage.getItem('savedGems')) : {}
    }

    changeHandler = (event) => {
        this.setState({
            searchText: event.target.value
        })
    }

    searchHandler = () => {
        event.preventDefault()
        fetch(`http://localhost:3000/api/v1/search.json?query=${this.state.searchText}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                searchResults: data
            })
        })
    }

        
    onSaveGem = (gemDetails, savedGems) => {
        delete savedGems[gemDetails.name]
        if(window.confirm("Are you sure you want to remove this gem?")){
            this.setState({
                savedGems: savedGems
            })
            this.props.removeAlert(true)
            setTimeout(() =>{
                this.props.removeAlert(false)
            }, 3000)
        }
    }

    onDeleteGem = (gemDetails, savedGems) => {
        savedGems[gemDetails.name] = gemDetails
        this.setState({
            savedGems: savedGems
        })
        this.props.addAlert(true)
        setTimeout(() =>{
            this.props.addAlert(false)
        }, 3000)
    }

    saveHandler = (event, gemDetails) =>{ 
        let savedGems = {...this.state.savedGems}
        if(savedGems[gemDetails.name]){
            this.onSaveGem(gemDetails, savedGems)
        }
        else{
            this.onDeleteGem(gemDetails, savedGems)
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