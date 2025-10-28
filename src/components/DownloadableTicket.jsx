import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import {
  FaTicketAlt,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaDownload,
  FaImage,
  FaFilePdf,
  FaPrint,
} from "react-icons/fa";
import TicketQRCode from "./TicketQRCode";

const DownloadableTicket = ({ orderData }) => {
  const ticketRef = useRef(null);

  const printTicket = () => {
    window.print();
  };

  const downloadAsPDF = async () => {
    if (!ticketRef.current) {
      alert("Ticket element not found. Please refresh the page and try again.");
      return;
    }

    try {
      // Show loading state
      const originalButton = document.activeElement;
      if (originalButton) {
        originalButton.textContent = "Generating PDF...";
        originalButton.disabled = true;
      }

      // Capture the ticket as canvas with better options
      const canvas = await html2canvas(ticketRef.current, {
        scale: 2,
        backgroundColor: "#ffffff",
        logging: false,
        useCORS: true,
        allowTaint: true,
        windowWidth: ticketRef.current.scrollWidth,
        windowHeight: ticketRef.current.scrollHeight,
      });

      // Convert to image
      const imgData = canvas.toDataURL("image/png");

      // Create PDF
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      // Calculate dimensions to fit page
      const imgWidth = 190; // A4 width in mm minus margins
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Add image to PDF
      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);

      // Save PDF
      pdf.save(`WonderTix-${orderData.transactionRef}.pdf`);

      // Restore button
      if (originalButton) {
        originalButton.textContent = "Download as PDF";
        originalButton.disabled = false;
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert(
        "Failed to generate PDF: " +
          error.message +
          ". Please try the image download instead or take a screenshot."
      );

      // Restore button on error
      const originalButton = document.activeElement;
      if (originalButton) {
        originalButton.textContent = "Download as PDF";
        originalButton.disabled = false;
      }
    }
  };

  const downloadAsImage = async () => {
    if (!ticketRef.current) {
      alert("Ticket element not found. Please refresh the page and try again.");
      return;
    }

    try {
      // Show loading state
      const originalButton = document.activeElement;
      if (originalButton) {
        originalButton.textContent = "Generating Image...";
        originalButton.disabled = true;
      }

      // Capture the ticket as canvas with better options
      const canvas = await html2canvas(ticketRef.current, {
        scale: 3,
        backgroundColor: "#ffffff",
        logging: false,
        useCORS: true,
        allowTaint: true,
        windowWidth: ticketRef.current.scrollWidth,
        windowHeight: ticketRef.current.scrollHeight,
      });

      // Convert to blob and download
      canvas.toBlob((blob) => {
        if (!blob) {
          throw new Error("Failed to create image blob");
        }

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `WonderTix-${orderData.transactionRef}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        // Restore button
        if (originalButton) {
          originalButton.textContent = "Download as Image";
          originalButton.disabled = false;
        }
      }, "image/png");
    } catch (error) {
      console.error("Error generating image:", error);
      alert(
        "Failed to generate image: " +
          error.message +
          ". Please try taking a screenshot instead."
      );

      // Restore button on error
      const originalButton = document.activeElement;
      if (originalButton) {
        originalButton.textContent = "Download as Image";
        originalButton.disabled = false;
      }
    }
  };

  return (
    <div>
      {/* Downloadable Ticket Design */}
      <div
        ref={ticketRef}
        className="printable-ticket bg-white rounded-2xl shadow-2xl overflow-hidden max-w-2xl mx-auto"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        {/* Header */}
        <div className="bg-linear-to-r from-[#B54738] to-[#3A4F30] text-white p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <FaTicketAlt className="text-4xl" />
            <h1 className="text-4xl font-bold">WonderTix</h1>
          </div>
          <p className="text-xl font-semibold">Festive Wonderland 2024</p>
          <p className="text-sm opacity-90 mt-1">
            Your Magical Christmas Experience
          </p>
        </div>

        {/* Ticket Body */}
        <div className="p-8">
          {/* Event Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#3A4F30] mb-4">
                Event Details
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <FaCalendarAlt className="text-[#B54738] mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Event Dates</p>
                    <p className="text-sm text-gray-600">
                      Dec 15, 2024 - Jan 5, 2025
                    </p>
                    <p className="text-xs text-gray-500">
                      10:00 AM - 10:00 PM Daily
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[#B54738] mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Location</p>
                    <p className="text-sm text-gray-600">Minna City Park</p>
                    <p className="text-xs text-gray-500">
                      Niger State, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* QR Code */}
            <div className="flex flex-col items-center justify-center">
              <TicketQRCode ticketData={orderData} />
            </div>
          </div>

          {/* Customer Information */}
          <div className="border-t border-gray-200 pt-6 mb-6">
            <h3 className="text-lg font-bold text-[#3A4F30] mb-4">
              Customer Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <FaUser className="text-[#B54738]" />
                <div>
                  <p className="text-xs text-gray-500">Name</p>
                  <p className="font-semibold text-gray-800">
                    {orderData.customerInfo.fullName}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#B54738]" />
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="font-semibold text-gray-800 text-sm">
                    {orderData.customerInfo.email}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-[#B54738]" />
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="font-semibold text-gray-800">
                    {orderData.customerInfo.phone}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaTicketAlt className="text-[#B54738]" />
                <div>
                  <p className="text-xs text-gray-500">Transaction Ref</p>
                  <p className="font-mono font-semibold text-gray-800 text-xs">
                    {orderData.transactionRef}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tickets Purchased */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-[#3A4F30] mb-4">
              Tickets Purchased
            </h3>
            <div className="space-y-2">
              {orderData.tickets.map((ticket, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-[#FFEDED] rounded-lg p-4"
                >
                  <div>
                    <p className="font-semibold text-gray-800">{ticket.name}</p>
                    <p className="text-sm text-gray-600">
                      Quantity: {ticket.quantity}
                    </p>
                  </div>
                  <p className="font-bold text-[#B54738]">
                    ₦{(ticket.price * ticket.quantity).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-300">
              <span className="text-lg font-bold text-gray-800">
                Total Amount Paid
              </span>
              <span className="text-2xl font-bold text-[#B54738]">
                ₦{orderData.totalAmount.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Important Notes */}
          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <h4 className="font-bold text-yellow-800 mb-2">
              Important Information
            </h4>
            <ul className="text-xs text-yellow-700 space-y-1">
              <li>
                • Present this ticket (digital or printed) at the entrance
              </li>
              <li>• QR code must be clearly visible for scanning</li>
              <li>• Ticket is valid for all event dates shown above</li>
              <li>• Children under 3 years enter free (no ticket required)</li>
              <li>• Gates open at 10:00 AM daily</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 px-8 py-4 text-center">
          <p className="text-xs text-gray-600">
            For support, contact: support@wondertix.com | +234 (0) 803 XXX XXXX
          </p>
          <p className="text-xs text-gray-500 mt-1">
            © 2024 WonderTix - Festive Wonderland. All rights reserved.
          </p>
        </div>
      </div>

      {/* Download Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center no-print">
        <button
          onClick={downloadAsPDF}
          className="flex items-center justify-center gap-2 bg-[#B54738] hover:bg-[#a03d2f] text-white font-bold px-6 py-3 rounded-lg transition-all hover:scale-105 shadow-lg"
        >
          <FaFilePdf />
          Download as PDF
        </button>
        <button
          onClick={downloadAsImage}
          className="flex items-center justify-center gap-2 bg-[#3A4F30] hover:bg-[#2d3d26] text-white font-bold px-6 py-3 rounded-lg transition-all hover:scale-105 shadow-lg"
        >
          <FaImage />
          Download as Image
        </button>
        <button
          onClick={printTicket}
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition-all hover:scale-105 shadow-lg"
        >
          <FaPrint />
          Print Ticket
        </button>
      </div>

      <p className="text-center text-sm text-gray-600 mt-4 no-print">
        💡 Tip: If downloads fail, use "Print Ticket" and save as PDF, or take a
        screenshot!
      </p>
    </div>
  );
};

export default DownloadableTicket;
