import { useState } from "react";
import RawMaterialForm from "./RawMaterialForm";

export default function ProductForm({ initialData, onSubmit }) {
  const [product, setProduct] = useState(initialData);
  const [materials, setMaterials] = useState(initialData.materials || []);
  const [errors, setErrors] = useState({});

  const totalCost = materials.reduce((sum, m) => sum + m.grandTotal, 0);

  const validate = () => {
    const newErrors = {};
    if (!product.name) newErrors.name = "Product Name is required";
    if (!product.unit) newErrors.unit = "Unit of Measure is required";
    if (!product.category) newErrors.category = "Category is required";
    // Expiry is optional

    if (materials.length === 0)
      newErrors.materials = "At least 1 material is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = () => {
    if (validate()) {
      onSubmit({ ...product, materials, totalCost });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto card p-6 space-y-6">
        {/* Back button */}
        <button
          onClick={() => window.history.back()}
          className="text-sm text-blue-600 hover:underline"
        >
          ← Back
        </button>

        <h2 className="text-xl font-bold">Product Information</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Product Name
            </label>
            <input
              className="input"
              value={product.name}
              onChange={(e) =>
                setProduct({ ...product, name: e.target.value })
              }
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Unit of Measure */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Unit of Measure
            </label>
            <select
              className="input"
              value={product.unit}
              onChange={(e) =>
                setProduct({ ...product, unit: e.target.value })
              }
            >
              <option value="">Select unit</option>
              <option value="ml">ml</option>
              <option value="ltr">ltr</option>
              <option value="gm">gm</option>
              <option value="kg">kg</option>
              <option value="mtr">mtr</option>
              <option value="mm">mm</option>
              <option value="box">box</option>
              <option value="units">units</option>
            </select>
            {errors.unit && (
              <p className="text-red-600 text-sm mt-1">{errors.unit}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Category
            </label>
            <select
              className="input"
              value={product.category}
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
            >
              <option value="">Select Category</option>
              <option>Finished</option>
              <option>Semi-finished</option>
              <option>Subsidiary</option>
            </select>
            {errors.category && (
              <p className="text-red-600 text-sm mt-1">{errors.category}</p>
            )}
          </div>

          {/* Expiry Date */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Expiry Date
            </label>
            <input
              type="date"
              className="input"
              value={product.expiry}
              onChange={(e) =>
                setProduct({ ...product, expiry: e.target.value })
              }
            />
          </div>
        </div>

        {/* Raw Materials Section */}
        <RawMaterialForm
          materials={materials}
          setMaterials={setMaterials}
          showError={errors.materials}
        />

        {/* Total & Submit */}
        <div className="flex justify-between items-center border-t pt-4">
          <p className="text-lg font-semibold">
            Total Cost: ₹{totalCost.toFixed(2)}
          </p>

          <button onClick={submit} className="btn-primary">
            Save Product
          </button>
        </div>
      </div>
    </div>
  );
}
