import axios from "axios";
import { useState } from "react";

export default function MilkForm() {
  const [data, setData] = useState({ date: "", quantity: "", fat: "" });

  const save = async () => {
    if (!window.confirm("Once saved, cannot edit. Continue?")) return;
    await axios.post("http://localhost:5000/api/milk", data);
    alert("Saved & Locked");
  };

  return (
    <div className="card p-3">
      <input className="form-control mb-2" placeholder="Date"
        onChange={e => setData({ ...data, date: e.target.value })} />
      <input className="form-control mb-2" placeholder="Quantity"
        onChange={e => setData({ ...data, quantity: e.target.value })} />
      <input className="form-control mb-2" placeholder="Fat"
        onChange={e => setData({ ...data, fat: e.target.value })} />
      <button className="btn btn-primary" onClick={save}>Save</button>
    </div>
  );
}
