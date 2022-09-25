import React, { FC } from "react";
import { Modal, Button, Text } from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { toggleModal } from "../../store/slices/modalSlice";
import {FaInfoCircle} from "react-icons/fa"

const AlertModal = () => {
  const dispatch = useAppDispatch();
  const { isAlertModalShow } = useAppSelector((state) => state.modal);
  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={isAlertModalShow}
      onClose={() =>
        dispatch(toggleModal({ key: "isAlertModalShow", status: "close" }))
      }
    >
      <Modal.Header>
        <FaInfoCircle size={18}/>{" "}
        <Text size={18}>สินค้าหมดคลังแล้ว</Text>
      </Modal.Header>
    </Modal>
  );
};

export default AlertModal;
