import { useState } from "react";
import Navbar from "./Navbar";
import AuthUser from "./AuthUser";

const Login = () => {
  const { http, setToken} = AuthUser();
  const [form, setForm] = useState({
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
      .post("/login", { email: form.email, password: form.password })
      .then((res) => {
        console.log(res);
        setToken(res.data.user, res.data.access_token);
      });
  };



  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h1>User Login</h1>
        <form onSubmit={dataSubmit}>
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
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
