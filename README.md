<div align="center">

# 🥤 DRINKIT

### A modern beverage storefront built for speed, simplicity & a premium shopping experience.

**Next.js • React • TypeScript • Tailwind CSS**

<br />

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

<br />

**Browse → Select → Cart → Checkout → Review → Confirm**

<br />

> DRINKIT is a frontend demonstration project.  
> Checkout and order confirmation are simulated — no real payment or delivery order is created.

</div>

---

## ✦ About DRINKIT

**DRINKIT** is a polished e-commerce frontend built using the Next.js App Router.

The project focuses on combining a clean shopping experience with modern frontend architecture — including reusable components, global cart state, product variants, responsive layouts, form validation and a complete multi-step demo checkout experience.

Rather than being only a static storefront, DRINKIT demonstrates an end-to-end frontend shopping journey.

---

# ✨ Highlights

| | Feature | Description |
|---|---|---|
| 🛍️ | **Product Catalogue** | Responsive product grid with variants and dynamic pricing |
| 🛒 | **Smart Cart** | Add, remove and update quantities globally |
| 📦 | **Cart Drawer** | Interactive cart with subtotal and quantity controls |
| 📱 | **Responsive UI** | Designed for desktop, tablet and mobile |
| 🧾 | **Checkout Flow** | Delivery form, validation and order summary |
| 👀 | **Order Review** | Review customer and cart information before confirmation |
| 🎉 | **Confirmation** | Complete demo confirmation experience |
| 🎨 | **Modern UI** | Dark interface with green accents and subtle interactions |
| ⚡ | **Next.js App Router** | Modern routing and project architecture |
| 🛡️ | **TypeScript** | Strong typing throughout the application |

---

# 🛍️ Storefront Experience

The homepage is designed as a complete modern storefront and includes:

- Sticky glass-style navigation
- Responsive search interface
- Premium hero section
- Product categories
- Featured products
- Promotional deals
- Feature highlights
- Responsive footer
- Smooth section navigation

The visual language uses a **black + green** identity with subtle borders, rounded surfaces, hover interactions and responsive layouts.

---

# 🥤 Product System

Each product can contain multiple variants.

Users can choose a size before adding the product to their cart.

```text
Product
   │
   ├── Image
   ├── Name
   ├── Category
   │
   └── Sizes
       ├── Variant A → Price
       └── Variant B → Price
```

Selecting another size automatically updates the displayed price.

### Example Data Structure

```ts
{
  id: 1,
  name: "Product Name",
  category: "Beverage",
  image: "/images/product.jpg",

  sizes: [
    {
      label: "Small",
      price: 99
    },
    {
      label: "Large",
      price: 149
    }
  ],

  popular: true
}
```

Keeping product information separate from UI components makes the catalogue easier to maintain and extend.

---

# 🛒 Shopping Cart

DRINKIT includes a global shopping-cart system built with **React Context API**.

### Cart functionality

- Add products
- Add different product variants
- Increase quantity
- Decrease quantity
- Automatically remove zero-quantity items
- Remove items manually
- Calculate subtotal
- Calculate total quantity
- Update Navbar cart badge
- Open interactive cart drawer

Products are identified using both:

```text
Product ID + Selected Size
```

This allows two different sizes of the same product to exist independently in the cart.

---

## Cart Data Model

```ts
type CartItem = {
  id: number;
  name: string;
  image: string;
  size: string;
  price: number;
  quantity: number;
};
```

### Cart Context

```ts
addToCart();

increaseQuantity();

decreaseQuantity();

removeFromCart();

clearCart();
```

Derived values:

```ts
totalItems;
subtotal;
```

---

# 📦 Cart Drawer

The cart drawer provides an interactive shopping-cart experience without requiring the user to leave the storefront.

It includes:

- Selected products
- Product variants
- Quantity controls
- Individual item totals
- Remove controls
- Subtotal calculation
- Checkout navigation
- Background scroll locking
- Escape-key closing
- Overlay closing
- Custom scrollbar

