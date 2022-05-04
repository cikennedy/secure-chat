import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import signUpImage from '../assets/signup.jpeg'

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(true);

    const handleChange = () => {

    }

  return (
    <div className='auth__form-container'>
        <div className='auth__form-container_fields'>
            <div className='auth__form-container_fields-content'>
                <p>{isSignUp ? 'Sign Up' : 'Sign In'}</p>
                <form onSubmit={() => {}}>
                    {isSignUp && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='fullName'>Full Name</label>
                            <input 
                            name='fullName'
                            type='text'
                            placeholder='Full Name'
                            onChange={handleChange}
                            required
                            />
                        </div>
                    )}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Auth