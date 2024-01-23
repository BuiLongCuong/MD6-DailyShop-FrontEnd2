import "./ShowCategoryProductCustomer.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllCategories} from "../../../../redux/service/categoryService";
import {listClasses} from "@mui/material";
import {Link} from "react-router-dom";
export default function ShowCategoryProductCustomer(){
    const dispatch = useDispatch();
    const category = useSelector(({categories}) => {
        console.log(categories.list)
        return categories.list
    })
    useEffect(() => {
        dispatch(getAllCategories())
    }, []);
    return(
        <>
            <div className="category-all-product">
                <div className="header-category">
                    <h5>Danh Mục</h5>
                </div>
                <div className="body-category">
                    {
                        category && category.map((category) => {
                            return (
                                <>
                                    <Link to={"/category/" + category.id} className={"category-text"}>
                                        <div className="form-category">
                                            <div className="image-category">
                                                <div className="form-imageCate">
                                                    <img
                                                        src={category.photoCategory}
                                                        alt=""/>
                                                </div>
                                            </div>
                                            <div className="nameCategory">
                                                {category.name}
                                            </div>
                                        </div>
                                    </Link>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}