---

# 🧾 Demo Checkout

DRINKIT includes a multi-stage frontend checkout experience.

### Delivery information

Users can enter:

- Full name
- Phone number
- Address
- Landmark
- City
- State
- Pincode

### Validation

The form validates:

```text
✓ Full name
✓ 10-digit phone number
✓ Complete address
✓ City
✓ State
✓ 6-digit pincode
```

Phone and pincode inputs also filter invalid characters.

---

# 👀 Review Before Confirmation

After validation, the user moves to a dedicated review state.

The screen displays:

- Customer name
- Phone
- Delivery address
- Product list
- Selected variants
- Quantities
- Subtotal
- Delivery fee
- Platform fee
- Final total

Users can return to **Edit Details** without losing the information they entered.

---

# 🎉 Demo Confirmation

The final stage provides a dedicated confirmation screen containing:

```text
✓ Demo Order ID
✓ Confirmation Status
✓ Demo Delivery Status
✓ Completion Message
✓ Return to Homepage
```

The flow is intentionally simulated and does not create a real transaction.

---

# 🔄 Complete User Journey

```text
                    ┌─────────────────┐
                    │    HOMEPAGE     │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ BROWSE PRODUCTS │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ SELECT VARIANT  │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   ADD TO CART   │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   CART DRAWER   │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │    CHECKOUT     │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   VALIDATION    │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │  REVIEW DETAILS │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │  CONFIRMATION   │
                    └─────────────────┘
```

---

# 🛠️ Tech Stack

<div align="center">

| Technology | Used For |
|---|---|
| **Next.js** | Framework & App Router |
| **React** | Component architecture |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Styling & responsiveness |
| **Context API** | Global cart state |
| **Lucide React** | Interface icons |
| **Next/Image** | Product image optimization |
| **Git / GitHub** | Version control |

</div>

---

# 🏗️ Architecture

DRINKIT follows a modular frontend structure:

```text
                        ┌───────────────┐
                        │     APP       │
                        │ Next.js Router│
                        └───────┬───────┘
                                │
              ┌─────────────────┼─────────────────┐
              │                 │                 │
              ▼                 ▼                 ▼
        ┌───────────┐     ┌───────────┐    ┌────────────┐
        │Components │     │  Context  │    │    Data    │
        └─────┬─────┘     └─────┬─────┘    └─────┬──────┘
              │                 │                │
              ▼                 ▼                ▼
        Reusable UI         Cart State       Products
```

This separates:

- UI components
- Application state
- Product data
- Application routes

and keeps the codebase easier to understand and extend.

---

# 📁 Project Structure

```text
drinkit/
│
├── public/
│   └── images/
│
├── src/
│   │
│   ├── app/
│   │   ├── checkout/
│   │   │   └── page.tsx
│   │   │
│   │   ├── order-confirmation/
│   │   │   └── page.tsx
│   │   │
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── CartDrawer.tsx
│   │   ├── Categories.tsx
│   │   ├── DealsBanner.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProductCard.tsx
│   │   └── WhyChooseUs.tsx
│   │
│   ├── context/
│   │   └── CartContext.tsx
│   │
│   └── data/
│       └── products.ts
│
├── next.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

# 🎨 Design System

### Colors

```text
Background       #000000
Surface          #0A0A0A
Elevated Surface #171717
Accent           Green
Primary Text     White
Secondary Text   Neutral Gray
```

### UI Style

```text
Dark Interface
      +
Green Accent
      +
Rounded Surfaces
      +
Subtle Borders
      +
Smooth Interactions
      =
DRINKIT
```

Additional global polish includes:

- Smooth scrolling
- Custom scrollbars
- Green text selection
- Keyboard focus states
- Mobile tap optimization
- Reduced-motion accessibility
- Responsive spacing

---

# ⚙️ Getting Started

### 1. Clone

```bash
git clone <your-repository-url>
```

### 2. Enter the project

```bash
cd drinkit
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start development

