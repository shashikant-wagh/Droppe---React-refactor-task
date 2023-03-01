import React from "react";
import { Product } from "./product";
import { ProductInterface } from "../store/store.types";

interface Props {
  products: Array<ProductInterface>;
}

const ProductList: React.FC<Props> = ({ products }) => (
  <div>
    {products.map((product, i) => (
      <Product key={product.id} index={i} product={product} />
    ))}
  </div>
);

export default ProductList;
