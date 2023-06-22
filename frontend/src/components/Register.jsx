import { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import AuthUser from "./AuthUser";

const Register = () => {
  const navigate = useNavigate();
  const { http } = AuthUser();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setForm((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };

  const dataSubmit = async (e) => {
    e.preventDefault();
    http
      .post("/register", {
        name: form.name,
        email: form.email,
        password: form.password,
      })
      .then((res) => {
        navigate("/login");
      });
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h1>New User Create</h1>
        <form onSubmit={dataSubmit}>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="Name"
              onChange={onChangeHandle}
              value={form.name}
              name="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="Name"
              onChange={onChangeHandle}
              value={form.email}
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="password"
              onChange={onChangeHandle}
              value={form.password}
              name="password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
