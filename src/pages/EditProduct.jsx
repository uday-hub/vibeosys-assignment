import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../features/products/productSlice";
import ProductForm from "../components/ProductForm";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.products.products.find((p) => p.id === id)
  );

  const submit = (data) => {
    dispatch(updateProduct({ ...data, id }));
    navigate("/");
  };

  return <ProductForm initialData={product} onSubmit={submit} />;
}
