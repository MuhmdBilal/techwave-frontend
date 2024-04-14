import axios from "axios";
import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clearing error when user starts typing again
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let newErrors = {};
      if (!formData.email) {
        newErrors = { ...newErrors, email: "Email is required" };
      }
      if (!formData.newPassword) {
        newErrors = { ...newErrors, newPassword: "New Password is required" };
      }
      if (!formData.confirmPassword) {
        newErrors = {
          ...newErrors,
          confirmPassword: "Confirm Password is required",
        };
      }
      if (formData.newPassword !== formData.confirmPassword) {
        newErrors = { ...newErrors, confirmPassword: "Passwords do not match" };
      }
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/update-password`,
        formData
      );
      if (response) {
        toast.success(response?.data?.msg);
        navigate("/");
      }
    } catch (e) {
      console.error("Error:", e);
      if (e.response.status == 400) {
        toast.error(e?.response?.data?.msg);
      } else {
        toast.error(e?.message);
      }
    } finally {
      setLoading(false);
    }
  };
  console.log("erroe", errors.email);
  return (
    <div className="container-fluid black-color">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-4 col-11 sign-box p-4">
          <h5 className="">Sign in</h5>
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
            {errors.email && (
              <div className="text-danger">{errors.email}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              New Password
            </label>
            <div className="form-control">
              <input
                type={showPassword ? "text" : "password"}
                className="password-input"
                id="exampleInputPassword1"
                placeholder="Enter New Password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
              />
              <span
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
              </span>
            </div>
            {errors.newPassword && (
              <div className="text-danger">{errors.newPassword}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <div className="form-control">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="password-input"
                id="exampleInputPassword1"
                placeholder="Enter Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <span
                onClick={toggleConfirmPasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                {showConfirmPassword ? (
                  <IoEyeOff size={20} />
                ) : (
                  <IoEye size={20} />
                )}
              </span>
            </div>
            {errors.confirmPassword && (
              <div className="text-danger">{errors.confirmPassword}</div>
            )}
          </div>
          <div className="row">
            <div className="col-md-6 p-1">
              <div className="d-grid gap-2 mt-3">
                <button
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm"
                        aria-hidden="true"
                      ></span>
                      <span role="status" className="ms-2">
                        Loading...
                      </span>
                    </>
                  ) : (
                    "Reset Password"
                  )}
                </button>
              </div>
            </div>
            <div className="col-md-6 p-1">
              <div className="d-grid gap-2 mt-3">
                <button
                  className="btn btn-secondary"
                  onClick={() => navigate("/")}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
