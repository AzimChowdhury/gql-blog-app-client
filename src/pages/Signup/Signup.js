import React from 'react';
import './Signup.css'
import { gql, useMutation } from '@apollo/client';

const SIGNUP = gql`
    mutation register($name: String!, $email: String!, $password: String!,$bio:String ) {
        signup(name: $name, email: $email, password: $password, bio:$bio) {
        token
        message
        }
    }
`

const Signup = () => {
    const [signup, { data, loading, error }] = useMutation(SIGNUP);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :${error?.message}</p>

    const handleRegister = (e) => {
        e.preventDefault();
        const submitData = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            bio: e.target.bio.value
        }
        signup({
            variables: submitData
        })
        alert(data?.signup?.message)
        if (data?.signup.token) {
            localStorage.setItem('gqlToken', data.signup.token)
        }
    }

    return (
        <div className="form">
            <form onSubmit={handleRegister}>
                <label htmlFor="">Your Name</label>
                <input name="name" type="text" />
                <label htmlFor="">Your Email</label>
                <input name="email" type="email" />
                <label htmlFor="">Your Password</label>
                <input name="password" type="password" />
                <label htmlFor="">Your Bio</label>
                <input name="bio" type="text" />
                <button type='submit' className='rounded-full p-2 bg-white text-black'>Register</button>
            </form>
        </div>
    );
};

export default Signup;