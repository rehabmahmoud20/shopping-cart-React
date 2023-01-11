import notfound from "../../assets/notfound.png"
const Notfound= ()=>{
    return(
        <section className="container component-height">
  <div className="row justify-content-center ">
            <div className="col-md-7 ">
            <img src={notfound} alt="not found" className="w-100 mx-auto " />

            </div>
        </div>
        </section>
      
     
    )
}
export default Notfound;