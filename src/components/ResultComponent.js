import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

const ResultComponent = ({resultDetails, savedDetails, saveHandler}) =>{
    let gemDetails = resultDetails ? resultDetails : savedDetails
    return(
        <div className="ResultComponent" style={{marginBottom: "10px"}}>
            <a href={gemDetails.project_uri ? gemDetails.project_uri : gemDetails.source_code_uri}>{gemDetails.name}</a><br/>
            <span>Author(s): {gemDetails.authors}</span><br/>
            <span>Version: {gemDetails.version}</span><br/>
            <span>Downloads: {gemDetails.downloads}</span><br/>
            <Button variant={resultDetails ? "outline-primary" : "outline-danger"} id="saveButton" onClick={(event) => saveHandler(event, gemDetails)}>{resultDetails ? "Save Gem" : "Remove Gem"}</Button>
        </div>
    )
}

export default ResultComponent;