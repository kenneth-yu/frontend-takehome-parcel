import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";

const ResultComponent = ({resultDetails, savedDetails, saveHandler}) =>{
    let gemDetails = resultDetails ? resultDetails : savedDetails
    console.log(gemDetails)
    return(
        <div className="ResultComponent" style={{marginBottom: "10px"}}>
            <a href={gemDetails.source_code_uri ? gemDetails.source_code_uri : gemDetails.project_uri}>{gemDetails.name}</a><br/>
            <span>Author(s): {gemDetails.authors}</span><br/>
            <span>Version: {gemDetails.version}</span><br/>
            <span>Downloads: {gemDetails.downloads}</span><br/>
            <input type="button" id="saveButton" value={resultDetails ? "Save Gem" : "Remove Gem"} onClick={(event) => saveHandler(event, gemDetails)} /> 
        </div>
    )
}

export default ResultComponent;