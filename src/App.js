import {Route, Routes} from "react-router-dom";
import Login from "./pages/Security/Customer/Login/Login";
import Register from "./pages/Security/Customer/Register/Register";
import SignIn from "./pages/Security/Supplier/SignIn/SignIn";
import SignUp from "./pages/Security/Supplier/SignUp/SignUp";
import HomeSimple from "./pages/HomeSimple";
import ListProduct from "./pages/products/ListProduct/ListProduct";
import HomeSupplier from "./pages/Homes/HomeSupplier/HomeSupplier";
import {UpdateProduct} from "./pages/products/UpdateProduct/UpdateProduct";
import {InformationCustomer} from "./pages/Information/Customer/InforCus";
import AddProduct from "./pages/products/AddProduct/AddProduct";
import DetailProduct from "./pages/products/DetailProduct/DetailProduct";
import ShowListProduct from "./pages/products/ShowListProduct/ShowListProduct";
import {InformationSupplier} from "./pages/Information/Supplier/InforSupp";

function App() {
  return (
      <Routes>
        <Route path={'/'} element={<HomeSimple/>}>
        </Route>
          <Route path={"login"} element={<Login/>}/>
          <Route path={"register"} element={<Register/>}/>
          <Route path={"signIn"} element={<SignIn/>}/>
          <Route path={"signUp"} element={<SignUp/>}/>
          <Route path={"customer"} element={<ListProduct/>}/>
          <Route path={"supplier"} element={<HomeSupplier/>}/>
          <Route path={"/supplier/products/detail/:id"} element={<DetailProduct/>}/>
          <Route path={"supplier/products"} element={<ListProduct/>}/>
          <Route path={"edit/:id"} element={<UpdateProduct/>}/>
          <Route path={"information"} element={<InformationCustomer/>}/>
          <Route path={"add"} element={<AddProduct/>}/>
          {/*<Route path={"update"} element={<UpdateProduct/>}/>*/}
          <Route path={"informationCus"} element={<InformationCustomer/>}/>
          <Route path={"informationSupp"} element={<InformationSupplier/>}/>
      </Routes>
  );
}

export default App;
