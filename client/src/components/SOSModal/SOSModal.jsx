import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Textarea,
} from "@nextui-org/react";

import "./SOSModal.css";
import { FaPhoneAlt } from "react-icons/fa";

export default function SOSModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <Button className="sos-btn" onPress={onOpen} variant="flat">
        <FaPhoneAlt />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        backdrop="opaque"
        className="sos-container"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white">SOS</ModalHeader>
              <ModalBody>
                <div className="curr-lat-log">
                  <span>Latitude: 28.6354</span>
                  <span>Longitude: 19.7856</span>
                </div>
                <Textarea
                  label="Description"
                  placeholder="Enter your description"
                  className="w-full"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onPress={onClose}>
                  Send
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
