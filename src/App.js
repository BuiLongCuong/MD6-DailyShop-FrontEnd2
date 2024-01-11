import {Route, Routes} from "react-router-dom";
import Login from "./pages/Security/Customer/Login/Login";
import Register from "./pages/Security/Customer/Register/Register";
import SignIn from "./pages/Security/Supplier/SignIn/SignIn";
import SignUp from "./pages/Security/Supplier/SignUp/SignUp";
import HomeSimple from "./pages/HomeSimple";
import ListProduct from "./pages/products/ListProduct/ListProduct";
import {UpdateProduct} from "./pages/products/UpdateProduct/UpdateProduct";
import {InformationCustomer} from "./pages/Information/Customer/InforCus";

function App() {
  return (
      <Routes>
        <Route path={'/'} element={<HomeSimple/>}>
        </Route>
          <Route path={"login"} element={<Login/>}/>
          <Route path={"register"} element={<Register/>}/>
          <Route path={"signIn"} element={<SignIn/>}/>
          <Route path={"signUp"} element={<SignUp/>}/>
          <Route path={"supplier/products"} element={<ListProduct/>}/>
          <Route path={"edit/:id"} element={<UpdateProduct/>}></Route>
          <Route path={"information"} element={<InformationCustomer/>}/>
      </Routes>
  );
}

export default App;
