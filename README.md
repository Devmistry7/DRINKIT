# 🍹 DRINKIT

A modern beverage delivery web application inspired by Blinkit, Zepto, and Instamart, built using **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

The goal of this project is to create a fast, responsive, and visually appealing online store where users can browse beverages, select product variants, add items to a shopping cart, and place orders.

---

# 🚀 Project Vision

DRINKIT is designed to become a complete beverage ordering platform featuring:

- Premium UI/UX
- Responsive design
- Category-based browsing
- Product variants (sizes)
- Shopping cart
- Checkout flow
- Search
- Authentication
- Admin dashboard
- Order management

---

# 🛠 Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Lucide React Icons

Future:

- Context API / Redux
- LocalStorage
- MongoDB
- Prisma
- NextAuth
- Razorpay / Stripe

---

# 📁 Current Project Structure

```
src/
│
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Categories.tsx
│   ├── ProductCard.tsx
│   └── Footer.tsx
│
├── context/
│   └── CartContext.tsx
│
├── data/
│   └── products.ts
│
public/
│
└── images/
    ├── absolut-vodka.jpg
    ├── smirnoff.jpg
    ├── black-label.jpg
    ├── red-label.jpg
    ├── bombay-gin.jpg
    ├── bacardi-rum.jpg
    ├── kingfisher.jpg
    ├── heineken.jpg
    ├── red-wine.jpg
    ├── tonic-water.jpg
    ├── cola.jpg
    └── sprite.jpg
```

---

# ✅ Features Completed

## Navigation Bar

- Sticky navigation
- Search bar
- Cart button
- Responsive layout

---

## Hero Section

- Landing section
- Premium branding
- Modern UI

---

## Categories Section

Displays categories like:

- Alcohol
- Juices
- Water
- Energy Drinks
- Mixers
- Snacks

Responsive grid layout.

---

## Product Section

Displays all featured products.

Each card includes:

- Product Image
- Product Name
- Category
- Available Sizes
- Dynamic Pricing
- Add Button

---

## Product Variant Selection

Implemented using React useState.

When user changes size:

- Price updates automatically.
- Selected variant is stored.

Example:

```
750ml → ₹850

↓

1L → ₹1100
```

---

## Footer

Contains:

- Branding
- Copyright
- Company description

---

# 📦 Product Data Structure

Each product follows this format:

```ts
{
    id,
    name,
    category,
    image,
    sizes:[
        {
            label,
            price
        }
    ]
}
```

Example:

```ts
{
  id:1,
  name:"Smirnoff Vodka",
  category:"Vodka",
  image:"/images/smirnoff.jpg",
  sizes:[
      {
          label:"750ml",
          price:850
      },
      {
          label:"1L",
          price:1100
      }
  ]
}
```

---

# 🖼 Images

Currently using static images stored inside:

```
public/images/
```

---

# 🎨 UI Style

Theme:

- Black
- Green Accent
- Rounded Cards
- Smooth Hover Animations
- Responsive Layout
- Modern Premium Look

---

# ⚙ Problems Solved During Development

### Import Path Issues

Initially components couldn't be imported.

Solved by:

- Correct folder structure
- Using proper import paths
- Configuring path aliases

---

### TypeScript Errors

Solved by:

- Defining Product types
- Proper prop typing
- Matching product structure

---

### Next.js Client Component Error

Error:

```
useState cannot be used in Server Components
```

Solution:

Added

```ts
"use client";
```

at the top of components using React hooks.

---

### tsconfig.json Alias

Configured alias:

```json
"baseUrl": ".",

"paths": {
   "@/*": ["src/*"]
}
```

Now imports can be written as:

```ts
import Navbar from "@/components/Navbar";
```

instead of long relative paths.

---

# 🚧 Current Status

Completed:

- Navbar
- Hero
- Categories
- Product Cards
- Dynamic Price Selection
- Footer
- Product Data
- Images
- Responsive Layout

Overall Progress:

Approximately **35–40%** complete.

---

# 📅 Upcoming Features

## Phase 1

- Shopping Cart
- Context API
- Add to Cart
- Remove Item
- Quantity Controls
- Cart Sidebar

---

## Phase 2

- Product Details Page
- Category Filtering
- Search Functionality

---

## Phase 3

- Checkout Page
- Delivery Address
- Order Summary

---

## Phase 4

- Authentication
- Login
- Signup
- User Profile

---

## Phase 5

- Backend
- Database
- API Routes
- Authentication
- Orders

---

## Phase 6

- Payment Gateway
- Razorpay
- Stripe

---

## Phase 7

- Admin Dashboard

Admin Features:

- Add Products
- Edit Products
- Delete Products
- View Orders
- Manage Inventory

---

# 🎯 End Goal

A production-ready beverage delivery platform featuring:

- Beautiful modern UI
- Mobile responsiveness
- Secure authentication
- Real shopping cart
- Checkout system
- Online payments
- Order tracking
- Admin dashboard
- Scalable architecture

---

# 👨‍💻 Development Notes

Current focus is on building the frontend architecture first, ensuring clean component structure, reusable UI elements, and responsive design before integrating backend services.

The project follows a modular approach, making it easier to extend with additional features such as authentication, payment processing, and order management.

---

# 📌 Next Milestone

Implement a fully functional Shopping Cart using React Context API.

This includes:

- Global cart state
- Add to cart
- Remove from cart
- Update quantities
- Cart badge in navbar
- LocalStorage persistence
- Cart summary

After completing the cart, the project will move on to product filtering, search functionality, checkout flow, and backend integration.

---

**Author:** Dev Mistry  
**Project Name:** DRINKIT  
**Status:** 🚧 In Development