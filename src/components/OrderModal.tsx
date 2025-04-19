import React from "react";
import { X, DoorOpen, ShoppingBag, Bike } from "lucide-react";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemName?: string;
  directUrl?: string;
  doordashUrl?: string;
  ubereatsUrl?: string;
  grubhubUrl?: string;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  itemName,
  directUrl,
  doordashUrl = "https://www.doordash.com/",
  ubereatsUrl = "https://www.ubereats.com/",
  grubhubUrl = "https://www.grubhub.com/",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex min-h-screen flex-col items-center justify-center bg-black/40 px-2 py-6">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto" style={{ overscrollBehavior: 'contain' }}>
        <button
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-700 transition rounded-full bg-white/80 p-2 sm:p-1 shadow focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={onClose}
          aria-label="Close order modal"
        >
          <X size={28} />
        </button>
        <div className="mb-6 text-center">
          <ShoppingBag size={32} className="mx-auto text-primary mb-2" />
          <h2 className="font-display text-2xl text-primary mb-2">
            Order {itemName ? `"${itemName}"` : "Online"}
          </h2>
          <p className="text-gray-600">
            We partner with trusted delivery services for convenient online ordering.<br />
            Please select your preferred platform:
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {directUrl && (
            <>
              <a
                href={directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-lg bg-primary text-white font-extrabold text-xl shadow-lg border-4 border-primary-dark hover:bg-primary-dark transition mb-2"
                style={{ fontSize: '1.25rem' }}
              >
                <ShoppingBag size={28} /> Order Direct (Pickup & Delivery by DoorDash)
              </a>
              <div className="text-center text-gray-700 text-sm mb-2">Powered by DoorDash — No extra fees for pickup. Delivery available.</div>
            </>
          )}
          <div className="mt-2 mb-1 text-center text-gray-600 font-semibold text-base">Other Delivery Services</div>
          <a
            href={ubereatsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-lg bg-[#06C167] text-white font-semibold text-lg hover:bg-[#048e4c] transition"
          >
            <Bike size={24} /> Order with UberEats
          </a>
          <a
            href={grubhubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-lg bg-[#F6AE2D] text-white font-semibold text-lg hover:bg-[#c98c1f] transition"
          >
            <ShoppingBag size={24} /> Order with Grubhub
          </a>
        </div>
        <div className="mt-6 text-center text-xs text-gray-400">
          Menu and availability may vary by platform.
        </div>
      </div>
    </div>
  );
};
