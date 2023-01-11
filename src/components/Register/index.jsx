import { useForm, Controller } from "react-hook-form";
import { useDispatch} from "react-redux";
import {validate} from "../../Redux/authonticationslice"

// select from react select
import Select from "react-select";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// navigation
import { useNavigate } from "react-router-dom";

function Register() {
  let navigate = useNavigate();
  // select options
  const Cities = [
    { value: 1, label: "Alexandria" },
    { value: 2, label: "Cairo" },
    { value: 3, label: "Elmansora" },
  ];
  const dispatch  = useDispatch()
    // form
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({ mode: "all" });

  return (
    <Form
      className="container component-height w-50 mt-5"
      onSubmit={handleSubmit((data) => {
        if(errors){
          dispatch(validate(true))
          navigate('/login')
        }
      })}
    >
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>User name</Form.Label>
        <Form.Control
          className="mb-2"
          type="text"
          placeholder="user name"
          {...register("name", {
            required: "This is required",
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "You should insert charcters only",
            },
          })}
        />
        {errors.name?.type === "required" && (
          <p className="alert alert-danger text-danger">
            {errors.name.message}
          </p>
        )}
        {errors.name?.type === "pattern" && (
          <p className="alert alert-danger text-danger">
            {errors.name.message}
          </p>
        )}
      </Form.Group>
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

      <Form.Group as={Col} controlId="formGridPassword">
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
      <Form.Group as={Col} controlId="confirmpass">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          className="mb-2"
          type="password"
          placeholder="Confirm Password"
          {...register("ConfirmPassword", {
            // custom validation
            validate: (val) => {if (watch("password") !== val) {
                return "You should confirm Yor password";}
            },
          })}
        />
        {errors.ConfirmPassword?.type === "validate" && (
          <p className="alert alert-danger text-danger">
            {errors.ConfirmPassword.message}
          </p>
        )}

      </Form.Group>
      {/* select */}
      <Form.Label>Choose your city</Form.Label>
       <Controller
        name="select"
        control={control}
        render={({ field }) => <Select 
          {...field} 
          options={Cities} 
        />}/> 
        {/* check box */}
        <Form.Group className="my-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      {/* submit button */}
      <div className="mx-auto btn-wrapper">

      <Button type="submit"  className="  btn btn-dark ">
        Submit
      </Button>
      </div>
    </Form>
  );
}

export default Register;
