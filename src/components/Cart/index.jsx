import emptyCart from "../../assets/emptyCart.png";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Loader from "../Loader";

import {
  updateCartCount,
  decreaseCartCount,
  updateCartArray,
  removeItem,
} from "../../Redux/shoppingslice";

const Cart = () => {
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const globalProducts = useSelector((state) => state.cartAmount.products);
  const totalPrice = useSelector((state) => state.cartAmount.totalPrice);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  // increase the total cart amout value and the item quantity
  const increaseQantity = (prod) => {
    dispatch(updateCartCount(1));
    dispatch(updateCartArray(prod));
  };
  // decrease the total cart amout value and the item quantity
  const decreaseVal = (e) => {
    dispatch(decreaseCartCount(e));
  };
  // remove item
  const remove = (e) => {
    dispatch(removeItem(e));
  };
 

  return (
    <>
      {loader ? (
        <div className=" vh-100">
          <Loader />
        </div>
      ) : (
        <>
          {globalProducts.length ? (
            <>
              {globalProducts.map((e) => {
                return (
                  <section className="container  component-height">
                    <article className="row light" key={e.id}>
                    <p className="h2 my-4">total Price {totalPrice.toFixed(2)} $</p>
                    <div className="col-md-6 mb-5">
                      <div className="img-content ">
                        <img
                          src={e.image}
                          className="w-75  rounded"
                          alt="product"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 ">
                      <div className="discription">
                        <p className="fw-bold mb-4 fs-1">{e.title}</p>

                        <p className=" mb-5">{e.description}</p>
                        <p className=" mb-5 fs-5 text-muted">
                          Rate : {e.rating.rate} ⭐⭐⭐
                        </p>

                        <p className="fst-italic fw-bolder text-white fs-2 bg-info rounded p-1">
                          {e.productPrice.toFixed(2)} EGP
                        </p>
                        <p className=" mb-5 fs-3">{e.category}</p>
                        <div className="actions d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-3">
                          <button
                            className="border p-3 "
                            onClick={() => decreaseVal(e)}
                          >
                            -
                          </button>
                          <div>{e.quantity}</div>
                          <button
                            className="border p-3 "
                            onClick={() => increaseQantity(e)}
                          >
                            +
                          </button>
                          </div>
                        
                          <button className="bg-warning border p-3  text-uppercase fw-bold " onClick={() => remove(e)}>remove</button>
                        </div>
                      </div>
                    </div>
                  </article>
                  </section>
                
                );
              })}
            </>
          ) : (
            <div className="container component-height">
 <div className="row justify-content-center">
              <p className="fs-1 mt-4 text-center"> Cart is empty 😥</p>
              <div className="col-sm-6">
                <img src={emptyCart} alt=" empty cart" />
              </div>
            </div>
            </div>
           
          )}
        </>
      )}
    </>
  );
};
<Cart />;
export default Cart;
