import React from "react";
import "./Upload.css";

import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

const Upload = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const img = form.img.value;
    const price = form.price.value;
    const des = form.des.value;

    if (name === "" || img === "" || price === "" || des === "") {
      toast.warn("fill the required fields");
    } else {
      const watchObj = { name, img, des, price, img };
      console.log(watchObj);

      fetch("http://localhost:5001/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(watchObj),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Data added successfully");
          form.reset();
          console.log(data);
          window.location.href = "/update";
        });
    }
  };
  return (
    <>
      <div class="upload-container">
        <h1>UPLOAD</h1>
        <section class="form-container">
          <form onSubmit={handleSubmit}>
            <label>
              <b>Product Name</b>
            </label>
            <input type="text" placeholder="Product Name" name="name" />
            <label>
              <b>Description</b>
            </label>
            <textarea type="text" placeholder="Add Description" name="des" />
            <label>
              <b>Price</b>
            </label>
            <input type="number" placeholder="Product Price" name="price" />
            <label>
              <b>Image</b>
            </label>
            <input type="text" name="img" />
            <button type="submit">UPLOAD</button>
            {/* <Link to="/update">
              <button>UPDATE</button>
            </Link> */}
          </form>
        </section>
      </div>
      <ToastContainer />
    </>
  );
};

export default Upload;
