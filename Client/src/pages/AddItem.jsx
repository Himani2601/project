import React, { useContext, useState } from 'react';
import { Button, Dropdown, Label, TextInput, Textarea, Alert, DropdownDivider } from 'flowbite-react';
import { IoIosCloudUpload } from "react-icons/io";
import { menu_list } from '../assets/assets';
import { StoreContext } from '../context/StoreContext';

const AddItem = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [formData, setFormData] = useState({});
    const [image, setImage] = useState(null);

    const { user } = useContext(StoreContext);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async () => {
        setFormData({ ...formData, image: image });
        console.log(formData);
        try {
            const res = fetch(`/api/item/additem/${user._id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                const data = await res.json();
                emptyCart();
                navigate('/dashboard?tab=ViewItems');
            }
            else {
                setErrorMessage('Failed to add Item');
            }
        } catch (error) {
            console.log(error)
        }
    };

    const handleDropdownItemClick = (category) => {
        setSelectedCategory(category);
        setFormData({ ...formData, category: category });
    };

    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <div className='md:w-[30%] w-[85%] mb-10'>
                <form className='flex flex-col gap-4'>
                    <span className='px-2 py-1 text-black rounded-lg inline-block font-bold text-5xl md:text-4xl text-center mb-5' style={{ fontVariant: 'petite-caps' }}>Add Item</span>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Label value='Upload Image' className='text-md' />
                        <label htmlFor='imageInput'>
                            {
                                image ? <img src={image} alt='' className='w-36 h-24 rounded-lg' /> : <IoIosCloudUpload className='w-20 h-16 cursor-pointer' />
                            }
                        </label>
                        <input
                            type='file'
                            id='imageInput'
                            accept='image/*'
                            style={{ display: 'none' }}
                            onChange={handleImageChange}
                        />
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
                                className='mt-2 cursor-pointer md:w-[24vw] w-[85vw]'
                                readOnly
                            />
                        }>
                            <div className="max-h-60 overflow-y-auto">
                                {menu_list.map((menuItem, index) => (
                                    <React.Fragment key={index}>
                                        <Dropdown.Item
                                            className='text-md justify-center'
                                            onClick={() => handleDropdownItemClick(menuItem.menu_name)}>
                                            {menuItem.menu_name}
                                        </Dropdown.Item>
                                        {index !== menu_list.length - 1 && <DropdownDivider />} {/* Adding divider except for the last item */}
                                    </React.Fragment>
                                ))}
                            </div>
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
    );
};

export default AddItem;
