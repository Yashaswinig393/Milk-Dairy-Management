import axios from "axios";
import { useEffect, useState } from "react";

export default function EOPage() {
  const [milk, setMilk] = useState([]);
  const [qty, setQty] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/milk")
      .then(res => setMilk(res.data));
  }, []);

  const requestEdit = async (id) => {
    await axios.post("http://localhost:5000/api/edit/request", {
      milkEntryId: id,
      newQuantity: qty
    });
    alert("Edit Requested");
  };

  return milk.map(m => (
    <div key={m._id} className="card p-2 mb-2">
      Date: {m.date} | Qty: {m.quantity}
      <input className="form-control mt-1"
        onChange={e => setQty(e.target.value)} />
      <button className="btn btn-warning mt-1"
        onClick={() => requestEdit(m._id)}>
        Request Edit
      </button>
    </div>
  ));
}
