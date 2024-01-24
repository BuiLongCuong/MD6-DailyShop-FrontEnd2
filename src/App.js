import {Route, Routes} from "react-router-dom";
import Login from "./pages/Security/Customer/Login/Login";
import Register from "./pages/Security/Customer/Register/Register";
import SignIn from "./pages/Security/Supplier/SignIn/SignIn";
import SignUp from "./pages/Security/Supplier/SignUp/SignUp";
import HomeSimple from "./pages/HomeSimple";
import ListProduct from "./pages/products/ListProduct/ListProduct";
import HomeSupplier from "./pages/Homes/HomeSupplier/HomeSupplier";
import {UpdateProduct} from "./pages/products/UpdateProduct/UpdateProduct";
import {InformationCustomer} from "./pages/Information/Customer/LoginFirst/InforCus";
import AddProduct from "./pages/products/AddProduct/AddProduct";
import DetailProduct from "./pages/products/DetailProduct/DetailProduct";
import ShowListProduct from "./pages/products/ShowListProduct/ShowListProduct";
import DetailProductSupplier from "./pages/products/DetailProductSupplier/DetailProductSupplier";
import {InformationSupplier} from "./pages/Information/Supplier/SignInFirst/InforSupp";
import {useEffect} from "react";
import {getCurrentSupplierDetails} from "./redux/service/supplierService";
import {useDispatch} from "react-redux";
import HomeCustomer from "./pages/Homes/HomeCustomer/HomeCustomer";
import DetailProductCustomer from "./pages/products/DetailProductCustomer/DetailProductCustomer";
import Cart from "./pages/Cart/Cart";
import {getCurrentCustomerDetails} from "./redux/service/customerService";
import ShowListProductByCategory from "./pages/products/ShowListProductByCategory/ShowListProductByCategory";
import Pay from "./pages/Pay/Pay";
import TransactionHistory from "./pages/TransactionHistory/TransactionHistory";
import {EditInforSupp} from "./pages/Information/Supplier/EditInforSupp/EditInforSupp";



function App() {
    const dispatch =useDispatch()
    useEffect(() => {
        dispatch(getCurrentSupplierDetails())
        dispatch(getCurrentCustomerDetails())
    }, []);
  return (
      <Routes>
        <Route path={'/'} element={<HomeCustomer/>}>
        </Route>
          <Route path={"login"} element={<Login/>}/>
          <Route path={"register"} element={<Register/>}/>
          <Route path={"signIn"} element={<SignIn/>}/>
          <Route path={"signUp"} element={<SignUp/>}/>
          <Route path={"supplier/products/detail/:id"} element={<DetailProductSupplier/>}/>
          <Route path={"informationCus"} element={<InformationCustomer/>}/>
          <Route path={"informationSupp"} element={<InformationSupplier/>}/>
          <Route path={"category/:id"} element={<ShowListProductByCategory/>}/>
          <Route path={"pay"} element={<Pay/>}/>



            <Route path={"supplier"} element={<HomeSupplier/>}>
                <Route path={"products"} element={<ShowListProduct/>}/>
                <Route path={"add"} element={<AddProduct/>}/>
                <Route path={"edit/:id"} element={<UpdateProduct/>}/>
                <Route path={"orderManagement"} element={<OrderListForSupplier/>}/>
                <Route path={"detail/:id"} element={<DetailProductSupplier/>}/>
                <Route path={"editInfoSupp/:id"} element={<EditInforSupp/>}/>

            </Route>
            <Route path={"cart"} element={<Cart/>}/>
            <Route path={"test"} element={<BasicMenu/>}/>
            <Route path={"history/:id"} element={<TransactionHistory/>}/>
            <Route path={"customer"} element={<HomeCustomer/>}/>
            <Route path={"customer/products/detail/:id"} element={<DetailProductCustomer/>}/>
            <Route path={"editInfoCus/:id"} element={<EditInforCus/>}/>
          <Route path={"customer/products/search"} element={<SearchProduct/>}/>
          <Route path={"customer/products/search/look"} element={<SearchProductByPrice/>}/>





        </Routes>
    );
}

export default App;
