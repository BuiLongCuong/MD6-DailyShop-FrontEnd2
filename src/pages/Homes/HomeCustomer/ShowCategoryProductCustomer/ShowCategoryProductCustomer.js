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
                                    <Link className={"linkCategory"} to={"/category/" + category.id}>
                                        <div className="form-category">
                                            <div className="image-category">
                                                <div className="form-imageCate">
                                                    <img
                                                        src="https://lavenderstudio.com.vn/wp-content/uploads/2019/09/chup-hinh-san-pham-my-pham-spa-15-839x1024.jpg"
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