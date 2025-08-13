import React, { useState } from "react";
import PropTypes from 'prop-types';
import { useState } from "react";

//form component
function ProjectForm({project, onSave, onCancel}){

     //states
    const[projectState, setProjectState]=useState(project);

    return(
        <></>
    )
}

//type checking using propType object
ProjectForm.propTypes={
    project: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
}