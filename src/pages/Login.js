import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { BASE_URL, AUTH_PATH } from "../utils/constants";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(
      yup.object().shape({
        identifier: yup.string().required("Please enter your username"),
        password: yup.string().required("Please enter your password"),
      })
    ),
  });

  const [, setAuth] = useContext(AuthContext);

  const history = useHistory();

  const onSubmit = async (data) => {
    setSubmitting(true);
    setLoginError(null);

    try {
      const response = await axios.post(`${BASE_URL}${AUTH_PATH}`, data);
      setAuth(response.data);
      console.log(response.data);
      history.push("/");
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      <div className="loginError">{loginError && <p>{loginError}</p>}</div>
      <div className="container">
        <h2>Login</h2>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <fieldset disabled={submitting}>
            <div className="form__item">
              <label>Username</label>
              <input
                name="identifier"
                placeholder="Username"
                type="text"
                ref={register}
              />
              {errors.identifier && (
                <p className="form__error">{errors.identifier.message}</p>
              )}
            </div>
            <div className="form__item">
              <label>Password</label>
              <input
                name="password"
                placeholder="Password"
                type="password"
                ref={register}
              />
              {errors.password && (
                <p className="form__error">{errors.password.message}</p>
              )}
            </div>
            <button className="form__btn" type="submit">
              {submitting ? "Logging in..." : "Login"}
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Login;
