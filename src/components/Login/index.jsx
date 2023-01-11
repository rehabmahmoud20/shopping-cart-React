import { useForm } from "react-hook-form";
// navigation
import { useNavigate } from "react-router-dom";
// bootstrap form
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function Login() {
    const navigate = useNavigate()

const submithandler=()=>{
if(errors){
    navigate('/home')
}
}

  // form
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm({ mode: "onTouched" | "onBlur" });
  console.log(errors);
  return (
    <Form 
      className="component-height container pt-5 w-50 "
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          className="mb-2"
          type="email"
          placeholder="Enter email"
          {...register("email", { required: "This is required" })}
        />
        {errors.email?.type === "required" && (
          <p className="alert alert-danger text-danger">
            {errors.email.message}
          </p>
        )}
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword" className="mb-4">
        <Form.Label>Password</Form.Label>
        <Form.Control
          className="mb-2"
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "This is required",
            minLength: { value: 8, message: "Minmum length is 8" },
          })}
        />
        {errors.password?.type === "required" && (
          <p className="alert alert-danger text-danger">
            {errors.password.message}
          </p>
        )}
        {errors.password?.type === "minLength" && (
          <p className="alert alert-danger text-danger">
            {errors.password.message}
          </p>
        )}
      </Form.Group>
    

  
    
      {/* submit button */}
      <div className="mx-auto btn-wrapper">
      <Button  type="submit" className="  btn btn-dark ">
        Submit
      </Button>
      </div>
      
    </Form>
  );
}

export default Login;
