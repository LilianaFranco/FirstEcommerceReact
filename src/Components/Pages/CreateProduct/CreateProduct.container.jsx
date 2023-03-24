import React from "react";

export const CreateProductContainer = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    img: "",
  });
  const [isProductCreated, setIsProductCreated] = useState(false);

  //Bring the items from DB only once. All querys need to go inside UseEffect
  useEffect(() => {
    setIsProductCreated(false);
    const products = axios.get("http://localhost:5000/products");
    products.then((res) => setItems(res.data)).catch((err) => console.log(err));
  }, [isProductCreated]);

  //Send form information to API
  const handleSubmit = (e) => {
    e.preventDefault();

    //Prepare data for Database
    let data = {
      name: newProduct.name,
      price: Number(newProduct.price),
      img: newProduct.img,
    };

    //Send to API
    axios.post("http://localhost:5000/products", data);
    //create.then((res) => console.log(res)).catch((err) => console.log(err)); If I need to manage the post errors

    //Inform there is a new product to render
    setIsProductCreated(true);
    console.log(setIsProductCreated);
  };

  //Save input information in the states
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: [e.target.value] });
  };

  return (
    //Render each product
    <div>
      <CreateProduct handleSubmit={handleSubmit} handleChange={handleChange} />
    </div>
  );
};
