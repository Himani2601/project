import React, { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import { Button, Modal, TextInput } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const { user, updateUser } = useContext(StoreContext);
    const [formData, setFormData] = useState({
        npassword: ''
    });
    const [deleteShowModal, setdeleteShowModal] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleProfileUpdate();
    };

    const handleProfileUpdate = async () => {
        console.log(formData);
        try {
            const res = await fetch(`/api/user/update/${user._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                const data = await res.json();
                updateUser(data);
            } else {
                console.error('Technical Error');
            }
        } catch (error) {
            console.error('Network Error:', error);
        }
    }

    const handleDeleteUser = async () => {
        setdeleteShowModal(false);
        try {
            const res = await fetch(`/api/user/deleteprofile/${user._id}`, {
                method: 'DELETE',
            });
            const data = await res.json();
            if (!res.ok) {
                console.log("can't delete profile")
            } else {
                localStorage.removeItem('user');
                localStorage.removeItem('token');
                updateUser(null);
                navigate('/signin');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <div className='md:w-[40%] w-[85%]'>
                <h1 className='my-10 mt-20 md:my-5 text-center font-semibold text-3xl'>{`Welcome, ${user.name}`}</h1>
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <div className="w-28 h-28 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
                        <img src={user.profilePicture} alt='user' className='rounded-full w-full h-full object-cover border-8 border-[lightgray]' />
                    </div>
                    <TextInput type='text' id='name' placeholder='Name' defaultValue={user.name} onChange={handleChange} className='w-full' />
                    <TextInput type='email' id='email' placeholder='Email' defaultValue={user.email} onChange={handleChange} className='w-full' />
                    <TextInput type='text' id='location' placeholder='Location' defaultValue={user.location} onChange={handleChange} className='w-full' />
                    <TextInput type='text' id='username' placeholder='Username' defaultValue={user.username} onChange={handleChange} className='w-full' />
                    <TextInput type='text' id='mobileNo' placeholder='Mobile No' defaultValue={user.mobileNo} onChange={handleChange} className='w-full' />
                    <TextInput type='password' id='npassword' placeholder='New Password' onChange={handleChange} className='w-full' />
                    <Button gradientDuoTone="pinkToOrange" outline type='submit' className='w-full'>
                        Update
                    </Button>
                    <div className='text-red-600 flex justify-center mt-4'>
                        <span onClick={() => setdeleteShowModal(true)} className='cursor-pointer'>Delete Account</span>
                    </div>
                </form>

                <Modal show={deleteShowModal} onClose={() => setdeleteShowModal(false)} popup size='md'>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="text-center">
                            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-500 mb-4 mx-auto' />
                            <h3 className='mb-5 text-lg text-gray-700'> Are you sure you want to delete your account?</h3>
                            <div className='flex justify-center gap-5'>
                                <Button color='failure' onClick={handleDeleteUser}>Yes, I'm sure</Button>
                                <Button color='gray' onClick={() => setdeleteShowModal(false)}>No, cancel</Button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
};

export default Profile;
