import React from "react";
import { ProductInterface } from "../../store/store.types";
import { Button } from "../elements/button";
import styles from "./styles.module.css";

type IFormProps = {
  onSubmit: (payload: ProductInterface) => void;
};

export const Form: React.FC<IFormProps> = ({ onSubmit }) => {
  let formRef = React.useRef<HTMLFormElement>(null);
  let titleRef = React.useRef<HTMLInputElement>(null);
  let priceRef = React.useRef<HTMLInputElement>(null);
  let descriptionRef = React.useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!titleRef?.current?.value) {
      alert("Your product needs a title");
      return;
    }

    if (!descriptionRef?.current?.value) {
      alert("Your product needs some content");
      return;
    }

    if (priceRef.current?.value && !isNaN(priceRef.current?.value as any)) {
      alert("Your product needs valid price");
      return;
    }

    onSubmit({
      isFavorite: false,
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      price: priceRef.current ? Number(priceRef.current.value) : 0,
    });

    formRef.current?.reset();
  };

  return (
    <form
      className={styles.form}
      onSubmit={(event) => handleSubmit(event)}
      ref={formRef}
    >
      <span className={styles.label}>Product title: *</span>

      <input
        ref={titleRef}
        placeholder="Title..."
        defaultValue=""
        className={styles.input}
      />

      <span className={styles.label}>Product details: *</span>

      <input
        ref={priceRef}
        placeholder="Price..."
        defaultValue=""
        className={styles.input}
      />

      <textarea
        ref={descriptionRef}
        placeholder="Start typing product description here..."
        defaultValue=""
        className={styles.textarea}
      />

      <Button>Add a product</Button>
    </form>
  );
};
