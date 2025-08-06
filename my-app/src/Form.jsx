import React from 'react';
import {useForm} from 'react-hook-form';
import ReactDOM from 'react-dom/client';
import {useState} from 'react';

function Login(){

    const{register, 
        handleSubmit, 
        formState: {errors}
     }= useForm();

    const[submittedData, setSubmittedData]= useState();

    return(
        <form onSubmit={handleSubmit(onSubmit)} >

            <input placeholder="email" 
            {...register('email', {
                required: true,
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'invalid email address'
                }
            })}/>
            {errors.email && <p style={{color: 'red'}}>{errors.email.message}</p>}

            <input placeholder='password'
            {...register('password', {
                required: true,
                minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters'
                }
            })}/>
            {errors.password && <p>{errors.password.message}</p>}
            <button>Login</button>
        </form>
    )

    function onSubmit(data){
        setSubmittedData(data);
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(<Login/>);