# Food Space

Food Space is a web application similar to platforms like Zomato and Swiggy. It aims to provide a platform for users to browse and order food from various sellers while maintaining transparency and convenience.

## Features

- **User Authentication**: Users can sign up, sign in, and sign out securely.
- **Menu Viewing**: Users can browse through a variety of food items listed by sellers.
- **Order Placement**: Users can add food items to their cart and place orders.
- **Seller Dashboard**: Sellers can manage their food listings and view orders received.
- **Transparent Pricing**: Sellers receive payments directly to their accounts with 0% platform fees.
- **Responsive Design**: The web application is optimized for use on desktop and mobile devices.

## Technologies Used

- **Frontend**: React.js, Flowbite React UI library
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Routing**: React Router
- **State Management**: React Context API
- **Styling**: CSS with Tailwind CSS
- **Deployment**: Heroku for backend, Netlify for frontend

## Setup

1. Clone the repository: `git clone https://github.com/yourusername/food-space.git`
2. Navigate to the project directory: `cd food-space`
3. Install dependencies for both frontend and backend:
   ```
   cd client
   npm install
   cd ../server
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the `server` directory and define variables like `PORT`, `MONGO_URI`, `JWT_SECRET`, etc.
5. Start the development server:
   ```
   cd ../client
   npm start
   cd ../server
   npm start
   ```

## Contributing

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md).

---

Feel free to customize and expand upon this template to include any additional information specific to your project. Make sure to replace placeholder URLs and usernames with your actual project details.
