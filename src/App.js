import {Route, Routes} from "react-router-dom";
import Login from "./pages/Security/Customer/Login/Login";
import Register from "./pages/Security/Customer/Register/Register";
import SignIn from "./pages/Security/Supplier/SignIn/SignIn";
import SignUp from "./pages/Security/Supplier/SignUp/SignUp";
import HomeSimple from "./pages/HomeSimple";
import HomeSupplier from "./pages/Homes/HomeSupplier/HomeSupplier";
import {UpdateProduct} from "./pages/products/UpdateProduct/UpdateProduct";
import {InformationCustomer} from "./pages/Information/Customer/InforCus";
import AddProduct from "./pages/products/AddProduct/AddProduct";
import DetailProduct from "./pages/products/DetailProduct/DetailProduct";
import ShowListProduct from "./pages/products/ShowListProduct/ShowListProduct";
import DetailProductSupplier from "./pages/products/DetailProductSupplier/DetailProductSupplier";
import {InformationSupplier} from "./pages/Information/Supplier/InforSupp";
import HomeCustomer from "./pages/Homes/HomeCustomer/HomeCustomer";

function App() {
  return (
      <Routes>
        <Route path={'/'} element={<HomeSimple/>}>
        </Route>
          <Route path={"login"} element={<Login/>}/>
          <Route path={"register"} element={<Register/>}/>
          <Route path={"signIn"} element={<SignIn/>}/>
          <Route path={"signUp"} element={<SignUp/>}/>
          <Route path={"supplier/products/detail/:id"} element={<DetailProductSupplier/>}/>
          <Route path={"informationCus"} element={<InformationCustomer/>}/>
          <Route path={"informationSupp"} element={<InformationSupplier/>}/>


        <Route path={"supplier"} element={<HomeSupplier/>}>
          <Route path={"products"} element={<ShowListProduct/>}/>
          <Route path={"add"} element={<AddProduct/>}/>
          <Route path={"edit/:id"} element={<UpdateProduct/>}/>
          <Route path={"detail"} element={<DetailProductSupplier/>}/>
        </Route>
          <Route path={"customer"} element={<HomeCustomer/>}/>

      </Routes>
  );
}

export default App;
