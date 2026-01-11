import { useDispatch } from "react-redux";
import { addProduct } from "../features/products/productSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import ProductForm from "../components/ProductForm";

export default function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = (data) => {
    dispatch(addProduct({ ...data, id: uuid() }));
    navigate("/");
  };

  return (
    <ProductForm
      initialData={{
        name: "",
        unit: "",
        category: "",
        expiry: "",
        materials: [],
      }}
      onSubmit={submit}
    />
  );
}
