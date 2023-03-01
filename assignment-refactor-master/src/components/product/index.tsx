import React from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  ActionTypes,
  ProductInterface,
  RootState,
} from "../../store/store.types";

interface Props {
  index: number;
  product: ProductInterface;
}

export const Product: React.FC<Props> = ({ product, index }) => {
  // Problem: Now product title can be too long, I just put overflowX as fix now

  const dispatch = useDispatch();
  let { products, numFavorites } = useSelector((state: RootState) => state);

  const onFav = () => {
    let productCopy = [...products];
    productCopy[index].isFavorite = !productCopy[index].isFavorite;

    dispatch({
      type: ActionTypes.MARK_FAVORITE,
      payload: {
        product: [...productCopy],
        numFavorites: productCopy[index].isFavorite
          ? ++numFavorites
          : --numFavorites,
      },
    });
  };

  return (
    <div className={styles.product} data-testid="productCard">
      <div className={styles.productTitle}>{product.title}</div>

      <p>
        <strong>
          Rating: {product.rating ? `${product.rating.rate}/5` : ""}
        </strong>
      </p>

      <p>
        <b>Price: ${+product.price}</b>
      </p>

      <p className={styles.productBody}>
        <span>
          <b>Description:</b>
        </span>
        <br />
        {product.description}
      </p>

      <span className={styles.actionBar}>
        <span
          className={`${styles.actionBarItem} ${
            product.isFavorite ? "active" : ""
          }`}
          role="button"
          data-testid="favButton"
          onClick={() => onFav()}
        >
          <div className={styles.starIcon}>&#9733;</div>{" "}
          <span className={styles.actionBarItemLabel}>
            {product.isFavorite ? "Remove from favorites" : "Add to favorites"}
          </span>
        </span>
      </span>
    </div>
  );
};
