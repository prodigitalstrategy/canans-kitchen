import React, { useState } from "react";
import { OrderModal } from "../OrderModal";

export function useOrderModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | undefined>(undefined);

  const openModal = (itemName: string) => {
    setSelectedItem(itemName);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(undefined);
  };

  const modal = (
    <OrderModal
      isOpen={modalOpen}
      onClose={closeModal}
      itemName={selectedItem}
      directUrl="https://order.online/store/canan's-kitchen-cafe-&-bakery-fountain-valley-32915141/?activationPreview=true&hideModal=true&pickup=true&redirected=true"
      ubereatsUrl="https://www.ubereats.com/store/canans-kitchen-%26-bakery/oux20bZLVj2mpIuaty85kw"
      grubhubUrl="https://www.grubhub.com/restaurant/canans-kitchen-cafe--bakery-16937-bushard-st-fountain-valley/10427616"
    />
  );

  return { openModal, closeModal, modal };
}
