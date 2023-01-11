import './BtnActions.css'
const BtnActions = (props)=>{
    return(
        <>
        <div className="btns d-flex justify-content-between">
        <button className="btn-support" onClick={props.increase}>Increase😁</button>
        <button className="btn-support" onClick={props.reset}>reset</button>
        <button className="btn-support" onClick={props.decrease}>Decrease😥</button>
        </div>
        </>
    )
}
export default BtnActions ;