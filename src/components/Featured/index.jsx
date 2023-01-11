import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Product";
import Loader from '../Loader'

const Featured = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
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
<div className="row  gy-3 mt-5">
  <h2 className="text-center">Our featured products</h2>
      {products.map((e) => (
        <Product product={e} key={e.id} />
      ))}
    </div>
    </section>
    
  );
};
export default Featured;
