import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (!formData.email || !formData.password) {
    //         return dispatch(signInFailure('Please fill all the fields'));
    //     }
    //     try {
    //         dispatch(signInStart());
    //         const res = await fetch('/api/auth/signin', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(formData),
    //         });
    //         const data = await res.json();
    //         if (data.success === false) {
    //             dispatch(signInFailure(data.message));
    //         }

    //         if (res.ok) {
    //             dispatch(signInSuccess(data));
    //             navigate('/');
    //         }
    //     } catch (error) {
    //         dispatch(signInFailure(error.message));
    //     }
    // };
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
                <form className='flex flex-col gap-4'>
                    <span className='px-2 py-1 text-black rounded-lg inline-block font-bold text-5xl md:text-4xl text-center mb-5' style={{ fontVariant: 'petite-caps' }}>Forget Password Page</span>
                    <div>
                        <Label value='Your email' />
                        <TextInput
                            type='email'
                            placeholder='name@company.com'
                            id='email'
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
                            onChange={handleChange}
                            className='mt-2'
                        />
                    </div>
                    <Button gradientDuoTone="purpleToPink" outline>
                        Forget Password
                    </Button>
                </form>
                <div className='flex gap-2 text-sm font-mono font-semibold mt-5 justify-center'>
                    <span>Remember Credentials?</span>
                    <Link to='/signin' className='text-blue-500'>
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ForgetPassword;