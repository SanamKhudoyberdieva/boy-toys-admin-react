import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/core.css";
import "./assets/css/custom.css";
import "./assets/css/demo.css";
import "./assets/css/page-auth.css";
import "./assets/css/theme-default.css";
import Layout from "./layout/layout";
import AboutClient from "./pages/aboutClient";
import Banner from "./pages/banner";
import Branches from "./pages/branches";
import Client from "./pages/client";
import OrderDetail from "./pages/orderDetail";
import Payment from "./pages/payment";
import Product from "./pages/product";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/client" element={<Client />} />
          <Route path="/about-client" element={<AboutClient />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/order-detail" element={<OrderDetail />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
