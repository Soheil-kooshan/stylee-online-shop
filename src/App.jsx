import "./style/style.css";
import React, { Children, useEffect } from "react";
import Landing from "./pages/landing/landing";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProdInfoPage from "./pages/prod-info/ProdInfoPage";
import ProductsList from "./pages/PoroductList/ProductsPage";
import Cart from "./pages/cart/cart";
import Applayout from "./layout/Applayout";
import { fetchData } from "./store/productsSlice";
import { useDispatch } from "react-redux";
import tooman from "./helper/tooman";

function App() {
  console.log(tooman(10000));
  const router = createBrowserRouter([
    {
      element: <Applayout />,
      children: [
        { path: "/", element: <Landing /> },
        { path: "/Products", element: <ProductsList /> },
        { path: "/Cart", element: <Cart /> },
        { path: "/Products/:id", element: <ProdInfoPage /> },
      ],
    },
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
