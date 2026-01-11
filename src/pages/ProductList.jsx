import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ProductList() {
  const products = useSelector((state) => state.products.products);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Inventory Products</h1>
          <Link to="/add" className="btn-primary">
            + Add Product
          </Link>
        </div>

        {products.length === 0 ? (
          <div className="text-center text-gray-500 card p-6">
            No products added yet.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {products.map((p) => (
              <div key={p.id} className="card p-5">
                <Link
                  to={`/edit/${p.id}`}
                  className="text-lg font-semibold text-blue-600"
                >
                  {p.name}
                </Link>

                <div className="text-sm text-gray-700 mt-2 space-y-1">
                  <p>Category: {p.category}</p>
                  <p>Expiry: {p.expiry || "N/A"}</p>
                  <p className="font-semibold">
                    Total Cost: ₹{p.totalCost.toFixed(2)}
                  </p>
                  <p>Raw Materials: {p.materials.length}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
