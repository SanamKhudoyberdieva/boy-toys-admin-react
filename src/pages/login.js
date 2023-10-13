import ReactInputMask from "react-input-mask";
import logo from "../assets/img/profile.jpg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../api/axios.js";
import {
  checkphoneAction,
  login,
  setUserError,
  setUserLoading,
} from "../store/actions/authAction.js";
import { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [phone, setPhone] = useState("");
  const [codes, setCode] = useState("");
  const { isLoading, phones, code, first, second } = useSelector(
    (state) => state.authReducer
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const checkPhone = async (e) => {
    try {
      e.preventDefault();
      if (phone.length === 19) {
        if (first) {
          console.log("2");
          dispatch(setUserLoading());
          const sendphone = phone.replace(/[()]/g, "").split(" ").join("");

          const { data } = await axios.post("/auth/check-phone", {
            phone: sendphone,
          });
          console.log(data);

          if (data.url !== "/sign-up") throw new Error("Phone not found");
          if (data) dispatch(checkphoneAction(data));
          setCode(data.generateCode);
        } else {
          console.log("3");
          if (second) {
            dispatch(setUserLoading());
            const sendphone = phones;
            const { data } = await axios.post("/auth/sign-up", {
              phone: sendphone,
              code: codes,
            });

            dispatch(login(data));
            navigate("/");
          }
        }
      }
    } catch (err) {
      dispatch(setUserError(err.message));
    }
  };

  useEffect(() => {
    setCode(code);
    setPhone(phones);
  }, []);

  return (
    <main
      className="form-signin w-50 m-auto d-flex align-items-center justify-content-center "
      style={{ height: "100vh" }}
    >
      <form className="text-center from-control">
        <img className="mb-4 " src={logo} alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Kirish</h1>

        <div className="d-flex flex-column gap-3">
          <div className="form-floating">
            <ReactInputMask
              className="form-control"
              mask="+\9\98 (99) 999 99 99"
              disabled={phones}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label>Phone number</label>
          </div>
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              disabled={!second}
              value={codes}
              onChange={(e) => setCode(e.target.value)}
            />
            <label>Sms-code</label>
          </div>
        </div>
        <button
          className="btn btn-primary w-100 py-2 mt-4"
          type="submit"
          disabled={isLoading}
          onClick={checkPhone}
        >
          {isLoading ? "Loading..." : "Kirish"}
        </button>
        <p className="mt-5 mb-3 text-body-secondary">
          © 2021-{new Date().getFullYear()}
        </p>
      </form>
    </main>
  );
};

export default Login;
