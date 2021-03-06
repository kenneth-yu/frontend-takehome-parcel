import React, {Component} from 'react';
import { Button, InputGroup, Form, Row} from 'react-bootstrap';

class SearchBox extends Component {
    render(){
        return(
        <Form onSubmit={this.props.searchHandler}>
            <InputGroup className="mb-5 mt-5">
                    <Form.Control id="searchTextBox" placeholder="Search Ruby Gems..." value={this.props.searchText} onChange={this.props.changeHandler} size="lg" type="text" />
                    <InputGroup.Append>
                        <Button className="pl-4 pr-4" type="submit" variant="outline-primary" id="searchButton" >Search</Button>
                    </InputGroup.Append>
            </InputGroup>
        </Form>
        )
    }
}
export default (SearchBox)