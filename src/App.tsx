import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CommonLayout from "./layouts/CommonLayout";
import UserHome from "./features/Users/Home";
import ProductHome from "./features/Products/Home";
import EditUser from "./features/Users/Edit";
import EditProduct from "./features/Products/Edit";
import CodeVerification from "./features/Verification/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CommonLayout />} />
        <Route path="/users" element={<UserHome />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
        <Route path="/products" element={<ProductHome />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
        <Route path="/verification" element={<CodeVerification />} />
      </Routes>
    </Router>
  );
}

export default App;
