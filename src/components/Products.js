import { useContext, useEffect, useState } from "react";
import ManageProducts from "./ManageProducts";
import Product from "./Product";
import AddProduct from "./AddProduct";
import Navbar from "./Navbar";
import authContext from "../context/AuthContext";

function Products(props) {
  let productArray = [
    { pid: 1, pname: "Coke", pquantity: 10 },
    { pid: 2, pname: "Pepsi", pquantity: 0 },
  ];

  let [filteredProducts, setfilteredProducts] = useState(productArray);
  let [filterValue, setfilterValue] = useState("select");
  let [products, setProducts] = useState(productArray);
  let [isFormShow, setisFormShow] = useState(false);
  let [cartCount, setCartCount] = useState(0);

  /* useEffect(() => {
    let isLoggedIn = localStorage.getItem("auth");
    if (!isLoggedIn) {
      props.manageLogin();
    }
  }, []); */

  //let x = useContext(authContext);
  console.log("Context", useContext(authContext).isLoggedIn);

  const addProduct = (product) => {
    console.log("Data from Parent", product);
    var updatedProducts = [product, ...products];
    setProducts(updatedProducts);
    updateProducts(updatedProducts, filterValue);
  };

  const isShowClicked = (isClicked) => {
    setisFormShow(isClicked);
  };

  const componentToShow = isFormShow ? (
    <ManageProducts sendData={addProduct} isShowClicked={isShowClicked} />
  ) : (
    <AddProduct isShowClicked={isShowClicked} />
  );

  const getfilterValue = (e) => {
    console.log("Dropdown filter value", e.target.value);
    setfilterValue(e.target.value);
    updateProducts(products, e.target.value);
  };

  const updateProducts = (products, filter) => {
    const filteredProducts = products.filter((product) => {
      if (filter === "available") {
        return product.pquantity > 0;
      } else if (filter === "unavailable") {
        return product.pquantity <= 0;
      } else {
        return true;
      }
    });
    setfilteredProducts(filteredProducts);
  };

  return (
    <div style={{ background: "rgb(243 237 246)" }}>
      <Navbar
        setLogout={props.manageLogin}
        isLoggedIn={props.setLogin}
        setLogin={props.manageLogout}
        cartCount={cartCount}
      />
      <h1
        style={{
          border: "2px solid Tomato",
          background: "rgba(255, 99, 71, 0.5)",
        }}
      >
        Products
      </h1>
      {componentToShow}
      <marquee direction="right">Product List</marquee>
      <div>
        <select onChange={getfilterValue}>
          <option value="select">Select</option>
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
      </div>
      <hr />
      {filteredProducts.map((product) => {
        return (
          <Product
            product={product}
            key={product.pid}
            setCartCount={setCartCount}
          />
        );
      })}
    </div>
  );
}
export default Products;
