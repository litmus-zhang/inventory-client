import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";
import React from "react";

function ModalComponent({ modalTitle }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <>
      <Button onClick={modalIsOpen === false ? onOpen : onClose}>Open Modal</Button>

      <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalComponent;
