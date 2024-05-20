import { Alert, Button, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    const [formData, setFormData] = useState({ email: '', npassword: '', cpassword: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.npassword || !formData.cpassword) {
            return setErrorMessage('Please fill all the fields');
        }
        if (formData.npassword !== formData.cpassword) {
            return setErrorMessage('Password and Confirm Password do not match');
        }
        try {
            setErrorMessage(null);
            const res = await fetch('/api/user/forgetpassword', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const errorData = await res.json();
                if (errorData.message) {
                    throw new Error(errorData.message);
                } else {
                    throw new Error('An error occurred during the password reset process.');
                }
            }

            const data = await res.json();
            if (data.success === false) {
                return setErrorMessage('Check if the email is correct.');
            }

            navigate('/signin');
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
            <div className='md:w-[30%] w-[85%]'>
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <span className='px-2 py-1 text-black rounded-lg inline-block font-bold text-5xl md:text-4xl text-center mb-5' style={{ fontVariant: 'petite-caps' }}>Forget Password Page</span>
                    <div>
                        <Label value='Your email' />
                        <TextInput
                            type='email'
                            placeholder='name@company.com'
                            id='email'
                            value={formData.email}
                            onChange={handleChange}
                            className='mt-2'
                        />
                    </div>
                    <div className='gap-2'>
                        <Label value='New Password' />
                        <TextInput
                            type='password'
                            placeholder='********'
                            id='npassword'
                            value={formData.npassword}
                            onChange={handleChange}
                            className='mt-2'
                        />
                    </div>
                    <div className='gap-2'>
                        <Label value='Confirm Password' />
                        <TextInput
                            type='password'
                            placeholder='********'
                            id='cpassword'
                            value={formData.cpassword}
                            onChange={handleChange}
                            className='mt-2'
                        />
                    </div>
                    <Button gradientDuoTone="purpleToPink" outline type="submit">
                        Forget Password
                    </Button>
                </form>
                <div className='flex gap-2 text-sm font-mono font-semibold mt-5 justify-center'>
                    <span>Remember Credentials?</span>
                    <Link to='/signin' className='text-blue-500'>
                        Sign In
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
};

export default ForgetPassword;
