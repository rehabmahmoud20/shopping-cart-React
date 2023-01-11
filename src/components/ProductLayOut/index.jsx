import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateCartCount } from "../../Redux/shoppingslice";
import { updateCartArray } from "../../Redux/shoppingslice";
import { useEffect, useState } from "react";

const ProductLayOut = (props) => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartAmount.products );
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    if ( cartList.some((e) => e.id === props.product.id)) {
   setFlag(true)}},[]);

  const increaseCartVal = (prod) => {
    dispatch(updateCartCount(1));
    dispatch(updateCartArray(prod));
    setFlag(true)
  };
  const { image, title, price, id } = props.product;
  return (
    <div className="col-md-4 mb-5  text-center container ">
      <div className="content p-2 bg-white border border-rounded  rounded">
        <Link to={`/Productcomponent/${id}`}>
          <div className="mb-3" style={{ height: "300px" }}>
            <img src={image} alt="product" className=" w-100 h-100 " /> 
          </div>
        </Link>
        <div className="text-container">
          <div className="text-content mx-auto w-75">{title}</div>
        </div>
        <span className="mb-2 d-block fst-italic fw-bold">{price } Egp</span>
        <button
          className= "btn btn-info w-50  mx-auto "
          onClick={() => increaseCartVal(props.product)}
          disabled={flag}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default ProductLayOut;