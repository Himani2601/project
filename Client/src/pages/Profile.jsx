import React, { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import { Avatar, Button, Modal, TextInput } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

const Profile = () => {
    const { user, updateUser, deleteUser } = useContext(StoreContext);
    const [formData, setFormData] = useState({});
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(formData);
    };

    const handleDeleteUser = () => {
        deleteUser();
    };

    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <div className='md:w-[40%] w-[85%] mb-10'>
                <h1 className='my-10 md:my-5 text-center font-semibold text-3xl'>{`Welcome, ${user.name}`}</h1>
                <h1 className='my-7 text-center text-2xl font-semibold' style={{ fontVariant: 'petite-caps' }}>Profile</h1>
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
                        <img src={user.profilePicture} alt='user' className='rounded-full w-full h-full object-cover border-8 border-[lightgray]' />
                    </div>
                    <TextInput type='text' id='name' placeholder='Name' defaultValue={user.name} onChange={handleChange} className='w-full' />
                    <TextInput type='email' id='email' placeholder='Email' defaultValue={user.email} onChange={handleChange} className='w-full' />
                    <TextInput type='text' id='username' placeholder='Username' defaultValue={user.username} onChange={handleChange} className='w-full' />
                    <TextInput type='text' id='mobileNo' placeholder='Mobile No' defaultValue={user.mobileNo || ''} onChange={handleChange} className='w-full' />
                    <TextInput type='password' id='password' placeholder='New Password' defaultValue={user.password} onChange={handleChange} className='w-full' />
                    <Button gradientDuoTone="pinkToOrange" outline type='submit' className='w-full'>
                        Update
                    </Button>
                </form>

                <Modal show={showDeleteModal} onClose={() => setShowDeleteModal(false)} popup size='md'>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="text-center">
                            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-500 mb-4 mx-auto' />
                            <h3 className='mb-5 text-lg text-gray-700'> Are you sure you want to delete your account?</h3>
                            <div className='flex justify-center gap-5'>
                                <Button color='failure' onClick={handleDeleteUser}>Yes, I'm sure</Button>
                                <Button color='gray' onClick={() => setShowDeleteModal(false)}>No, cancel</Button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
};

export default Profile;
