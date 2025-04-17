function AddProduct(props) {
  const addProduct = () => {
    props.isShowClicked(true);
  };

  return (
    <>
      <input type="button" value="Add Product" onClick={addProduct} />
    </>
  );
}
export default AddProduct;
