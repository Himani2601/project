import React from 'react'
import { useLocation } from 'react-router-dom';

const EditItem = () => {
    const location = useLocation();
    const item = location.state?.item;

    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <div className='md:w-[40%] w-[85%] mb-10'>
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <span className='px-2 py-1 text-black rounded-lg inline-block font-bold text-5xl md:text-4xl text-center mb-5' style={{ fontVariant: 'petite-caps' }}>Add Item</span>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <img src={item.image} alt='' className='w-36 h-24 rounded-lg' />
                        <input
                            type='file'
                            id='imageInput'
                            accept='image/*'
                            style={{ display: 'none' }}
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
    )
}

export default EditItem