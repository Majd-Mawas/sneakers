import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clear, DontHaveProduct } from "../actions";

const Header = () => {
  const [menuToggle, setMenuToggle] = React.useState(false);
  const counter = useSelector((state) => state.counter);
  const logged = useSelector((state) => state.logged);
  const dispatch = useDispatch();
  function deleteProduct() {
    dispatch(clear());
    dispatch(DontHaveProduct());
  }

  return (
    <header>
      <article className="head1">
        <img
          src={require("./../images/icon-menu.svg").default}
          className="menu-btn"
          onClick={()=>{setMenuToggle(true)}}
          alt="logo"
        />
        <img src={require("./../images/logo.svg").default} alt="logo" />
        <section className={menuToggle?"menu-toggle":""}>
          {menuToggle && <img
            src={require("./../images/icon-close.svg").default}
            className="close-btn"
            alt="logo"
            onClick={()=>{setMenuToggle(false)}}
          />}
          <span>Collections</span>
          <span>Men</span>
          <span>Women</span>
          <span>About</span>
          <span>Contact</span>
        </section>
      </article>
      <article className="head2">
        <div className="head-cart">
          <img src={require("./../images/icon-cart.svg").default} alt="logo" />
          {logged && counter > 0 &&<span>{counter}</span>}
        </div>
        <section className="product-btn">
          <h4>Cart</h4>

          {logged && counter > 0 ? (
            <>
              <div className="grid-cart">
                <img
                  src={require(`../images/image-product-1.jpg`)}
                  alt="product"
                  className="product-cart"
                />
                <h5>Fall Limited Edition Sneakers</h5>
                <h5>
                  $125.00 x {counter}{" "}
                  <span> ${(counter * 125.0).toFixed(2)} </span>
                </h5>
                <img
                  src={require(`../images/icon-delete.svg`).default}
                  alt="delete"
                  width="20px"
                  className="delete"
                  onClick={deleteProduct}
                />
              </div>
              <button>Chechout</button>
            </>
          ) : (
            <div className="notLogged">Your Cart is Empty</div>
          )}
        </section>
        <img
          src={require("./../images/image-avatar.png")}
          width="25px"
          alt="avatar"
        />
      </article>
    </header>
  );
};

export default Header;
