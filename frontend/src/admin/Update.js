import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./Update.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [productItems, setProductItems] = useState([]);
  useEffect(() => {
    // getData();
    fetch("http://localhost:5001/watches")
      .then((res) => res.json())
      .then((data) => setProductItems(data));
  }, []);

  // const getData = async () => {
  //   const result = await axios.get("http://localhost:5001/watches");
  //   console.log(productItems);
  //   setProductItems(result.data);
  // };

  const DeleteItems = (id) => {
    fetch("http://localhost:5001/delete/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.warn("data deleted successfully");
        setProductItems((prev) => prev.filter((Items) => Items._id != id));
      });
  };

  // const DeleteItems = async (id) => {
  //   const response = await axios.delete("http://localhost:5001/delete/" + id);
  //   setProductItems((prev) => prev.filter((Items) => Items._id != id));
  //   toast.warn("data deleted successfully");
  // };

  return (
    <>
      <h1>UPDATE</h1>
      <table class="update-table">
        <thead>
          <tr class="update-table-head">
            <th>No.</th>
            <th>ID</th>
            <th>img</th>
            <th>name</th>
            <th>description</th>
            <th>price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody class="update-table-body">
          {productItems.map((item) => (
            <tr key={item._id}>
              <td>1</td>
              <td>{item._id}</td>

              <td>
                <img class="img-fluid image" src={item.img} />
              </td>
              <td>{item.name}</td>
              <td>{item.des}</td>
              <td>{item.price}</td>
              <td>
                <Link to={`/edit/${item._id}`}>
                  <button class="btn btn-primary">edit</button>
                </Link>
              </td>
              <td>
                <button
                  class="btn btn-danger"
                  onClick={() => DeleteItems(item._id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </>
  );
};

export default Update;
