import ReactDOM from 'react-dom';
import React, { useState } from 'react';

export default function ProjectForm(){

    //states to hold form values
    const[project, setProject]=useState('');
    const[description, setDescription]=useState('');
    const[budget, setBudget]=useState('');
    const[active, setActive]=useState(true);
    const[error, setError]=useState("");

    //handle save function
    const handleSubmit= (e) => {
        e.preventDefault();
        setError("");

        //validate project name
        if(project.trim() === ""){
            setError('project name is required');
            return;
        }

        //validate budget
        if( budget === ""){
            setError('budget is required');
        }else{
            let budgetAmount= Number(budget);
            if(Number.isNaN(budgetAmount) || budgetAmount < 0){
                setError('budget should be a positive number')
                return;
            }
        }

        console.log({
            project,
            description,
            budget: budget === "" ? null : Number(budget),
            active
        }
        );

        //reset form after save
        setProject('');
        setDescription('');
        setBudget('');
        setActive('');
    };

    //handle cancel func
    const handleCancel= (e) =>{
        e.preventDefault();
        setProject('');
        setDescription("");
        setBudget("");
        setActive(false);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add project</h2>
                <label>Project name
                    <input
                    type="text"
                    value={project}
                    onChange={(e) => setProject(e.target.value) }
                     />
                </label>

                <label>Description
                    <textarea
                    value={description}
                    onChange={ (e)=> setDescription(e.target.value)}
                     />
                </label>

                <label>Budget
                    <input
                    type='number'
                    value={budget}
                    onChange={ (e) => setBudget(e.target.value)}
                     />
                </label>

                <label>Active
                    <input
                    type="radio"
                    name="status"
                    checked={active === true}
                    onChange={ () => setActive(true)} />
                </label>

                <label>Inactive
                    <input
                    type="radio"
                    name="status"
                    checked={active === false}
                    onChange={() => setActive(false)}
                    />
                </label>

                <button type='submit'>Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    )
}