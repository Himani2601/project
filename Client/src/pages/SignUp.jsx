import { Alert, Button, Label, Spinner, TextInput, ToggleSwitch } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState('');

    const [formData, setFormData] = useState({
        isSeller: false,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };

    const handleToggle = () => {
        setFormData({ ...formData, isSeller: !formData.isSeller });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        if (!formData.username || !formData.email || !formData.password || !formData.name || !formData.location) {
            return setErrorMessage('Please fill out all fields..');
        }
        try {
            setErrorMessage(null);
            const res = await fetch('/api/user/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success === false) {
                return setErrorMessage(data.message);
            }
            if (res.ok) {
                navigate('/signin');
                // Clear the error message after 3 seconds
                setTimeout(() => {
                    setErrorMessage('');
                }, 3000);
            }
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div className='min-h-screen mt-20 flex items-center justify-center md:mx-8 md:flex-row flex-col md:gap-10 gap-3'>
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
                    <span className='px-2 py-1 text-black rounded-lg inline-block font-bold text-5xl md:text-4xl text-center mb-5' style={{ fontVariant: 'petite-caps' }}>SignUp Page</span>
                    <div className='gap-2'>
                        <Label value='Full Name' />
                        <TextInput
                            type='text'
                            placeholder='Xyz Abc'
                            id='name'
                            onChange={handleChange}
                            className='mt-2'
                        />
                    </div>
                    <div>
                        <Label value='Email' />
                        <TextInput
                            type='email'
                            placeholder='name@company.com'
                            id='email'
                            onChange={handleChange}
                            className='mt-2'
                        />
                    </div>
                    <div>
                        <Label value='Location' />
                        <TextInput
                            type='text'
                            placeholder='e.g. Pune'
                            id='location'
                            onChange={handleChange}
                            className='mt-2'
                        />
                    </div>
                    <div className='gap-2'>
                        <Label value='Username' />
                        <TextInput
                            type='text'
                            placeholder='xyz_abc'
                            id='username'
                            onChange={handleChange}
                            className='mt-2'
                        />
                    </div>
                    <div className='gap-2'>
                        <Label value='Password' />
                        <TextInput
                            type='password'
                            placeholder='********'
                            id='password'
                            onChange={handleChange}
                            className='mt-2'
                        />
                    </div>
                    <ToggleSwitch
                        checked={formData && formData.isSeller}
                        label="Toggle to Register as a Seller"
                        onChange={handleToggle}
                        className='my-2'
                    />
                    <Button gradientDuoTone="purpleToPink" outline onClick={handleSubmit}>
                        Sign Up
                    </Button>
                </form>
                <div className='flex gap-2 text-sm font-mono font-semibold mt-5 justify-center'>
                    <span>Have an account?</span>
                    <Link to='/signin' className='text-blue-500'>
                        Sign In
                    </Link>
                </div>
                {errorMessage && (
                    <Alert className='mt-5 self-center' severity="error">
                        {errorMessage}
                    </Alert>)
                }
            </div>
        </div>
    );
}

export default SignUp;
