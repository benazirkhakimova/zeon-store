import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import FloatingButton from "../../components/FloatingButtons/FloatingButton";
import { contextProduct } from "../../context/productContext";
import "./PublicOffer.css";
const PublicOffer = () => {
  const { getProducts, getOffer, offer } = useContext(contextProduct);
  useEffect(() => {
    getProducts();
    getOffer();
  }, []);
  return (
    <>
      <BreadCrumb />
      <FloatingButton />
      <div className="container">
        <h2 id="title">Публичная оферта</h2>
      </div>
      <div className="container offer-body">
        {offer.map((item) => (
          <div className="offer">
            <p>{item.offer}</p>
          </div>
        ))}
      </div>
      ы
    </>
  );
};

export default PublicOffer;
