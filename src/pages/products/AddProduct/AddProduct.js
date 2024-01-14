import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import {storage} from "../../../firebase/firebase";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {v4} from "uuid";
import {add} from "../../../redux/service/productService";
import {getAllCategories} from "../../../redux/service/categoryService";
import "./AddProduct.css"

function AddProduct() {
    const accountSupplier = JSON.parse(localStorage.getItem("currentSupplier"))
    console.log(accountSupplier)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [photo, setPhoto] = useState([]);
    const [stockQuantity1, setStockQuantity1] = useState('');
    const [stockQuantity2, setStockQuantity2] = useState('');

    const handleStockQuantityChange1 = (e) => {
        const inputValue = e.target.value;
        // Kiểm tra nếu giá trị là một số và lớn hơn 0
        if (!isNaN(inputValue) && parseInt(inputValue, 10) > 0) {
            setStockQuantity1(inputValue);
        }else {
            setStockQuantity1(''); // Nếu không hợp lệ, đặt giá trị thành trống
        }
    };
    const handleStockQuantityChange2 = (e) => {
        const inputValue = e.target.value;
        // Kiểm tra nếu giá trị là một số và lớn hơn 0
        if (!isNaN(inputValue) && parseInt(inputValue, 10) > 0) {
            setStockQuantity2(inputValue);
        }else {
            setStockQuantity2(''); // Nếu không hợp lệ, đặt giá trị thành trống
        }
    };

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
                navigate("/supplier")
            })
        } catch (e) {
        }
    }

    const handleChange = (e) => {
        const files = e.target.files;
        const remainingSlots = 6 - photo.length;

        if (files.length > remainingSlots) {
            alert("Bạn chỉ có thể thêm tối đa 6 ảnh.");
            return;
        }

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const photoRef = ref(storage, `image/${file.name + v4()}`);
            uploadBytes(photoRef, file).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setPhoto((prev) => [...prev, { photoName: url }]);
                });
            });
        }
    };



    // const handleChange = (e) => {
    //     const files = e.target.files;
    //     for (let i = 0; i < files.length; i++) {
    //         const file = files[i];
    //         const photoRef = ref(storage, `image/${file.name + v4()}`);
    //         uploadBytes(photoRef, file).then((snapshot) => {
    //             getDownloadURL(snapshot.ref).then((url) => {
    //                 setPhoto((prev) => [...prev, {photoName: url}]);
    //             });
    //         });
    //     }
    // };

    const handleDeleteImage = (index) => {
        const newPhotoArray = [...photo];
        newPhotoArray.splice(index, 1);
        setPhoto(newPhotoArray);
    };

    return (
        <>
            <div className="mainAddPr">
                <div className="headerAddPr">
                    <div className="headerDetailAddPr">
                        <div className="leftHeader">
                            <div className="logoHeader">
                                <img src="/images/img_8.png"
                                     alt=""/>
                            </div>
                            <div className="titleAdd">
                                <p>Thêm mới sản phẩm</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Formik initialValues={
                    {
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

                    }
                } onSubmit={Create}
                >
                    <Form>

                        {
                            photo.length < 6 && (
                                <div className="imageContainer">
                                    <Field
                                        nameClass="choose"
                                        name="photo.photoName"
                                        type="file"
                                        multiple
                                        onChange={handleChange}
                                        placeholder="Enter Photo"
                                    />
                                </div>
                            )
                        }
                        <div className="frame">
                            <div className="image">
                                {/*<Field nameClass={"chooseImage"} name={"photo.photoName"} type={"file"} multiple onChange={handleChange}*/}
                                {/*       placeholder={" Enter Photo"}/>*/}
                                {/*{*/}
                                {/*    photo.map(p => (*/}
                                {/*        <>*/}
                                {/*            <img src={p.photoName} alt="" style={{width: "150px", height: "150px"}}/>*/}
                                {/*        </>*/}
                                {/*    ))*/}
                                {/*}*/}

                                <div className="listImage">
                                    {
                                        photo.map((p, index) => (
                                            <div key={index} className="imageContainer">
                                                <img src={p.photoName} alt="" style={{ width: "242px", height: "242px" }} />
                                                <button className="deleteButton" onClick={() => handleDeleteImage(index)}>X</button>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="infoProduct">
                                <div className="contentProduct">
                                    <div className="nameProduct">
                                        <div className="label1">
                                            Nhập tên :
                                        </div>
                                        <div className="nameDetail">
                                            <Field name={"productName"} placeholder={"Tên sản phẩm"}/>
                                        </div>
                                    </div>
                                    <div className="descriptionProduct">
                                        <div className="label2">
                                            Mô tả :
                                        </div>
                                        <div className="descriptionDetail">
                                            <Field as="textarea" cols={39} rows={4} name={"description"}
                                                   placeholder={"Mô tả sản phẩm"}/>
                                        </div>
                                    </div>
                                    <div className="priceProduct">
                                        <div className="label3">
                                            Giá (VNĐ) :
                                        </div>
                                        <div className="priceDetail">
                                            <Field name={"price"} type={"number"} placeholder={"Nhập giá lớn hơn 0"} value={stockQuantity1}
                                                   onChange={handleStockQuantityChange1}/>
                                        </div>
                                    </div>
                                    <div className="quantityProduct">
                                        <div className="label4">
                                            Số lượng :
                                        </div>
                                        <div className="quantityDetail">
                                            <Field name={"stockQuantity"} type={"number"}
                                                   placeholder={"Nhập số lượng lớn hơn 0"} value={stockQuantity2}
                                                   onChange={handleStockQuantityChange2}/>
                                        </div>
                                    </div>
                                    <div className="categoryProduct">
                                        <div className="label5">
                                            Loại sản phẩm :
                                        </div>
                                        <Field name={"category.id"} as={"select"}>
                                            {
                                                categories.map((category) => {
                                                    return <>
                                                        <option value={category.id}>{category.name}</option>
                                                    </>
                                                })
                                            }
                                        </Field>
                                    </div>
                                    <div className="addProduct">
                                        <button type={"submit"}>Thêm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    )
}

export default AddProduct;
