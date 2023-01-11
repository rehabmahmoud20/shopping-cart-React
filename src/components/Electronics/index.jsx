import { useEffect, useState } from "react";
import axios from "axios";
import Loader from '../Loader'
import ProductLayOut from "../ProductLayOut";

const Electronics = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products/category/electronics');
    setProducts(data);
  };
  if (!products) {
    return (
      <section >
 <div className="row  vh-100">
       <Loader/>
      </div>
      </section>
     
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
export default Electronics;