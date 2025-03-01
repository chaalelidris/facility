"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

export type ModalNames = "accountModal"; // Add more as needed

type ModalStates = {
  [key in ModalNames]: boolean;
};

interface ModalContextProps {
  modalStates: ModalStates;
  openModal: (modal: ModalNames) => void;
  closeModal: (modal: ModalNames) => void;
  toggleModal: (modal: ModalNames) => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalStates, setModalStates] = useState<ModalStates>({
    accountModal: false,
  });

  const openModal = useCallback((modal: ModalNames) => {
    setModalStates((prev) => ({ ...prev, [modal]: true }));
  }, []);

  const closeModal = useCallback((modal: ModalNames) => {
    setModalStates((prev) => ({ ...prev, [modal]: false }));
  }, []);

  const toggleModal = useCallback((modal: ModalNames) => {
    setModalStates((prev) => ({ ...prev, [modal]: !prev[modal] }));
  }, []);

  return (
    <ModalContext.Provider
      value={{ modalStates, openModal, closeModal, toggleModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModals() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModals must be used within a ModalProvider");
  }
  return context;
}
