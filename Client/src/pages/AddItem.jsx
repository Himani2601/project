import { Button, Dropdown, Label, TextInput, Textarea } from 'flowbite-react';
import React, { useState } from 'react'
import { IoIosCloudUpload } from "react-icons/io";

const AddItem = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleChange = () => { }

    const handleSubmit = () => { }

    const handleDropdownItemClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className='min-h-screen mt-20 flex flex-col justify-center items-center mb-20'>
            <div className='md:w-[30%] w-[85%] mb-10'>
                <form className='flex flex-col gap-4'>
                    <span className='px-2 py-1 text-black rounded-lg inline-block font-bold text-5xl md:text-4xl text-center mb-5' style={{ fontVariant: 'petite-caps' }}>Add Item</span>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Label value='Upload Image' className='text-md' />
                        <IoIosCloudUpload className='w-20 h-16 cursor-pointer' />
                    </div>
                    <div className='gap-2'>
                        <Label value='Product Name' />
                        <TextInput
                            type='text'
                            placeholder='e.g Dal Makhani'
                            id='productname'
                            onChange={handleChange}
                            className='mt-2'
                        />
                    </div>
                    <div>
                        <Label value='Product Description' />
                        <Textarea
                            type='text'
                            placeholder='Description'
                            id='description'
                            onChange={handleChange}
                            className='mt-2'
                        />
                    </div>
                    <div className='gap-2'>
                        <Label value='Product Category' />
                        <Dropdown arrowIcon={false} inline label={
                            <TextInput
                                type='text'
                                placeholder='Select Category'
                                value={selectedCategory || ''}
                                id='category'
                                onChange={handleChange}
                                className='mt-2 cursor-pointer md:w-[29.5vw] w-[85vw]'
                                readOnly
                            />
                        }>
                            <Dropdown.Item className='text-md justify-center' onClick={() => handleDropdownItemClick('Dashboard')}>
                                Dashboard
                            </Dropdown.Item>
                            <Dropdown.Item className='text-md justify-center' onClick={() => handleDropdownItemClick('Settings')}>
                                Settings
                            </Dropdown.Item>
                            <Dropdown.Item className='text-md justify-center' onClick={() => handleDropdownItemClick('Earnings')}>
                                Earnings
                            </Dropdown.Item>
                            <Dropdown.Item className='text-md justify-center' onClick={() => handleDropdownItemClick('Sign out')}>
                                Sign out
                            </Dropdown.Item>
                        </Dropdown>
                    </div>
                    <div className='gap-2'>
                        <Label value='Product Price' />
                        <TextInput
                            type='number'
                            placeholder='Price'
                            id='price'
                            onChange={handleChange}
                            className='mt-2'
                        />
                    </div>
                    <Button gradientDuoTone="purpleToPink" outline onClick={handleSubmit}>
                        Add Item
                    </Button>
                </form>
                {errorMessage && (
                    <Alert className='mt-5 self-center' severity="error">
                        {errorMessage}
                    </Alert>)
                }
            </div>
        </div>
    )
}

export default AddItem;
