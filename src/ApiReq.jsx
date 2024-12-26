import React, { Fragment, useEffect, useState } from "react";
import axios from "./instance.js";

const ApiReq = () => {
  const [prod, setProd] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    handle();
  }, []);

  const handle = async () => {
    await axios
      .get("/carts")
      .then((response) => setProd(response.data.carts))
      .catch((error) => setError(error.message));
  };

  return (
    <div>
      <h1>API Request</h1>

      {error !== "" && error}

      {prod.map((item, index) => (

        <Fragment key={index}>

          {item.products.length

            ? item.products.map((data, i) => {

                return (
                  <ul key={i}>
                    <li>title: {data.title} </li>
                    <li>Price: {data.price} </li>
                    <li>ID: {item.discountedTotal} </li>
                  </ul>
                );

              })
              
            : "No Data Found"}
        </Fragment>
      ))}
    </div>
  );
};

export default ApiReq;
