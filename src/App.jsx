import "./style/style.css";
import React, { Children } from "react";
import Landing from "./pages/landing/landing";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import ProdInfoPage from "./pages/prod-info/ProdInfoPage";
import ProductsPage from "./pages/PoroductList/ProductsPage";
import Cart from "./pages/cart/cart";
import store from "./store/store";
import { Provider } from "react-redux";
import Applayout from "./layout/Applayout";
function App() {
  const router = createBrowserRouter([
    {
      element: <Applayout />,
      children: [
        { path: "/", element: <Landing /> },
        { path: "/Prod/:ProdID", element: <ProdInfoPage /> },
        { path: "/ProductsPage", element: <ProductsPage /> },
        { path: "/<CartPage />", element: <Cart /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
