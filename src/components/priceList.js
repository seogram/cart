/**
 * Product's details component
 */

import React from "react";

export const PriceList = ({ basePrice, price, href, selected }) => {
  let cost;
  return (
    <div>
      {selected && (
        <div>
          <div className="price-container">
            <p>
              Seller Price :{" "}
              {basePrice.toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR"
              })}
            </p>
            <hr />
            <p>
              Service Cost :{" "}
              {price
                ? (cost = (price - basePrice).toLocaleString("de-DE", {
                    style: "currency",
                    currency: "EUR"
                  }))
                : ""}
            </p>
            <hr />
            <p>
              Total Price :{" "}
              {price.toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR"
              })}
            </p>
          </div>

          <a className="add-cart" href={href}>
            Add to Cart
          </a>
        </div>
      )}
    </div>
  );
};
