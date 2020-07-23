import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";

const ResultComponent = ({resultDetails, savedDetails, saveHandler}) =>{
    let gemDetails = resultDetails ? resultDetails : savedDetails
    return(
        <div className="ResultComponent">
            {/* Turn name into hyper link to download page */}
            <br/><span>{gemDetails.name}</span><br/>
            <span>Author(s): {gemDetails.authors}</span><br/>
            <span>Version: {gemDetails.version}</span><br/>
            <span>Downloads: {gemDetails.downloads}</span><br/>
            <input type="button" id="saveButton" value={resultDetails ? "Save Gem" : "Remove Gem"} onClick={(event) => saveHandler(event, gemDetails)} />
        </div>
    )
}

export default ResultComponent;