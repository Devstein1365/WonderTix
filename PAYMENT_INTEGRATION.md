# Alat Payment Gateway Integration Guide

## Overview

This document provides instructions for integrating the Alat by Wema Bank payment gateway into the WonderTix platform.

## Current Implementation Status

The frontend has been set up with a **mockup/placeholder** payment flow. The actual payment gateway connection needs to be implemented by the development team.

## Payment Flow Architecture

### 1. Checkout Process

**File:** `src/pages/Checkout.jsx`

**Current State:**

- ✅ Customer form validation (name, email, phone)
- ✅ Order data preparation
- ✅ Transaction reference generation
- ✅ localStorage persistence
- ⏳ Alat payment gateway redirect (placeholder)

**Key Functions:**

```javascript
// Generate unique transaction reference
const generateTxRef = () => {
  return `WTX-${Date.now()}-${Math.random()
    .toString(36)
    .substr(2, 9)
    .toUpperCase()}`;
};

// Prepare order data
const orderData = {
  transactionRef: generateTxRef(),
  customerInfo: { fullName, email, phone },
  tickets: tickets,
  totalAmount: total,
  orderDate: new Date().toISOString(),
  status: "pending",
};
```

### 2. Payment Gateway Integration Point

**File:** `src/pages/Checkout.jsx` → `redirectToAlatPayment()` function

**Location:** Line ~140-170

**What needs to be done:**
Replace the mock implementation with actual Alat payment API integration.

### 3. Required Alat Credentials

You'll need to obtain these from Wema Bank:

- `MERCHANT_ID` - Your Alat merchant account ID
- `API_KEY` - Authentication key for API calls
- `PUBLIC_KEY` - Public key for client-side integration
- `SECRET_KEY` - Secret key for server-side verification (if applicable)

### 4. Integration Options

#### Option A: Direct Form POST (Client-Side)

```javascript
const redirectToAlatPayment = (orderData) => {
  const form = document.createElement("form");
  form.method = "POST";
  form.action = "https://payment.alat.ng/checkout"; // Replace with actual Alat URL

  const paymentParams = {
    merchant_id: process.env.REACT_APP_ALAT_MERCHANT_ID,
    amount: orderData.totalAmount * 100, // Convert to kobo if required
    email: orderData.customerInfo.email,
    phone: orderData.customerInfo.phone,
    reference: orderData.transactionRef,
    callback_url: `${window.location.origin}/payment-success`,
    cancel_url: `${window.location.origin}/payment-failed`,
    metadata: JSON.stringify({
      tickets: orderData.tickets,
      customer_name: orderData.customerInfo.fullName,
    }),
  };

  Object.keys(paymentParams).forEach((key) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = paymentParams[key];
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
};
```

#### Option B: Alat JavaScript SDK (Recommended)

```javascript
// 1. Add Alat SDK to index.html
// <script src="https://js.alat.ng/v1/alat.js"></script>

// 2. Use the SDK in redirectToAlatPayment
const redirectToAlatPayment = (orderData) => {
  const handler = window.AlatPayment.setup({
    key: process.env.REACT_APP_ALAT_PUBLIC_KEY,
    email: orderData.customerInfo.email,
    amount: orderData.totalAmount * 100, // in kobo
    ref: orderData.transactionRef,
    metadata: {
      customer_name: orderData.customerInfo.fullName,
      phone: orderData.customerInfo.phone,
      tickets: orderData.tickets,
    },
    callback: function (response) {
      // Payment successful
      navigate("/payment-success", {
        state: { orderData, paymentResponse: response },
      });
    },
    onClose: function () {
      // User closed payment modal
      console.log("Payment cancelled");
    },
  });

  handler.openIframe();
};
```

### 5. Environment Variables Setup

Create a `.env` file in the root directory:

```env
# Alat Payment Gateway
REACT_APP_ALAT_MERCHANT_ID=your_merchant_id
REACT_APP_ALAT_PUBLIC_KEY=your_public_key
REACT_APP_ALAT_SECRET_KEY=your_secret_key
REACT_APP_ALAT_PAYMENT_URL=https://payment.alat.ng/checkout
```

**⚠️ Security Note:** Never commit the `.env` file to version control. Add it to `.gitignore`.

