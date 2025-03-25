import React from "react";
import ApiTest from "./ApiTest";
import { CartContext } from "../context/CartContext";

const GetApi = () => {
  
  const data = CartContext();
  // console.log("Get Api Data", data);
  return <ApiTest data={data} />;
};

export default GetApi;
