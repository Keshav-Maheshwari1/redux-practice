import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const items = useSelector((state)=>state.cart);
  return (
    <div className="flex justify-between">
      <span className="logo">REDUX STORE</span>
      <div className="">
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart items: {items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
