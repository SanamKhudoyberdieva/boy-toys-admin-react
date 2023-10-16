import ReactInputMask from "react-input-mask";
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
    <main>
        <h5 className="card-header">Boy Toys Admin</h5>
        <div className="card-body">
        <div className="d-flex align-items-center justify-content-center h-px-500">
          <form className="w-px-400 border rounded p-3 p-md-5">
            <h3 className="mb-3">Kirish</h3>
            <div className="mb-3">
              <label className="form-label">Phone number</label>
              <ReactInputMask
              className="form-control"
              mask="+\9\98 (99) 999 99 99"
              disabled={phones}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            </div>
            <div className="mb-3">
              <label className="form-label">Code</label>
              <input type="password" 
                className="form-control" 
                disabled={!second}
                value={codes}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <button
              className="btn btn-primary w-100 py-2 mt-4"
              type="submit"
              disabled={isLoading}
              onClick={checkPhone}
            >
              {isLoading ? "Loading..." : "Kirish"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
