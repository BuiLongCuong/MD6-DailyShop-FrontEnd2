import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import {storage} from "../../../firebase/firebase";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {v4} from "uuid";
import {add} from "../../../redux/service/productService";
import {getAllCategories} from "../../../redux/service/categoryService";

function AddProduct() {
    const accountSupplier = JSON.parse(localStorage.getItem("currentSupplier"))
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [photo, setPhoto] = useState([]);


    useEffect(() => {
        dispatch(getAllCategories())
    }, [])
    const categories = useSelector(({categories}) => {
        return categories.list
    })
    const Create = (value) => {
        value.photo = photo;
        try {
            dispatch(add(value)).then(()=>{
                navigate("/supplier/products")

            })
        } catch (e) {
        }
    }
    const handleChange = (e) => {
        const files = e.target.files;
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const photoRef = ref(storage, `image/${file.name + v4()}`);
            uploadBytes(photoRef, file).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setPhoto((prev) => [...prev, {photoName: url}]);
                });
            });
        }
    };

    return (
        <>
            <h1> ADD PRODUCT </h1>
            <Formik initialValues={{
                productName: '',
                description: '',
                price: '',
                stockQuantity: '',
                category: {
                    id: ""
                },
                account: {
                    id: accountSupplier.id
                }

            }}

                    onSubmit={Create}

            >
                <Form>
                    <Field name={"productName"} placeholder={"Enter ProductName"}/>
                    <Field name={"description"} placeholder={"Enter Description"}/>
                    <Field name={"price"} placeholder={" Enter Price"}/>
                    <Field name={"stockQuantity"} placeholder={" Enter StockQuantity"}/>
                    <Field name={"category.id"} as={"select"}>
                        {
                            categories.map((category) => {
                                return <>
                                    <option value={category.id}>{category.name}</option>
                                </>
                            })
                        }
                    </Field>
                    <Field name={"photo.photoName"} type={"file"} multiple onChange={handleChange}
                           placeholder={" Enter Photo"}/>
                    {
                        photo.map(p => (
                            <>
                                <img src={p.photoName} alt=""/>
                            </>
                        ))
                    }
                    <Field name={"account"} type={"hidden"} placeholder={" Enter Supplier"}/>
                    <button type={"submit"}>Save</button>
                </Form>
            </Formik>
        </>
    )
}

export default AddProduct;
