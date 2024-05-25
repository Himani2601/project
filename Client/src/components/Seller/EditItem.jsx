import React, { useContext, useState, useEffect } from 'react';
import { menu_list } from '../../assets/assets';
import { Alert, Button, Dropdown, DropdownDivider, Label, TextInput, Textarea } from 'flowbite-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const EditItem = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [formData, setFormData] = useState({});
    const { user } = useContext(StoreContext);
    const location = useLocation();
    const item = location.state?.item;
    const navigate = useNavigate();

    useEffect(() => {
        if (item) {
            setFormData({
                productname: item.name,
                description: item.description,
                price: item.price,
            });
            setSelectedCategory(item.category || []);
        }
    }, [item]);

    const handleChange = (e) => {
        if (e.target.id === 'category') {
            setSelectedCategory(e.target.value.split(',').map(cat => cat.trim()));
        } else {
            setFormData({ ...formData, [e.target.id]: e.target.value });
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = {
            name: formData.productname,
            description: formData.description,
            price: formData.price,
            category: selectedCategory,
            itemId: item._id,
        };
        try {
            const res = await fetch(`/api/item/updateitem/${user._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataToSend),
            });
            if (res.ok) {
                navigate('/dashboard?tab=ViewItems');
            } else {
                setErrorMessage('Something went wrong, please try again later');
            }
        } catch (error) {
            console.log(error);
            setErrorMessage('An error occurred, please try again later');
        }
    };

    return (
        <div className='min-h-screen flex flex-col justify-center items-center sm:mt-20'>
            <div className='md:w-[30%] w-[85%] mb-10'>
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <span className='px-2 py-1 text-black rounded-lg inline-block font-bold text-5xl md:text-4xl text-center mb-5' style={{ fontVariant: 'petite-caps' }}>Update Item</span>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <img src={'/api/images/' + item.image} alt='' className='w-52 h-36 rounded-lg' />
                    </div>
                    <div className='gap-2'>
                        <Label value='Product Name' />
                        <TextInput
                            type='text'
                            placeholder='e.g Dal Makhani'
                            id='productname'
                            value={formData.productname}
                            onChange={handleChange}
                            className='mt-2'
                        />
                    </div>
                    <div>
                        <Label value='Product Description' />
                        <Textarea
                            placeholder='Description'
                            id='description'
                            value={formData.description}
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
                                className='mt-2 cursor-pointer md:w-[29.5vw] w-[85vw]'
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
                            value={formData.price}
                            onChange={handleChange}
                            className='mt-2'
                        />
                    </div>
                    <Button gradientDuoTone="purpleToPink" outline type="submit">
                        Update Item
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

export default EditItem;
