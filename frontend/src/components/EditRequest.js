import axios from "axios";
import { useState } from "react";

export default function EditRequest({ milkId }) {
  const [newQty, setNewQty] = useState("");

  const requestEdit = async () => {
    await axios.post("http://localhost:5000/api/edit/request", {
      milkEntryId: milkId,
      requestedBy: "EO",
      newData: { quantity: newQty }
    });
    alert("Edit Requested");
  };

  return (
    <>
      <input className="form-control mb-2" onChange={e => setNewQty(e.target.value)} />
      <button className="btn btn-warning" onClick={requestEdit}>Request Edit</button>
    </>
  );
}
