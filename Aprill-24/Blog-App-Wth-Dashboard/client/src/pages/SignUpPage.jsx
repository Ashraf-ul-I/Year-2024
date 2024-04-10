import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import OAuth from '../components/OAuth';
const SignUpPage = () => {
  const [formdata, setFormdata] = useState({});
  const [errorMessage, setErrormessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value.trim() });

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formdata.username || !formdata.email || !formdata.password) {
      return setErrormessage('Please fill out all fields');
    }
    try {
      setLoading(true);
      setErrormessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formdata)
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrormessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate('/sign-in')
      }
    } catch (error) {
      setErrormessage(error.message);
      setLoading(false);
    }
  }


  return (
    <div className='min-h-screen mt-20 '>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center'>
        {/* LeftSide */}
        <div className='flex-1'>
          <Link to="/" className=' font-bold dark:text-white text-4xl'>
            <span className='px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Ashraful's</span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            This is a blog project for the reader.You can sign up with your email and password
            or with Google
          </p>
        </div>

        {/* rghtSide */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Your username'></Label>
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
                onChange={handleChange} />

            </div>
            <div>
              <Label value='Your Email'></Label>
              <TextInput
                type='email'
                placeholder='myemail@company.com'
                id='email'
                onChange={handleChange} />

            </div>
            <div>
              <Label value='Your Password'></Label>
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
                onChange={handleChange} />

            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>{loading ? (<Spinner size='sm'><span className='pl-3'>Loading...</span></Spinner>) : 'Sign -Up'}</Button>
            <OAuth />
          </form>

          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an Account?</span>
            <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
          </div>
          {
            errorMessage && (<Alert className='mt-5' color='failure'>{errorMessage}</Alert>)
          }
        </div>
      </div>
    </div>
  )
}

export default SignUpPage