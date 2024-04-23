import { Alert, Button, Label, Spinner, TextInput, ToggleSwitch } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import OAuth from '../components/OAuth';

const SignUp = () => {
    const [formData, setFormData] = useState({
        isseller: false, // Initialize isseller to false
    });

    const [isseller, setIsSeller] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };

    const handleToggle = () => {
        setFormData({ ...formData, isseller: !formData.isseller });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className='min-h-screen mt-10 flex items-center justify-center md:mx-8 md:flex-row flex-col md:gap-10 gap-3'>
            <div className='md:w-[40%] text-center hidden md:block'>
                <Link to='/' className='font-bold text-5xl md:text-6xl' style={{ fontVariant: 'unicase' }}>
                    <span className='px-2 py-1 bg-gradient-to-r from-orange-500 from-30% via-sky-500 via-50% to-emerald-500 to-90% rounded-lg inline-block text-transparent bg-clip-text'>Food Space</span>
                </Link>
                <h3 className="text-lg font-semibold m-4 border-b border-gray-400 pb-2 text-black">
                    We deliver not to "Escape Hunger", but for Flavor not to "Escape Us".
                </h3>
            </div>
            <div className='md:w-[30%] w-[85%]'>
                <form className='flex flex-col gap-4'>
                    <span className='px-2 py-1 text-black rounded-lg inline-block font-bold text-5xl md:text-4xl text-center mb-5' style={{ fontVariant: 'petite-caps' }}>SignUp Page</span>
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
                        <Label value='Your Password' />
                        <TextInput
                            type='password'
                            placeholder='********'
                            id='password'
                            onChange={handleChange}
                            className='mt-2'
                        />
                    </div>
                    <div className='gap-2'>
                        <Label value='Your Full Name' />
                        <TextInput
                            type='text'
                            placeholder='Xyz Abc'
                            id='name'
                            onChange={handleChange}
                            className='mt-2'
                        />
                    </div>
                    <div className='gap-2'>
                        <Label value='Your Username' />
                        <TextInput
                            type='text'
                            placeholder='xyz_abc'
                            id='username'
                            onChange={handleChange}
                            className='mt-2'
                        />
                    </div>
                    <ToggleSwitch
                        checked={formData.isseller}
                        label="Toggle to Register as a Seller"
                        onChange={handleToggle}
                        className='my-2'
                    />
                    <Button gradientDuoTone="purpleToPink" outline onClick={handleSubmit}>
                        Sign In
                    </Button>
                </form>
                <div className='flex gap-2 text-sm font-mono font-semibold mt-5 justify-center'>
                    <span>Have an account?</span>
                    <Link to='/signin' className='text-blue-500'>
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SignUp;