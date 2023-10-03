import "./assets/css/core.css";
import "./assets/css/custom.css";
import "./assets/css/demo.css";
import "./assets/css/page-auth.css";
import "./assets/css/theme-default.css";
import Banner from "./pages/banner";
import Client from "./pages/client";
import Layout from "./layout/layout";
import Payment from "./pages/payment";
import Product from "./pages/product";
import Branches from "./pages/branches";
import AboutClient from "./pages/aboutClient";
import OrderDetail from "./pages/orderDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route  path="/client" element={<Client />} />
          <Route  path="/banner" element={<Banner />} />
          <Route  path="/payment" element={<Payment />} />
          <Route  path="/branches" element={<Branches />} />
          <Route  path="/about-client" element={<AboutClient />} />
          <Route  path="/order-detail" element={<OrderDetail />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App;
