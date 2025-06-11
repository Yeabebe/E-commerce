# 🛍️ React Shopping Cart App

A simple and modern shopping cart application built with **React**. Users can browse products, add them to a cart, and view the total price. The cart supports item quantity management and removal.

---

## 🚀 Features

- 🧾 Product listing with price and image
- 🛒 Add items to cart with quantity tracking
- 🔄 Remove individual items from the cart
- 💰 Dynamic total price calculation
- ✅ Clean, minimal UI

---

## 📂 Folder Structure

react-shopping-cart/
│
├── public/
│ └── product1.jpg, product2.jpg, ...
│
├── src/
│ ├── App.jsx
│ ├── ProductList.jsx
│ ├── Cart.jsx
│ ├── App.css
│ └── index.js
│
├── package.json
└── README.md

yaml
Copy
Edit

---

## ⚙️ Getting Started

### 1. Clone the Repository

``bash
git clone https://github.com/your-username/react-shopping-cart.git
cd react-shopping-cart
2. Install Dependencies
Make sure you have Node.js installed.

bash
Copy
Edit
npm install
3. Start the Development Server
bash
Copy
Edit
npm start
Open your browser and visit http://localhost:3000.

🧪 Example Products
You can add your product images to the public folder and update the products array in App.jsx:

js
Copy
Edit
const products = [
  { id: 1, name: 'Product 1', price: 19.99, image: 'product1.jpg' },
  { id: 2, name: 'Product 2', price: 29.99, image: 'product2.jpg' },
];
✨ Technologies Used
React (with Hooks)

JavaScript (ES6+)

CSS Modules (basic)

Node & npm

📸 Screenshot

🙌 Contribution
Feel free to fork this project and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

📃 License
MIT License © 2025 made by YeAb
