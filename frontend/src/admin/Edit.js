import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Edit = () => {
  const { id } = useParams();
  const [productsData, setProductsData] = useState({
    name: "",
    img: "",
    price: "",
    des: "",
  });

  useEffect(() => {
    fetch(`http://localhost:5001/watch/${id}`)
      .then((res) => res.json())
      .then((data) => setProductsData(data));
    console.log(productsData);
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const img = form.img.value;
    const des = form.des.value;
    const price = form.price.value;

    const productObj = { name, img, des, price };
    console.log(productObj);

    fetch(`http://localhost:5001/allproducts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productObj),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("product updated successfully");
        window.location.href = "/update";
      });
  };

  return (
    <>
      <div class="upload-container">
        <h1>EDIT</h1>
        <section class="form-container">
          <form onSubmit={handleUpdate}>
            <label value={productsData.name}>Name</label>
            <input
              defaultValue={productsData.name}
              type="text"
              placeholder="name"
              name="name"
            />
            <label value={productsData.des}>Description</label>
            <textarea
              defaultValue={productsData.des}
              type="text"
              placeholder="Add Description"
              name="des"
            />
            <label value={productsData.img}>Image</label>
            <input
              defaultValue={productsData.img}
              placeholder="img"
              type="text"
              name="img"
            />
            <label value={productsData.price}>Price</label>
            <input
              defaultValue={productsData.price}
              type="number"
              placeholder="Price"
              name="price"
            />
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
      <ToastContainer />
    </>
  );
};

export default Edit;