### 6. Payment Callback Handling

#### Success Callback

**File:** `src/pages/PaymentSuccess.jsx`

**Current State:**

- ✅ Saves completed order to localStorage
- ✅ Removes pending order
- ✅ Displays order confirmation
- ⏳ Email ticket delivery (needs backend)

**Enhancement Needed:**

```javascript
// Verify payment on backend before marking as complete
const verifyPayment = async (transactionRef) => {
  try {
    const response = await fetch(
      `${API_URL}/verify-payment/${transactionRef}`,
      {
        headers: {
          Authorization: `Bearer ${ALAT_SECRET_KEY}`,
        },
      }
    );
    const data = await response.json();
    return data.status === "success";
  } catch (error) {
    console.error("Payment verification failed:", error);
    return false;
  }
};
```

#### Failure Callback

**File:** `src/pages/PaymentFailed.jsx`

**Current State:**

- ✅ Displays failure message
- ✅ Retry option
- ✅ Support contact information

### 7. Payment Verification (Backend Required)

For security, you should verify payments on the backend:

```javascript
// Example backend endpoint (Node.js/Express)
app.get("/api/verify-payment/:reference", async (req, res) => {
  const { reference } = req.params;

  try {
    const response = await axios.get(
      `https://api.alat.ng/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.ALAT_SECRET_KEY}`,
        },
      }
    );

    if (response.data.status === "success") {
      // Update database
      // Send ticket email
      res.json({ verified: true, data: response.data });
    } else {
      res.json({ verified: false });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

### 8. Testing

#### Test Cards (if provided by Alat)

```
Test Card Number: 5060 9905 8000 0217 499
Expiry: Any future date
CVV: 123
PIN: 1234
OTP: 123456
```

#### Test Workflow:

1. Select tickets on `/tickets` page
2. Fill checkout form on `/checkout`
3. Submit to trigger payment
4. Use test card details
5. Verify redirect to success/failure page
6. Check localStorage for saved orders

### 9. localStorage Data Structure

```javascript
// Pending Order (during checkout)
localStorage.setItem('pendingOrder', JSON.stringify({
  transactionRef: "WTX-1234567890-ABC123",
  customerInfo: { fullName, email, phone },
  tickets: [...],
  totalAmount: 15000,
  orderDate: "2024-01-15T10:30:00.000Z",
  status: "pending"
}));

// Completed Orders
localStorage.setItem('orders', JSON.stringify([
  {
    transactionRef: "WTX-1234567890-ABC123",
    customerInfo: { ... },
    tickets: [...],
    totalAmount: 15000,
    orderDate: "2024-01-15T10:30:00.000Z",
    paymentDate: "2024-01-15T10:32:15.000Z",
    status: "completed"
  }
]));
```

### 10. Next Steps for CTO

1. **Register with Alat/Wema Bank**

   - Contact Wema Bank for merchant account
   - Get API credentials

2. **Choose Integration Method**

   - Option A: Direct POST
   - Option B: JavaScript SDK (recommended)

3. **Update Checkout.jsx**

   - Replace `redirectToAlatPayment()` function
   - Add environment variables

4. **Set up Payment Verification**

   - Create backend endpoint (optional but recommended)
   - Verify transactions before marking complete

5. **Implement Email Service**

   - Send tickets after successful payment
   - Use service like SendGrid, Mailgun, or AWS SES

6. **Test Thoroughly**

   - Use test credentials in development
   - Test all payment scenarios (success, failure, cancel)

7. **Go Live**
   - Switch to production credentials
   - Update payment URLs
   - Monitor first transactions

## Contact Information

**Alat Support:**

- Website: https://alat.ng
- Email: support@alat.ng
- Phone: +234 1 XXX XXXX (check Alat website)

**Wema Bank Business Support:**

- Email: business@wemabank.com
- Phone: 01-2778600

## Resources

- [Alat Payment Gateway Documentation](https://docs.alat.ng) (if available)
- [Wema Bank Developer Portal](https://developer.wemabank.com) (if available)
- WonderTix Support: support@wondertix.com

---

**Last Updated:** [Current Date]
**Version:** 1.0
**Status:** Awaiting Alat Integration
