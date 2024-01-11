import {Route, Routes} from "react-router-dom";
import Login from "./pages/Security/Customer/Login/Login";
import Register from "./pages/Security/Customer/Register/Register";
import SignIn from "./pages/Security/Supplier/SignIn/SignIn";
import SignUp from "./pages/Security/Supplier/SignUp/SignUp";
import HomeSimple from "./pages/HomeSimple";
import ListProduct from "./pages/products/ListProduct/ListProduct";

function App() {
  return (
      <Routes>
        <Route path={'/'} element={<HomeSimple/>}>
            <Route path={"login"} element={<Login/>}/>
            <Route path={"register"} element={<Register/>}/>
            <Route path={"signIn"} element={<SignIn/>}/>
            <Route path={"signUp"} element={<SignUp/>}/>
        </Route>
          <Route path={"customer"} element={<ListProduct/>}/>
      </Routes>
  );
}

export default App;
