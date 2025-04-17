import { useRef, useState } from "react";
import ReactDOM from "react-dom";

function ManageProducts(props) {
  let [id, setID] = useState(0);
  let [name, setName] = useState("");
  let [quantity, setQuantity] = useState(0);

  let funOutput = useRef();

  const getID = (e) => {
    setID(e.target.value);
  };

  const getName = (e) => {
    setName(e.target.value);
  };

  const getQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const addProduct = (e) => {
    e.preventDefault();
    var productToAdd = {
      pid: id,
      pname: name,
      pquantity: quantity,
    };
    console.log("Product added : ", productToAdd);
    props.sendData(productToAdd);
    props.isShowClicked(false);
    console.log("Ref Output : ", funOutput.current);
  };

  return ReactDOM.createPortal(
    <>
      <form onSubmit={addProduct}>
        <div>
          <label htmlFor="pid">Enter Product ID : </label>
          <input
            type="text"
            id="pid"
            placeholder="Enter Product ID"
            onChange={getID}
            ref={funOutput}
          />
        </div>
        <div>
          <label htmlFor="pname">Enter Product Name : </label>
          <input
            type="text"
            id="pname"
            placeholder="Enter Product Name"
            onChange={getName}
          />
        </div>
        <div>
          <label htmlFor="pquantity">Enter Product Quantity : </label>
          <input
            type="text"
            id="pquantity"
            placeholder="Enter Product Quantity"
            onChange={getQuantity}
          />
        </div>
        <div>
          <input type="submit" value="Add Product" />
          <input type="reset" />
        </div>
      </form>
    </>,
    document.getElementById("customdiv")
  );
}
export default ManageProducts;
