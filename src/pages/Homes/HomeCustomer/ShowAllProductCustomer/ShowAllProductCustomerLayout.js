import "./ShowAllProductCustomerLayout.css"
import ShowListProductCustomer from "../../../products/ShowListProductCustomer/ShowListProductCustomer";
export default function ShowAllProductCustomerLayout(){

    return(
        <>
            <div className="show-all-product-customer-cover">
                <div className="show-all-name-product">
                        <h3>Danh mục sản phẩm</h3>
                </div>
                <ShowListProductCustomer/>

            </div>
        </>
    )
}