import Header from "../../../components/Header/Header";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findAllByCategoryId} from "../../../redux/service/productService";

export default function ShowListProductByCategory() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const productList = useSelector(({products}) => {
        console.log(products.list)
        return products.list
    })
    useEffect(() => {
        dispatch(findAllByCategoryId(id))
    }, [])
    return (
        <>
            <Header/>
            <div className="content-category">

            </div>
        </>
    )
}