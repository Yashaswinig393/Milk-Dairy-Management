import axios from "axios";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/edit")
      .then(res => setRequests(res.data));
  }, []);

  const approve = async (id) => {
    await axios.post(`http://localhost:5000/api/edit/approve/${id}`);
    alert("Approved");
    window.location.reload();
  };

  return requests.map(r => (
    <div key={r._id} className="card p-2 mb-2">
      New Quantity: {r.newQuantity}
      <button className="btn btn-success mt-1"
        onClick={() => approve(r._id)}>
        Approve
      </button>
    </div>
  ));
}
