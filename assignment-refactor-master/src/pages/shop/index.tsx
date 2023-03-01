import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.types";
import { Button } from "../../components/elements/button";
import CreateProduct from "../../components/create-product";
import ProductList from "../../components/product-list-components";

import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import styles from "./styles.module.css";
import logo from "../../images/droppe-logo.png";

const ShopApp: React.FC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { products, message, numFavorites } = useSelector(
    (state: RootState) => state
  );

  useEffect(() => {
    document.title = "Droppe refactor app";
  }, []);

  return (
    <>
      <div className={styles.logo}>
        <div className={["container", styles.logoImageWrapper].join(" ")}>
          <img src={logo} alt="logo" className={styles.logoImage} />
        </div>
      </div>

      <>
        <span
          className={["container", styles.main, styles.headerImageWrapper].join(
            " "
          )}
        >
          <img src={img1} alt="img1" className={styles.img} />
          <img src={img2} alt="img2" className={styles.img} />
        </span>
      </>

      <div className={["container", styles.main].join(" ")}>
        <div className={styles.buttonWrapper}>
          <span role="button">
            <Button onClick={() => setIsOpen((state) => !state)}>
              Send product proposal
            </Button>
          </span>

          {message ? (
            <div className={styles.messageContainer}>
              <i>{message}</i>
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className={styles.statsContainer}>
          <span>Total products: {products.length}</span>
          {" - "}
          <span>Number of favorites: {numFavorites}</span>
        </div>

        {products?.length ? <ProductList products={products} /> : <></>}
      </div>

      <CreateProduct isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default ShopApp;
