import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/core.css";
import "./assets/css/custom.css";
import "./assets/css/demo.css";
import "./assets/css/page-auth.css";
import "./assets/css/theme-default.css";
import { Route, Routes, Outlet } from "react-router-dom";
import Banner from "./pages/banner";
import Client from "./pages/client";
import Layout from "./layout/layout";
import Payment from "./pages/payment";
import Product from "./pages/product";
import Branches from "./pages/branches";
import AboutClient from "./pages/aboutClient";
import OrderDetail from "./pages/orderDetail";
import Login from "./pages/login.js";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        <Route path="/" element={<Product />} />
        <Route path="/client" element={<Client />} />
        <Route path="/client/:clientId" element={<AboutClient />} />
        <Route path="/client/:clientId/:orderId" element={<OrderDetail />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/branches" element={<Branches />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
