import React, { useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import { useDisclosure } from '@chakra-ui/hooks';

const ModalContext = createContext();
// Provider component that wraps your app and makes modal object ...
// ... available to any child component that calls useModal().
export function ModalProvider({ children }) {
  const modal = useModalDisclosure();
  return (
    <ModalContext.Provider value={modal}>{children}</ModalContext.Provider>
  );
}

ModalProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

// Hook for child components to get the modal object ...
// ... and re-render when it changes.
export const useModal = () => {
  return useContext(ModalContext);
};

// Provider hook that creates modal object and handles state
function useModalDisclosure() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isModalOpen = () => {
    return isOpen;
  };
  const closeModal = () => {
    return onClose;
  };
  const openModal = () => {
    return onOpen;
  };
  return {
    openModal,
    closeModal,
    isModalOpen,
  };
}
