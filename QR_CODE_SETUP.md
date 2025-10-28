# Quick Setup for QR Code Feature

## Installation

Run this command in your terminal:

```bash
npm install qrcode
```

## What This Does

The QR code feature will:

- ✅ Generate a unique QR code for each ticket purchase
- ✅ Display the QR code on the Payment Success page
- ✅ Allow customers to download the QR code as PNG
- ✅ Encode transaction details, customer info, and ticket data
- ✅ Can be scanned at the gate for verification

## QR Code Data Structure

Each QR code contains:

```json
{
  "ref": "WTX-1234567890-ABC123",
  "name": "John Doe",
  "email": "john@example.com",
  "tickets": [...],
  "totalAmount": 5000,
  "date": "2024-01-15T10:30:00.000Z",
  "status": "completed"
}
```

## How to Use

1. **Install the package:**

   ```bash
   npm install qrcode
   ```

2. **Restart your dev server:**

   ```bash
   npm run dev
   ```

3. **Test the flow:**
   - Go to `/tickets`
   - Select tickets
   - Complete checkout
   - On success page, you'll see the QR code!

## Gate Scanner Setup (Future)

For the gate attendants, you'll need to create a scanner app that:

1. Scans the QR code
2. Parses the JSON data
3. Verifies the transaction reference against database
4. Checks if already used
5. Marks as "checked-in"

## Files Modified

- ✅ `src/components/TicketQRCode.jsx` - NEW: QR code component
- ✅ `src/pages/PaymentSuccess.jsx` - Updated with QR code display

## Next Steps

After installing qrcode:

1. Test the complete flow
2. Deploy to Vercel
3. Verify QR codes work
4. Ready for your seminar! 🎉

---

**Created for Festive Wonderland** 🎪
