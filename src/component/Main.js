import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, HaveProduct } from "../actions";

const Main = () => {
  const [productNum, setProductNum] = React.useState(1);
  const [productDisplay, setProductDisplay] = React.useState(false);
  const counter = useSelector((state) => state.counter);
  const logged = useSelector((state) => state.logged);
  const dispatch = useDispatch();
  console.log(productNum);

  function handleClick(num) {
    setProductNum(num);
  }

  return (
    <>
      <div className="main-comp">
        <article className="artic1">
          <img
            src={require(`../images/icon-previous.svg`).default}
            alt="product"
            className="previous-product"
            onClick={() =>
              setProductNum((prev) => {
                if (prev === 1) return 4;
                else return prev - 1;
              })
            }
          />
          <img
            src={
              !productDisplay
                ? require(`../images/image-product-${productNum}.jpg`)
                : require(`../images/image-product-1.jpg`)
            }
            alt="product"
            onClick={() => {
              setProductDisplay(true);
            }}
          />
          <img
            src={require(`../images/icon-next.svg`).default}
            alt="product"
            className="next-product"
            onClick={() =>
              setProductNum((prev) => {
                if (prev === 4) return 1;
                else return prev + 1;
              })
            }
          />
          <section>
            <img
              src={require("../images/image-product-1-thumbnail.jpg")}
              onClick={() => handleClick(1)}
              alt="thumb-1"
            />
            <img
              src={require("../images/image-product-2-thumbnail.jpg")}
              onClick={() => handleClick(2)}
              alt="thumb-2"
            />
            <img
              src={require("../images/image-product-3-thumbnail.jpg")}
              onClick={() => handleClick(3)}
              alt="thumb-3"
            />
            <img
              src={require("../images/image-product-4-thumbnail.jpg")}
              onClick={() => handleClick(4)}
              alt="thumb-4"
            />
          </section>
        </article>
        <article className="artic2">
          <p>Sneaker Company</p>
          <h1>Fall Limited Edition Sneakers</h1>
          <h5>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </h5>
          <section>
            <h2>$125.00</h2>
            <h5>50%</h5>
          </section>
          <span>$250.00</span>
          <div className="cart-add">
            <section className="btns-cart">
              <img
                src={require("./../images/icon-minus.svg").default}
                onClick={() => {
                  dispatch(decrement());
                }}
                alt="logo"
              />
              <span>{counter}</span>
              <img
                src={require("./../images/icon-plus.svg").default}
                onClick={() => {
                  dispatch(increment());
                }}
                alt="logo"
              />
            </section>
            <button
              onClick={() => {
                dispatch(HaveProduct());
                console.log(logged);
              }}
            >
              <img
                src={require("./../images/icons8-shopping-cart-50.png")}
                alt="logo"
              />
              Add to cart
            </button>
          </div>
        </article>
      </div>
      {productDisplay && (
        <div className="display">
          <article className="artic1 display-product">
            <img
              src={require(`../images/icon-previous.svg`).default}
              alt="product"
              className="previousproduct"
              onClick={() =>
                setProductNum((prev) => {
                  if (prev === 1) return 4;
                  else return prev - 1;
                })
              }
            />
            <img
              src={require(`../images/image-product-${productNum}.jpg`)}
              alt="product"
            />
            <img
              src={require(`../images/icon-next.svg`).default}
              alt="product"
              className="nextproduct"
              onClick={() =>
                setProductNum((prev) => {
                  if (prev === 4) return 1;
                  else return prev + 1;
                })
              }
            />
            <section>
              <img
                src={require("../images/image-product-1-thumbnail.jpg")}
                onClick={() => handleClick(1)}
                alt="thumb-1"
              />
              <img
                src={require("../images/image-product-2-thumbnail.jpg")}
                onClick={() => handleClick(2)}
                alt="thumb-2"
              />
              <img
                src={require("../images/image-product-3-thumbnail.jpg")}
                onClick={() => handleClick(3)}
                alt="thumb-3"
              />
              <img
                src={require("../images/image-product-4-thumbnail.jpg")}
                onClick={() => handleClick(4)}
                alt="thumb-4"
              />
            </section>
            <img
              className="close"
              src={require(`../images/icon-close.svg`).default}
              alt="product"
              onClick={() => {
                setProductDisplay(false);
              }}
            />
          </article>
        </div>
      )}
    </>
  );
};

export default Main;
