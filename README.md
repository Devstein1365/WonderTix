# 🎪 WonderTix - Festive Wonderland Ticketing Platform

<div align="center">

![WonderTix Logo](https://img.shields.io/badge/WonderTix-Festive%20Wonderland-B54738?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.16-38B2AC?style=for-the-badge&logo=tailwind-css)

**Your Gateway to Nigeria's Most Magical Christmas Experience**

[🌐 Live Demo](https://wondertix.vercel.app) | [📚 Documentation](./CHECKOUT_DOCUMENTATION.md) | [💳 Payment Integration](./PAYMENT_INTEGRATION.md)

</div>

---

## 📖 About The Project

WonderTix is a modern, user-friendly ticketing platform built for **Festive Wonderland 2024** - Nigeria's premier Christmas celebration event in Minna, Niger State. The platform provides seamless ticket purchasing, secure payment processing via Alat by Wema Bank, and digital ticket delivery.

### 🎯 Event Details

- **📅 Date:** December 15, 2024 - January 5, 2025
- **🕐 Time:** 10:00 AM - 10:00 PM Daily
- **📍 Location:** Minna City Park, Niger State, Nigeria
- **🎫 Ticket Types:** 6 different categories for all ages and groups

---

## ✨ Features

### 🏠 Landing Page

- **Hero Section** - Eye-catching event banner with key details
- **About Event** - Comprehensive event description
- **Event Highlights** - What to expect (rides, shows, food, activities)
- **Ticket Preview** - Quick overview of all ticket categories
- **Platform Features** - Why choose WonderTix
- **Testimonials** - Real customer experiences
- **Call-to-Action** - Strategic CTAs throughout
- **Footer** - Complete navigation and social links

### 🎫 Ticket Selection

- **6 Ticket Categories:**
  - Normal Ticket (₦2,500) - General access
  - Adult Ticket (₦3,000) - 18+ premium entry
  - Kids Ticket (₦1,500) - Ages 3-12, discounted
  - Mother & Child (₦4,000) - Combo deal
  - Family Pack (₦8,500) - 2 Adults + 2 Kids, save 15%
  - Group Pack (₦12,000) - 6 tickets, save 20%
- **Interactive Quantity Selection** - +/- buttons and manual input
- **Real-time Total Calculation** - Instant price updates
- **Order Summary** - Sticky checkout bar on desktop
- **FAQ Section** - Common questions answered

### 💳 Checkout & Payment

- **Customer Information Form**
  - Full name validation
  - Email format validation
  - Nigerian phone number validation
  - Terms & conditions agreement
- **Live Order Summary** - Sidebar with ticket breakdown
- **Form Validation** - Real-time error feedback
- **Secure Payment** - Alat by Wema Bank integration
- **Transaction Reference** - Unique ID generation
- **localStorage Persistence** - Order data saved locally

### ✅ Payment Processing

- **Loading States** - Professional loading animations
- **Payment Gateway Redirect** - Seamless Alat integration
- **Success Page** - Order confirmation and ticket details
- **Failure Page** - Clear error messages and retry options
- **Email Notifications** - Ticket delivery reminders
- **Download Tickets** - PDF generation (placeholder)

---

## 🚀 Tech Stack

### Frontend Framework

- **React 18.3.1** - Modern UI library
- **Vite 6.0.5** - Lightning-fast build tool
- **React Router DOM 7.9.4** - Client-side routing

### Styling

- **Tailwind CSS 4.1.16** - Utility-first CSS framework
- **Custom Color Palette:**
  - Primary Red: `#B54738`
  - Soft Blush: `#FFEDED`
  - Earth Green: `#3A4F30`

### Icons & Assets

- **React Icons 5.5.0** - Comprehensive icon library
- **Custom SVG Graphics** - Brand-specific illustrations

### Payment Integration

- **Alat by Wema Bank** - Nigerian payment gateway
- **localStorage** - Client-side data persistence

---

## 📂 Project Structure

```
WonderTix/
├── public/                      # Static assets
├── src/
│   ├── assets/                  # Images, icons, fonts
│   ├── components/              # Reusable components
│   │   ├── ui/
│   │   │   └── Logo.jsx        # Brand logo component
│   │   ├── Nav.jsx             # Navigation bar
│   │   ├── Hero.jsx            # Landing hero section
│   │   ├── About.jsx           # Event description
│   │   ├── EventHighlights.jsx # Attractions showcase
│   │   ├── TicketPreview.jsx   # Ticket categories preview
│   │   ├── Features.jsx        # Platform benefits
│   │   ├── Testimonials.jsx    # Customer reviews
│   │   ├── CTA.jsx             # Call-to-action section
│   │   └── Footer.jsx          # Site footer
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── Ticket.jsx          # Ticket selection page
│   │   ├── Checkout.jsx        # Checkout form
│   │   ├── PaymentProcessing.jsx  # Payment redirect handler
│   │   ├── PaymentSuccess.jsx  # Success confirmation
│   │   ├── PaymentFailed.jsx   # Failure handling
│   │   └── EventDetails.jsx    # Event details (legacy)
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # App entry point
│   └── index.css               # Global styles
├── CHECKOUT_DOCUMENTATION.md   # Checkout system docs
├── PAYMENT_INTEGRATION.md      # CTO integration guide
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
└── README.md                   # This file
```

---

## 🛠️ Installation & Setup

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn**
- Modern web browser

### 1. Clone the Repository

```bash
git clone https://github.com/Devstein1365/WonderTix.git
cd WonderTix
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Variables (Optional)

Create a `.env` file in the root directory:

```env
# Alat Payment Gateway (for production)
REACT_APP_ALAT_MERCHANT_ID=your_merchant_id
REACT_APP_ALAT_PUBLIC_KEY=your_public_key
REACT_APP_ALAT_SECRET_KEY=your_secret_key
REACT_APP_ALAT_PAYMENT_URL=https://payment.alat.ng/checkout
```

### 4. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:5173` in your browser.

### 5. Build for Production

```bash
npm run build
# or
yarn build
```

### 6. Preview Production Build

```bash
npm run preview
# or
yarn preview
```

---

## 🧭 Navigation Routes

| Route                 | Page             | Description                     |
| --------------------- | ---------------- | ------------------------------- |
| `/`                   | Home             | Landing page with event details |
| `/tickets`            | Ticket Selection | Browse and select tickets       |
| `/checkout`           | Checkout         | Customer information form       |
| `/payment-processing` | Processing       | Payment gateway redirect        |
| `/payment-success`    | Success          | Order confirmation              |
| `/payment-failed`     | Failure          | Payment error handling          |
| `/event:id`           | Event Details    | Legacy event details page       |

---

## 💾 Data Management

### localStorage Keys

**Pending Order** (during checkout):

```javascript
{
  transactionRef: "WTX-1234567890-ABC123",
  customerInfo: {
    fullName: "John Doe",
    email: "john@example.com",
    phone: "+2348012345678"
  },
  tickets: [...],
  totalAmount: 5000,
  orderDate: "2024-01-15T10:30:00.000Z",
  status: "pending"
}
```

**Completed Orders**:

```javascript
[
  {
    // Same as pending order
    status: "completed",
    paymentDate: "2024-01-15T10:32:15.000Z",
  },
];
```

---

## 🧪 Testing

### Form Validation Testing

```bash
# Test invalid inputs
- Empty fields
- Invalid email format
- Wrong phone format
- Unchecked terms checkbox

# Test valid inputs
- Full name: "John Doe"
- Email: "john@example.com"
- Phone: "08012345678" or "+2348012345678"
- Terms: Checked
```

### Payment Flow Testing

1. Navigate to `/tickets`
2. Select ticket quantities
3. Click "Proceed to Checkout"
4. Fill customer information
5. Submit form
6. Observe payment processing
7. Verify success/failure page

---

## 🎨 Design System

### Colors

```css
/* Primary Palette */
--primary-red: #b54738;
--soft-blush: #ffeded;
--earth-green: #3a4f30;

/* Neutrals */
--white: #ffffff;
--gray-50: #f9fafb;
--gray-600: #4b5563;
--gray-800: #1f2937;
```

### Typography

- **Font Family:** System font stack (sans-serif)
- **Headings:** Bold, 2xl-5xl sizes
- **Body:** Regular, base size
- **Small Text:** 0.875rem

### Spacing

- **Container Max Width:** 1280px
- **Section Padding:** 4rem (desktop), 2rem (mobile)
- **Element Gap:** 1rem - 2rem

---

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile First */
sm: 640px   /* Small devices */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

### Mobile Optimizations

- ✅ Single column layouts
- ✅ Touch-friendly buttons (min 44px)
- ✅ Readable font sizes (min 16px)
- ✅ Optimized keyboard types
- ✅ Sticky checkout bar

---

## 🔒 Payment Integration

### Current Status

**🟡 PLACEHOLDER MODE** - Ready for production integration

### Integration Steps

1. **Get Alat Credentials** from Wema Bank
2. **Update Environment Variables** with API keys
3. **Replace Mock Function** in `Checkout.jsx`
4. **Test with Alat Test Cards**
5. **Deploy to Production**

See [PAYMENT_INTEGRATION.md](./PAYMENT_INTEGRATION.md) for detailed instructions.

---

## 📚 Documentation

- **[Checkout Documentation](./CHECKOUT_DOCUMENTATION.md)** - Complete checkout system guide
- **[Payment Integration Guide](./PAYMENT_INTEGRATION.md)** - CTO integration instructions
- **[Component Documentation](#)** - Individual component details (coming soon)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🐛 Known Issues

- ✅ No critical issues currently
- EventDetails.jsx has unused 'id' variable (minor, non-blocking)

---

## 🗺️ Roadmap

### Phase 1: Current (Completed ✅)

- [x] Landing page with all sections
- [x] Ticket selection and quantity management
- [x] Checkout form with validation
- [x] Payment gateway placeholder
- [x] Success/failure pages

### Phase 2: Next Steps

- [ ] Alat payment gateway integration
- [ ] Backend API for order verification
- [ ] Email ticket delivery system
- [ ] PDF ticket generation
- [ ] Admin dashboard

### Phase 3: Future Enhancements

- [ ] User accounts and login
- [ ] Order history page
- [ ] Promo code system
- [ ] Gift ticket option
- [ ] Mobile app (React Native)
- [ ] Analytics dashboard

---

## 📞 Support & Contact

### Event Support

- **Email:** support@wondertix.com
- **Phone:** +234 (0) 803 XXX XXXX
- **Website:** www.wondertix.com

### Technical Support

- **Developer:** Devstein1365
- **GitHub:** [@Devstein1365](https://github.com/Devstein1365)

### Alat/Wema Bank Support

- **Website:** https://alat.ng
- **Email:** support@alat.ng
- **Business:** business@wemabank.com

---

## 📄 License

This project is proprietary and confidential.

**© 2024 WonderTix. All Rights Reserved.**

Unauthorized copying, modification, distribution, or use of this software,
via any medium, is strictly prohibited without explicit permission.

---

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Vite** - For lightning-fast development
- **Tailwind CSS** - For beautiful, utility-first styling
- **React Icons** - For comprehensive icon library
- **Alat by Wema Bank** - For payment gateway services
- **Festive Wonderland Team** - For the incredible event

---

## 📊 Project Stats

![Lines of Code](https://img.shields.io/badge/Lines%20of%20Code-5000%2B-blue?style=flat-square)
![Components](https://img.shields.io/badge/Components-15%2B-green?style=flat-square)
![Pages](https://img.shields.io/badge/Pages-7-orange?style=flat-square)
![Build Status](https://img.shields.io/badge/Build-Passing-success?style=flat-square)

---

<div align="center">

**Built with ❤️ for Festive Wonderland 2024**

[⬆ Back to Top](#-wondertix---festive-wonderland-ticketing-platform)

</div>
