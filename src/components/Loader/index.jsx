import RingLoader from "react-spinners/RingLoader";
import {  useState } from "react";



export const Loader = () => {
let [color, setColor] = useState("#232F3E");

  return (
    <div className=" h-50 mt-5 justify-content-center  align-items-center d-flex">
    <RingLoader
      color={color}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </div>
  )
}
export default Loader;
