import {useState} from "react";
import {Link} from "react-router-dom";
import "./pagination.css"

export const Pagination=({total,current, changePage})=>{
    const [pages,setPages]=useState(Array.from({ length: total }, (_, index) => index))

    return(<>
        <div className="pagination">
            <div className={"pagination-display"}>
                <Link className={`item prev-next ${current === 0 ? "disabled":""}`} to={`/customer?page=${current - 1}`}
                      onClick={() => changePage(current - 1)}
                ><i className="fa-solid fa-chevron-left"></i></Link>
                {pages?.map(index =>
                    <Link className= { `item ${ current === index ? "currentPage" : ""}`}
                          to={`/customer?page=${index}`}
                          onClick={() => changePage(index)}
                    >{index + 1}</Link>
                )}
                    <Link className={`item prev-next ${current === (total - 1) ? "disabled":""}`}
                          to={`/customer?page=${current + 1}`}
                          onClick={() => changePage(current + 1)}
                    ><i className="fa-solid fa-chevron-right"></i>
                    </Link>
                </div>
        </div>
        <div>

        </div>
    </>)
}