```bash
npm run dev
```

Then open the local address displayed in your terminal.

---

# 🏗️ Production Build

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Current Build Status

```text
✓ Compiled successfully
✓ TypeScript checks passed
✓ Static pages generated
✓ Production optimization completed
```

---

# 🧩 Challenges Solved

<details>

<summary><b>Next.js Client Components</b></summary>

<br />

Interactive components using React hooks require the `"use client"` directive when using the App Router.

This was applied to components responsible for product selection, cart interaction and checkout state.

</details>

<details>

<summary><b>Global Cart State</b></summary>

<br />

The cart needs to be available across the Navbar, Product Cards, Cart Drawer and Checkout.

React Context API was used to provide one centralized cart state across the application.

</details>

<details>

<summary><b>Product Variants</b></summary>

<br />

A product can have multiple sizes with different prices.

The cart therefore identifies an item using both its product ID and selected size rather than only its product ID.

</details>

<details>

<summary><b>Next.js Checkout Routing</b></summary>

<br />

Dedicated App Router routes were implemented for:

```text
/checkout
/order-confirmation
```

</details>

<details>

<summary><b>TypeScript Production Build</b></summary>

<br />

TypeScript configuration issues encountered during the production build were resolved.

The final application passes the Next.js production build and TypeScript validation.

</details>

<details>

<summary><b>Turbopack Workspace Configuration</b></summary>

<br />

The Next.js workspace root was explicitly configured to prevent incorrect workspace detection caused by multiple lockfiles outside the project directory.

</details>

---

# 🚦 Project Status

| Area | Status |
|---|---|
| Homepage | ✅ Complete |
| Product Catalogue | ✅ Complete |
| Product Variants | ✅ Complete |
| Shopping Cart | ✅ Complete |
| Quantity Controls | ✅ Complete |
| Cart Drawer | ✅ Complete |
| Checkout UI | ✅ Complete |
| Form Validation | ✅ Complete |
| Review Screen | ✅ Complete |
| Demo Confirmation | ✅ Complete |
| Responsive Design | ✅ Complete |
| TypeScript Build | ✅ Passing |
| Production Build | ✅ Passing |
| Search Logic | 🟡 Planned |
| Category Filtering | 🟡 Planned |
| Backend | ⚪ Not implemented |
| Database | ⚪ Not implemented |
| Real Payments | ⚪ Not implemented |

---

# 🔮 Future Improvements

The current version intentionally focuses on the frontend.

Potential extensions include:

```text
Functional Search
        ↓
Category Filtering
        ↓
Product Detail Pages
        ↓
Cart Persistence
        ↓
Toast Notifications
        ↓
Loading Skeletons
        ↓
Automated Testing
        ↓
Backend API
        ↓
Database Integration
        ↓
User Accounts
```

Any real commerce implementation would additionally require appropriate security, compliance, payment and fulfilment infrastructure.

---

# 💡 What This Project Demonstrates

DRINKIT showcases practical experience with:

- Next.js App Router
- React component architecture
- TypeScript
- React Context API
- State management
- E-commerce cart logic
- Product variants
- Form validation
- Responsive web design
- Tailwind CSS
- Application routing
- UI/UX design
- Git version control
- Production build debugging

---

<div align="center">

## 👨‍💻 Built by Dev Mistry

**DRINKIT — Modern storefront. Clean experience.**

Built with **Next.js • React • TypeScript • Tailwind CSS**

<br />

⭐ If you found the project interesting, consider starring the repository.

<br />

### Project Status: `FRONTEND COMPLETE` ✅

</div>

---

## 📄 Disclaimer

DRINKIT is a demonstration project created for development and portfolio purposes.

The checkout and order-confirmation interfaces are simulations. The application does **not** process real payments, submit real orders, or provide real delivery services.