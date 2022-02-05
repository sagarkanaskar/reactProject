import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-3">
      <div className="col-8">
        <h2
          style={{
            border: "1px solid black",
          }}
        >
          {props.product.name} <span> {props.product.name2}</span>{" "}
        </h2>
      </div>

      <button
        className="col-4 btn btn-danger"
        onClick={() => {
          props.removeItem(props.index);
        }}
      >
        -
      </button>
    </div>
  );
}
