import { gql, useMutation } from '@apollo/client';
import React from 'react';


const LOGIN = gql`
    mutation($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      message
      token
    }
  }
`

const Signin = () => {

    const [signin, { data, error, loading }] = useMutation(LOGIN)

    const handleRegister = (e) => {
        e.preventDefault();
        const submitData = {
            email: e.target.email.value,
            password: e.target.password.value,
        }
        signin({
            variables: submitData
        })
        if (data) {
            alert(data?.signin?.message)
            if (data?.signin.token) {
                localStorage.setItem('gqlToken', data.signin.token)
            }
        }
    }

    return (
        <div className="form">
            <form onSubmit={handleRegister}>

                <label htmlFor="">Your Email</label>
                <input name="email" type="email" />
                <label htmlFor="">Your Password</label>
                <input name="password" type="password" />

                <button type='submit' className='rounded-full p-2 bg-white text-black'>Login</button>
            </form>
        </div>
    );
};

export default Signin;