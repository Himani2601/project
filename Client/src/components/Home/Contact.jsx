import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({});
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/contact/addcontact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (!res.ok) {
                return console.log(data.message);
            }
            console.log("contact details are added")
        } catch (error) {
            console.log("Internal Server Error")
        }
    }

    return (
        <>
            <section id='about' className="banner relative overflow-hidden bg-cover bg-center flex justify-center items-center m-2">
                <div className="container mx-auto mt-10">
                    <div className="text-gray-800 text-justify md:text-center">
                        <h1 className="text-2xl md:text-4xl font-mono tracking-wider text-center mb-8"> - Contact Us - </h1>
                        <p className="text-lg lg:text-xl mx-8 mb-6 text-justify">
                            We're dedicated to providing exceptional customer service and support. If you have any questions, feedback, or inquiries, don't hesitate to reach out – we're here to help! You can get in touch with us through the contact details below or by filling out the form. Whether you're looking for assistance, have a suggestion, or simply want to say hello, we value your input and strive to address all inquiries promptly and efficiently. Your satisfaction is our top priority, and we're committed to ensuring your experience with us is nothing short of excellent.
                        </p>
                        <div className="flex flex-wrap justify-center items-center text-center m-8 mx-auto md:text-right">
                            <div className="md:w-1/2 w-full mt-5 mx-auto text-center">
                                <form className="w-[90%] md:w-[60%] py-4 px-3 mx-auto flex flex-col text-left gap-3">
                                    <div>
                                        <Label value='Your Name' />
                                        <TextInput
                                            type='text'
                                            placeholder='Full Name'
                                            id='name'
                                            onChange={handleChange}
                                            className='mt-2'
                                        />
                                    </div>
                                    <div>
                                        <Label value='Your Email' />
                                        <TextInput
                                            type='email'
                                            placeholder='Email'
                                            id='email'
                                            onChange={handleChange}
                                            className='mt-2'
                                        />
                                    </div>
                                    <div>
                                        <Label value='Your Contact No' />
                                        <TextInput
                                            type='Number'
                                            placeholder='Phone No.'
                                            id='phone'
                                            onChange={handleChange}
                                            className='mt-2'
                                        />
                                    </div>
                                    <div>
                                        <Label value='Your Message' />
                                        <Textarea
                                            type='text'
                                            placeholder='Message'
                                            id='message'
                                            onChange={handleChange}
                                            className='mt-2'
                                            rows={3}
                                        />
                                    </div>
                                    <Button gradientDuoTone="purpleToPink" outline onClick={handleSubmit}>
                                        Submit
                                    </Button>
                                </form>
                            </div>
                            <div className="md:w-1/2 w-full mt-5 mx-auto text-center">
                                <div className="w-[90%] py-4 px-3 mx-auto text-center font-semibold">
                                    <p className="text-black mb-4 text-justify font-semibold mx-auto">
                                        Have a question or need assistance? Feel free to reach out to us!
                                    </p>
                                    <p className="text-black mb-4 text-justify mx-auto">
                                        You can contact us via email at <a href="mailto:info@foodspace.com" className="text-blue-600 hover:underline">info@foodspace.com</a>. Our team is dedicated to responding promptly to all inquiries and feedback.
                                    </p>
                                    <p className="text-black mb-4 text-justify mx-auto">
                                        Prefer speaking with us directly? Give us a call at <a href="tel:+1234567890" className="text-blue-600 hover:underline">+91-0000000000</a>. Our friendly staff are ready to assist you with any questions or concerns you may have.
                                    </p>
                                    <p className="text-black mb-4 text-justify mx-auto">
                                        If you're in the area, we welcome you to visit our office located at 123 Main Street, City, Country. Our doors are always open, and we'd love to meet you in person!
                                    </p>
                                    <p className="text-black mb-4 text-justify mx-auto">
                                        Whether it's a query about our services, feedback on your experience, or simply to say hello, we're here to listen and assist in any way we can. We value your input and strive to make your experience with Food Space as enjoyable and seamless as possible.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
