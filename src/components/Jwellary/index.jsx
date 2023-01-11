import { useEffect, useState } from "react";
import axios from "axios";
import Loader from '../Loader'
import ProductLayOut from "../ProductLayOut";

const Jwellary = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products/category/jewelery');
    setProducts(data);
  };
  if (!products) {
    return (
      <div className="row  vh-100">
       <Loader/>
      </div>
    );
  }

  return (
    <section className="container">
 <div className="row  mt-5">
      {products.map((e) => (
        <ProductLayOut product={e} key={e.id} />
      ))}
    </div>
    </section>
   
  );
};
export default Jwellary;