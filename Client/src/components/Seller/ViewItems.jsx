import React, { useContext, useEffect, useState } from 'react';
import { CiMenuKebab } from "react-icons/ci";
import { StoreContext } from '../../context/StoreContext';
import { Button, Dropdown, DropdownDivider, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom'

const ViewItems = () => {
    const { user } = useContext(StoreContext);
    const [status, setStatus] = useState('In Stock');
    const [sellingItems, setSellingItems] = useState([]);
    const [deleteShowModal, setDeleteShowModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null); // Track the item to delete
    const navigate = useNavigate();

    const toggleStatus = () => {
        setStatus((prevStatus) => (prevStatus === 'In Stock' ? 'Out of Stock' : 'In Stock'));
    };

    const handleEdit = (item) => {
        navigate(`/edititem`, { state: { item } });
    };

    const handleDelete = async () => {
        setDeleteShowModal(false);
        try {
            const res = await fetch(`/api/item/deleteitem/${itemToDelete}`, {
                method: 'DELETE',
            });
            if (!res.ok) {
                console.log("Can't delete item");
            } else {
                setSellingItems(sellingItems.filter(item => item._id !== itemToDelete));
            }
        } catch (error) {
            console.log(error);
        }
    };

    const openDeleteModal = (itemId) => {
        setItemToDelete(itemId);
        setDeleteShowModal(true);
    };

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const res = await fetch(`/api/item/getitem/${user._id}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                });
                if (res.ok) {
                    const data = await res.json();
                    setSellingItems(data.items);
                } else {
                    console.error('Failed to fetch selling items');
                }
            } catch (error) {
                console.error('Error fetching selling items:', error);
            }
        };

        fetchItems();
    }, [user]);

    return (
        <div className="flex flex-wrap">
            {sellingItems.map((item) => (
                <div key={item._id} className="lg:w-1/3 md:w-1/2 sm:w-full w-full md:p-5 p-8">
                    <div className="h-full border-2 border-gray-300 shadow-md border-opacity-60 rounded-lg overflow-hidden transition duration-300 transform hover:scale-105">
                        <div className='relative'>
                            <img
                                className="lg:h-48 md:h-36 w-full object-cover object-center transition duration-300 transform hover:scale-105"
                                src={'/api/images/' + item.image}
                                alt={item.name}
                            />
                            <div className='absolute w-7 h-7 cursor-pointer bg-white rounded-full right-2 top-2 p-1 flex items-center justify-center'>
                                <Dropdown
                                    arrowIcon={false}
                                    inline
                                    label={
                                        <CiMenuKebab />
                                    }
                                    className='w-32'
                                >
                                    <Dropdown.Header className='text-center font-semibold' onClick={toggleStatus}>
                                        {status}
                                    </Dropdown.Header>
                                    <DropdownDivider />
                                    <Dropdown.Item className='text-xs font-semibold justify-center' onClick={() => handleEdit(item)}>
                                        Edit
                                    </Dropdown.Item>
                                    <Dropdown.Item className='text-xs font-semibold text-red-700 justify-center' onClick={() => openDeleteModal(item._id)}>
                                        Delete
                                    </Dropdown.Item>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="p-6">
                            <h2 className="tracking-widest text-lg title-font font-medium text-gray-500 mb-1">{item.name}</h2>
                            <h1 className="title-font text-sm font-medium text-gray-900 mb-3 text-justify">{item.description}</h1>
                            <p className="mb-1 font-bold text-red-500">₹{item.price}</p>
                        </div>
                    </div>
                </div>
            ))}
            <Modal show={deleteShowModal} onClose={() => setDeleteShowModal(false)} popup size='md'>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className='h-14 w-14 text-gray-500 mb-4 mx-auto' />
                        <h3 className='mb-5 text-lg text-gray-700'>Are you sure you want to delete this item?</h3>
                        <div className='flex justify-center gap-5'>
                            <Button color='failure' onClick={handleDelete}>Yes, I'm sure</Button>
                            <Button color='gray' onClick={() => setDeleteShowModal(false)}>No, cancel</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ViewItems;
