import React from "react";
import { useOrderModal } from "./Menu/OrderModalWrapper";

export function MobileOrderBar() {
  const { openModal } = useOrderModal();
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden pointer-events-none">
      <div className="flex justify-center">
        <button
          onClick={() => openModal("")}
          className="pointer-events-auto w-[90vw] max-w-lg mx-auto mb-4 px-6 py-4 bg-primary text-white text-xl font-bold rounded-full shadow-lg flex items-center justify-center gap-3 hover:bg-primary-dark active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2"
          aria-label="Order Online (Pickup & Delivery)"
        >
          Order Online
        </button>
      </div>
    </div>
  );
}
