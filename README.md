# Vibeosys-assignment
React Inventory Management System


# React Inventory Management System

A simple inventory management system built with **React JS** and **Tailwind CSS**, designed as part of a Junior React Developer assignment.

## Features

- **Product Management**
  - Add, edit, and delete products
  - Fields: Product Name, Unit of Measure, Category, Expiry Date
  - Form validation for required fields

- **Raw Material Management**
  - Add, edit, and delete materials for each product
  - Automatic calculation of total cost, tax (10%), and grand total
  - Material list displayed dynamically

- **UI/UX**
  - Clean and responsive layout using Tailwind CSS
  - Intuitive form layout with labels and error messages
  - Back button for easy navigation

- **State Management**
  - Managed using React functional components and useState hooks
  - Managed using **Redux Toolkit** (productsSlice) for centralized state
  - Modular components for reusability and scalability

## Technologies Used

- React JS (functional components)
- Redux Toolkit for state management
- Tailwind CSS for styling
- React Router for navigation
- JavaScript (ES6+)
- uuid for unique IDs



## How to Run Locally

1. Clone the repo:
git clone <your-repo-url>
cd <repo-folder>

2. Install dependencies:
npm install

3. Run the development server:
npm run dev

4. Open the app in your browser:
http://localhost:5173

## Notes

Form validation ensures no empty product or material is submitted.
Delete functionality is available for both products and raw materials.
The project is designed to be easily extendable to integrate with APIs.

## Author

Uday Mohan More  
https://github.com/uday-hub/  
https://www.linkedin.com/in/uday-more99
