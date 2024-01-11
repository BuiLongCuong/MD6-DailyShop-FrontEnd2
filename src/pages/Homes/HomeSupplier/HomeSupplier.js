import Footer from "../../../components/Footer/Footer";
import HeaderSupplier from "./HeaderSupplier/HeaderSupplier";
import {Navbar} from "../../../components/Navbar/Navbar";
import BodySupplier from "./BodySupplier/BodySupplier";

export default function HomeSupplier(){
    return(
        <>
            <HeaderSupplier/>
            <Navbar/>
            <BodySupplier/>
            <Footer/>
        </>
    )
}