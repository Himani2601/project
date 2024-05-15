import React from 'react';

const About = () => {

    return (
        <>
            <section id='about' className="banner relative overflow-hidden bg-cover bg-center flex justify-center items-center m-2">
                <div className="container mx-auto">
                    <div className="text-black text-justify md:text-center">
                        <h1 className="text-2xl md:text-4xl font-mono tracking-wider text-center mb-8"> - About Food Space - </h1>
                        <p className="text-lg lg:text-xl mx-8 mb-4 text-justify ">
                            Welcome to Food Space, your ultimate destination for exploring culinary delights from a variety of sellers, ranging from cloud kitchens to small and large restaurants. Whether you're craving a gourmet meal or a quick snack, Food Space has something for everyone.
                        </p>
                        <p className="text-lg lg:text-xl mx-8 mb-4 text-justify">
                            At Food Space, we believe that good food brings people together. That's why we empower sellers to showcase their unique dishes and set their own prices, ensuring that you, the customer, get the best deals directly from the source. Our platform is designed to connect food enthusiasts with a diverse array of culinary experiences, while also promoting sustainable food practices. By supporting local sellers and encouraging eco-friendly initiatives, we're not just satisfying appetites; we're making a positive impact on the world.
                        </p>
                        <div className="flex flex-wrap justify-center items-center text-center m-8">
                            <div className="md:w-1/3 w-full mt-5">
                                <div className="w-[90%] py-4 bg-black bg-opacity-60 rounded-lg shadow-md px-3">
                                    <p className="text-white mb-2 text-justify">
                                        Food Space offers an extensive selection of authentic and diverse culinary offerings, ranging from traditional dishes to innovative creations. Whether you're craving comfort food, exotic flavors, or healthy options, our platform connects you with a wide array of delicious choices to satisfy your palate.
                                    </p>
                                </div>
                            </div>
                            <div className="md:w-1/3 w-full mt-5">
                                <div className="w-[90%] py-4 bg-black bg-opacity-60 rounded-lg shadow-md px-3">
                                    <p className="text-white mb-2 text-justify">
                                        At Food Space, we believe in fostering a supportive community that benefits both sellers and customers. Our platform encourages interaction and collaboration, allowing sellers to engage with their audience and receive valuable feedback. Customers, in turn, enjoy a personalized experience with access to recommendations, special offers, and a sense of belonging within our vibrant food-loving community.
                                    </p>
                                </div>
                            </div>
                            <div className="md:w-1/3 w-full mt-5">
                                <div className="w-[90%] py-4 bg-black bg-opacity-60 rounded-lg shadow-md px-3">
                                    <p className="text-white mb-2 text-justify">
                                        Sustainability is at the heart of Food Space's mission. We are committed to promoting eco-friendly practices throughout the food industry, from sourcing ingredients to packaging and delivery. By partnering with environmentally-conscious sellers and implementing initiatives to reduce waste and carbon footprint, we strive to make a positive impact on the planet while enjoying delicious food guilt-free.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
