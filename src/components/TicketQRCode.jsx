import React, { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";

const TicketQRCode = ({ ticketData }) => {
  const canvasRef = useRef(null);
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        // Create unique ticket data string
        const ticketInfo = JSON.stringify({
          ref: ticketData.transactionRef,
          name: ticketData.customerInfo?.fullName || "Guest",
          email: ticketData.customerInfo?.email,
          tickets: ticketData.tickets,
          totalAmount: ticketData.totalAmount,
          date: ticketData.orderDate,
          status: ticketData.status,
        });

        // Generate QR code on canvas
        if (canvasRef.current) {
          await QRCode.toCanvas(canvasRef.current, ticketInfo, {
            width: 200,
            margin: 2,
            color: {
              dark: "#3A4F30", // Green color
              light: "#FFFFFF", // White background
            },
          });
        }

        // Also generate as data URL for download
        const url = await QRCode.toDataURL(ticketInfo, {
          width: 400,
          margin: 2,
        });
        setQrCodeUrl(url);
      } catch (error) {
        console.error("Error generating QR code:", error);
      }
    };

    if (ticketData) {
      generateQRCode();
    }
  }, [ticketData]);

  const handleDownloadQR = () => {
    if (qrCodeUrl) {
      const link = document.createElement("a");
      link.href = qrCodeUrl;
      link.download = `ticket-${ticketData.transactionRef}.png`;
      link.click();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <canvas ref={canvasRef} />
      </div>
      <button
        onClick={handleDownloadQR}
        className="mt-4 text-sm text-[#B54738] hover:underline font-semibold"
      >
        Download QR Code
      </button>
      <p className="text-xs text-gray-500 mt-2 text-center max-w-xs">
        Show this QR code at the entrance for quick check-in
      </p>
    </div>
  );
};

export default TicketQRCode;
