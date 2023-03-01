import React from "react";
import store from "../store";
import { Form } from "./form";
import Modal from "./elements/modal";
import { ActionTypes, ProductInterface } from "../store/store.types";
import { postAction } from "../store/store.actions";

interface Props {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

const CreateProduct: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const onSubmit = async (payload: ProductInterface) => {
    try {
      setIsOpen(false);
      store.dispatch({
        type: ActionTypes.SET_MESSAGE,
        payload: "Adding product...",
      });
      await store.dispatch(postAction(payload));
      store.dispatch({ type: ActionTypes.SET_MESSAGE, payload: "" });
    } catch (error) {
      store.dispatch({
        type: ActionTypes.SET_MESSAGE,
        payload: "Something went wrong, please refresh the page...",
      });
    }
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={onSubmit} />
    </Modal>
  );
};

export default CreateProduct;
