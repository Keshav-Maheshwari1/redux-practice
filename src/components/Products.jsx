import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";
const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data); // Use Redux state
  const status = useSelector((state) => state.product.status);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAdd = (product) => {
    console.log("Adding product:", product);
    dispatch(add(product));
  };

  if (status === "loading") return <div>{STATUSES.LOADING}...</div>;
  if (status === "error") return <div>{STATUSES.ERROR}...</div>;

  return (
    <div className="productsWrapper">
      {products.length === 0 ? (
        <div>No products available</div>
      ) : (
        products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={() => handleAdd(product)} className="btn">
              Add to Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Products;

// const fetchProducts = async () => {
//   const response = await fetch("https://fakestoreapi.com/products");
//   const data = await response.json();
//   setProducts(data);
// };
// fetchProducts();
