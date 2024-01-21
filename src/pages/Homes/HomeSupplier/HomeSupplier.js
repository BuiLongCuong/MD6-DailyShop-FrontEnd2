import HeaderSupplier from "./HeaderSupplier/HeaderSupplier";
import BodySupplier from "./BodySupplier/BodySupplier";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCurrentSupplierDetails} from "../../../redux/service/supplierService";

export default function HomeSupplier() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCurrentSupplierDetails())
    }, []);
    return (
        <>
            <HeaderSupplier/>
            <BodySupplier/>
        </>
    )
}