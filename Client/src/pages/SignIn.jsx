import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import { Alert, Button, Label, TextInput } from 'flowbite-react';

const SignIn = () => {
    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const { login } = useContext(StoreContext); // Use login function from context

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.username || !formData.password) {
            return setErrorMessage('Please fill all the fields');
        }
        try {
            setErrorMessage(null);
            const res = await fetch('/api/user/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                // If response is not OK, try to parse error message if available
                const errorData = await res.json();
                if (errorData.message) {
                    throw new Error(errorData.message);
                } else {
                    throw new Error('An error occurred during sign-in.');
                }
            }

            const data = await res.json();
            if (data.success === false) {
                return setErrorMessage('Check Credentials');
            }

            login(data); // Set user details in context upon successful login
            navigate('/menu');
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div className='min-h-screen mt-10 flex items-center justify-center md:mx-8 md:flex-row flex-col md:gap-10 gap-3'>
            <div className='md:w-[40%] text-center hidden md:block'>
                <Link to='/' className='font-bold text-5xl md:text-8xl text-center ' style={{ fontVariant: 'unicase' }}>
                    <div className='px-2 py-3 bg-gradient-to-r from-orange-500 via-sky-500 to-emerald-500 rounded-lg text-transparent bg-clip-text'>
                        Food Space
                    </div>
                </Link>
                <h3 className="text-lg font-semibold m-4 border-b border-gray-400 pb-2 text-gray-800">
                    We deliver not to "Escape Hunger", but for Flavor not to "Escape Us".
                </h3>
            </div>
            <div className='md:w-[30%] w-[85%] mb-10'>
                <form className='flex flex-col gap-4'>
                    <span className='px-2 py-1 text-black rounded-lg inline-block font-bold text-5xl md:text-4xl text-center mb-5' style={{ fontVariant: 'petite-caps' }}>SignIn Page</span>
                    <div>
                        <Label value='Your email' />
                        <TextInput
                            type='text'
                            placeholder='username'
                            id='username'
                            onChange={handleChange}
                            className='mt-2'
                        />
                    </div>
                    <div className='gap-2'>
                        <Label value='Your Password' />
                        <TextInput
                            type='password'
                            placeholder='********'
                            id='password'
                            onChange={handleChange}
                            className='mt-2'
                        />
                    </div>
                    <Button gradientDuoTone="purpleToPink" outline onClick={handleSubmit}>
                        Sign In
                    </Button>
                </form>
                <div className='flex gap-2 text-sm font-mono font-semibold mt-5 justify-center'>
                    <span>Don't Have an account?</span>
                    <Link to='/signup' className='text-blue-500'>
                        Sign Up
                    </Link>
                </div>
                <div className='flex gap-2 text-sm font-mono font-semibold mt-5 justify-center'>
                    <span>Forget Password?</span>
                    <Link to='/reset' className='text-blue-500'>
                        Reset
                    </Link>
                </div>
                {errorMessage && (
                    <Alert className="mt-4" color="red">
                        {errorMessage}
                    </Alert>
                )}
            </div>
        </div>
    );
}

export default SignIn;
