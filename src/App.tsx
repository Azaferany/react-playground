import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CommonLayout from "./layouts/CommonLayout";
import UserHome from "./features/Users/Home";
import ProductHome from "./features/Products/Home";
import EditUser from "./features/Users/Edit";
import EditProduct from "./features/Products/Edit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route index path="/users" element={<UserHome />} />
          <Route index path="/users/edit/:id" element={<EditUser />} />
          <Route index path="/products" element={<ProductHome />} />
          <Route index path="/products/edit/:id" element={<EditProduct />} />
          <Route index path="/verification" element={<h1 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
