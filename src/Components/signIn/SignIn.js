import axios from "axios";
import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      let newErrors = {};
      if (!formData.email) {
        newErrors = { ...newErrors, email: "Email is required" };
      }
      if (!formData.password) {
        newErrors = { ...newErrors, password: "Password is required" };
      }
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
      setLoading(true)
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/login`,
        formData
      );
      if(response?.status == 200){
        toast.success(response.data.msg)
        navigate("/home")
        localStorage.setItem("userDetails", JSON.stringify(response.data.result))
        localStorage.setItem("token", response.data.token)
      }
    }catch(err){
      console.log("err", err)
      if(err?.response?.status == 400){
        toast.error(err.response.data.msg)
      }else{
        toast.error(err.message)
      }
    } finally{
      setLoading(false)
    }
  };
  return (
    <div className="container-fluid black-color">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-4 col-11 sign-box p-4">
          <h5 className="">Sign in</h5>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <div className="form-control">
                <input
                  type={showPassword ? "text" : "password"}
                  className="password-input"
                  id="exampleInputPassword1"
                  placeholder="Enter Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {showPassword ? (
                  <IoEyeOff
                    size={20}
                    onClick={togglePasswordVisibility}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <IoEye
                    size={20}
                    onClick={togglePasswordVisibility}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </div>
              {errors.password && <div className="text-danger">{errors.password}</div>}
            </div>
              <div className="d-flex justify-content-end">
                <Link to="/forget-password">Forget Password</Link>
              </div>
            <div className="d-grid gap-2 mt-3">
              <button className="btn btn-primary" type="submit" disabled={loading}>
              {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      aria-hidden="true"
                    ></span>
                    <span role="status" className="ms-2">Loading...</span>
                  </>
                ) : (
                  "Sign In"
                )}
                
              </button>
            </div>
          </form>
          <div className="mt-4 mb-4">
            <span className="account-span">No account?</span>
            <Link to="/sign-up" style={{ textDecoration: "none" }}>
              {" "}
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
