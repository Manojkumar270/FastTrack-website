import React from "react";
import "./Upload.css";

import { toast, ToastContainer } from "react-toastify";

const Upload = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const img = form.image.files[0];
    const price = form.price.value;
    const des = form.des.value;

    if (name === "" || !img || price === "" || des === "") {
      toast.warn("Fill the required fields");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("des", des);
    formData.append("image", img); 

    fetch("http://localhost:5001/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Data added successfully");
        form.reset();
        console.log(data);
        window.location.href = "/update";
      })
      .catch((err) => {
        toast.error("Something went wrong");
        console.error(err);
      });
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
            <input type="file" name="image" />
            <button type="submit">UPLOAD</button>
          </form>
        </section>
      </div>
      <ToastContainer />
    </>
  );
};

export default Upload;
