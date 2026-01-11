import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function RawMaterialForm({ materials, setMaterials, showError }) {
  const [material, setMaterial] = useState({
    name: "",
    unit: "",
    qty: "",
    price: "",
  });

  const [error, setError] = useState("");

  const total = material.qty * material.price || 0;
  const tax = total * 0.1;
  const grandTotal = total + tax;

  const addMaterial = () => {
    if (!material.name || !material.unit || !material.qty || !material.price) {
      setError("All fields are required to add material");
      return;
    }

    setMaterials([
      ...materials,
      {
        id: uuid(),
        ...material,
        qty: Number(material.qty),
        price: Number(material.price),
        total,
        tax,
        grandTotal,
      },
    ]);

    setMaterial({ name: "", unit: "", qty: "", price: "" });
    setError("");
  };

  const remove = (id) => setMaterials(materials.filter((m) => m.id !== id));

  return (
    <div className="card p-4 space-y-4">
      <h3 className="font-semibold">Raw Materials</h3>

      <div className="grid md:grid-cols-4 gap-2">
        <input
          className="input"
          placeholder="Name"
          value={material.name}
          onChange={(e) => setMaterial({ ...material, name: e.target.value })}
        />

        <select
          className="input"
          value={material.unit}
          onChange={(e) => setMaterial({ ...material, unit: e.target.value })}
        >
          <option value="">Unit</option>
          <option value="ml">ml</option>
          <option value="ltr">ltr</option>
          <option value="gm">gm</option>
          <option value="kg">kg</option>
          <option value="mtr">mtr</option>
          <option value="mm">mm</option>
          <option value="box">box</option>
          <option value="units">units</option>
        </select>

        <input
          type="number"
          className="input"
          placeholder="Qty"
          value={material.qty}
          onChange={(e) => setMaterial({ ...material, qty: e.target.value })}
        />

        <input
          type="number"
          className="input"
          placeholder="Price"
          value={material.price}
          onChange={(e) => setMaterial({ ...material, price: e.target.value })}
        />
      </div>

      <div className="text-sm text-gray-600">
        <p>Total: ₹{total.toFixed(2)}</p>
        <p>Tax (10%): ₹{tax.toFixed(2)}</p>
        <p className="font-semibold">Grand Total: ₹{grandTotal.toFixed(2)}</p>
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}
      {showError && <p className="text-red-600 text-sm">{showError}</p>}

      <button onClick={addMaterial} className="btn-secondary">
        Add Material
      </button>

      {materials.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold mb-2">Material List</h4>

          <div className="space-y-2">
            {materials.map((m, i) => (
              <div
                key={m.id}
                className="flex justify-between items-center border p-2 rounded"
              >
                <div className="text-sm">
                  <p className="font-medium">
                    {i + 1}. {m.name}
                  </p>
                  <p>
                    {m.qty} {m.unit} × ₹{m.price}
                  </p>
                  <p>Total: ₹{m.grandTotal.toFixed(2)}</p>
                </div>

                <button onClick={() => remove(m.id)} className="btn-danger">
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
