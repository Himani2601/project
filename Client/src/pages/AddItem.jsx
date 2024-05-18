import React, { useContext, useState } from 'react';
import { Button, Dropdown, Label, TextInput, Textarea, Alert, DropdownDivider } from 'flowbite-react';
import { IoIosCloudUpload } from "react-icons/io";
import { menu_list } from '../assets/assets';
import { StoreContext } from '../context/StoreContext';
import { useNavigate } from 'react-router-dom'; // Ensure you have react-router for navigation

const AddItem = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [formData, setFormData] = useState({
        productname: '',
        description: '',
        price: ''
    });
    const [image, setImage] = useState(null);

    const { user } = useContext(StoreContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        if (e.target.id === 'category') {
            setSelectedCategory(e.target.value.split(',').map(cat => cat.trim()));
        } else {
            setFormData({ ...formData, [e.target.id]: e.target.value });
        }
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.productname);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('category', selectedCategory);
        formDataToSend.append('image', image);
        formDataToSend.append('seller', user._id);
        try {
            const res = await fetch(`/api/item/additem/${user._id}`, {
                method: 'POST',
                body: formDataToSend,
            });
            if (res.ok) {
                navigate('/dashboard?tab=ViewItems');
            } else {
                setErrorMessage('Failed to add Item');
            }
        } catch (error) {
            console.log(error);
            setErrorMessage('An error occurred while adding the item');
        }
    };

    const handleDropdownItemClick = (category) => {
        const isSelected = selectedCategory.includes(category);
        if (isSelected) {
            setSelectedCategory(selectedCategory.filter(cat => cat !== category));
        } else {
            setSelectedCategory([...selectedCategory, category]);
        }
    };

    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <div className='md:w-[40%] w-[85%] mb-10'>
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <span className='px-2 py-1 text-black rounded-lg inline-block font-bold text-5xl md:text-4xl text-center mb-5' style={{ fontVariant: 'petite-caps' }}>Add Item</span>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Label value='Upload Image' className='text-md' />
                        <label htmlFor='imageInput'>
                            {image ? (
                                <img src={URL.createObjectURL(image)} alt='' className='w-36 h-24 rounded-lg' />
                            ) : (
                                <IoIosCloudUpload className='w-20 h-16 cursor-pointer' />
                            )}
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
                                value={selectedCategory.join(', ')}
                                id='category'
                                onChange={handleChange}
                                className='mt-2 cursor-pointer md:w-[31.5vw] w-[85vw]'
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
                                        {index !== menu_list.length - 1 && <DropdownDivider />}
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
                    <Button gradientDuoTone="purpleToPink" outline type="submit">
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
