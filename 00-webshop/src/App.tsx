import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/global/HomePage.tsx";
import ContactUs from "./pages/global/ContactUs.tsx";
import Shops from "./pages/global/Shops.tsx";
import Cart from "./pages/global/Cart.tsx";
import SingleProduct from "./pages/global/SingleProduct.tsx";
import AdminHome from "./pages/admin/AdminHome.tsx";
import AddProduct from "./pages/admin/AddProduct.tsx";
import EditProduct from "./pages/admin/EditProduct.tsx";
import MaintainProducts from "./pages/admin/MaintainProducts";
import MaintainCategories from "./pages/admin/MaintainCategories.tsx";
import MaintainShops from "./pages/admin/MaintainShops.tsx";
import Login from "./pages/auth/Login.tsx";
import Signup from "./pages/auth/Signup.tsx";
import NotFound from "./pages/global/NotFound.tsx";
import NavigationBar from "./components/NavigationBar.tsx";

function App() {
	return (
		<>
			<NavigationBar />

			<Routes>
				<Route path="" element={<HomePage />} />
				<Route path="/contact" element={<ContactUs />} />
				<Route path="/shops" element={<Shops />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/product/:id" element={<SingleProduct />} />

				<Route path="/admin" element={<AdminHome />} />
				<Route path="/admin/add-product" element={<AddProduct />} />
				<Route path="/admin/edit-product/:id" element={<EditProduct />} />
				<Route path="/admin/maintain-products" element={<MaintainProducts />} />
				<Route path="/admin/maintain-categories" element={<MaintainCategories />} />
				<Route path="/admin/maintain-shops" element={<MaintainShops />} />

				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />

				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
