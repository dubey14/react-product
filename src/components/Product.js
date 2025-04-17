import { useState } from "react";

function Product(props) {
  let initialAvailability =
    props.product.pquantity > 0 ? "Available" : "Not Available";
  let [quantity, setQuantity] = useState(Number(props.product.pquantity));
  let [availability, setavailability] = useState(initialAvailability);

  const addQuantity = () => {
    const incQuantity = quantity + 1;
    setQuantity(incQuantity);
    if (incQuantity <= 0) {
      setavailability("Not Available");
    } else {
      setavailability("Available");
    }
  };

  const subQuantity = () => {
    const decQuantity = quantity - 1;
    setQuantity(decQuantity);
    console.log(quantity);
    if (decQuantity <= 0) {
      setavailability("Not Available");
    } else {
      setavailability("Available");
    }
  };

  return (
    <>
      <div>Product ID : {props.product.pid}</div>
      <div>Product Name : {props.product.pname}</div>
      <div>
        <span>
          <input
            type="button"
            value="-"
            disabled={Number(quantity) > 1 ? false : true}
            onClick={subQuantity}
          />
        </span>
        Product Quantity : {quantity}
        <span>
          <input type="button" value=" +" onClick={addQuantity} />
        </span>
        <div>
          Availability :{" "}
          <span
            style={{
              background: availability === "Available" ? "#c3cf8b" : "#f9cb9d",
              padding: "0px 5px 0px 5px",
              borderRadius: "4px",
            }}
          >
            {availability}
          </span>
        </div>
      </div>
      <hr />
    </>
  );
}
export default Product;
